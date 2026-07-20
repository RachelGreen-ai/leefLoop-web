import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const registryPath = path.join(root, "content-engine", "source-registry.json");
const snapshotPath = path.join(root, "content-engine", "snapshots", "latest-source-check.json");
const shouldWrite = process.argv.includes("--write");
const registry = JSON.parse(await readFile(registryPath, "utf8"));

function hasType(node, type) {
  const value = node?.["@type"];
  return Array.isArray(value) ? value.includes(type) : value === type;
}

function collectProducts(node, sourceUrl, products = new Map()) {
  if (!node || typeof node !== "object") {
    return products;
  }

  if (hasType(node, "Product") && typeof node.name === "string") {
    const rawUrl =
      typeof node.url === "string"
        ? node.url
        : typeof node.offers?.url === "string"
          ? node.offers.url
          : "";
    const productUrlObject = rawUrl ? new URL(rawUrl, sourceUrl) : new URL(sourceUrl);
    productUrlObject.protocol = "https:";
    const productUrl = productUrlObject.href;
    const key = `${node.name.trim()}|${productUrl}`;
    products.set(key, {
      name: node.name.replace(/\s+/g, " ").trim(),
      url: productUrl,
      sku: typeof node.sku === "string" ? node.sku : null,
    });
  }

  for (const value of Object.values(node)) {
    if (value && typeof value === "object") {
      collectProducts(value, sourceUrl, products);
    }
  }

  return products;
}

function extractStructuredProducts(html, sourceUrl) {
  const products = new Map();
  const scriptPattern = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

  for (const match of html.matchAll(scriptPattern)) {
    try {
      collectProducts(JSON.parse(match[1]), sourceUrl, products);
    } catch {
      // A malformed analytics block should not stop the remaining structured data checks.
    }
  }

  return [...products.values()].sort((a, b) => a.name.localeCompare(b.name));
}

async function readPreviousSnapshot() {
  try {
    return JSON.parse(await readFile(snapshotPath, "utf8"));
  } catch {
    return null;
  }
}

const previousSnapshot = await readPreviousSnapshot();

async function checkSource(source) {
  if (!source.url.startsWith("http")) {
    return {
      id: source.id,
      publisher: source.publisher,
      result: "owned_source",
      collectionMode: source.collectionMode,
    };
  }

  const startedAt = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(source.url, {
      headers: {
        "user-agent": "GardenCompanionSourceMonitor/0.1 (+editorial source freshness check)",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.7",
      },
      redirect: "follow",
      signal: controller.signal,
    });
    const body = await response.text();
    const products = response.ok ? extractStructuredProducts(body, response.url) : [];

    return {
      id: source.id,
      publisher: source.publisher,
      status: response.status,
      result: response.ok ? "reachable" : "editorial_review_needed",
      fetchedUrl: response.url,
      etag: response.headers.get("etag"),
      lastModified: response.headers.get("last-modified"),
      bytes: Buffer.byteLength(body),
      contentHash: body ? createHash("sha256").update(body).digest("hex").slice(0, 16) : null,
      productCount: products.length,
      products,
      elapsedMs: Date.now() - startedAt,
      collectionMode: source.collectionMode,
    };
  } catch (error) {
    return {
      id: source.id,
      publisher: source.publisher,
      result: "editorial_review_needed",
      error: error instanceof Error ? error.message : "Source check failed",
      elapsedMs: Date.now() - startedAt,
      collectionMode: source.collectionMode,
    };
  } finally {
    clearTimeout(timer);
  }
}

const checks = [];
for (let index = 0; index < registry.sources.length; index += 4) {
  checks.push(...(await Promise.all(registry.sources.slice(index, index + 4).map(checkSource))));
}

for (const check of checks) {
  const previousCheck = previousSnapshot?.checks?.find((item) => item.id === check.id);
  const previousNames = new Set((previousCheck?.products ?? []).map((product) => product.name));
  const currentNames = new Set((check.products ?? []).map((product) => product.name));

  if (currentNames.size || previousNames.size) {
    check.productChanges = {
      added: [...currentNames].filter((name) => !previousNames.has(name)),
      removed: [...previousNames].filter((name) => !currentNames.has(name)),
    };
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  registryVersion: registry.version,
  sourceCount: checks.length,
  reachableCount: checks.filter((check) => check.result === "reachable").length,
  editorialReviewCount: checks.filter((check) => check.result === "editorial_review_needed").length,
  checks,
};

if (shouldWrite) {
  await mkdir(path.dirname(snapshotPath), { recursive: true });
  await writeFile(snapshotPath, `${JSON.stringify(report, null, 2)}\n`);
}

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
