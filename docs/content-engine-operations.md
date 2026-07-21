# Content Engine Operations

This is the operating system behind Rachel’s Garden. It separates timely signals from care claims so the site can publish quickly without becoming careless.

## The Signal Loop

1. Observe official retailer plant pages, seasonal extension calendars, search behavior, and reader submissions.
2. Record the source URL and observation date.
3. Group signals by plant, place, season, and question.
4. Choose a content angle only when it gives the reader a useful next step.
5. Verify care guidance with university extension, integrated pest management, or comparable primary horticultural sources.
6. Publish a dated guide, newsletter note, and social prompt.
7. Refresh the guide when the plant, season, sources, or reader questions change.

## Entity And Alias Layer

Retail shelf language is discovery evidence, not botanical proof. One plant topic can have several useful names:

- canonical reader name: `Thai Constellation Monstera`
- cultivar name: `Monstera deliciosa 'Thai Constellation'`
- Trader Joe's shelf name: `Premium Monstera`
- Target shelf name: `Live 5-inch Thai Constellation Plant`
- common search shorthand: `Thai Con Monstera`

Store these names under one entity in `content-engine/topic-entities.json`. Each dated retailer observation needs the exact label, retailer, source URL, and observation date. Common spellings and search shorthand can be stored without being presented as formal plant names.

Rules:

- Use the retail name in a title when it matches the reader's buying moment.
- Explain the accepted common or cultivar name inside the article.
- Never create separate thin articles for aliases that answer the same question.
- Let aliases participate in onsite search, tags, internal links, Search Console grouping, and Google Trends comparison.
- Keep the physical plant tag as stronger identification evidence than a retailer category title or another buyer's photograph.

## Topic Queue

Run:

```bash
npm run content:queue
```

The generator joins:

- dated retailer aliases from the entity registry
- structured retailer products from the latest source snapshot
- imported Google Trends observations
- seasonal and visual editorial context
- existing guide coverage

Outputs:

- `content-engine/reports/latest-topic-queue.md` for weekly editorial review
- `content-engine/reports/latest-topic-queue.json` for later automations

The queue also creates a five-term Google Trends comparison link for every entity. Missing retailer, Trends, reader, or audience evidence always receives zero points. The score is internal and must never appear publicly as a popularity statistic.

## Google Trends Workflow

Google's official Trends API remains a limited alpha. Until access is approved, use the official Explore CSV export as the no-cost input instead of an unofficial scraper.

Weekly:

1. Run `npm run content:queue` and open the generated comparison link for each priority entity.
2. Keep geography, time window, category, and Google property consistent within one comparison panel.
3. Compare the canonical name with up to four retailer or search aliases.
4. Review both `Top` and `Rising` related queries. Remove unrelated meanings and news spikes.
5. In Google Sheets, calculate the average interest for the latest four complete weeks and the prior four complete weeks.
6. Add one normalized row to `content-engine/inputs/google-trends.csv` with the entity id, region, both averages, one useful related query, observation date, and the shared Explore URL.
7. Run `npm run content:queue` again. The script validates ranges, dates, entity ids, and the official Google Trends URL before assigning search or question points.

Input columns:

| Column | Meaning |
| --- | --- |
| `entity_id` | Stable id from `topic-entities.json` |
| `region` | Country, state, metro, or audience market used in Explore |
| `current_interest` | Average normalized interest for the latest complete period |
| `previous_interest` | Average normalized interest for the comparable prior period |
| `related_query` | One relevant Top or Rising care question; leave blank if none |
| `observed_at` | Review date in `YYYY-MM-DD` |
| `source_url` | Shared official `trends.google.com` Explore URL |

Important interpretation:

- Google Trends measures relative search interest, not absolute search volume.
- A `100` means the peak within that comparison, not 100 searches.
- Compare acceleration only within a consistent export window.
- `Trending now` is built around recent surges often connected to news; use Explore and related queries for our evergreen plant panels.
- A rising term becomes an article only when it fits Rachel's Garden and gives the reader a genuinely useful next step.

## Automation Boundary

Automate:

- source reachability and page-change detection
- Search Console query, page, region, impression, and click imports after launch
- duplicate topic grouping
- stale-source alerts
- first-draft editorial briefs
- newsletter and social queues

Keep a human review for:

- retailer pages that personalize by store or location
- product names that may include artificial plants or decor
- disease and pest diagnosis
- organic hack claims
- care recommendations that vary by climate
- anything published as a local trend

The engine should never bypass retailer access controls. A blocked automated check becomes an editorial review task, not a reason to scrape more aggressively.

## Weekly Editorial Score

Internal score only. Do not present it as a scientific popularity number.

| Signal | Weight | Evidence |
| --- | ---: | --- |
| Official retailer appearance | 25 | Dated first-party product or category page |
| Search acceleration | 25 | Google Trends or Search Console change |
| Repeated care question | 20 | Search query, newsletter reply, or community submission |
| Seasonal fit | 15 | Extension calendar and current weather context |
| Existing audience response | 10 | Click, save, reply, or subscription conversion |
| Visual/share potential | 5 | Before/after, harvest, unusual leaf, or local challenge |

Editorial bands:

- `70+`: publish or refresh this week
- `50-69`: prepare a brief and collect one more source
- `30-49`: watch
- below `30`: archive unless strategically important

## Source Cadence

Daily:

- run `npm run signals:check`
- review changed or blocked retailer pages
- collect reader plant signals

Weekly:

- review Costco and Home Depot watchlists
- review Target and Trader Joe's shelf-language changes
- compare canonical plant names and retailer aliases in Google Trends
- run `npm run content:queue` after importing the dated Trends rows
- review Search Console queries once the site is live
- choose one local find, one indoor favorite, one seasonal edible, and one evidence-aware fix

Monthly:

- update old guides that still receive impressions
- add one city or climate only when there is enough source and subscriber demand
- review newsletter conversion by topic and source page
- retire weak feeds and add better first-party sources

## Data We Store

Each observation needs:

- plant common name
- retailer or source
- source URL
- broad market or region
- observed date
- source type
- evidence note
- care question
- proposed content angle
- review status
- related guide URL when published

## First Launch Markets

- Bay Area / San Jose
- Southern California
- Central Texas / Austin
- Indoor plant homes across the United States

These markets provide different climates and strong indoor/outdoor use cases without spreading the editorial team too thin.

## Next Integrations

1. Deploy the site and connect Google Search Console and Bing Webmaster Tools.
2. Add a Google Sheet tab named `Source Observations` beside subscriber and plant-signal tabs.
3. Import Search Console data daily into the sheet or a small database.
4. Add a scheduled Cloudflare job only after the source monitor has run reliably for two weeks.
5. Add a paid search-data provider only when organic traffic proves that the extra granularity changes editorial decisions.
