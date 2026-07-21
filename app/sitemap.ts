import type { MetadataRoute } from "next";
import { gardenStories } from "./data/garden-stories";
import { guides } from "./data/guides";
import { getSiteUrl } from "./lib/site-url";

const siteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const latestUpdate = new Date("2026-07-20T00:00:00Z");

  return [
    {
      url: siteUrl,
      lastModified: latestUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/plantpulse`,
      lastModified: latestUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/notes`,
      lastModified: latestUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/garden-blog`,
      lastModified: latestUpdate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: latestUpdate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: latestUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...guides.map((guide) => ({
      url: `${siteUrl}/notes/${guide.slug}`,
      lastModified: new Date(`${guide.updatedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...gardenStories.map((story) => ({
      url: `${siteUrl}/garden-blog/${story.slug}`,
      lastModified: new Date(`${story.updatedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
