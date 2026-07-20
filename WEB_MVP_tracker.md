# Garden Companion Web MVP Tracker

Purpose: build the public web experience as a content engine, newsletter funnel, community front door, SEO/GEO growth asset, and later trust layer for the iOS app.

Repo: `RachelGreen-ai/leefLoop-web`

Local path: `/Users/junyishen/Documents/GitHub/leefLoop-web`

Working public name: **Garden Companion**

Last updated: 2026-07-20

## Build Checkpoint

The first release candidate is now implemented:
- content-first homepage
- `/notes` publication hub
- four complete, sourced starter guides
- source-backed PlantPulse with current Costco online plant watch
- newsletter and plant-signal capture
- editorial approach and privacy pages
- technical SEO/GEO foundation and social preview
- automated source freshness and Costco product-change monitor

Remaining release work is deployment configuration, production form storage, analytics/search verification, and the first newsletter send.

## 2026-07-20 Strategy Update

Priority has shifted from app-first launch support to **content website first**.

Why:
- Plant ID accuracy and trust need time.
- A content site can build subscribers before the app is ready.
- Search behavior can teach us which plants, regions, and care problems matter.
- Newsletter replies and PlantPulse submissions become first-party demand data.
- The app should be shaped by real audience behavior, not guesses.

Current north star:

> Build a refined, practical, SEO/GEO-friendly plant-care publication that people subscribe to because it helps with the plants they are actually buying, growing, cooking with, and noticing.

Primary tracker for this phase:
- `CONTENT_ENGINE_TRACKER.md`

## 0. Web MVP Thesis

The web product should not be a thin app landing page. It should become a beautiful public garden companion that builds audience before the app is fully released.

Core job:

> Help plant lovers discover practical care answers, local plant trends, seasonal growing ideas, indoor potted plant guidance, and plant-centered stories, then invite them to subscribe.

The website is the first product. The app is the future private utility after we understand what the audience values most.

## 1. Reference Positioning

### easyplant

What to learn:
- Elegant plant-first visual language.
- Strong trust cues: guarantee, expert support, easy care.
- Premium calm aesthetic.
- Community tagging and featured user content.

LeafLoop adaptation:
- Use rich plant photography, quiet spacing, refined typography, and clear practical CTAs.
- Make the page feel grown-up, warm, and useful, not gimmicky AI.

### PictureThis

What to learn:
- SEO scale through plant encyclopedia, care guides, toxic plants, regional pages, and Q&A.
- Clear app-download funnel.
- Searchable plant content.

LeafLoop adaptation:
- Build care guides and local PlantPulse pages from day one.
- Win on practical, local, organic-first advice rather than sheer encyclopedia breadth.

### PokePlant

What to learn:
- Emotional retention through plant profiles, growth photos, care logs, stickers, and memory keeping.
- Privacy-first positioning.
- Plant collection as delight.

LeafLoop adaptation:
- Offer downloadable plant journal tools, growth trackers, milestone templates, and PlantDex share concepts on the web.

## 2. MVP Audience

Primary:
- US home gardeners and plant lovers.
- People who buy plants from Costco, Home Depot, Lowe's, Trader Joe's, and local nurseries.
- Beginners who want clear, affordable, organic-first care.
- People interested in edible gardens, herbs, tomatoes, patios, and farm-to-table habits.

Secondary:
- Instagram/Facebook plant community members.
- Local gardening group members.
- Search users asking urgent plant-care questions.
- Beta testers for the iOS app.

## 3. Web MVP Success Criteria

The website MVP is successful if it can:
- Explain the content promise in under 10 seconds.
- Capture newsletter subscribers.
- Publish practical care articles that can rank in search.
- Host local/world challenge pages.
- Convert content readers into repeat subscribers and community contributors.
- Provide privacy/support pages needed for future app readiness.
- Establish the visual brand as elegant, warm, plant-first, and trustworthy.

## 4. Recommended Stack

Recommended:
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Structured TypeScript content for the MVP; move to MDX or a CMS only when editorial volume requires it.
- Static-first pages for SEO and speed.
- Cloudflare Workers through Sites for hosting.
- Google Sheet + Apps Script webhook first for waitlist and PlantPulse signal capture.
- D1 or Supabase later only when accounts, durable app state, or editorial volume justify it.

