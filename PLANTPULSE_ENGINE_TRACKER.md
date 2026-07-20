# PlantPulse Engine Implementation Tracker

Purpose: build a local and indoor plant signal engine that powers website content, newsletter topics, community prompts, future app care packs, and personalized recommendations later.

Working name: **PlantPulse**

Last updated: 2026-07-20

## 2026-07-20 Strategy Update

PlantPulse is now primarily a **content and newsletter planning engine**.

Near-term outputs:
- weekly newsletter topics
- blog/guide priorities
- local and indoor plant notes
- community prompts
- social post ideas
- first-party subscriber learning

Future outputs:
- app care packs
- personalized plant recommendations
- scan feedback loops

## 0. Product Thesis

PlantPulse should answer:

> What plants are people near me growing, loving, struggling with, and trying to understand right now?

It is not a live shopping or inventory product. Publicly, it should feel like a warm local garden note:

> A local digest of seasonal plant questions, weather shifts, community finds, and care notes.

Internally, PlantPulse is a ranking system for deciding:
- which care guides to publish
- which newsletter sections to write
- which social posts and share cards to prepare
- which future app care packs to prepare
- which local challenge to run
- which user scan trends deserve better diagnostics

## 1. Launch Scope

Start with three regions:
- Bay Area / San Jose
- Southern California
- Central Texas / Austin

Also start with one indoor/container track:
- Indoor plant homes / apartments

Reason:
- Many plant lovers care most about indoor potted plants.
- Indoor plants are less tied to hardiness zone, but still strongly shaped by light, humidity, room temperature, pot size, drainage, pets, and watering habits.
- Popular plants like Monstera are excellent for visual content, plant journals, beginner care guides, and community sharing.

Start with 6-10 plants:
- Olive tree
- Tomato starts
- Basil
- Blueberry bush
- Hydrangea
- Monstera / Swiss cheese plant
- Pothos
- Orchid
- Citrus patio tree
- Lavender
- Rosemary
- Strawberry starts
- Pepper starts

Start with curated weekly updates. Automation should support editorial judgment, not replace it.

## 2. User Value

For plant lovers:
- Know what gardeners near them are noticing.
- Get timely care notes before common mistakes happen.
- Feel connected to local seasons and community.
- Discover challenges/events without a full social network.

For LeafLoop:
- Build SEO/local pages.
- Build audience before app launch.
- Prepare care packs for the mobile app.
- Collect first-party trend and interest data.
- Create newsletter/social content loops.

## 3. Data Source Layers

### Layer 1: Owned Signals

Highest value, lowest dependency risk.

MVP sources:
- website article views
- waitlist ZIP/region
- challenge page views
- challenge submissions
- "I saw this plant" reports
- app scans later
- app source context later: Costco, Home Depot, Lowe's, nursery, yard
- scan feedback later: correct, unsure, wrong

Implementation status:
- Newsletter and plant-signal intake are connected to the Google Sheet webhook path.
- Article views and clicks need production analytics after deployment.

### Layer 2: Search Signals

MVP sources:
- manual Google Trends review
- Google Search Console after launch
- Bing Webmaster Tools after launch
- keyword research around plant + symptom + region

Future:
- Apply for official Google Trends API alpha access.
- Store normalized interest by plant, query, region, and week.

Implementation status:
- Source is registered and monitored for reachability.
- Search Console import waits for production domain verification.
- Google Trends remains weekly export or approved API access; do not rely on unofficial scraping.

### Layer 3: Retail Visibility Signals

MVP sources:
- manual review of Costco, Home Depot, Lowe's, Trader Joe's, and local nursery plant pages/newsletters/social posts
- user-submitted "I saw this plant" reports
- third-party retail data APIs only after terms and cost review

Guardrail:
- Do not imply exact live inventory or store-level availability unless we have explicit licensed data.

Implementation status:
- Costco official easy-care plant page is monitored automatically.
- Structured data currently yields 24 dated product records and direct product URLs.
- Home Depot blocks automated category access, so current official product pages are reviewed manually.
- Reader-submitted local sightings remain the best path to store-level context.

### Layer 4: Social/Community Signals

MVP sources:
- Instagram hashtags
- Facebook gardening groups
- Reddit gardening communities
- local nursery posts
- botanical garden/community group events

Guardrail:
- Do not copy private group content.
- Summarize public patterns, not individual posts, unless permission is granted.

Implementation status:
- Manual editorial review first.

### Layer 5: Weather/Season Signals

MVP sources:
- region climate notes
- known seasonal windows
- National Weather Service later
- hardiness zone / heat / frost windows later

Implementation status:
- Static seasonal notes first.

## 4. Data Model V0

Region:
- `id`
- `name`
- `shortName`
- `zone`
- `description`

PlantPulseSignal:
- `id`
- `plant`
- `plainName`
- `regionId`
- `rank` for internal editorial ordering only
- `attention`: strong signal, worth watching, seasonal now
- `momentum`: rising, steady, cooling
- `whyNow`
- `careNote`
- `commonMistake`
- `contentAngle`
- `challengeIdea`
- `sourceBadges`: search, season, weather, community, retail, owned
- `sources`: publisher, URL, label, and observation date
- `guideSlug` when a complete guide is available
- `updatedAt`

