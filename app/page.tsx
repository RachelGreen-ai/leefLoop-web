import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "./components/CaptureForms";
import { GuideCard } from "./components/GuideCard";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { guides } from "./data/guides";
import { getTopSignals, getRegionName } from "./data/plantpulse";

const contentPillars = [
  {
    title: "Costco plant notes",
    detail: "Simple first-week care for the trees, herbs, orchids, and patio plants that suddenly come home with you.",
    tag: "Local finds",
    href: "/notes/new-olive-tree-first-week-care",
  },
  {
    title: "Indoor plant favorites",
    detail: "Monstera, pothos, orchids, and apartment-friendly plants explained in plain, calm language.",
    tag: "Houseplants",
    href: "/notes/monstera-leaves-curling",
  },
  {
    title: "Seasonal farm-to-table",
    detail: "Herbs, tomatoes, citrus, berries, and small harvest ideas that make dinner feel closer to the garden.",
    tag: "Kitchen garden",
    href: "/notes/basil-first-harvest",
  },
  {
    title: "Organic-first fixes",
    detail: "Soil checks, light, water rhythm, compost, and gentle pest habits before buying another bottle.",
    tag: "Useful care",
    href: "/notes/eggshells-in-the-garden",
  },
  {
    title: "What is popular nearby",
    detail: "A warm look at the plants people are noticing, bringing home, and asking how to keep happy.",
    tag: "This week",
    href: "/plantpulse",
  },
  {
    title: "Seasonal stories",
    detail: "Plant notes inspired by farmers markets, home cooking, beautiful films, and quiet seasonal rituals.",
    tag: "Living well",
    href: "/notes",
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
  title: { absolute: "Garden Companion | Weekly Plant Care Notes And Local Plant Trends" },
  description:
    "Subscribe to a calm, practical plant-care publication covering local Costco plant finds, indoor potted plants, seasonal care, farm-to-table ideas, and PlantPulse trend notes.",
};

export default function Home() {
  const trends = getTopSignals(3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Garden Companion",
        description:
          "A weekly plant-care publication for local plant finds, indoor potted plants, seasonal care, and farm-to-table ideas.",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SubscribeAction",
          target: "#newsletter",
          name: "Subscribe to weekly plant notes",
        },
      },
      {
        "@type": "Organization",
        name: "Garden Companion",
        description:
          "An independent plant-care publication translating timely plant signals and horticultural sources into practical notes.",
        url: "/",
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
              Explore the first guides
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
        <div>
          <strong>Local finds</strong>
          <span>Plants showing up in nearby shopping and garden conversations</span>
        </div>
        <div>
          <strong>Indoor favorites</strong>
          <span>Monstera, pothos, orchids, and potted plant care</span>
        </div>
        <div>
          <strong>Seasonal eating</strong>
          <span>Herbs, harvest ideas, and small farm-to-table prompts</span>
        </div>
        <div>
          <strong>Plain answers</strong>
          <span>What to check first, what to skip, and what can wait</span>
        </div>
      </section>

      <section id="notes" className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Start with your plant</p>
          <h2>Choose the note that feels closest to what you brought home.</h2>
          <p>
            Short, useful guides for the plant on your table, the pot by your window, and the
            season just outside your door.
          </p>
        </div>
        <div className="guide-grid">
          {contentPillars.map((pillar) => (
            <article className="guide-card" key={pillar.title}>
              <span>{pillar.tag}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.detail}</p>
              <a href={pillar.href}>Explore this note</a>
            </article>
          ))}
        </div>
      </section>

      <section id="plantpulse" className="plantpulse-section">
        <div className="plantpulse-copy">
          <p className="eyebrow">PlantPulse</p>
          <h2>See what plant lovers near you are noticing this week.</h2>
          <p>
            A gentle weekly pulse of plants people are bringing home, talking about, growing,
            rescuing, and learning to care for.
          </p>
          <a className="text-link" href="#newsletter">
            Get the weekly digest
          </a>
          <a className="text-link secondary-text-link" href="/plantpulse">
            Open PlantPulse
          </a>
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
        <div className="safety-note">
          <strong>Seasonal inspiration:</strong> a beautiful film, a farmers market table, or a
          home-cooking ritual can become a real guide for what to grow, how to care for it, and how
          to enjoy it.
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