Why:
- Strong SEO.
- Easy content publishing.
- Fast iteration.
- Works well with future Supabase backend.
- App pages, article pages, challenge pages, and local pages can share components.

## 5. Design Direction

### Visual Feel

The site should feel:
- Elegant.
- Botanical.
- Warm.
- Calm.
- Practical.
- Premium but not luxury-cold.
- Trustworthy for beginners.

Avoid:
- Generic AI gradients.
- Purple/blue SaaS palette.
- Cartoonish plant gamification as the main brand.
- Overly dense ecommerce product grids.
- Stock photos that do not show real inspectable plants.
- Huge marketing claims about perfect diagnosis.

### Design References

Use easyplant as the primary aesthetic reference:
- Plant photography carries the page.
- Rounded corners max 8px unless there is a specific reason.
- Soft warm background.
- Clean editorial blocks.
- Clear trust sections.
- Community imagery.

Use Figma/community template research as supporting visual direction:
- Botanical garden website templates suggest a calmer editorial/museum-like feeling: generous whitespace, refined type, and plant imagery as the hero.
- Plant-care UI kits suggest modular care cards and gentle status surfaces, but the web page should avoid feeling like a dashboard.
- Public design feedback around plant-care apps reinforces that readability matters because care content becomes text-heavy quickly.

Use PictureThis as the SEO structure reference:
- Plant care guide hub.
- Plant encyclopedia-style pages later.
- Region pages.
- Question-style content.

Use PokePlant as the emotional utility reference:
- Plant journal templates.
- Growth albums.
- Plant card/collection language.
- Sticker/share-card direction.

### Early Design Tokens

Colors:
- `leaf`: #2F7D4A
- `soil`: #29332D
- `warmWhite`: #FAF8F2
- `surface`: #FFFFFF
- `mint`: #DDF3E4
- `clay`: #C98264
- `marigold`: #F2B84B
- `tomato`: #D94B3D
- `mist`: #EEF0EA
- `muted`: #69746B
- `line`: #E4E5DE

Typography:
- Use an elegant readable sans-serif first.
- Large hero type only on true hero areas.
- Care/content pages should prioritize readability.
- No negative letter spacing.

Imagery:
- Real plant photography.
- Garden hands, patio plants, herbs, harvests, plant details, recovery progress.
- Use generated bitmap images only when a specific branded visual is needed.

Custom assets:
- Use Quiver AI SVG generation from `/Users/junyishen/Documents/Obsidian Vault/Mywork/skills_toolbox.md` for:
  - LeafLoop icon marks.
  - PlantDex badges.
  - Care category icons.
  - Empty states.
  - Journal template icons.

Video:
- Use Remotion from the skills toolbox for:
  - App demo video.
  - Short content clips.
  - App Store preview later.
  - Challenge launch reels.

## 6. Information Architecture

MVP top navigation:
- Care Library
- PlantPulse
- Challenges
- Journal Tools
- Beta App

Footer:
- About
- Privacy
- Support
- Instagram
- Facebook Group
- Contact

### Page Map

1. `/`
   - Homepage.
   - Explains product.
   - Highlights care guides, PlantPulse, challenges, journal tools, and beta app.

2. `/care`
   - Care Library hub.
   - Search/browse by plant, symptom, and situation.

3. `/care/[slug]`
   - Article/care guide page.
   - SEO/GEO optimized.
   - Practical steps, uncertainty, organic-first ladder, app CTA.

4. `/plantpulse`
   - Local plant trend hub.
   - Explains popularity signals, not inventory.

5. `/plantpulse/[region]`
   - Local/regional page.
   - Example: San Jose, Bay Area, Southern California, Central Texas.

6. `/challenges`
   - Events/challenges hub.
   - Local and worldwide plant discovery events.

7. `/challenges/[slug]`
   - Individual event page.
   - Submission instructions, hashtag, safety rules, featured examples.

8. `/journal`
   - Free garden journal tools.
   - Downloadable/checklist pages.

9. `/beta`
   - App waitlist/TestFlight interest.
   - Trust-first app positioning.

10. `/privacy`
   - Privacy policy placeholder, then production policy.

11. `/support`
   - Contact/support page for beta and App Store.

## 7. Homepage MVP

