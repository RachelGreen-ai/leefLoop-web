import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "About Garden Companion",
  description:
    "How Garden Companion turns seasonal plant signals and evidence-based horticulture into warm, practical care notes for real homes.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Begin with what you can see",
    copy: "Soil moisture, light, drainage, roots, weather, and pests usually tell us more than a shopping list does.",
  },
  {
    title: "Prefer the gentlest useful step",
    copy: "We favor small, affordable corrections and honest organic habits before reaching for a product.",
  },
  {
    title: "Name uncertainty",
    copy: "A photo or symptom can narrow the possibilities, but it does not always prove one diagnosis. We say what to check next.",
  },
  {
    title: "Keep guidance close to place",
    copy: "Weather, season, window direction, pot size, and local growing conditions can change the right answer.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="about-hero">
        <p className="eyebrow">About garden companion</p>
        <h1>Plant care should leave you calmer and more capable.</h1>
        <p>
          We notice what people are bringing home, then pair that timely curiosity with careful
          horticultural sources and plain-language next steps.
        </p>
      </section>

      <section className="principles-band">
        <div className="section-heading">
          <p className="eyebrow">What guides every note</p>
          <h2>Useful before impressive.</h2>
        </div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-method">
        <div>
          <p className="eyebrow">From signal to guide</p>
          <h2>We listen widely, then review carefully.</h2>
        </div>
        <ol>
          <li>
            <strong>Notice</strong>
            <span>Retailer plant pages, seasonal timing, search questions, community notes, and subscriber replies.</span>
          </li>
          <li>
            <strong>Verify</strong>
            <span>University extension, integrated pest management, botanical, and first-party plant sources.</span>
          </li>
          <li>
            <strong>Translate</strong>
            <span>A short answer, the first three checks, realistic steps, and the situations that need more help.</span>
          </li>
          <li>
            <strong>Refresh</strong>
            <span>Dated source observations, reader feedback, and seasonal updates keep the note useful.</span>
          </li>
        </ol>
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
