import type { Metadata } from "next";
import Link from "next/link";
import { PlantSignalForm } from "../components/CaptureForms";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { featuredCostcoFinds } from "../data/retail-signals";
import {
  getRegionName,
  getSignalsForRegion,
  getTopSignals,
  plantPulseRegions,
} from "../data/plantpulse";
import { getSiteUrl } from "../lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Trending Plants & Local Plant Notes",
  description:
    "A warm plant signal digest for local gardens, indoor potted plants, seasonal care notes, Costco plant finds, search trends, and community prompts.",
  alternates: { canonical: "/plantpulse" },
};

export default function PlantPulsePage() {
  const topSignals = getTopSignals(4);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Trending plants and local plant notes",
    description:
      "A weekly collection of timely indoor plant, local garden, seasonal growing, and plant-care signals.",
    url: `${siteUrl}/plantpulse`,
    isPartOf: { "@id": `${siteUrl}/#website` },
  };

  return (
    <main className="plantpulse-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="pulse-hero">
        <p className="eyebrow">Trending plants</p>
        <h1>What plant lovers are noticing this week.</h1>
        <p>
          A gentle weekly look at local gardens and indoor favorites: what is appearing, what the
          season is asking for, and what is helpful to know before a plant comes home.
        </p>
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
              </div>
              <h3>{signal.plant}</h3>
              <p>{signal.whyNow}</p>
              <div className="pulse-mini-list">
                <span>Care note: {signal.careNote}</span>
                <span>Watch for: {signal.commonMistake}</span>
              </div>
              {signal.guideSlug ? (
                <div className="pulse-card-links">
                  <Link href={`/notes/${signal.guideSlug}`}>Read our guide</Link>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="costco-plant-watch" className="retail-watch">
        <div className="retail-watch-heading">
          <div>
            <p className="eyebrow">Costco plant watch</p>
            <h2>Plants worth knowing before they come home.</h2>
          </div>
          <p>
            A few plants appearing in Costco&apos;s online collection now, with the care questions
            worth knowing before they settle into a new home.
          </p>
        </div>
        <div className="retail-find-grid">
          {featuredCostcoFinds.map((product) => (
            <a href={product.url} target="_blank" rel="noopener noreferrer" key={product.sku}>
              <span>Costco find</span>
              <strong>{product.name}</strong>
              <small>See the plant at Costco</small>
            </a>
          ))}
        </div>
      </section>

      <section className="pulse-regions">
        <div className="section-heading">
          <p className="eyebrow">By place and growing space</p>
          <h2>Local gardens and indoor favorites.</h2>
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
                      <h4>{signal.plant}</h4>
                      <p>{signal.contentAngle}</p>
                      {signal.guideSlug ? (
                        <Link href={`/notes/${signal.guideSlug}`}>Read the plant note</Link>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="share-a-plant" className="pulse-submit">
        <div>
          <p className="eyebrow">What are you seeing?</p>
          <h2>Share a plant that keeps showing up around you.</h2>
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
