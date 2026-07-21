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

test("server-renders the Rachel’s Garden MVP homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Rachel’s Garden \| Plant Care &amp; Local Trends/);
  assert.match(html, /<strong>Rachel’s Garden<\/strong>/);
  assert.match(html, /og-rachels-garden\.png/);
  assert.match(html, /"name":"Rachel’s Garden"/);
  assert.doesNotMatch(html, /Garden Companion/);
  assert.match(html, /Fresh plant notes for what is growing around you\./);
  assert.match(html, /Subscribe to plant notes/);
  assert.match(html, /A good place to begin\./);
  assert.match(html, /Trending Plants/);
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
  assert.ok(
    html.indexOf('id="newsletter"') <
      html.indexOf('href="/plantpulse#costco-plant-watch"'),
    "topic links should live inside the final newsletter section",
  );
  assert.equal((html.match(/<strong>Local finds<\/strong>/g) ?? []).length, 1);
  assert.doesNotMatch(html, /class="trust-strip"|Weekly local plant notes/);

  for (const pathname of ["/notes", "/plantpulse", "/garden-blog"]) {
    const destination = await render(pathname);
    assert.equal(destination.status, 200, `${pathname} should resolve`);
  }
});

test("server-renders the Garden Stories collection and complete screen essays", async () => {
  const hubResponse = await render("/garden-blog");
  assert.equal(hubResponse.status, 200);
  const hubHtml = await hubResponse.text();
  assert.match(hubHtml, /Where plants meet stories, seasons, and everyday life\./);
  assert.match(hubHtml, /What Little Forest understands about growing a life/);
  assert.match(hubHtml, /What The Secret History of the British Garden teaches us about time/);
  assert.match(hubHtml, /Japanese Gardens teaches us to notice/);
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
  assert.doesNotMatch(storyHtml, /Sources &amp; notes|Rachel’s Garden editorial team/);

  const documentaryResponse = await render(
    "/garden-blog/secret-history-british-garden-time",
  );
  assert.equal(documentaryResponse.status, 200);
  const documentaryHtml = await documentaryResponse.text();
  assert.match(documentaryHtml, /A garden is a document written in living material/);
  assert.match(documentaryHtml, /Every exotic leaf arrives with a history/);
  assert.match(documentaryHtml, /A small way to live with the story/);
  assert.match(documentaryHtml, /Gardening With Monty Don/);
  assert.match(documentaryHtml, /Rousham House &amp; Gardens/);
  assert.match(documentaryHtml, /BreadcrumbList/);

  const japaneseGardensResponse = await render(
    "/garden-blog/monty-don-japanese-gardens-noticing",
  );
  assert.equal(japaneseGardensResponse.status, 200);
  const japaneseGardensHtml = await japaneseGardensResponse.text();
  assert.match(japaneseGardensHtml, /The garden is not a collection of objects/);
  assert.match(japaneseGardensHtml, /The path teaches the body how to look/);
  assert.match(japaneseGardensHtml, /A borrowed view begins beyond the boundary/);
  assert.match(japaneseGardensHtml, /Murin-an/);
  assert.match(japaneseGardensHtml, /Kenrokuen Digital Archive/);
  assert.match(japaneseGardensHtml, /BreadcrumbList/);
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
  assert.match(hubHtml, /Find the note that fits the moment\./);
  assert.match(hubHtml, /Search Plant Notes/);
  assert.match(hubHtml, /href="\/notes\?topic=local-finds"/);
  assert.match(hubHtml, /href="\/notes\?topic=indoor-plants"/);
  assert.match(hubHtml, /href="\/notes\?topic=farm-to-table"/);
  assert.match(hubHtml, /href="\/notes\?topic=organic-first"/);
  assert.match(hubHtml, /New olive tree: first-week care/);
  assert.match(hubHtml, /What eggshells really do in a garden/);
  assert.match(hubHtml, /Trader Joe&#x27;s Premium Monstera care/);

  const guideResponse = await render("/notes/monstera-leaves-curling");
  assert.equal(guideResponse.status, 200);
  const guideHtml = await guideResponse.text();
  assert.match(guideHtml, /Monstera leaves are curling\. Start with these five checks\./);
  assert.match(guideHtml, /Three things to check first/);
  assert.match(guideHtml, /References/);
  assert.match(guideHtml, /FAQPage/);
  assert.match(guideHtml, /University of Wisconsin-Madison Horticulture/);
  assert.match(guideHtml, /Bright does not mean harsh direct sun\./);
  assert.match(guideHtml, /Is Monstera a shade-loving or low-light plant\?/);
  assert.match(guideHtml, /Missouri Botanical Garden/);
  assert.match(guideHtml, /href="\/notes\?topic=indoor-plants"[^>]*>Indoor plants<\/a>/);
  assert.doesNotMatch(guideHtml, /Indoor plant homes|Year-round care|Sources &amp; review/);

  const retailGuideResponse = await render("/notes/trader-joes-premium-monstera-first-week");
  assert.equal(retailGuideResponse.status, 200);
  const retailGuideHtml = await retailGuideResponse.text();
  assert.match(retailGuideHtml, /Trader Joe&#x27;s Premium Monstera: what to do in the first week\./);
  assert.match(retailGuideHtml, /Premium Monstera/);
  assert.match(retailGuideHtml, /UC Statewide IPM Program/);
  assert.match(retailGuideHtml, /FAQPage/);

  const breederGuideResponse = await render(
    "/notes/how-succulent-breeders-create-new-echeverias",
  );
  assert.equal(breederGuideResponse.status, 200);
  const breederGuideHtml = await breederGuideResponse.text();
  assert.match(breederGuideHtml, /What does a succulent breeder do\?/);
  assert.match(breederGuideHtml, /Renée O&#x27;Connell/);
  assert.match(breederGuideHtml, /Propagation makes another plant/);
  assert.match(breederGuideHtml, /Cactus and Succulent Society of America/);
  assert.match(breederGuideHtml, /U\.S\. Patent and Trademark Office/);
  assert.match(breederGuideHtml, /FAQPage/);
});

test("publishes the complete 25-note library with valid internal note links", async () => {
  const hubResponse = await render("/notes");
  const hubHtml = await hubResponse.text();
  const noteLinks = new Set(
    [...hubHtml.matchAll(/href="(\/notes\/[^"?#]+)"/g)].map((match) => match[1]),
  );

  assert.equal(noteLinks.size, 25);
  assert.ok(noteLinks.has("/notes/trader-joes-premium-monstera-first-week"));
  assert.ok(noteLinks.has("/notes/easiest-indoor-succulents-ranked"));
  assert.ok(noteLinks.has("/notes/tomato-blossom-end-rot-eggshells"));
  assert.ok(noteLinks.has("/notes/realistic-succulent-selling-plan"));
  assert.ok(noteLinks.has("/notes/how-succulent-breeders-create-new-echeverias"));

  const renderedNotes = await Promise.all(
    [...noteLinks].map(async (pathname) => {
      const response = await render(pathname);
      return { pathname, response, html: await response.text() };
    }),
  );

  for (const { pathname, response, html } of renderedNotes) {
    assert.equal(response.status, 200, `${pathname} should resolve`);
    assert.match(html, /FAQPage/, `${pathname} should publish FAQ schema`);
    assert.match(html, /References/, `${pathname} should publish references`);
    assert.match(html, /Three things to check first/, `${pathname} should be answer-first`);

    const relatedLinks = [
      ...html.matchAll(/href="(\/notes\/[^"?#]+)"/g),
    ].map((match) => match[1]);

    for (const relatedLink of relatedLinks) {
      assert.ok(noteLinks.has(relatedLink), `${pathname} links to missing note ${relatedLink}`);
    }
  }
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

test("publishes canonical URLs, search directives, and a complete image sitemap", async () => {
  const [
    homeResponse,
    pulseResponse,
    guideResponse,
    notesResponse,
    storiesResponse,
    sitemapResponse,
    robotsResponse,
  ] =
    await Promise.all([
      render("/"),
      render("/plantpulse"),
      render("/notes/monstera-leaves-curling"),
      render("/notes"),
      render("/garden-blog"),
      render("/sitemap.xml"),
      render("/robots.txt"),
    ]);

  const [homeHtml, pulseHtml, guideHtml, notesHtml, storiesHtml, sitemapXml, robotsTxt] =
    await Promise.all([
      homeResponse.text(),
      pulseResponse.text(),
      guideResponse.text(),
      notesResponse.text(),
      storiesResponse.text(),
      sitemapResponse.text(),
      robotsResponse.text(),
    ]);

  assert.match(homeHtml, /rel="canonical" href="https:\/\/rachelsgarden\.example\/"/);
  assert.match(pulseHtml, /rel="canonical" href="https:\/\/rachelsgarden\.example\/plantpulse"/);
  assert.match(
    pulseHtml,
    /property="og:url" content="https:\/\/rachelsgarden\.example\/plantpulse"/,
  );
  assert.match(homeHtml, /name="googlebot" content="[^\"]*max-image-preview:large/);
  assert.match(guideHtml, /https:\/\/rachelsgarden\.example\/notes\/monstera-leaves-curling/);

  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /xml/i);
  assert.match(sitemapXml, /<image:image>/);
  assert.match(sitemapXml, /rachelsgarden\.example\/notes\/monstera-leaves-curling/);
  assert.match(sitemapXml, /rachelsgarden\.example\/garden-blog\/little-forest-growing-a-life/);
  assert.match(
    sitemapXml,
    /rachelsgarden\.example\/garden-blog\/secret-history-british-garden-time/,
  );
  assert.match(
    sitemapXml,
    /rachelsgarden\.example\/garden-blog\/monty-don-japanese-gardens-noticing/,
  );
  const noteLinks = new Set(
    [...notesHtml.matchAll(/href="(\/notes\/[^"?#]+)"/g)].map((match) => match[1]),
  );
  const storyLinks = new Set(
    [...storiesHtml.matchAll(/href="(\/garden-blog\/[^"?#]+)"/g)].map((match) => match[1]),
  );
  const sitemapUrlCount = (sitemapXml.match(/<url>/g) ?? []).length;
  assert.equal(sitemapUrlCount, 6 + noteLinks.size + storyLinks.size);

  assert.equal(robotsResponse.status, 200);
  assert.match(robotsTxt, /User-Agent: \*/i);
  assert.match(robotsTxt, /Sitemap: https:\/\/rachelsgarden\.example\/sitemap\.xml/i);
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
