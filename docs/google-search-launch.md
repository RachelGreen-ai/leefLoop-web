# Google Search Launch And Optimization

Purpose: get Rachel’s Garden discovered, indexed, measured, and improved without paid indexing tools or noisy SEO tactics.

Last reviewed: 2026-07-20

Current production URL: `https://garden-companion-notes.vercel.app`

## Current Readiness

Implemented in the site:

- Root sitemap at `/sitemap.xml` with 34 canonical public URLs.
- Article and story images included in the sitemap.
- `lastmod` values derived from real guide, story, PlantPulse, and retailer-source dates.
- Root robots file at `/robots.txt` that allows Googlebot and points to the sitemap.
- Canonical URLs on all public pages.
- `WebSite`, `Organization`, `CollectionPage`, `Article`, `FAQPage`, and breadcrumb structured data where appropriate.
- Search preview titles and descriptions sized for readable results.
- Large image previews allowed for Google.
- Optional `GOOGLE_SITE_VERIFICATION` metadata support.

A public `site:garden-companion-notes.vercel.app` check showed no visible indexed pages on July 20, 2026. That is normal for a new site and is not as authoritative as Search Console.

## First Decision: Final Domain

Recommended: choose and connect the custom domain before actively requesting indexing.

Why:

- A Domain property in Search Console covers the apex domain, `www`, and both HTTP and HTTPS.
- Search authority, links, and reporting begin on the URL we intend to keep.
- It avoids launching on the Vercel subdomain and then managing an early site migration.

The Vercel URL can stay public for review. If the domain decision will take more than two weeks, it is reasonable to verify the current URL-prefix property temporarily, but do not build backlinks around it.

## Custom Domain Launch Checklist

1. Add the final domain to the Vercel project.
2. Choose one canonical host, normally the apex domain, and redirect `www` to it or the reverse.
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel Production to the exact canonical origin, such as `https://example.com`.
4. Redeploy and verify that the domain appears in canonical tags, structured data, `robots.txt`, and `sitemap.xml`.
5. Confirm every old Vercel URL redirects to the matching custom-domain URL. Do not redirect every page only to the homepage.
6. Keep the same URL paths during the domain change.

## Google Search Console Setup

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add a **Domain property** for the final domain.
3. Copy the Google DNS TXT verification record into the domain provider's DNS settings.
4. Wait for DNS propagation, then select **Verify** in Search Console.
5. Open **Sitemaps** and submit `sitemap.xml`.
6. Confirm the sitemap status is successful and that 34 URLs are discovered.
7. Use **URL inspection** on the first priority pages and select **Request indexing**.

If a URL-prefix property is used instead, add the token value from Google's HTML meta-tag method to the Vercel environment variable `GOOGLE_SITE_VERIFICATION`, redeploy, and verify. Do not include the surrounding `<meta>` tag or `google-site-verification=` label in the value.

Sitemap submission is a discovery hint, not a guarantee of indexing. Search Console reporting can also take several days to populate.

## First URLs To Inspect

Request indexing in this order after the final domain is live:

1. `/`
2. `/notes`
3. `/notes/monstera-leaves-curling`
4. `/notes/new-olive-tree-first-week-care`
5. `/plantpulse`
6. `/garden-blog/little-forest-growing-a-life`

The remaining URLs should be discoverable through the sitemap and internal links. Avoid repeatedly requesting the same URLs.

## Publishing Workflow

For every new Plant Note or Garden Story:

1. Choose one clear search intent or reader question.
2. Write an accurate title, one H1, and an answer-first introduction.
3. Add practical steps, visible sources, related internal links, and an honest updated date.
4. Add the content record to the appropriate data source. The sitemap will include it automatically.
5. Check the production page, canonical URL, structured data, and sitemap entry.
6. Request indexing only for a high-priority new or substantially revised page.
7. Link to it from the homepage, relevant hub, newsletter, and a useful social post.

Only change `updatedAt` after a meaningful content, source, structured-data, or internal-link update. Google may stop trusting `lastmod` when it repeatedly changes without real page changes.

## Search Optimization Loop

### Weekly

- Review Search Console **Pages** for indexing errors and excluded URLs.
- Review **Search results** by query and page for impressions, clicks, CTR, and average position.
- Record queries earning impressions but few clicks. Improve titles and descriptions when the page already answers the query well.
- Record queries ranking around positions 8 to 20. Expand the answer, add a useful internal link, or create the missing companion guide.
- Review Core Web Vitals and mobile usability after visual or image changes.

### Monthly

- Group Search Console queries into indoor plants, local finds, seasonal food growing, organic fixes, and Garden Stories.
- Refresh the pages with rising impressions or newly seasonal relevance.
- Compare search visitors who subscribe with other traffic sources.
- Turn high-interest questions into the next editorial calendar and PlantPulse watch list.

Search Console query data should become the free first-party keyword research source. A paid keyword platform is not required for the first stage.

## What Not To Do

- Do not use Google's Indexing API for ordinary plant articles. Google restricts it to eligible job-posting and livestream pages.
- Do not pay an indexing service or submit automated indexing requests through unofficial services.
- Do not create thin city pages by swapping only a location name.
- Do not change publication dates merely to make content look fresh.
- Do not stuff Costco, Home Depot, or plant names into unrelated titles.
- Do not publish generated care claims without horticultural source review.

## First 30-Day Scorecard

Track these after Search Console verification:

| Metric | First signal to seek |
| --- | --- |
| Valid indexed pages | Priority pages indexed, then steady growth toward all canonical pages |
| Search impressions | Week-over-week growth from real plant-care queries |
| Non-brand queries | Discovery beyond searches for Rachel’s Garden |
| CTR | Improve page by page; do not use one site-wide target too early |
| Position 8-20 queries | Best near-term content refresh opportunities |
| Search-to-subscribe rate | Which guides build an owned audience |
| Indexing errors | Zero accidental `noindex`, blocked, duplicate, or redirect issues |

## Official References

- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Add a Search Console property](https://support.google.com/webmasters/answer/34592)
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [URL Inspection tool](https://support.google.com/webmasters/answer/9012289)
- [Indexing API eligibility](https://developers.google.com/search/apis/indexing-api/v3/using-api)
