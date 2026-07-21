import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entityPath = path.join(root, "content-engine", "topic-entities.json");
const sourceSnapshotPath = path.join(
  root,
  "content-engine",
  "snapshots",
  "latest-source-check.json",
);
const trendsPath = path.join(root, "content-engine", "inputs", "google-trends.csv");
const reportDirectory = path.join(root, "content-engine", "reports");
const jsonReportPath = path.join(reportDirectory, "latest-topic-queue.json");
const markdownReportPath = path.join(reportDirectory, "latest-topic-queue.md");

const [entityRegistry, sourceSnapshot, trendsText] = await Promise.all([
  readFile(entityPath, "utf8").then(JSON.parse),
  readFile(sourceSnapshotPath, "utf8").then(JSON.parse),
  readFile(trendsPath, "utf8"),
]);

function normalize(value) {
  return value
    .toLocaleLowerCase("en-US")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];

    if (character === '"' && quoted && line[index + 1] === '"') {
      value += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === "," && !quoted) {
      values.push(value.trim());
      value = "";
    } else {
      value += character;
    }
  }

  values.push(value.trim());
  return values;
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) =>
    Object.fromEntries(parseCsvLine(line).map((value, index) => [headers[index], value])),
  );
}

function validateTrendRows(rows, entityIds) {
  return rows.map((row, index) => {
    if (!entityIds.has(row.entity_id)) {
      throw new Error(`Unknown entity_id on Google Trends row ${index + 2}: ${row.entity_id}`);
    }

    const currentInterest = row.current_interest === "" ? null : Number(row.current_interest);
    const previousInterest = row.previous_interest === "" ? null : Number(row.previous_interest);

    for (const [label, value] of [
      ["current_interest", currentInterest],
      ["previous_interest", previousInterest],
    ]) {
      if (value !== null && (!Number.isFinite(value) || value < 0 || value > 100)) {
        throw new Error(`Invalid ${label} on Google Trends row ${index + 2}`);
      }
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(row.observed_at)) {
      throw new Error(`Invalid observed_at on Google Trends row ${index + 2}`);
    }

    if (!row.source_url.startsWith("https://trends.google.com/")) {
      throw new Error(`Google Trends row ${index + 2} needs an official Trends URL`);
    }

    return {
      entityId: row.entity_id,
      region: row.region,
      currentInterest,
      previousInterest,
      relatedQuery: row.related_query,
      observedAt: row.observed_at,
      sourceUrl: row.source_url,
    };
  });
}

function collectRetailEvidence(entity) {
  const evidence = [];
  const retailAliases = entity.aliases.filter((alias) => alias.kind === "retail_name");

  for (const alias of retailAliases) {
    if (alias.sourceUrl && alias.observedAt) {
      evidence.push({
        retailer: alias.retailer,
        label: alias.term,
        url: alias.sourceUrl,
        observedAt: alias.observedAt,
        collection: "dated_editorial_observation",
      });
    }
  }

  for (const check of sourceSnapshot.checks ?? []) {
    for (const product of check.products ?? []) {
      const productName = normalize(product.name);
      const matchingAlias = retailAliases.find((alias) => {
        if (alias.retailer && normalize(alias.retailer) !== normalize(check.publisher)) return false;
        const aliasName = normalize(alias.term);
        return productName.includes(aliasName) || aliasName.includes(productName);
      });

      if (matchingAlias) {
        evidence.push({
          retailer: check.publisher,
          label: product.name,
          url: product.url,
          observedAt: sourceSnapshot.generatedAt.slice(0, 10),
          collection: "automated_structured_product_check",
        });
      }
    }
  }

  return [
    ...new Map(
      evidence.map((item) => [`${normalize(item.retailer)}|${normalize(item.label)}`, item]),
    ).values(),
  ].sort((a, b) => a.retailer.localeCompare(b.retailer));
}

function scoreSearchAcceleration(rows) {
  const comparable = rows.filter(
    (row) => row.currentInterest !== null && row.previousInterest !== null,
  );
  if (!comparable.length) return 0;

  const current = comparable.reduce((sum, row) => sum + row.currentInterest, 0) / comparable.length;
  const previous = comparable.reduce((sum, row) => sum + row.previousInterest, 0) / comparable.length;

  if (previous === 0) return current > 0 ? 25 : 0;
  const growth = ((current - previous) / previous) * 100;
  if (growth >= 50) return 25;
  if (growth >= 20) return 20;
  if (growth >= 5) return 12;
  if (growth >= 0) return 6;
  return 0;
}

function getBand(score) {
  if (score >= 70) return "publish_or_refresh";
  if (score >= 50) return "prepare_brief";
  if (score >= 30) return "watch";
  return "hold";
}

