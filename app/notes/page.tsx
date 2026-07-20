import type { Metadata } from "next";
import Link from "next/link";
import { GuideCard } from "../components/GuideCard";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { guides } from "../data/guides";

export const metadata: Metadata = {
  title: "Practical Plant Care Guides",
  description:
    "Calm, evidence-aware plant care for Costco and local finds, Monstera and indoor plants, organic garden questions, and farm-to-table growing.",
  alternates: { canonical: "/notes" },
};

const filters = ["All notes", "Local finds", "Indoor plants", "Farm to table", "Organic-first"];

export default function NotesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Garden Companion plant care guides",
    description:
      "Practical plant care guides for local finds, indoor plants, organic garden questions, and seasonal growing.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `/notes/${guide.slug}`,
        name: guide.title,
      })),
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="notes-hero">
        <p className="eyebrow">Plant notes</p>
        <h1>Useful answers for the plants already in your life.</h1>
        <p>
          Begin with the first thing to check, understand why it matters, and leave with a small
          plan you can actually follow.
        </p>
      </section>

      <section className="notes-index">
        <div className="topic-filter" aria-label="Topics in this first collection">
          {filters.map((filter, index) => (
            <span className={index === 0 ? "active" : ""} key={filter}>
              {filter}
            </span>
          ))}
        </div>

        <div className="article-grid">
          {guides.map((guide, index) => (
            <GuideCard guide={guide} featured={index === 0} key={guide.slug} />
          ))}
        </div>
      </section>

      <section className="notes-letter">
        <div>
          <p className="eyebrow">The weekly letter</p>
          <h2>A fresh note for what is growing now.</h2>
        </div>
        <div>
          <p>
            Local plant finds, one indoor favorite, one seasonal growing idea, and one garden
            shortcut worth checking before you try it.
          </p>
          <Link className="primary-button dark-button" href="/#newsletter">
            Subscribe to plant notes
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
