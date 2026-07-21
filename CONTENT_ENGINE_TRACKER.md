# Garden Companion Content Engine Tracker

Purpose: build the website as the first product: a refined, useful plant-care publication that grows subscribers before the mobile app.

Repo: `RachelGreen-ai/leefLoop-web`

Local path: `/Users/junyishen/Documents/GitHub/leefLoop-web`

Working public name: **Garden Companion**

Last updated: 2026-07-20

Current build checkpoint:
- Audience-facing content website is complete for the first public MVP.
- Production deployment is live at `https://garden-companion-notes.vercel.app`.
- `/notes` hub and reusable guide template are live locally.
- Four source-backed starter guides are published in the codebase.
- `/garden-blog` and three complete Garden Stories connect plant care with film, literature, and everyday rituals.
- The first culture-led feature explores seasonal growing and cooking through the Japanese films *Little Forest*.
- PlantPulse now links to dated evidence instead of displaying invented precision.
- Costco official online plant monitoring extracts 24 structured product records as of July 20, 2026.
- Newsletter, privacy, about, sitemap, robots, and social preview are implemented.

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
- Answer-first intros, visible update dates, source notes, FAQ sections, and related links.

## 4A. Automated Signal Engine

Source registry:
- `content-engine/source-registry.json`

Source monitor:
- `scripts/check-source-freshness.mjs`
- run with `npm run signals:check`
- add `-- --write` to refresh `content-engine/snapshots/latest-source-check.json`

What works now:
- daily reachability, ETag, last-modified, content-hash, and change checks
- structured product extraction from accessible retailer JSON-LD
- new/removed product comparison against the prior snapshot
- direct use of the latest verified Costco product list on `/plantpulse`
- blocked sources become review tasks instead of triggering aggressive scraping

Current source result on July 20, 2026:
- Costco easy-care indoor collection: reachable; 24 structured product records extracted
- Costco alternate live-plants collection: automated access blocked; editorial review required
- Home Depot indoor category: automated access blocked; official product URLs reviewed manually
- Texas A&M, UC ANR, Google Trends landing page, and Search Console landing page: reachable
- reader plant signals: captured continuously through the Google Sheet webhook path

Next automation layers:
1. Search Console API after a production domain is deployed and verified.
2. Google Trends weekly export or approved API access.
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

## 6. 30-Day Editorial Sprint

Week 1:
- Costco olive tree first-week care
- Monstera leaves curling
- Basil to pesto first harvest
- Eggshells in the garden

Week 2:
- Grocery store orchid care
- Pothos low-light truth
- Tomato starts before hot weather
- Coffee grounds for plants

Week 3:
- Blueberry bush in containers
- Indoor plant watering by pot size
- Rosemary and thyme herb corner
- Beginner pest checks before spraying

Week 4:
- Patio citrus care
- Pet-aware houseplant notes
- Hydrangea heat stress
- Little Forest-inspired seasonal plant notebook

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

Status: Done for first content release.

Tasks:
- Add SEO/GEO metadata. Done.
- Add `robots.ts`. Done.
- Add `sitemap.ts`. Done.
- Add homepage `WebSite` JSON-LD. Done.
- Add article, FAQ, breadcrumb, collection, and organization schema. Done.
- Add canonical URLs and full sitemap coverage. Done.
- Add a bespoke social sharing image. Done.

### Phase 2: Content Page System

Status: Done for structured content MVP.

Tasks:
- Add `/notes` hub. Done.
- Add structured TypeScript article source. Done.
- Build reusable guide template. Done.
- Add FAQ blocks and schema. Done.
- Add related guide links. Done.
- Add article cards on homepage. Done.
- Publish olive tree, Monstera, basil, and eggshell guides. Done.
- Add editorial approach and privacy pages. Done.

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
- Add Search Console after deployment. Not started.
- Add manual Google Trends worksheet. Not started.

### Phase 5: Brand And Visual Refinement

Status: In progress.

Tasks:
- Keep easyplant-inspired calm, plant-first aesthetic. Done for MVP.
- Add more ownable photography/art direction. Not started.
- Decide final name. Not started.
- Design first social share card. Done.

### Phase 6: Release And Learning Loop

Status: Next.

Tasks:
- Publish the validated site.
- Connect the production Google Sheet webhook.
- Verify the domain in Google Search Console and Bing Webmaster Tools.
- Submit the sitemap.
- Add privacy-aware analytics and newsletter conversion events.
- Send the first weekly issue using the four published guides.
- Review subscriber source, interest, region, and reply patterns after two issues.

## 9. Next Build Priorities

1. Publish the website and connect the production Google Sheet webhook.
2. Verify Search Console and Bing, then submit the sitemap.
3. Turn the current Costco list into the next three guides: orchid, Monstera Esqueleto, and kumquat.
4. Add the Search Console query import after enough impressions exist.
5. Publish the first weekly letter and record topic-level conversion.
6. Add one new guide per week only when it has a dated signal and a credible care source.
