import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleImage } from "../../components/ArticleImage";
import { GardenStoryCard } from "../../components/GardenStoryCard";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import {
  formatGardenStoryDate,
  gardenStories,
  getGardenStory,
  getRelatedGardenStories,
} from "../../data/garden-stories";
import { getArticleSectionImages } from "../../data/article-media";
import { SITE_NAME } from "../../lib/site-brand";
import { getSiteUrl } from "../../lib/site-url";

const siteUrl = getSiteUrl();

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
      url: `/garden-blog/${story.slug}`,
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
  const storyImages = [
    story.image,
    ...getArticleSectionImages(story.sections).map((image) => image.src),
  ].map((image) => new URL(image, `${siteUrl}/`).toString());
  const pageUrl = `${siteUrl}/garden-blog/${story.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: story.title,
        description: story.dek,
        image: storyImages,
        datePublished: story.publishedAt,
        dateModified: story.updatedAt,
        articleSection: story.category,
        inLanguage: "en-US",
        mainEntityOfPage: pageUrl,
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: SITE_NAME,
        },
        citation: story.sources.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Garden Stories",
            item: `${siteUrl}/garden-blog`,
          },
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
          <div className="guide-body">
            <section className="answer-box story-opening" aria-label="Opening note">
              <p className="eyebrow">A garden reading</p>
              <p>{story.opening}</p>
            </section>

            {story.sections.map((section) => (
              <section id={section.id} className="guide-section" key={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.image ? <ArticleImage image={section.image} /> : null}
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

            <details className="references-disclosure">
              <summary>References</summary>
              <div className="source-list">
                {story.sources.map((source) => (
                  <a href={source.url} target="_blank" rel="noopener noreferrer" key={source.url}>
                    <span>{source.publisher}</span>
                    <strong>{source.title}</strong>
                  </a>
                ))}
              </div>
            </details>
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
