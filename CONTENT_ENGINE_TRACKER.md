# Rachel’s Garden Content Engine Tracker

Purpose: build the website as the first product: a refined, useful plant-care publication that grows subscribers before the mobile app.

Repo: `RachelGreen-ai/leefLoop-web`

Local path: `/Users/junyishen/Documents/GitHub/leefLoop-web`

Public name: **Rachel’s Garden**

Last updated: 2026-07-21

Current build checkpoint:
- Public branding, metadata, structured data, favicon, and social-share artwork now use Rachel’s Garden consistently.
- Audience-facing content website is complete for the first public MVP.
- Production deployment is live at `https://garden-companion-notes.vercel.app`.
- `/notes` hub, search, topic filters, and reusable guide template are live.
- Thirty-three source-backed Plant Notes are in the release build: the prior 25-note library plus an eight-note retail rescue cluster shaped by current Costco, Lowe's, and Target signals.
- Retail-first naming now follows the words readers see and search, such as `Trader Joe's Premium Monstera`; cultivar and botanical distinctions are explained inside the note.
- All 33 Plant Notes have visible, searchable editorial tags; retailer aliases and common search names are included in onsite search and article metadata.
- The first shared plant entity joins Trader Joe's `Premium Monstera`, Target's `Live 5-inch Thai Constellation Plant`, Home Depot's Thai Constellation wording, common shorthand, and the accepted cultivar name without duplicating articles.
- The library now adds high-intent diagnosis for drooping peace lilies, falling snake plant leaves, yellow pothos, fiddle-leaf fig leaf drop, brown Boston ferns, yellow Alocasia Polly leaves, brown coffee plants, and newly moved kumquat trees.
- `/garden-blog` and six complete Garden Stories connect plant care with film, documentaries, literature, seasonal projects, and everyday rituals.
- The culture-led collection now includes seasonal growing through the Japanese films *Little Forest*, four centuries of garden history through Monty Don's *The Secret History of the British Garden*, and a close reading of attention, season, and care in *Monty Don's Japanese Gardens*.
- The first seasonal project story turns a real miniature Christmas garden into a reusable winter tradition, while separating short-stay outdoor conifers from long-term indoor Norfolk Island pines.
- PlantPulse now links to dated evidence instead of displaying invented precision.
- Costco official online plant monitoring extracts 24 structured product records as of July 20, 2026.
- Newsletter, privacy, about, sitemap, robots, and social preview are implemented.
- Google search launch foundation now includes truthful dynamic sitemap dates, image sitemap entries, complete canonicals, absolute structured-data URLs, and optional Search Console verification metadata.
- Release tests now render all 33 notes, verify every internal note link, and require FAQ and reference sections before publication.

## 0. Strategic Decision

Current priority:

> Build audience, trust, and search authority through a beautiful content website and newsletter before investing more deeply in the app.

The app remains important, but it should be shaped by real subscriber behavior:
- what plants people care about
- what regions respond
- what search questions convert
- what indoor plant topics retain attention
- what community prompts people actually share

## 1. Audience

Primary readers:
- plant lovers who buy plants from Costco, Home Depot, Lowe's, Trader Joe's, nurseries, and local markets
- people who care for indoor potted plants, especially popular visual plants like Monstera
- beginners who want practical, affordable, organic-first care
- people who like the farm-to-table idea but need tiny, realistic steps
- readers attracted to seasonal living, quiet home rituals, and beautiful plant-centered stories

## 2. Content Promise

The site should feel:
- fresh
- elegant
- warm
- practical
- local-aware
- premium but not distant
- beautiful enough for plant lovers, useful enough to bookmark

Core promise:

> We help you care for the plants you are actually bringing home, notice what is growing around you, and turn small plant moments into useful seasonal habits.

## 3. Core Content Pillars

### Costco And Local Plant Finds

Goal: prepare care guides for plants that people are likely seeing in nearby stores and garden aisles.

Example topics:
- Costco olive tree care: what to do the first week
- Blueberry bush in a container: soil comes first
- Patio citrus care without overcomplicating fertilizer
- Hydrangea heat stress after bringing it home
- Orchid from a grocery store: how to avoid overwatering