Homepage sections:
1. Plant-first hero.
   - H1: "LeafLoop"
   - Supporting copy: "Your garden memory, local care guide, and plant discovery community."
   - CTAs: "Join the beta", "Explore care guides"

2. Practical care promise.
   - Identify.
   - Save.
   - Learn what to do next.
   - Track progress.

3. Featured care guides.
   - Costco olive tree first-week care.
   - Basil yellow leaves.
   - Tomato starts after Home Depot.

4. PlantPulse preview.
   - "What gardeners near you are seeing this week."
   - Public copy should feel warm and useful; avoid defensive wording like "not inventory claims."
   - Internal rule: do not imply live store stock or exact availability.

5. Weekly challenge preview.
   - Funny Trees Week.
   - First Bloom Challenge.
   - Before/After Plant Rescue.

6. Garden journal tools.
   - First-week plant checklist.
   - Watering log.
   - Recovery tracker.

7. App beta trust block.
   - "We use plant ID as one input, not a magic answer."
   - "You control what you share."
   - "Organic-first, local, practical care."

8. Email capture.
   - Newsletter first.
   - App beta interest can be segmented later.

9. Culture-inspired guide preview.
   - Seasonal living, films, books, markets, and home cooking can inspire blog angles.
   - Every piece must become practical: care guide, growing note, cooking idea, or journal prompt.

Acceptance criteria:
- The homepage has one clear visual personality.
- CTAs are visible without feeling pushy.
- The page does not overpromise AI accuracy.
- It can be used as the public face before app release.

## 8. Care Library MVP

Initial content clusters:
- First-week care after buying a plant.
- Retail plant care: Costco/Home Depot/Lowe's.
- Indoor potted plant care: Monstera, pothos, orchids, apartment plant corners.
- Symptom triage: yellow leaves, leaf drop, wilting, pests, brown spots.
- Organic fixes that actually help.
- Edible garden basics.
- Seasonal culture-inspired guides, such as Little Forest-inspired plant and kitchen rituals.
- Pet-safe/toxic caution.
- Local growing guides.

First 12 article targets:
1. Costco Olive Tree Care: What To Do The First Week
2. Why Basil Leaves Turn Yellow
3. Tomato Starts After Home Depot: First 7 Days
4. Blueberry Bush In Containers: Soil, Water, And Sun
5. Hydrangea Heat Stress: What To Try First
6. Eggshells In The Garden: What They Help And What They Do Not
7. What To Do When A New Plant Drops Leaves
8. Beginner Organic Pest Checks Before You Spray
9. Pet-Safe Plant Care: What LeafLoop Will And Will Not Claim
10. What To Plant This Week In San Jose
11. Basil To Pesto: A Small Farm-To-Table Starter
12. How To Track A Plant Recovery With Photos
13. Monstera Leaves Curling: What To Check First
14. A Little Forest-Inspired Seasonal Herb Notebook
15. Grocery Store Orchid Care For The First Month

Article template:
- Plain-language title.
- Quick answer.
- What to check first.
- Likely causes.
- Organic-first steps.
- What not to do.
- When to ask a local expert.
- App CTA.
- Related guides.
- Sources/review note.

Acceptance criteria:
- Articles answer a real user question quickly.
- Advice avoids unsupported viral hacks.
- Each article can connect to app scan/save/journal behavior.
- Each page has meta title, description, OpenGraph image, and structured data where appropriate.

## 9. PlantPulse MVP

Purpose:
- Turn retail/social/search/weather signals into prepared care content and local relevance.

MVP positioning:
- "See what gardeners near you are growing, loving, and learning."
- Internal guardrail: PlantPulse is a seasonal/local care signal, not a live stock checker.

Initial regions:
- San Jose / Bay Area.
- Southern California.
- Central Texas.

Initial plant waves:
- Costco olive trees.
- Home Depot tomato starts.
- Blueberry bushes.
- Basil/herb starts.
- Hydrangeas.
- Citrus/patio trees.

Page components:
- Region hero.
- Trending plant list.
- Why it is trending.
- Common mistake.
- Prepared care tip.
- Related care guides.
- App beta CTA.

Acceptance criteria:
- Users understand local value immediately.
- No implication that we know exact live store stock, but this should be handled through careful framing rather than defensive homepage copy.
- Each trend creates content ideas and app care packs.

