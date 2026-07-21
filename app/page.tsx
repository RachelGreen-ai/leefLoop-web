import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "./components/CaptureForms";
import { GuideCard } from "./components/GuideCard";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { guides } from "./data/guides";
import { getTopSignals, getRegionName } from "./data/plantpulse";
import { getSiteUrl } from "./lib/site-url";
import { buildSocialMetadata } from "./lib/social-metadata";

const siteUrl = getSiteUrl();
const homeTitle = "Garden Companion | Plant Care & Local Trends";
const homeDescription =
  "Weekly plant notes for indoor favorites, local finds, seasonal growing, organic fixes, and small farm-to-table gardens.";

const sitePaths = [
  {
    title: "Plant Notes",
    detail: "Clear help for a new plant, a strange leaf, or a care routine that no longer feels right.",
    tag: "Practical care",
    href: "/notes",
    cta: "Browse Plant Notes",
  },
  {
    title: "Trending Plants",
    detail: "Plants people are bringing home now, with the first care questions worth knowing.",
    tag: "Popular now",
    href: "/plantpulse",
    cta: "See Trending Plants",
  },
  {
    title: "Garden Stories",
    detail: "Plant notes inspired by farmers markets, home cooking, beautiful films, and quiet seasonal rituals.",
    tag: "Films, books & seasons",
    href: "/garden-blog",
    cta: "Read Garden Stories",
  },
];

const communityPrompts = [
  {
    name: "Beautiful New Leaf",
    scope: "Indoor",
    prompt: "Share a new unfurl, rescue comeback, or plant corner that feels especially alive this week.",
  },
  {
    name: "First Harvest Note",
    scope: "Local",
    prompt: "Record the first herb, tomato, berry, or citrus moment that made dinner feel closer to the garden.",
  },
  {
    name: "Plant Rescue Stories",
    scope: "Community",
    prompt: "Keep a small before/after record of a struggling plant and the steps that helped.",
  },
];

const subscriberPerks = [
  "Weekly local plant notes",
  "Indoor plant care prompts",
  "Seasonal farm-to-table ideas",
  "Organic-first troubleshooting",
];

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "/" },
  ...buildSocialMetadata({ title: homeTitle, description: homeDescription, path: "/" }),
};

