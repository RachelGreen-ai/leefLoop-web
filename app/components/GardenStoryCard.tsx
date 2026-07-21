import Link from "next/link";
import type { GardenStory } from "../data/garden-stories";

type GardenStoryCardProps = {
  story: GardenStory;
  featured?: boolean;
};

export function GardenStoryCard({ story, featured = false }: GardenStoryCardProps) {
  return (
    <article className={`story-card${featured ? " featured" : ""}`}>
      <Link
        className="story-card-image"
        href={`/garden-blog/${story.slug}`}
        style={{ backgroundImage: `url(${story.image})`, backgroundPosition: story.imagePosition }}
        aria-label={`Read ${story.shortTitle}`}
      />
      <div className="story-card-body">
        <div className="article-card-meta">
          <span>{story.category}</span>
          <small>{story.readingTime}</small>
        </div>
        <h2>
          <Link href={`/garden-blog/${story.slug}`}>{story.title}</Link>
        </h2>
        <p>{story.dek}</p>
        <Link className="text-link" href={`/garden-blog/${story.slug}`}>
          Read the story <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