## 10. Challenges / Events MVP

Purpose:
- Build community and shareable audience before full in-app social features.

Challenge types:
- Local challenge.
- Worldwide challenge.
- Seasonal challenge.
- Recovery challenge.
- Harvest challenge.

First challenge pages:
1. Funny Trees Week
2. First Bloom Challenge
3. Before/After Plant Rescue
4. First Harvest Weekend
5. Beautiful Local Find
6. Pollinator Spotting

Event page structure:
- Hero with real/generative plant visual.
- Challenge name.
- Local/world badge.
- Dates.
- How to join.
- What to share.
- Safety/privacy rules.
- Hashtag.
- Featured examples placeholder.
- Email/community CTA.

Safety rules:
- Share broad city/zone only.
- Do not reveal exact rare/protected plant locations.
- Do not trespass.
- Do not pick, dig, or disturb plants.
- Featured posts are manually reviewed.

Acceptance criteria:
- People can participate through Instagram/Facebook tags before app community exists.
- The page can capture emails and social follows.
- It creates reusable content for newsletters and short videos.

## 11. Journal Tools MVP

Purpose:
- Build trust and habit independent of ML accuracy.

Free tools:
- New plant first-week checklist.
- Plant watering log.
- Plant recovery tracker.
- Growth photo prompt sheet.
- Harvest planner.
- Plant profile card template.

MVP page components:
- Tool preview.
- Why it helps.
- Download/email capture.
- App beta CTA.

Acceptance criteria:
- A user gets practical value even without downloading the app.
- Tools reinforce the LeafLoop habit: observe, save, care, learn, share.

## 12. Waitlist / Beta MVP

Page promise:
- "Join the LeafLoop beta for practical local plant care."

Trust copy:
- We use plant ID as one helpful input.
- We show confidence and uncertainty.
- We focus on organic-first actions.
- You control what you share.
- No confusing paid trial in beta.

Fields:
- Email.
- ZIP or broad region.
- Gardening interest: houseplants, patio, vegetables, flowers, fruit trees, herbs.
- Optional: Instagram handle.

Acceptance criteria:
- Captures beta audience.
- Avoids overclaiming AI accuracy.
- Creates segmentation for content and launch region.

## 13. Implementation Phases

### Phase 0: Repo Setup

Status: Done.

Tasks:
- Clone repo locally. Done.
- Add `WEB_MVP_tracker.md`. Done.
- Add README. Done.
- Choose stack. Done: Vinext/Next-style app with TypeScript and Tailwind.
- Initialize Next.js project. Done.
- Add lint/typecheck scripts. Done via scaffold scripts and product render test.

Acceptance criteria:
- Repo has clear planning artifact.
- Local dev server can run.
- README explains purpose and commands.

### Phase 1: Design Foundation

Status: MVP slice done.

Tasks:
- Create design tokens. Done.
- Create typography scale. Done, with an editorial serif/sans pairing for a warmer plant-lover feel.
- Build page shell. Done.
- Build nav/footer. Done.
- Build button, badge, card, article, and section components. Done in first-page component/styles and softened after Figma/community template research.
- Add image handling. Done with real plant photography backgrounds.
- Add SEO metadata helper. Not yet; basic page metadata exists.

Acceptance criteria:
- Site feels cohesive and plant-first.
- Components support home, article, local page, and challenge page.
- Mobile layout is polished.

### Phase 2: Homepage

Status: Done for first MVP.

Tasks:
- Build full homepage. Done.
- Add waitlist CTA. Done with placeholder form.
- Add featured care guides. Done.
- Add challenge preview. Done.
- Add PlantPulse preview. Done.
- Add journal tools preview. Done.

Acceptance criteria:
- Homepage can be shared publicly.
- It communicates LeafLoop without the app.

### Phase 3: Content Engine V0

Status: Not started.

Tasks:
- Add MDX content support.
- Add care guide content model.
- Create first 6 care articles.
- Add care library index.
- Add related article component.

Acceptance criteria:
- Articles render with SEO metadata.
- Content can be added without editing core layout.

### Phase 4: PlantPulse Pages

Status: Not started.

Tasks:
- Add PlantPulse hub.
- Add first 3 region pages.
- Add trend-card data model.
- Link trend plants to guides.