Important framing:
- Talk about local plant visibility and care timing.
- Do not promise exact store availability unless we later have licensed data.
- Avoid defensive public copy; keep it warm and useful.

### Indoor Potted Plants

Goal: serve the large audience that loves indoor plants and apartment-friendly greenery.

Example topics:
- Monstera care for beginners
- Why Monstera leaves curl
- Pothos care without overthinking it
- How to tell if an indoor plant needs more light
- Plant shelf care: watering rhythm by pot size and light
- Pet-aware plant care notes

### Seasonal Farm-To-Table

Goal: connect growing, buying, cooking, and seasonal memory.

Example topics:
- Basil to pesto: a small first harvest ritual
- Tomato starts before heat stress
- Patio citrus: flowers, fragrance, and kitchen use
- Strawberries in containers
- Rosemary, thyme, and a low-effort herb corner

### Organic-First Practical Fixes

Goal: answer viral plant-care hacks honestly and practically.

Example topics:
- Eggshells in the garden: what they help and what they do not
- Coffee grounds for plants: when to be careful
- Yellow leaves: what to check before buying fertilizer
- Beginner pest checks before spraying
- Compost and mulch habits for small gardens

### Culture-Inspired Seasonal Guides

Goal: use films, books, markets, and seasonal living as inspiration, then turn the idea into practical guides.

Reference style:
- Japanese seasonal living and food-centered films such as *Little Forest*
- Garden documentaries such as *The Secret History of the British Garden* and *Monty Don's Japanese Gardens*, read through design, labor, season, movement, and everyday practice
- botanical essays, home cooking, farmers markets, quiet garden rituals
- visually beautiful plant moments from everyday life

Rules:
- Use works as inspiration and context, not as copied content.
- Do not use copyrighted stills, long quotes, or plot summaries as the article.
- Convert each inspiration into real utility: plant guide, cooking idea, care checklist, seasonal calendar, or journal prompt.

Example topics:
- A Little Forest-inspired seasonal herb notebook
- What to grow for a simple summer table
- Preserving herbs when a plant grows faster than you cook
- A rainy-week plant journal prompt
- From market plant to kitchen ritual: how to make a care note useful

### PlantPulse Trend Notes

Goal: turn signals into editorial decisions.

Inputs:
- search interest
- Search Console after launch
- local retail visibility
- public nursery and garden center posts
- seasonal timing
- weather context
- user-submitted plant signals
- newsletter clicks and replies

Outputs:
- weekly newsletter
- SEO article queue
- social post prompts
- local challenge ideas
- future app care packs

## 4. SEO And GEO Operating System

SEO goal:
- rank for specific, practical plant-care questions.

GEO goal:
- make the site easy for AI search engines to cite by publishing clear, answer-first, structured, frequently updated content.

Required page patterns:
- one clear H1
- answer-first intro
- short practical sections
- FAQ block
- internal links to related guides
- descriptive title and meta description
- JSON-LD schema when useful
- updated date
- source/review note for care claims

Priority schemas:
- `WebSite` on homepage
- `Article` on guide pages
- `FAQPage` on question-based guides
- `BreadcrumbList` on guides and future category pages

First SEO clusters:
- Costco plant care
- Monstera care
- indoor plant care for beginners
- organic plant fixes
- farm-to-table container garden
- local seasonal plant notes

Current implementation:
- `WebSite` and `Organization` schema on the homepage.
- `CollectionPage` and `ItemList` schema on `/notes`.
- `Article`, `FAQPage`, and `BreadcrumbList` schema on every guide.
- Canonical metadata, Open Graph image, X card, expanded sitemap, and AI crawler access.
- Sitemap hub dates now follow actual content/source updates instead of a shared manual date.
- Plant Note and Garden Story images are included in the sitemap.
- Structured-data page, article, image, and breadcrumb URLs are absolute.
- Search Console setup and the ongoing publishing workflow are documented in `docs/google-search-launch.md`.
- Answer-first intros, visible update dates, source notes, FAQ sections, and related links.

