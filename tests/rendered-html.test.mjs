import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Garden Companion MVP homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Garden Companion \| Weekly Plant Care Notes/);
  assert.match(html, /<strong>Garden Companion<\/strong>/);
  assert.match(html, /Fresh plant notes for what is growing around you\./);
  assert.match(html, /Subscribe to plant notes/);
  assert.match(html, /A good place to begin\./);
  assert.match(html, /PlantPulse/);
  assert.match(html, /Monstera/);
  assert.match(html, /Browse Plant Notes/);
  assert.match(html, /See Trending Plants/);
  assert.match(html, /Read Garden Stories/);
  assert.match(html, /A calmer plant letter/);
  assert.match(html, /Beautiful, useful, and honest\./);
  assert.match(html, /Garden Stories/);
  assert.doesNotMatch(html, /Explore this note/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("homepage navigation points to real content destinations", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="\/notes"[^>]*>Browse Plant Notes<\/a>/);
  assert.match(html, /href="\/plantpulse"[^>]*>See Trending Plants<\/a>/);
  assert.match(html, /href="\/garden-blog"[^>]*>Read Garden Stories<\/a>/);
  assert.match(html, /href="\/plantpulse#share-a-plant"/);
  assert.match(html, /href="\/plantpulse#costco-plant-watch"[^>]*><strong>Local finds<\/strong>/);
  assert.match(html, /href="\/notes\/monstera-leaves-curling"[^>]*><strong>Indoor favorites<\/strong>/);
  assert.match(html, /href="\/notes\/basil-first-harvest"[^>]*><strong>Seasonal eating<\/strong>/);
  assert.match(html, /href="\/notes"[^>]*><strong>Plain answers<\/strong>/);

  for (const pathname of ["/notes", "/plantpulse", "/garden-blog"]) {
    const destination = await render(pathname);
    assert.equal(destination.status, 200, `${pathname} should resolve`);
  }
});

test("server-renders the Garden Stories collection and complete Little Forest essay", async () => {
  const hubResponse = await render("/garden-blog");
  assert.equal(hubResponse.status, 200);
  const hubHtml = await hubResponse.text();
  assert.match(hubHtml, /Where plants meet stories, seasons, and everyday life\./);
  assert.match(hubHtml, /What Little Forest understands about growing a life/);
  assert.match(hubHtml, /The Secret Garden is really a story about paying attention/);
  assert.match(hubHtml, /The small magic of keeping one herb beside the kitchen/);

  const storyResponse = await render("/garden-blog/little-forest-growing-a-life");
  assert.equal(storyResponse.status, 200);
  const storyHtml = await storyResponse.text();
  assert.match(storyHtml, /The garden is the calendar/);
  assert.match(storyHtml, /A small way to live with the story/);
  assert.match(storyHtml, /References/);
  assert.match(storyHtml, /Japanese Film Database/);
  assert.match(storyHtml, /BreadcrumbList/);
  assert.doesNotMatch(storyHtml, /Sources &amp; notes|Garden Companion editorial team/);
});

test("server-renders the PlantPulse signal engine page", async () => {
  const response = await render("/plantpulse");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /What plant lovers are noticing this week\./);
  assert.match(html, /Indoor plants/);
  assert.match(html, /Monstera/);
  assert.match(html, /Bay Area \/ San Jose/);
  assert.match(html, /Share a plant signal/);
  assert.match(html, /Costco plant watch/);
  assert.match(html, /id="costco-plant-watch"/);
  assert.match(html, /Phalaenopsis Orchid Duo/);
  assert.doesNotMatch(html, /Timely enough to notice|How we listen|latest source review/);
  assert.doesNotMatch(html, /places and plant homes we are watching|Checked 2026|source(?:s)?<\/span>/);
  assert.doesNotMatch(html, /live inventory|exact store availability/i);
});

test("server-renders the notes hub and complete starter guide", async () => {
  const hubResponse = await render("/notes");
  assert.equal(hubResponse.status, 200);
  const hubHtml = await hubResponse.text();
  assert.match(hubHtml, /Useful answers for the plants already in your life\./);
  assert.match(hubHtml, /New olive tree: first-week care/);
  assert.match(hubHtml, /What eggshells really do in a garden/);

  const guideResponse = await render("/notes/monstera-leaves-curling");
  assert.equal(guideResponse.status, 200);
  const guideHtml = await guideResponse.text();
  assert.match(guideHtml, /Monstera leaves are curling\. Start with these five checks\./);
  assert.match(guideHtml, /Three things to check first/);
  assert.match(guideHtml, /References/);
  assert.match(guideHtml, /FAQPage/);
  assert.match(guideHtml, /University of Wisconsin-Madison Horticulture/);
  assert.doesNotMatch(guideHtml, /Indoor plant homes|Year-round care|Sources &amp; review/);
});

test("server-renders about and privacy pages", async () => {
  const aboutResponse = await render("/about");
  assert.equal(aboutResponse.status, 200);
  const aboutHtml = await aboutResponse.text();
  assert.match(aboutHtml, /A useful place for people who like living with plants\./);
  assert.doesNotMatch(aboutHtml, /From signal to guide|We listen widely/);

  const privacyResponse = await render("/privacy");
  assert.equal(privacyResponse.status, 200);
  assert.match(await privacyResponse.text(), /We do not sell personal information\./);
});

test("starter preview files and dependency are removed", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
