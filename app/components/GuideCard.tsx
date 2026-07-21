import Link from "next/link";
import type { GuideSummary } from "../data/guides";
import { getNoteTopicHref } from "../data/note-topics";

export function GuideCard({ guide, featured = false }: { guide: GuideSummary; featured?: boolean }) {
  return (
    <article className={`article-card${featured ? " featured" : ""}`}>
      <Link
        className="article-card-image"
        href={`/notes/${guide.slug}`}
        style={{ backgroundImage: `url(${guide.image})`, backgroundPosition: guide.imagePosition }}
        aria-label={`Read ${guide.shortTitle}`}
      />
      <div className="article-card-body">
        <div className="article-card-meta">
          <Link href={getNoteTopicHref(guide.category)}>{guide.category}</Link>
          <small>{guide.readingTime}</small>
        </div>
        <h3>
          <Link href={`/notes/${guide.slug}`}>{guide.shortTitle}</Link>
        </h3>
        <p>{guide.dek}</p>
        <Link className="text-link" href={`/notes/${guide.slug}`}>
          Read the guide <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
