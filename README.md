# Garden Companion Web

Public web experience for the plant-care content engine: weekly plant notes, PlantPulse local/indoor trend pages, community prompts, garden journal ideas, and newsletter subscription.

This repo is intentionally separate from the mobile app repo because the web product should build audience, trust, SEO/GEO authority, and community before the app becomes the main product.

Start here:
- `CONTENT_ENGINE_TRACKER.md`
- `WEB_MVP_tracker.md`
- `PLANTPULSE_ENGINE_TRACKER.md`

Current MVP:
- Content-first homepage with polished plant-first design.
- Search-ready `/notes` publication hub and reusable guide system.
- Four complete starter guides: olive tree first-week care, Monstera leaf curling, basil harvest, and evidence-aware eggshell use.
- Garden Stories hub with complete essays on *Little Forest*, *The Secret Garden*, and the everyday pleasure of a kitchen herb.
- Newsletter subscription capture through a Google Sheet webhook.
- Content pillars for local plant finds, indoor plants, seasonal farm-to-table, organic fixes, PlantPulse, and culture-inspired guides.
- PlantPulse local and indoor trend digest with dated first-party and extension sources.
- Community prompt preview.
- PlantPulse signal capture through the same Google Sheet workflow.
- SEO/GEO metadata, robots, sitemap, and homepage JSON-LD.
- Article, FAQ, breadcrumb, collection, and organization structured data.
- Audience-facing about and privacy pages.
- Source registry and automated source-freshness monitor.

Local commands:
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm test`
- `npm run signals:check`

Capture setup:
- `docs/google-sheet-capture.md`
- `scripts/plantpulse-google-apps-script.js`
- `.env.example`

Working public name: **Garden Companion**

Production: `https://garden-companion-notes.vercel.app`

Repo note: the GitHub repo is currently named `leefLoop-web`. The final public brand name remains open.