## 4A. Automated Signal Engine

Source registry:
- `content-engine/source-registry.json`

Source monitor:
- `scripts/check-source-freshness.mjs`
- run with `npm run signals:check`
- add `-- --write` to refresh `content-engine/snapshots/latest-source-check.json`

Topic and alias engine:
- `content-engine/topic-entities.json`
- `scripts/build-content-queue.mjs`
- run with `npm run content:queue`
- review `content-engine/reports/latest-topic-queue.md`

What works now:
- daily reachability, ETag, last-modified, content-hash, and change checks
- structured product extraction from accessible retailer JSON-LD
- new/removed product comparison against the prior snapshot
- direct use of the latest verified Costco product list on `/plantpulse`
- blocked sources become review tasks instead of triggering aggressive scraping

Current source result on July 21, 2026:
- Costco easy-care indoor collection: reachable; 24 structured product records extracted
- Costco alternate live-plants collection: automated access blocked; editorial review required
- Home Depot indoor category: automated access blocked; official product URLs reviewed manually
- Lowe's houseplant category: automated access blocked; official product pages and shelf language reviewed manually
- Target indoor live-plants category: reachable; product names require editorial review because the page exposes no Product JSON-LD
- Trader Joe's Premium Monstera product page: reachable; exact shelf name stored as dated alias evidence
- Texas A&M, UC ANR, Google Trends landing page, and Search Console landing page: reachable
- reader plant signals: captured continuously through the Google Sheet webhook path

Next automation layers:
1. Search Console API after a production domain is deployed and verified.
2. Populate the normalized Google Trends input weekly from official Explore exports; replace this manual handoff with the official API only after alpha access is approved.
3. Source-change alerts through a scheduled Cloudflare job or GitHub workflow.
4. Topic clustering that joins retailer appearance, search queries, season, and owned audience response.
5. Draft briefs generated automatically; care claims remain human-reviewed.

Operating guide:
- `docs/content-engine-operations.md`

## 5. Newsletter MVP

Goal: collect subscribers and learn what topics pull attention.

Capture:
- email
- region or ZIP
- plant interest
- source page

Current implementation:
- `WaitlistForm` is now a newsletter subscription form.
- API route still posts to the Google Sheet webhook.
- Sheet can continue using the existing `Waitlist Leads` tab, or be renamed later to `Subscribers`.

Weekly newsletter structure:
1. One local or retail plant signal.
2. One indoor potted plant note.
3. One seasonal farm-to-table idea.
4. One organic-first troubleshooting tip.
5. One community prompt or reply request.

Seasonal publishing rule:
- Publish durable seasonal guides 8-12 weeks before peak interest so search engines and readers have time to discover them.
- Keep the evergreen URL free of a year unless the story depends on a specific annual event.
- Refresh the article's sources, links, images, and short answer before each seasonal return instead of creating a duplicate post.
- Build one seasonal idea into a small campaign: one Garden Story, one practical Plant Note, one newsletter feature, and several social crops from the same researched brief.
- After the peak, keep the article live and useful; remove only temporary homepage promotion.

## 6. Twenty-Note Search Sprint

Status: Complete in the July 21 release build.

### Retail And Grocery Plant Intent

1. Trader Joe's Premium Monstera: first-week care.
2. Is a Trader Joe's Premium Monstera a Thai Constellation?
3. Brown spots on a Premium Monstera.
4. Grocery-store orchid care after blooming.
5. Whether to separate a Costco succulent garden.

### Beginner Indoor And Succulent Intent

6. Money tree leaves turning yellow.
7. Easiest indoor succulents, honestly ranked.
8. How often to water succulents without a calendar.
9. How to reset a tall, leggy succulent.
10. Mushy succulent leaves and root-rot rescue.

### Specialty Care And Myth Checks

11. How to build a succulent soil mix.
12. Desert rose yellow leaves and caudex checks.
13. Desert rose not blooming.
14. String of pearls shriveled, mushy, or bald.
15. Tomato blossom-end rot and why eggshells do not provide a quick fix.