export default function Home() {
  const trends = getTopSignals(3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Garden Companion",
        url: siteUrl,
        description:
          "A weekly plant-care publication for local plant finds, indoor potted plants, seasonal care, and farm-to-table ideas.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SubscribeAction",
          target: `${siteUrl}/#newsletter`,
          name: "Subscribe to weekly plant notes",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Garden Companion",
        description:
          "An independent plant-care publication translating timely plant signals and horticultural sources into practical notes.",
        url: siteUrl,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section id="top" className="hero-section">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Weekly plant notes for real homes</p>
          <h1>Fresh plant notes for what is growing around you.</h1>
          <p className="hero-copy">
            A calm weekly letter for local plant finds, indoor favorites, seasonal care,
            organic-first fixes, and small farm-to-table rituals.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#newsletter">
              Subscribe to plant notes
            </a>
            <Link className="secondary-button" href="/notes">
              Browse Plant Notes
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <span className="card-kicker">Our promise</span>
          <strong>Beautiful, useful, and honest.</strong>
          <p>
            We keep plant care gentle and realistic: what to check, what to try first, and when a
            plant simply needs time to settle in.
          </p>
        </div>
      </section>

      <section className="editorial-note" aria-label="Garden companion introduction">
        <div>
          <p className="eyebrow">For the plants you live with</p>
          <h2>Care feels easier when advice meets your actual home.</h2>
        </div>
        <p>
          Maybe it is a Costco olive tree on the patio, a Monstera by the window, or basil you hope
          will become dinner. We write for those small, real moments.
        </p>
      </section>

      <section className="trust-strip" aria-label="What subscribers receive">
        <Link href="/plantpulse#costco-plant-watch">
          <strong>Local finds</strong>
          <span>Plants showing up in nearby shopping and garden conversations</span>
        </Link>
        <Link href="/notes/monstera-leaves-curling">
          <strong>Indoor favorites</strong>
          <span>Monstera, pothos, orchids, and potted plant care</span>
        </Link>
        <Link href="/notes/basil-first-harvest">
          <strong>Seasonal eating</strong>
          <span>Herbs, harvest ideas, and small farm-to-table prompts</span>
        </Link>
        <Link href="/notes">
          <strong>Plain answers</strong>
          <span>What to check first, what to skip, and what can wait</span>
        </Link>
      </section>

      <section id="notes" className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2>A good place to begin.</h2>
          <p>
            Care for a plant you already have, see what people are bringing home, or wander
            through a garden story.
          </p>
        </div>
        <div className="guide-grid">
          {sitePaths.map((path) => (
            <article className="guide-card" key={path.title}>
              <span>{path.tag}</span>
              <h3>{path.title}</h3>
              <p>{path.detail}</p>
              <Link href={path.href}>{path.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="plantpulse" className="plantpulse-section">
        <div className="plantpulse-copy">
          <p className="eyebrow">Trending plants</p>
          <h2>See what plant lovers near you are noticing this week.</h2>
          <p>
            A gentle weekly pulse of plants people are bringing home, talking about, growing,
            rescuing, and learning to care for.
          </p>
          <Link className="text-link" href="/plantpulse">
            Explore Trending Plants
          </Link>
        </div>
        <div className="trend-list" aria-label="Example local plant trends">
          {trends.map((trend) => (
            <article className="trend-row" key={trend.id}>
              <div>
                <span>{getRegionName(trend.regionId)}</span>
                <h3>{trend.plant}</h3>
                <p>{trend.whyNow}</p>
              </div>
              <strong>{trend.careNote}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="seasonal" className="content-band warm">
        <div className="section-heading">
          <p className="eyebrow">This week&apos;s starter guides</p>
          <h2>Useful answers for plants people are likely bringing home now.</h2>
          <p>
            Start with small answers that matter right away: the first week, a strange leaf, a
            watering question, or the first meal from a pot of herbs.
          </p>
        </div>
        <div className="article-grid homepage-article-grid">
          {guides.slice(0, 3).map((guide) => (
            <GuideCard guide={guide} key={guide.slug} />
          ))}
        </div>
      </section>

      <section className="home-story-feature">
        <Link
          className="home-story-image"
          href="/garden-blog/little-forest-growing-a-life"
          aria-label="Read What Little Forest understands about growing a life"
        />
        <div>
          <p className="eyebrow">Garden stories · On screen</p>
          <h2>What Little Forest understands about growing a life.</h2>
          <p>
            Rice, tomatoes, nuts, and preserves turn the four seasons into something you can
            touch, taste, and remember. Our first film-and-garden reading ends with four small
            rituals to try at home.
          </p>
          <Link className="text-link" href="/garden-blog/little-forest-growing-a-life">
            Read the story <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section id="community" className="journal-section">
        <div className="journal-photo" aria-hidden="true" />
        <div className="journal-panel">
          <p className="eyebrow">Community and memory</p>
          <h2>Plant care becomes sweeter when you can remember the small wins.</h2>
          <p>
            A new leaf, a first tomato, a rescued orchid, a funny tree on a walk: these little
            moments are worth keeping and sharing.
          </p>
          <div className="tool-list">
            {communityPrompts.map((prompt) => (
              <span key={prompt.name}>
                {prompt.name}: {prompt.prompt}
              </span>
            ))}
          </div>
          <Link className="text-link journal-link" href="/plantpulse#share-a-plant">
            Share what you are seeing
          </Link>
        </div>
      </section>

      <section id="newsletter" className="beta-section">
        <div>
          <p className="eyebrow">A calmer plant letter</p>
          <h2>Get weekly plant notes shaped by place, season, and real questions.</h2>
          <p>
            Join for local plant finds, indoor care, farm-to-table ideas, and practical guides that
            feel friendly enough to actually use.
          </p>
          <div className="tool-list compact-list">
            {subscriberPerks.map((perk) => (
              <span key={perk}>{perk}</span>
            ))}
          </div>
        </div>
        <WaitlistForm source="newsletter" />
      </section>

      <SiteFooter />
    </main>
  );
}
