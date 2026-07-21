import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCard } from "../../components/GuideCard";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import {
  formatGuideDate,
  getGuide,
  getRelatedGuides,
  guides,
} from "../../data/guides";

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
    alternates: { canonical: `/notes/${guide.slug}` },
    openGraph: {
      type: "article",
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
  const pageUrl = `/notes/${guide.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.answer,
        image: guide.image,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        inLanguage: "en-US",
        mainEntityOfPage: pageUrl,
        author: {
          "@type": "Organization",
          name: "Garden Companion",
        },
        publisher: {
          "@type": "Organization",
          name: "Garden Companion",
        },
        citation: guide.sources.map((source) => source.url),
      },
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
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "Plant notes", item: "/notes" },
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
          </div>
          <p className="eyebrow">{guide.category}</p>
          <h1>{guide.title}</h1>
          <p className="guide-dek">{guide.dek}</p>
          <div className="guide-byline">
            <span>Updated {formatGuideDate(guide.updatedAt)}</span>
            <span>{guide.readingTime}</span>
          </div>
        </header>

        <div
          className="guide-hero-image"
          role="img"
          aria-label={guide.imageAlt}
          style={{ backgroundImage: `url(${guide.image})`, backgroundPosition: guide.imagePosition }}
        />

        <div className="guide-layout">
          <div className="guide-body">
            <section className="answer-box" aria-label="Short answer">
              <p className="eyebrow">The short answer</p>
              <p>{guide.answer}</p>
            </section>

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