Scoring inputs:
- search interest: 0-25
- retail visibility: 0-20
- social/community mentions: 0-20
- seasonal fit: 0-15
- weather relevance: 0-10
- owned user activity: 0-10

Internal ranking can be curated while evidence is sparse. The public UI uses readable attention bands and dated source links rather than scientific-looking numbers.

## 5. Public UX

Public page:
- `/plantpulse`

Sections:
1. Hero: warm explanation of local garden signals.
2. Region selector/overview cards.
3. Trending plant cards.
4. "Why now" explanation.
5. Common mistake and care note.
6. Related content angle.
7. Challenge idea.
8. CTA: tell us what you are seeing / join beta.

Copy principles:
- Warm and useful.
- No defensive legal language in headlines.
- Use "gardeners near you are noticing" instead of "inventory."
- Use "signals" and "care notes" instead of "proof."
- Be transparent about confidence.

## 6. Internal Workflow V0

Weekly editor workflow:
1. Pick 3 target regions.
2. Review weather/season context.
3. Review Google Trends manually for 10 seed plants.
4. Review public retail/social signals.
5. Review website/app owned activity.
6. Update PlantPulse seed data.
7. Publish/update region cards.
8. Pick 1 care guide and 1 challenge prompt per region.
9. Add learnings to content calendar.

## 7. Implementation Phases

### Phase 0: Tracker And Seed Model

Status: Done for V0.

Tasks:
- Create this tracker. Done.
- Add static PlantPulse region and signal data. Done.
- Share data between homepage preview and `/plantpulse`. Done.

Acceptance criteria:
- PlantPulse has a clear source-of-truth data file.
- Homepage uses the same data as the dedicated page.

### Phase 1: Public PlantPulse Page

Status: Done for first web MVP.

Tasks:
- Build `/plantpulse`. Done.
- Add region cards. Done.
- Add signal cards. Done.
- Add confidence/source badges. Done.
- Add "tell us what you see" CTA. Done as a placeholder form.

Acceptance criteria:
- Page is useful without automation.
- Copy feels soft, warm, and helpful.
- No exact store availability language.

### Phase 2: Signal Intake Placeholder

Status: MVP implemented with Google Sheet capture path.

Tasks:
- Add simple "I saw this plant" form. Done on `/plantpulse`.
- Capture plant, broad context, signal type, optional email. Done.
- Store in Google Sheet through Apps Script webhook. Done, pending user's Google Sheet deployment/env vars.

Acceptance criteria:
- First-party signals can be collected.
- User knows broad area is enough.

### Phase 3: Content Engine Link

Status: Done for the first content release.

Tasks:
- Connect published signals to care guide slugs. Done for olive, Monstera, and basil.
- Generate weekly content ideas.
- Add internal content calendar section.
- Feed top signals into the homepage. Done.
- Use the signal list as the first newsletter queue. Done.

Acceptance criteria:
- Each top signal can become a care article, newsletter item, or social post.

### Phase 4: Search Console / Trends Workflow

Status: Not started.

Tasks:
- Add Google Search Console after deployment.
- Apply for Google Trends API alpha access if useful.
- Build weekly trend import script after access is available.

Acceptance criteria:
- Search signals influence region scores.

### Phase 5: Retail/Social Vendor Review

Status: In progress without a paid vendor.

Tasks:
- Run first-party structured-data extraction where source access permits. Done for current Costco collection.
- Compare SerpApi, Apify, Unwrangle, SearchAPI, and manual curation only if owned traffic proves a need.
- Review terms, cost, reliability, and permitted usage.
- Decide whether to automate retail visibility signals.

Acceptance criteria:
- We do not build around a brittle or non-permitted data source.

### Phase 6: App Feedback Loop

Status: Not started.

Tasks:
- Feed mobile scans, source context, and wrong-plant feedback into PlantPulse.
- Track demand by region and plant.
- Surface prepared care packs in app.

Acceptance criteria:
- Website and app reinforce each other.

## 8. Near-Term Implementation Checklist

- Publish the validated website.
- Connect the production Google Sheet webhook.
- Schedule daily source freshness checks.
- Connect Search Console after domain verification.
- Prepare guides for orchid, Monstera Esqueleto, and kumquat from the current Costco list.
- Add regional pages only after subscriber/search demand identifies the first useful city cluster.

## 9. Biggest Risks

- Retail data is tempting but may be brittle or restricted.
- Public copy can become too technical if we expose internal scoring details.
- Trend scores can look falsely precise.
- Social data can introduce privacy or moderation issues.
- Automated content can become generic without editorial judgment.

## 10. Recommendation

Operate PlantPulse as a hybrid engine: automate first-party source monitoring, change detection, intake, and owned search data; keep editorial judgment for trend labels and care claims. The next proof point is whether current Costco-driven guides attract search visits and newsletter subscriptions.
