import type { Metadata } from "next";
import Link from "next/link";
import { GardenStoryCard } from "../components/GardenStoryCard";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { gardenStories } from "../data/garden-stories";
import { getSiteUrl } from "../lib/site-url";
import { buildSocialMetadata } from "../lib/social-metadata";

const siteUrl = getSiteUrl();
const pageTitle = "Garden Stories: Plants In Film & Books";
const pageDescription =
  "Thoughtful garden essays about plants in film and literature, seasonal kitchens, useful beauty, and the small rituals that make growing feel personal.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/garden-blog" },
  ...buildSocialMetadata({ title: pageTitle, description: pageDescription, path: "/garden-blog" }),
};

const shelves = [
  {
    label: "On screen",
    title: "Gardens we can almost step into",
    copy: "Films and documentaries where gardens, weather, work, and the lives around them carry the story.",
  },
  {
    label: "On the page",
    title: "When a plant changes the story",
    copy: "Literary gardens, memorable trees, unruly flowers, and the people who learn to notice them.",
  },
  {
    label: "Small wonders",
    title: "The poetry hiding in useful things",
    copy: "A windowsill herb, an opening leaf, a jar of summer fruit, or one small ritual worth keeping.",
  },
];

export default function GardenBlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Garden Stories",
    description:
      "Garden essays about plants in film, books, seasonal kitchens, and everyday life.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: gardenStories.map((story, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/garden-blog/${story.slug}`,
        name: story.title,
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

      <section className="stories-hero">
        <div>
          <p className="eyebrow">Garden stories</p>
          <h1>Where plants meet stories, seasons, and everyday life.</h1>
          <p>
            Films that make us want to grow dinner. Books where a garden changes someone. Small
            plant rituals that stay with us long after the page or screen goes quiet.
          </p>
          <Link className="primary-button dark-button" href={`/garden-blog/${gardenStories[0].slug}`}>
            Read our Little Forest story
          </Link>
        </div>
      </section>

      <section className="story-shelves" aria-label="Garden story collections">
        {shelves.map((shelf) => (
          <article key={shelf.label}>
            <span>{shelf.label}</span>
            <h2>{shelf.title}</h2>
            <p>{shelf.copy}</p>
          </article>
        ))}
      </section>

      <section className="stories-index">
        <div className="section-heading story-index-heading">
          <p className="eyebrow">The first collection</p>
          <h2>A few ways to spend a little more time with plants.</h2>
          <p>
            Each story ends with something small to notice, grow, cook, or carry into your own
            week.
          </p>
        </div>
        <div className="story-card-grid">
          {gardenStories.map((story, index) => (
            <GardenStoryCard story={story} featured={index === 0} key={story.slug} />
          ))}
        </div>
      </section>

      <section className="stories-letter">
        <div>
          <p className="eyebrow">A slower weekend note</p>
          <h2>One garden story to read with your morning tea.</h2>
        </div>
        <div>
          <p>
            Seasonal films, books with memorable gardens, and quiet plant essays join our practical
            plant notes in the weekly letter.
          </p>
          <Link className="primary-button dark-button" href="/#newsletter">
            Join the weekly letter
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