### Farm-To-Table And Community Value

16. Tomato leaves curling in summer.
17. Zucchini flowers but no fruit.
18. A realistic balcony snack garden.
19. Five succulents to propagate for gifts, swaps, or local sale.
20. A realistic small-batch local succulent-selling plan.

### Editorial Quality Gate

Every new Plant Note must pass these checks before release:

1. **Search language first.** Put the complete, plain retail or common name in the title. Explain scientific, botanical, or cultivar names inside the article.
2. **Answer first.** Give the useful short answer before background, followed by three immediate checks.
3. **Evidence hierarchy.** Use retailer pages and forums to identify demand. Use Extension services, public horticulture institutions, regulators, and original official sources for care, safety, and legal claims.
4. **No false precision.** Do not invent search volume, local inventory, success rates, profit, or fixed watering schedules.
5. **Uncertainty is visible.** Separate a likely pattern from a confirmed diagnosis and tell readers what observation would change the answer.
6. **Useful low-cost action.** Prefer observation, drainage, light, sanitation, soil testing, and simple household routines over unnecessary products.
7. **Complete page.** Include four or more useful sections, a practical checklist, FAQs, reliable sources, an accurate image, and related notes.
8. **Automated release check.** Every note must return 200, publish FAQ schema and References, and contain no broken Plant Notes links.

Forum and social discussions can shape the question queue, but they never become the sole evidence for a technical care recommendation.

## 7. Community And Sharing Loop

Early prompts:
- Beautiful New Leaf
- First Harvest Note
- Plant Rescue Story
- Funny Tree Walk
- Local Plant Find

Sharing model:
- readers submit a broad region, plant, and short note
- we feature selected stories in newsletter/social posts
- later generate share cards and badges
- avoid exact sensitive plant locations

## 8. Implementation Tracker

### Phase 0: Website Repositioning

Status: Done for public MVP.

Tasks:
- Change homepage from app-first to content/newsletter-first. Done.
- Change CTA language from beta waitlist to subscription. Done.
- Keep future app as a later trust-building direction. Done.
- Add content pillars to homepage. Done.
- Add culture-inspired seasonal guide concept. Done.

### Phase 1: Search Foundation

Status: Code complete; custom domain ownership and Search Console submission pending.

Tasks:
- Add SEO/GEO metadata. Done.
- Add `robots.ts`. Done.
- Add `sitemap.ts`. Done.
- Add homepage `WebSite` JSON-LD. Done.
- Add article, FAQ, breadcrumb, collection, and organization schema. Done.
- Add canonical URLs and full sitemap coverage. Done.
- Derive sitemap `lastmod` from real content and PlantPulse source dates. Done.
- Add article and story image entries to the sitemap. Done.
- Add optional Google verification metadata. Done.
- Document domain, sitemap submission, URL inspection, and weekly optimization operations. Done.
- Add a bespoke social sharing image. Done.

### Phase 2: Content Page System

Status: Done for the 33-note public content MVP.

Tasks:
- Add `/notes` hub. Done.
- Add structured TypeScript article source. Done.
- Build reusable guide template. Done.
- Add FAQ blocks and schema. Done.
- Add related guide links. Done.
- Add article cards on homepage. Done.
- Publish olive tree, Monstera, basil, and eggshell guides. Done.
- Publish the twenty-note search-intent sprint across retail, succulent, edible, and community topics. Done.
- Publish a source-backed introduction to succulent breeders using Echeveria 'Cubic Frost' as a documented case study. Done.
- Publish an eight-note retail rescue cluster connecting current Costco, Lowe's, and Target shelf signals with recurring symptom searches. Done.
- Publish a source-backed Garden Story on *The Secret History of the British Garden*, with a practical reading of four centuries of garden design. Done.
- Publish a source-backed Garden Story on *Monty Don's Japanese Gardens*, turning paths, borrowed scenery, seasonal care, and restraint into locally useful ideas. Done.
- Publish a source-backed seasonal Garden Story on making a living miniature Christmas garden that continues after the decorations come down. Done.
- Split the guide library into typed topic modules so larger batches remain maintainable. Done.
- Add rendered release coverage for all 33 notes and their internal links. Done.
- Add editorial approach and privacy pages. Done.
- Add a taxonomy-driven Plant Notes library with working topic filters, live search, result counts, empty states, and shareable `topic`/`q` URLs. Done.
- Link every guide card and article breadcrumb back to its relevant Plant Notes topic. Done.
- Keep `/notes` statically generated and send only lightweight guide summaries to the browser search index. Done.

