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
- compare selected plant terms in Google Trends
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