function getAction({ score, coverageSlugs, retailEvidence, trendRows }) {
  if (retailEvidence.length >= 2 && coverageSlugs.length && !trendRows.length) {
    return "Refresh existing guides with verified retailer aliases, then compare the entity and aliases in Google Trends.";
  }
  if (score >= 70 && coverageSlugs.length) return "Refresh the strongest existing guide this week.";
  if (score >= 70) return "Publish a source-backed Plant Note this week.";
  if (score >= 50) return "Prepare the brief and collect one more care or reader source.";
  if (!trendRows.length) return "Keep watching and add the next official Google Trends export.";
  return "Keep watching for stronger search, seasonal, or reader evidence.";
}

const entityIds = new Set(entityRegistry.entities.map((entity) => entity.id));
const trendRows = validateTrendRows(parseCsv(trendsText), entityIds);
const queue = entityRegistry.entities
  .map((entity) => {
    const entityTrendRows = trendRows.filter((row) => row.entityId === entity.id);
    const retailEvidence = collectRetailEvidence(entity);
    const retailers = new Set(retailEvidence.map((item) => normalize(item.retailer)));
    const relatedQueries = [
      ...new Set(entityTrendRows.map((row) => row.relatedQuery).filter(Boolean)),
    ];
    const scoreBreakdown = {
      officialRetailerAppearance: Math.min(25, retailers.size * 10),
      searchAcceleration: scoreSearchAcceleration(entityTrendRows),
      repeatedCareQuestion: Math.min(20, relatedQueries.length * 5),
      seasonalFit: entity.seasonalScore,
      existingAudienceResponse: 0,
      visualSharePotential: entity.visualScore,
    };
    const score = Object.values(scoreBreakdown).reduce((sum, value) => sum + value, 0);
    const trendTerms = [
      entity.canonicalName,
      ...entity.aliases.map((alias) => alias.term),
    ].slice(0, 5);
    const trendExploreUrl = new URL("https://trends.google.com/trends/explore");
    trendExploreUrl.searchParams.set("date", "today 12-m");
    trendExploreUrl.searchParams.set("geo", "US");
    trendExploreUrl.searchParams.set("q", trendTerms.join(","));

    return {
      entityId: entity.id,
      canonicalName: entity.canonicalName,
      botanicalName: entity.botanicalName ?? null,
      score,
      band: getBand(score),
      scoreBreakdown,
      trendStatus: entityTrendRows.length
        ? `${entityTrendRows.length} dated Google Trends observation(s) imported`
        : "No Google Trends observation imported; search score held at 0",
      trendTerms,
      trendExploreUrl: trendExploreUrl.toString(),
      aliases: entity.aliases.map((alias) => alias.term),
      tags: entity.tags,
      retailEvidence,
      relatedQueries,
      questionPatterns: entity.questionPatterns,
      coverageSlugs: entity.coverageSlugs,
      recommendedAction: getAction({
        score,
        coverageSlugs: entity.coverageSlugs,
        retailEvidence,
        trendRows: entityTrendRows,
      }),
    };
  })
  .sort((a, b) => b.score - a.score || a.canonicalName.localeCompare(b.canonicalName));

const report = {
  generatedAt: new Date().toISOString(),
  entityRegistryVersion: entityRegistry.version,
  sourceSnapshotGeneratedAt: sourceSnapshot.generatedAt,
  googleTrendsObservationCount: trendRows.length,
  scoringNotice:
    "Scores are editorial prioritization aids, not public popularity claims. Missing evidence always scores zero.",
  queue,
};

const markdown = [
  "# Rachel's Garden Topic Queue",
  "",
  `Generated: ${report.generatedAt}`,
  "",
  `Google Trends observations imported: ${report.googleTrendsObservationCount}`,
  "",
  "> Scores are internal editorial aids. Missing evidence scores zero, and no score should be published as a popularity claim.",
  "",
  "| Score | Topic | Band | Retail evidence | Trends | Next action |",
  "| ---: | --- | --- | --- | --- | --- |",
  ...queue.map((item) => {
    const retailers = [...new Set(item.retailEvidence.map((evidence) => evidence.retailer))];
    return `| ${item.score} | ${item.canonicalName} | ${item.band} | ${retailers.join(", ") || "None"} | ${item.trendStatus} | ${item.recommendedAction} |`;
  }),
  "",
  "## Alias Panels",
  "",
  ...queue.flatMap((item) => [
    `### ${item.canonicalName}`,
    "",
    `Aliases: ${item.aliases.join(", ")}`,
    "",
    `Google Trends panel: [compare ${item.trendTerms.join(", ")}](${item.trendExploreUrl})`,
    "",
    `Existing coverage: ${item.coverageSlugs.length ? item.coverageSlugs.map((slug) => `\`/notes/${slug}\``).join(", ") : "None"}`,
    "",
    `Next action: ${item.recommendedAction}`,
    "",
  ]),
].join("\n");

await mkdir(reportDirectory, { recursive: true });
await Promise.all([
  writeFile(jsonReportPath, `${JSON.stringify(report, null, 2)}\n`),
  writeFile(markdownReportPath, `${markdown.trimEnd()}\n`),
]);

process.stdout.write(
  `${JSON.stringify({ status: "ok", topics: queue.length, trends: trendRows.length, report: path.relative(root, markdownReportPath) }, null, 2)}\n`,
);