Plant Notes scaling rules:
- New guides automatically join search, topic counts, filters, cards, structured data, and the sitemap when added to `app/data/guides.ts`.
- Every guide must use one category defined in `app/data/note-topics.ts`; add a new public category only when it will support a meaningful collection of notes.
- Filter/search query URLs canonicalize to `/notes`, so they remain useful and shareable without creating duplicate index pages.
- Revisit a generated external search index when the library exceeds roughly 250 notes or its client search payload becomes materially large.

### Phase 3: Newsletter Operations

Status: In progress.

Tasks:
- Capture subscribers through Google Sheet. Done.
- Add source tracking. Done.
- Rename sheet/tab to Subscribers later if useful. Not started.
- Create first weekly email template. Not started.
- Add analytics events after deployment. Not started.

### Phase 4: PlantPulse Data Workflow

Status: In progress.

Tasks:
- Seed first local and indoor signals. Done.
- Add signal submission form. Done.
- Add weekly editorial review workflow. Documented.
- Replace public numeric scores with readable attention bands. Done.
- Add dated source URLs to every current signal. Done.
- Add source registry and freshness monitor. Done.
- Extract the current Costco online product list from structured data. Done.
- Show selected and complete Costco watch lists on PlantPulse. Done.
- Add Target, Trader Joe's, and Lowe's to the source registry. Done.
- Add canonical plant entities with retailer aliases, search names, question patterns, and existing coverage. Done.
- Add a validated Google Trends CSV input and automatically scored topic queue. Done; weekly observations pending.
- Add visible tags and alias-aware onsite search to all Plant Notes. Done.
- Add Search Console after the final custom domain is connected. Not started.
- Add the first weekly Google Trends observations through the documented Google Sheet workflow. Not started.

### Phase 5: Brand And Visual Refinement

Status: In progress.

Tasks:
- Keep easyplant-inspired calm, plant-first aesthetic. Done for MVP.
- Add more ownable photography/art direction. Not started.
- Decide final name. Not started.
- Design first social share card. Done.

### Phase 6: Release And Learning Loop

Status: In progress.

Tasks:
- Publish the validated site. Done on the Vercel review domain.
- Connect the production Google Sheet webhook.
- Connect the final custom domain. Not started.
- Verify the final domain in Google Search Console and Bing Webmaster Tools. Not started.
- Submit the production-domain sitemap. Not started.
- Add privacy-aware analytics and newsletter conversion events.
- Send the first weekly issue using the strongest new retail, succulent, and balcony guides.
- Review subscriber source, interest, region, and reply patterns after two issues.

## 9. Next Build Priorities

1. Choose and connect the final custom domain, then set `NEXT_PUBLIC_SITE_URL` in Vercel.
2. Verify the domain in Search Console and submit `sitemap.xml` using `docs/google-search-launch.md`.
3. Publish a first newsletter issue that links to Trader Joe's Premium Monstera, the honest succulent ranking, and the balcony snack garden; record clicks by topic.
4. Add privacy-aware analytics for note view, search, topic filter, related-note click, source click, and newsletter conversion.
5. Import the first official Google Trends comparison rows, then use the generated queue with Search Console queries, onsite search gaps, subscriber replies, retailer signals, and seasonal timing to rank the next briefs.
6. Build the next cluster only after demand review: fungus gnats, coffee grounds, banana water, pet-aware plant choices, blueberry containers, and hydrangea heat stress.
7. Automate brief generation and source-change alerts while keeping claim review and final editorial approval human-led.
