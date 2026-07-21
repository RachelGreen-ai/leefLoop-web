import type { MetadataRoute } from "next";
import { gardenStories } from "./data/garden-stories";
import { guides } from "./data/guides";
import { plantPulseSignals } from "./data/plantpulse";
import { retailerSnapshotDate } from "./data/retail-signals";
import { getSiteUrl } from "./lib/site-url";

const siteUrl = getSiteUrl();
const staticPageUpdate = new Date("2026-07-20T00:00:00Z");

function asDate(value: string) {
  return new Date(value.includes("T") ? value : `${value}T00:00:00Z`);
}

function latestDate(dates: Date[]) {
  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const notesUpdate = latestDate(guides.map((guide) => asDate(guide.updatedAt)));
  const storiesUpdate = latestDate(gardenStories.map((story) => asDate(story.updatedAt)));
  const plantPulseUpdate = latestDate([
    asDate(retailerSnapshotDate),
    ...plantPulseSignals.map((signal) => asDate(signal.updatedAt)),
  ]);
  const homeUpdate = latestDate([notesUpdate, storiesUpdate, plantPulseUpdate]);

  return [
    {
      url: siteUrl,
      lastModified: homeUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/plantpulse`,
      lastModified: plantPulseUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/notes`,
      lastModified: notesUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/garden-blog`,
      lastModified: storiesUpdate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: staticPageUpdate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: staticPageUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...guides.map((guide) => ({
      url: `${siteUrl}/notes/${guide.slug}`,
      lastModified: asDate(guide.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [absoluteUrl(guide.image)],
    })),
    ...gardenStories.map((story) => ({
      url: `${siteUrl}/garden-blog/${story.slug}`,
      lastModified: asDate(story.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(story.image)],
    })),
  ];
}
