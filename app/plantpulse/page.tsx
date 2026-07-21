import type { Metadata } from "next";
import Link from "next/link";
import { PlantSignalForm } from "../components/CaptureForms";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import {
  costcoFindCount,
  costcoPlantFinds,
  featuredCostcoFinds,
  retailerSnapshotDate,
} from "../data/retail-signals";
import {
  getRegionName,
  getSignalsForRegion,
  getTopSignals,
  plantPulseRegions,
  plantPulseSignals,
} from "../data/plantpulse";

export const metadata: Metadata = {
  title: "Trending Plants | Local And Indoor Plant Notes",
  description:
    "A warm plant signal digest for local gardens, indoor potted plants, seasonal care notes, Costco plant finds, search trends, and community prompts.",
};

export default function PlantPulsePage() {
  const topSignals = getTopSignals(4);
  const snapshotDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(retailerSnapshotDate));

  return (
    <main className="plantpulse-page">
      <SiteHeader />

      <section className="pulse-hero">
        <p className="eyebrow">Trending plants</p>
        <h1>What plant lovers are noticing this week.</h1>
        <p>
          A gentle signal digest for local gardens and indoor plant homes: what is appearing,
          what the season is asking for, and which care questions deserve a clear answer now.
        </p>
      </section>

      <section className="pulse-summary" aria-label="PlantPulse summary">
        <div>
          <strong>{plantPulseRegions.length}</strong>
          <span>places and plant homes we are watching</span>
        </div>
        <div>
          <strong>{plantPulseSignals.length}</strong>
          <span>plant notes warming up this week</span>
        </div>
        <div>
          <strong>Jul 20</strong>
          <span>latest source review</span>
        </div>
      </section>

      <section className="pulse-band">
        <div className="section-heading">
          <p className="eyebrow">This week&apos;s pulse</p>
          <h2>Plants people are bringing home, growing, and asking about.</h2>
          <p>
            Use these notes as a gentle heads-up: what might need more sun, more patience, better
            drainage, or a simpler watering rhythm.
          </p>
        </div>
        <div className="pulse-card-grid">
          {topSignals.map((signal) => (
            <article className="pulse-card featured" key={signal.id}>
              <div className="pulse-card-top">
                <span>{getRegionName(signal.regionId)}</span>
                <strong>{signal.attention}</strong>
              </div>
              <h3>{signal.plant}</h3>
              <p>{signal.whyNow}</p>
              <div className="pulse-mini-list">
                <span>Care note: {signal.careNote}</span>
                <span>Watch for: {signal.commonMistake}</span>
              </div>
              <div className="source-row">
                {signal.sourceBadges.map((badge) => (
                  <small key={badge}>{badge}</small>
                ))}
              </div>
              <div className="pulse-card-links">
                {signal.guideSlug ? (
                  <Link href={`/notes/${signal.guideSlug}`}>Read our guide</Link>
                ) : null}
                {signal.sources.slice(0, 1).map((source) => (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={source.url}
                  >
                    View {source.publisher} source
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="retail-watch">
        <div className="retail-watch-heading">
          <div>
            <p className="eyebrow">Costco plant watch</p>
            <h2>Fresh finds shaping our next care notes.</h2>
          </div>
          <p>
            We found {costcoFindCount} live-plant products in Costco&apos;s official online
            easy-care collection on {snapshotDate}. These are the ones on our editorial desk
            first.
          </p>
        </div>
        <div className="retail-find-grid">
          {featuredCostcoFinds.map((product) => (
            <a href={product.url} target="_blank" rel="noopener noreferrer" key={product.sku}>
              <span>Costco find</span>
              <strong>{product.name}</strong>
              <small>Care note in review</small>
            </a>
          ))}
        </div>
        <details className="all-retail-finds">
          <summary>See all {costcoFindCount} finds from this check</summary>
          <div>
            {costcoPlantFinds.map((product) => (
              <a href={product.url} target="_blank" rel="noopener noreferrer" key={product.sku}>
                {product.name}
              </a>
            ))}
          </div>
        </details>
      </section>

      <section className="pulse-regions">
        <div className="section-heading">
          <p className="eyebrow">By place and plant home</p>
          <h2>Start local, but include indoor plant life.</h2>
          <p>
            Some trends are regional, like tomato heat stress. Others live inside apartments and
            living rooms, like Monstera leaves unfurling by a bright window.
          </p>
        </div>
        <div className="region-stack">
          {plantPulseRegions.map((region) => (
            <section className="region-panel" key={region.id}>
              <div className="region-intro">
                <span>{region.zone}</span>
                <h3>{region.name}</h3>
                <p>{region.description}</p>
              </div>
              <div className="region-signals">
                {getSignalsForRegion(region.id).map((signal) => (
                  <article className="signal-row" key={signal.id}>
                    <div>
                      <div className="signal-meta">
                        <span>{signal.momentum}</span>
                        <span>Checked {signal.updatedAt}</span>
                      </div>
                      <h4>{signal.plant}</h4>
                      <p>{signal.contentAngle}</p>
                    </div>
                    <div className="signal-score">
                      <strong>{signal.attention}</strong>
                      <span>{signal.sources.length} source{signal.sources.length === 1 ? "" : "s"}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="pulse-method">
        <div>
          <p className="eyebrow">How we listen</p>
          <h2>Timely enough to notice. Careful enough to trust.</h2>
        </div>
        <div className="method-grid">
          {[
            "Official retailer plant pages",
            "University extension calendars",
            "Search and care questions",
            "Community and newsletter notes",
            "Dated source observations",
            "Human review before publishing",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="pulse-submit">
        <div>
          <p className="eyebrow">Help the signal grow</p>
          <h2>Tell us what plant keeps showing up around you.</h2>
          <p>
            A plant at your local store, a Monstera in every apartment window, a tomato question in
            every neighborhood group: small observations help us prepare better guides and weekly
            notes.
          </p>
        </div>
        <PlantSignalForm />
      </section>
      <SiteFooter />
    </main>
  );
}
