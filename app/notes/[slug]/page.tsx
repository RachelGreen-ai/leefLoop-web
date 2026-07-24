import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleImage } from "../../components/ArticleImage";
import { GuideCard } from "../../components/GuideCard";
import { getArticleSectionImages } from "../../data/article-media";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import {
  formatGuideDate,
  getGuide,
  getRelatedGuides,
  guides,
} from "../../data/guides";
import { getNoteTopicForCategory } from "../../data/note-topics";
import { SITE_NAME } from "../../lib/site-brand";
import { getSiteUrl } from "../../lib/site-url";

const siteUrl = getSiteUrl();

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.shortTitle,
    description: guide.answer,
    keywords: [...guide.tags, ...(guide.aliases ?? [])],
    alternates: { canonical: `/notes/${guide.slug}` },
    openGraph: {
      type: "article",
      url: `/notes/${guide.slug}`,
      title: guide.title,
      description: guide.dek,
      images: [{ url: guide.image, alt: guide.imageAlt }],
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(guide.relatedSlugs);
  const guideTopic = getNoteTopicForCategory(guide.category);
  const guideImages = [
    guide.image,
    ...getArticleSectionImages(guide.sections).map((image) => image.src),
  ].map((image) => new URL(image, `${siteUrl}/`).toString());
  const pageUrl = `${siteUrl}/notes/${guide.slug}`;
  const plantPickList = guide.picks
    ? {
        "@type": "ItemList",
        "@id": `${pageUrl}#plant-picks`,
        name: guide.picks.heading,
        description: guide.picks.intro,
        numberOfItems: guide.picks.items.length,
        itemListElement: guide.picks.items.map((pick, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Thing",
            name: pick.name,
            alternateName: pick.aliases,
            description: `${pick.bestFor} ${pick.light} ${pick.watchFor}`,
          },
        })),
      }
    : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.answer,
        abstract: guide.answer,
        image: guideImages,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        articleSection: guide.category,
        keywords: guide.tags,
        about: guide.tags.map((tag) => ({ "@type": "Thing", name: tag })),
        inLanguage: "en-US",
        mainEntityOfPage: pageUrl,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: SITE_NAME,
        },
        citation: guide.sources.map((source) => source.url),
      },
      ...(plantPickList ? [plantPickList] : []),
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Plant notes", item: `${siteUrl}/notes` },
          { "@type": "ListItem", position: 3, name: guide.shortTitle, item: pageUrl },
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

      <article className="guide-page">
        <header className="guide-header">
          <div className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/notes">Plant notes</Link>
            <span>/</span>
            <Link href={`/notes?topic=${guideTopic.slug}`}>{guideTopic.label}</Link>
          </div>
          <p className="eyebrow">{guide.category}</p>
          <h1>{guide.title}</h1>
          <p className="guide-dek">{guide.dek}</p>
          <div className="guide-byline">
            <span>Updated {formatGuideDate(guide.updatedAt)}</span>
            <span>{guide.readingTime}</span>
          </div>
          <nav className="article-tags" aria-label="Explore related Plant Notes">
            {guide.tags.map((tag) => (
              <Link href={`/notes?q=${encodeURIComponent(tag)}`} key={tag}>
                {tag}
              </Link>
            ))}
          </nav>
        </header>

        <div
          className="guide-hero-image"
          role="img"
          aria-label={guide.imageAlt}
          style={{ backgroundImage: `url(${guide.image})`, backgroundPosition: guide.imagePosition }}
        />

        <div className="guide-layout">
          <div className="guide-body">
            <section
              className={`answer-box${guide.answer.length > 420 ? " answer-box-compact" : ""}`}
              aria-label="Short answer"
            >
              <p className="eyebrow">The short answer</p>
              <p>{guide.answer}</p>
            </section>

            {guide.picks ? (
              <section className="plant-picks" id="plant-picks" aria-labelledby="plant-picks-title">
                <p className="eyebrow">At a glance</p>
                <h2 id="plant-picks-title">{guide.picks.heading}</h2>
                <p className="plant-picks-intro">{guide.picks.intro}</p>
                <ul>
                  {guide.picks.items.map((pick) => (
                    <li key={pick.name}>
                      <div className="plant-pick-name">
                        <h3>{pick.name}</h3>
                        {pick.aliases?.length ? <p>{pick.aliases.join(" · ")}</p> : null}
                      </div>
                      <dl>
                        <div>
                          <dt>{guide.picks?.bestForLabel ?? "Best for"}</dt>
                          <dd>{pick.bestFor}</dd>
                        </div>
                        <div>
                          <dt>{guide.picks?.lightLabel ?? "Light"}</dt>
                          <dd>{pick.light}</dd>
                        </div>
                        <div>
                          <dt>{guide.picks?.watchForLabel ?? "Watch for"}</dt>
                          <dd>{pick.watchFor}</dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="first-checks">
              <p className="eyebrow">Start here</p>
              <h2>Three things to check first</h2>
              <ol>
                {guide.firstChecks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ol>
            </section>

            {guide.sections.map((section) => (
              <section id={section.id} className="guide-section" key={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.image ? <ArticleImage image={section.image} /> : null}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.callout ? <blockquote>{section.callout}</blockquote> : null}
              </section>
            ))}

            <section className="faq-section">
              <p className="eyebrow">Common questions</p>
              <h2>A little more clarity</h2>
              <div className="faq-list">
                {guide.faq.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <details className="references-disclosure">
              <summary>References</summary>
              <div className="source-list">
                {guide.sources.map((source) => (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={source.url}
                  >
                    <span>{source.publisher}</span>
                    <strong>{source.title}</strong>
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </article>

      <section className="related-guides">
        <div className="section-heading">
          <p className="eyebrow">Keep reading</p>
          <h2>More notes for the plants around you.</h2>
        </div>
        <div className="article-grid compact-article-grid">
          {relatedGuides.map((related) => (
            <GuideCard guide={related} key={related.slug} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
