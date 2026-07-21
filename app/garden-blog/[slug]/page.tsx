import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GardenStoryCard } from "../../components/GardenStoryCard";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import {
  formatGardenStoryDate,
  gardenStories,
  getGardenStory,
  getRelatedGardenStories,
} from "../../data/garden-stories";

type GardenStoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return gardenStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: GardenStoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getGardenStory(slug);

  if (!story) {
    return {};
  }

  return {
    title: story.shortTitle,
    description: story.dek,
    alternates: { canonical: `/garden-blog/${story.slug}` },
    openGraph: {
      type: "article",
      title: story.title,
      description: story.dek,
      images: [{ url: story.image, alt: story.imageAlt }],
      publishedTime: story.publishedAt,
      modifiedTime: story.updatedAt,
    },
  };
}

export default async function GardenStoryPage({ params }: GardenStoryPageProps) {
  const { slug } = await params;
  const story = getGardenStory(slug);

  if (!story) {
    notFound();
  }

  const relatedStories = getRelatedGardenStories(story.relatedSlugs);
  const pageUrl = `/garden-blog/${story.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: story.title,
        description: story.dek,
        image: story.image,
        datePublished: story.publishedAt,
        dateModified: story.updatedAt,
        articleSection: story.category,
        inLanguage: "en-US",
        mainEntityOfPage: pageUrl,
        author: { "@type": "Organization", name: "Garden Companion editorial team" },
        publisher: { "@type": "Organization", name: "Garden Companion" },
        citation: story.sources.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "Garden Stories", item: "/garden-blog" },
          { "@type": "ListItem", position: 3, name: story.shortTitle, item: pageUrl },
        ],
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

      <article className="guide-page story-page">
        <header className="guide-header story-header">
          <div className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/garden-blog">Garden stories</Link>
          </div>
          <p className="eyebrow">{story.category}</p>
          <h1>{story.title}</h1>
          <p className="guide-dek">{story.dek}</p>
          <div className="guide-byline">
            <span>Garden Companion editorial team</span>
            <span>{formatGardenStoryDate(story.publishedAt)}</span>
            <span>{story.readingTime}</span>
          </div>
        </header>

        <div
          className="guide-hero-image story-hero-image"
          role="img"
          aria-label={story.imageAlt}
          style={{ backgroundImage: `url(${story.image})`, backgroundPosition: story.imagePosition }}
        />

        <div className="guide-layout">
          <aside className="guide-aside">
            <span>{story.setting}</span>
            <span>{story.theme}</span>
            <a href="#sources">Sources &amp; notes</a>
          </aside>

          <div className="guide-body">
            <section className="answer-box story-opening" aria-label="Opening note">
              <p className="eyebrow">A garden reading</p>
              <p>{story.opening}</p>
            </section>

            {story.sections.map((section) => (
              <section id={section.id} className="guide-section" key={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
                {section.callout ? <blockquote>{section.callout}</blockquote> : null}
              </section>
            ))}

            <section className="story-practice">
              <p className="eyebrow">Bring it home</p>
              <h2>A small way to live with the story</h2>
              <ol>
                {story.bringHome.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="sources" className="sources-section story-sources">
              <p className="eyebrow">Sources &amp; notes</p>
              <h2>Where this story began</h2>
              <p>
                We use official film materials, original texts, and university horticulture
                guidance where practical plant details matter. The reflection and interpretation
                are our own.
              </p>
              <div className="source-list">
                {story.sources.map((source) => (
                  <a href={source.url} target="_blank" rel="noopener noreferrer" key={source.url}>
                    <span>{source.publisher}</span>
                    <strong>{source.title}</strong>
                    <small>{source.note}</small>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>

      <section className="related-guides related-stories">
        <div className="section-heading">
          <p className="eyebrow">Keep wandering</p>
          <h2>More garden stories for a quiet hour.</h2>
        </div>
        <div className="story-card-grid related-story-grid">
          {relatedStories.map((related) => (
            <GardenStoryCard story={related} key={related.slug} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
