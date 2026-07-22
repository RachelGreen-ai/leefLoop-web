import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function readJson(pathname) {
  return JSON.parse(await readFile(new URL(pathname, root), "utf8"));
}

test("topic entities keep retailer shelf aliases under one canonical plant", async () => {
  const registry = await readJson("content-engine/topic-entities.json");
  const entityIds = registry.entities.map((entity) => entity.id);
  assert.equal(new Set(entityIds).size, entityIds.length);

  for (const entity of registry.entities) {
    assert.ok(entity.tags.length >= 3, `${entity.id} needs useful tags`);
    assert.ok(entity.questionPatterns.length >= 3, `${entity.id} needs question patterns`);
    const aliases = entity.aliases.map((alias) => alias.term.toLocaleLowerCase());
    assert.equal(new Set(aliases).size, aliases.length, `${entity.id} has duplicate aliases`);

    for (const alias of entity.aliases.filter((candidate) => candidate.sourceUrl)) {
      assert.match(alias.sourceUrl, /^https:\/\//);
      assert.match(alias.observedAt, /^\d{4}-\d{2}-\d{2}$/);
    }
  }

  const monstera = registry.entities.find(
    (entity) => entity.id === "thai-constellation-monstera",
  );
  assert.ok(monstera);
  assert.deepEqual(
    new Set(monstera.aliases.filter((alias) => alias.retailer).map((alias) => alias.retailer)),
    new Set(["Trader Joe's", "Target", "The Home Depot"]),
  );
  assert.ok(monstera.aliases.some((alias) => alias.term === "Premium Monstera"));
  assert.ok(
    monstera.aliases.some((alias) => alias.term === "Live 5-inch Thai Constellation Plant"),
  );
});

test("the topic queue never invents a missing Google Trends score", async () => {
  const report = await readJson("content-engine/reports/latest-topic-queue.json");
  const monstera = report.queue.find(
    (item) => item.entityId === "thai-constellation-monstera",
  );

  assert.equal(report.googleTrendsObservationCount, 0);
  assert.ok(monstera);
  assert.equal(monstera.scoreBreakdown.searchAcceleration, 0);
  assert.equal(monstera.scoreBreakdown.repeatedCareQuestion, 0);
  assert.equal(monstera.scoreBreakdown.officialRetailerAppearance, 25);
  assert.equal(new Set(monstera.retailEvidence.map((item) => item.retailer)).size, 3);
  assert.equal(monstera.trendTerms.length, 5);
  assert.match(monstera.trendExploreUrl, /^https:\/\/trends\.google\.com\/trends\/explore\?/);
  assert.match(monstera.trendStatus, /score held at 0/);
});

test("the source registry monitors major retail plant signals", async () => {
  const registry = await readJson("content-engine/source-registry.json");
  const sourceIds = new Set(registry.sources.map((source) => source.id));

  assert.ok(sourceIds.has("target-indoor-live-plants"));
  assert.ok(sourceIds.has("trader-joes-premium-monstera"));
  assert.ok(sourceIds.has("lowes-houseplants"));
  assert.ok(
    registry.sources.every((source) =>
      [
        "change_detection_then_editorial_review",
        "editorial_research",
        "api_after_domain_launch",
        "weekly_export_or_approved_api",
        "google_sheet_webhook",
      ].includes(source.collectionMode),
    ),
  );
});
