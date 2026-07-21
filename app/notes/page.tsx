import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { getGuideSummaries, guides } from "../data/guides";
import { getSiteUrl } from "../lib/site-url";
import { buildSocialMetadata } from "../lib/social-metadata";
import { NotesExplorer } from "./NotesExplorer";

const siteUrl = getSiteUrl();
const pageTitle = "Plant Notes For Everyday Growing";
const pageDescription =
  "Calm, evidence-aware plant care for Costco and local finds, Monstera and indoor plants, organic garden questions, and farm-to-table growing.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/notes" },
  ...buildSocialMetadata({ title: pageTitle, description: pageDescription, path: "/notes" }),
};

export default function NotesPage() {
  const guideSummaries = getGuideSummaries();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Garden Companion plant notes",
    description:
      "Practical plant notes for local finds, indoor plants, organic garden questions, and seasonal growing.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/notes/${guide.slug}`,
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

      <NotesExplorer guides={guideSummaries} />

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