Acceptance criteria:
- Region pages explain local value and avoid inventory claims.

### Phase 5: Challenges / Events

Status: Not started.

Tasks:
- Add challenges hub.
- Add first 3 event pages.
- Add hashtag/share instructions.
- Add safety/privacy rules.
- Add manual featured examples placeholder.

Acceptance criteria:
- We can start community prompts on Instagram/Facebook immediately.

### Phase 6: Journal Tools

Status: Not started.

Tasks:
- Add journal hub.
- Create first-week checklist page.
- Create recovery tracker page.
- Create watering log page.
- Add email capture placeholder.

Acceptance criteria:
- Users get value before the app is installed.

### Phase 7: Waitlist And Support

Status: MVP capture path implemented; support/privacy pages still not started.

Tasks:
- Add beta page.
- Add waitlist form. Done on homepage.
- Connect waitlist form to Google Sheet webhook. Done with local preview fallback.
- Add PlantPulse signal capture form. Done on `/plantpulse`.
- Add support page.
- Add privacy placeholder.
- Keep Supabase optional for later; use Google Sheet while the data shape is still small and inspectable.

Acceptance criteria:
- We can collect beta emails and support questions.
- Pages are suitable for TestFlight/App Store support links.

### Phase 8: Launch QA

Status: First pass done.

Tasks:
- Mobile and desktop visual QA. CSS responsive pass done; browser screenshot QA still recommended next.
- Lighthouse check.
- Metadata check. Basic title/description/OpenGraph metadata done.
- OpenGraph image check.
- Accessibility pass. Basic semantic structure and labels done; full audit still recommended.
- Broken-link check.
- Content proofreading. First pass done.
- Deploy preview.

Acceptance criteria:
- Site is ready for public sharing.
- No obvious layout, content, or trust issues.

## 14. Analytics

MVP events:
- `waitlist_started`
- `waitlist_submitted`
- `care_article_viewed`
- `care_article_cta_clicked`
- `plantpulse_region_viewed`
- `challenge_page_viewed`
- `challenge_join_clicked`
- `journal_tool_viewed`
- `journal_tool_download_clicked`
- `social_follow_clicked`

Key metrics:
- Homepage -> waitlist conversion.
- Article -> beta conversion.
- Challenge page -> social/share action.
- Region page traffic.
- Top care guide traffic.

## 15. SEO / GEO Principles

Traditional SEO:
- Use practical long-tail titles.
- Answer the user question early.
- Add internal links.
- Add structured data where appropriate.
- Use descriptive slugs.
- Optimize image alt text.

GEO / AI search:
- Use clear section headings.
- Include concise answer blocks.
- Make claims source-aware and cautious.
- Separate myths from practical guidance.
- Prefer plain-language advice.

Content trust:
- Do not claim perfect plant diagnosis.
- Avoid unsafe edible/toxic certainty.
- Add "when to ask a local extension/nursery expert."
- Distinguish observation, likely cause, and action.

## 16. Immediate Next Tasks

1. Initialize Next.js + TypeScript app.
2. Add Tailwind and design tokens.
3. Build homepage shell with easyplant-inspired aesthetic.
4. Add MDX content pipeline.
5. Create first 3 care guide pages.
6. Create `/challenges` hub and "Funny Trees Week" page.
7. Create `/beta` waitlist page.
8. Run local QA and deploy preview.

## 17. Open Decisions

- Confirm repo spelling: GitHub repo is `leefLoop-web`; product remains `LeafLoop`.
- Pick first launch region for public PlantPulse pages.
- Decide first waitlist storage: Google Sheet + Apps Script webhook first; Supabase later if needed.
- Decide whether to publish care articles before app beta signup is ready.
- Decide social destination: Instagram, Facebook Group, or both.
- Decide whether the first web release should include downloadable PDFs or just web-native templates.

## 18. Definition Of A Good First Release

A good first web release should feel like:

> A beautiful plant magazine crossed with a practical garden helper and a friendly community noticeboard.

It should not feel like:
- A generic AI landing page.
- An unfinished app placeholder.
- A content farm.
- A heavy ecommerce page.

First release must prove:
- People understand LeafLoop.
- People want care content.
- People will join a challenge or waitlist.
- The brand can earn trust before the app has perfect ML accuracy.
