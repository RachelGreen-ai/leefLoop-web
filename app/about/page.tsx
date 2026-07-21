import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { buildSocialMetadata } from "../lib/social-metadata";

const pageTitle = "About Garden Companion";
const pageDescription =
  "Garden Companion is a calm place for useful plant notes, seasonal finds, and stories about living with plants.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/about" },
  ...buildSocialMetadata({ title: pageTitle, description: pageDescription, path: "/about" }),
};

const placesToBegin = [
  {
    title: "Plant Notes",
    copy: "Plain-language help for the plant on your table, patio, windowsill, or garden bed.",
    href: "/notes",
    cta: "Browse Plant Notes",
  },
  {
    title: "Trending Plants",
    copy: "A timely look at plants people are noticing, bringing home, and learning to care for.",
    href: "/plantpulse",
    cta: "See Trending Plants",
  },
  {
    title: "Garden Stories",
    copy: "Plants in films, books, kitchens, and the small seasonal rituals that make a home feel alive.",
    href: "/garden-blog",
    cta: "Read Garden Stories",
  },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="about-hero">
        <p className="eyebrow">About garden companion</p>
        <h1>A useful place for people who like living with plants.</h1>
        <p>
          Come for help with a plant you already have, stay for what is growing nearby, what is in
          season, and the stories that make us notice the living world a little more closely.
        </p>
      </section>

      <section className="principles-band">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2>Choose what brought you here.</h2>
        </div>
        <div className="guide-grid">
          {placesToBegin.map((place) => (
            <article className="guide-card" key={place.title}>
              <span>Garden Companion</span>
              <h3>{place.title}</h3>
              <p>{place.copy}</p>
              <Link href={place.href}>{place.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about-letter">
        <p className="eyebrow">Come grow with us</p>
        <h2>One useful plant note can change the way a whole season feels.</h2>
        <div>
          <Link className="primary-button dark-button" href="/notes">
            Read the first guides
          </Link>
          <Link className="text-link" href="/#newsletter">
            Join the weekly letter
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
