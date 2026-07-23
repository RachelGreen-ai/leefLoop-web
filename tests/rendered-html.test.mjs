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
  assert.match(html, /A little ahead of the season/);
  assert.match(html, /Browse seasonal Plant Notes/);
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
  assert.match(html, /href="\/notes\?topic=seasonal"[^>]*>Browse seasonal Plant Notes<\/a>/);
  assert.match(html, /href="\/notes\/fall-mums-after-halloween"/);
  assert.match(html, /href="\/notes\/thanksgiving-cactus-vs-christmas-cactus"/);
  assert.match(html, /href="\/notes\/rosemary-christmas-tree-turning-brown"/);
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
  assert.doesNotMatch(
    hubHtml,
    /story-shelves|Gardens we can almost step into|When a plant changes the story|The poetry hiding in useful things/,
  );
  assert.match(hubHtml, /What Little Forest understands about growing a life/);
  assert.match(hubHtml, /What The Secret History of the British Garden teaches us about time/);
  assert.match(hubHtml, /Japanese Gardens teaches us to notice/);
  assert.match(hubHtml, /The Secret Garden is really a story about paying attention/);
  assert.match(hubHtml, /The small magic of keeping one herb beside the kitchen/);
  assert.match(hubHtml, /How to make a miniature Christmas garden that stays alive/);

  const storyResponse = await render("/garden-blog/little-forest-growing-a-life");
  assert.equal(storyResponse.status, 200);
  const storyHtml = await storyResponse.text();
  assert.match(storyHtml, /The garden is the calendar/);
  assert.match(storyHtml, /A small way to live with the story/);
  assert.match(storyHtml, /References/);
  assert.match(storyHtml, /Japanese Film Database/);
  assert.match(storyHtml, /BreadcrumbList/);
  assert.match(storyHtml, /editorial\/little-forest-preserving-harvest\.webp/);
  assert.match(storyHtml, /Tomatoes, shiso, and chestnuts ready to be carried into another season\./);
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
  assert.match(documentaryHtml, /editorial\/british-garden-working-glasshouse\.webp/);

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
  assert.match(japaneseGardensHtml, /editorial\/japanese-garden-moss-path\.webp/);

  const miniatureChristmasResponse = await render(
    "/garden-blog/miniature-christmas-garden-living-tree",
  );
  assert.equal(miniatureChristmasResponse.status, 200);
  const miniatureChristmasHtml = await miniatureChristmasResponse.text();
  assert.match(miniatureChristmasHtml, /First choose which kind of Christmas tree/);
  assert.match(miniatureChristmasHtml, /Miniature is a design scale/);
  assert.match(miniatureChristmasHtml, /Caring for a Living Christmas Tree/);
  assert.match(miniatureChristmasHtml, /Norfolk Island Pines/);
  assert.match(miniatureChristmasHtml, /BreadcrumbList/);
  assert.match(
    miniatureChristmasHtml,
    /editorial\/miniature-christmas-garden-building-path\.webp/,
  );

  for (const [pathname, image] of [
    [
      "/garden-blog/secret-garden-paying-attention",
      "editorial/secret-garden-first-spring-shoots.webp",
    ],
    [
      "/garden-blog/one-herb-by-the-kitchen",
      "editorial/kitchen-basil-ready-for-dinner.webp",
    ],
  ]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should resolve`);
    assert.match(await response.text(), new RegExp(image.replaceAll(".", "\\.")));
  }
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
  assert.match(hubHtml, /href="\/notes\?topic=seasonal"/);
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
  assert.match(retailGuideHtml, /Target Thai Constellation Plant/);
  assert.match(retailGuideHtml, /Explore related Plant Notes/);
  assert.match(retailGuideHtml, /Live 5-inch Thai Constellation Plant/);
  assert.match(retailGuideHtml, /href="https:\/\/www\.target\.com\/p\/-\/A-92644900"/);
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

  const holidayCactusResponse = await render(
    "/notes/thanksgiving-cactus-vs-christmas-cactus",
  );
  assert.equal(holidayCactusResponse.status, 200);
  const holidayCactusHtml = await holidayCactusResponse.text();
  assert.match(holidayCactusHtml, /Pointed teeth suggest Thanksgiving cactus/);
  assert.match(holidayCactusHtml, /Those green pieces are flattened stems/);
  assert.match(holidayCactusHtml, /Iowa State University Extension and Outreach/);
  assert.match(holidayCactusHtml, /href="\/notes\?topic=seasonal"[^>]*>Seasonal<\/a>/);

  const poinsettiaResponse = await render(
    "/notes/poinsettia-leaves-falling-pet-safety",
  );
  assert.equal(poinsettiaResponse.status, 200);
  const poinsettiaHtml = await poinsettiaResponse.text();
  assert.match(poinsettiaHtml, /Not deadly does not mean edible/);
  assert.match(poinsettiaHtml, /Are poinsettias poisonous to cats and dogs\?/);
  assert.match(poinsettiaHtml, /University of Minnesota Extension/);

  const paperwhiteResponse = await render(
    "/notes/paperwhite-bulbs-in-water-flopping",
  );
  assert.equal(paperwhiteResponse.status, 200);
  const paperwhiteHtml = await paperwhiteResponse.text();
  assert.match(paperwhiteHtml, /The roots need water; the bulb does not need a bath/);
  assert.match(paperwhiteHtml, /one part alcohol to eleven parts water/);
  assert.match(paperwhiteHtml, /Toxic and Non-toxic Plants: Paper White/);
});

test("publishes answer-first regional plant guides with multilingual discovery and GEO schema", async () => {
  const hubResponse = await render("/notes");
  const hubHtml = await hubResponse.text();
  assert.match(hubHtml, /Easy plants for Indian homes/);
  assert.match(hubHtml, /Easy plants for Chinese homes/);
  assert.match(hubHtml, /Easy plants for Japanese homes/);

  const regionalGuides = [
    {
      pathname: "/notes/easy-plants-indian-homes-balconies",
      answer: /money plant or golden pothos, snake plant, aloe vera, tulsi, curry leaf/,
      alias: /घर में लगाने वाले आसान पौधे/,
      image: /editorial\/indian-home-sunlight-threshold\.webp/,
      source: /Kerala Department of Agriculture Development/,
      pickCount: /"numberOfItems":6/,
    },
    {
      pathname: "/notes/easy-plants-chinese-homes-common-names",
      answer: /golden pothos \(绿萝\/綠蘿\), lucky bamboo \(富贵竹\/富貴竹\)/,
      alias: /好养的室内植物/,
      image: /editorial\/chinese-home-lucky-bamboo-care\.webp/,
      source: /New York Botanical Garden/,
      pickCount: /"numberOfItems":5/,
    },
    {
      pathname: "/notes/easy-houseplants-japanese-homes-small-spaces",
      answer: /pothos \(ポトス\), snake plant \(サンスベリア\), pachira \(パキラ\)/,
      alias: /育てやすい観葉植物/,
      image: /editorial\/japanese-home-winter-window-plants\.webp/,
      source: /Sapporo Parks Green Fund/,
      pickCount: /"numberOfItems":5/,
    },
  ];

  for (const guide of regionalGuides) {
    const response = await render(guide.pathname);
    assert.equal(response.status, 200, `${guide.pathname} should resolve`);
    const html = await response.text();
    assert.match(html, guide.answer);
    assert.match(html, guide.alias);
    assert.match(html, guide.image);
    assert.match(html, guide.source);
    assert.match(html, /At a glance/);
    assert.match(html, /"@type":"ItemList"/);
    assert.match(html, guide.pickCount);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /"citation":\[/);
    assert.match(html, /Best for/);
    assert.match(html, /Watch for/);
  }
});

test("publishes the complete 44-note library with valid internal note links", async () => {
  const hubResponse = await render("/notes");
  const hubHtml = await hubResponse.text();
  const noteLinks = new Set(
    [...hubHtml.matchAll(/href="(\/notes\/[^"?#]+)"/g)].map((match) => match[1]),
  );

  assert.equal(noteLinks.size, 44);
  assert.ok(noteLinks.has("/notes/easy-plants-indian-homes-balconies"));
  assert.ok(noteLinks.has("/notes/easy-plants-chinese-homes-common-names"));
  assert.ok(noteLinks.has("/notes/easy-houseplants-japanese-homes-small-spaces"));
  assert.ok(noteLinks.has("/notes/trader-joes-premium-monstera-first-week"));
  assert.ok(noteLinks.has("/notes/easiest-indoor-succulents-ranked"));
  assert.ok(noteLinks.has("/notes/tomato-blossom-end-rot-eggshells"));
  assert.ok(noteLinks.has("/notes/realistic-succulent-selling-plan"));
  assert.ok(noteLinks.has("/notes/how-succulent-breeders-create-new-echeverias"));
  assert.ok(noteLinks.has("/notes/peace-lily-drooping-after-watering"));
  assert.ok(noteLinks.has("/notes/snake-plant-leaves-falling-over"));
  assert.ok(noteLinks.has("/notes/pothos-leaves-turning-yellow"));
  assert.ok(noteLinks.has("/notes/fiddle-leaf-fig-dropping-leaves"));
  assert.ok(noteLinks.has("/notes/boston-fern-brown-crispy-leaves"));
  assert.ok(noteLinks.has("/notes/alocasia-polly-yellow-leaves"));
  assert.ok(noteLinks.has("/notes/coffee-plant-brown-leaves"));
  assert.ok(noteLinks.has("/notes/costco-kumquat-tree-dropping-leaves"));
  assert.ok(noteLinks.has("/notes/fall-mums-after-halloween"));
  assert.ok(noteLinks.has("/notes/halloween-pumpkin-after-october-31"));
  assert.ok(noteLinks.has("/notes/thanksgiving-cactus-vs-christmas-cactus"));
  assert.ok(noteLinks.has("/notes/holiday-cactus-buds-falling-off"));
  assert.ok(noteLinks.has("/notes/rosemary-christmas-tree-turning-brown"));
  assert.ok(noteLinks.has("/notes/poinsettia-leaves-falling-pet-safety"));
  assert.ok(noteLinks.has("/notes/waxed-amaryllis-after-blooming"));
  assert.ok(noteLinks.has("/notes/paperwhite-bulbs-in-water-flopping"));

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
  assert.match(
    sitemapXml,
    /rachelsgarden\.example\/garden-blog\/miniature-christmas-garden-living-tree/,
  );
  for (const image of [
    "little-forest-preserving-harvest.webp",
    "british-garden-working-glasshouse.webp",
    "japanese-garden-moss-path.webp",
    "secret-garden-first-spring-shoots.webp",
    "kitchen-basil-ready-for-dinner.webp",
    "miniature-christmas-garden-building-path.webp",
    "easy-plants-indian-home-balcony.webp",
    "indian-home-sunlight-threshold.webp",
    "easy-plants-chinese-home.webp",
    "chinese-home-lucky-bamboo-care.webp",
    "easy-houseplants-japanese-home.webp",
    "japanese-home-winter-window-plants.webp",
  ]) {
    assert.match(sitemapXml, new RegExp(`/editorial/${image.replaceAll(".", "\\.")}`));
  }
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
