import type { PlantGuide } from "./guides";

export type NoteTopicSlug =
  | "all"
  | "local-finds"
  | "indoor-plants"
  | "seasonal"
  | "farm-to-table"
  | "organic-first";

export type NoteTopic = {
  slug: NoteTopicSlug;
  label: string;
  category: PlantGuide["category"] | null;
};

export const noteTopics: NoteTopic[] = [
  { slug: "all", label: "All notes", category: null },
  { slug: "local-finds", label: "Local finds", category: "Local find" },
  { slug: "indoor-plants", label: "Indoor plants", category: "Indoor favorite" },
  { slug: "seasonal", label: "Seasonal", category: "Seasonal" },
  { slug: "farm-to-table", label: "Farm to table", category: "Farm to table" },
  { slug: "organic-first", label: "Organic-first", category: "Organic-first" },
];

export function getNoteTopicForCategory(category: PlantGuide["category"]) {
  return noteTopics.find((topic) => topic.category === category) ?? noteTopics[0];
}

export function isNoteTopicSlug(value: string | null): value is NoteTopicSlug {
  return noteTopics.some((topic) => topic.slug === value);
}

export function getNoteTopicHref(category: PlantGuide["category"]) {
  return `/notes?topic=${getNoteTopicForCategory(category).slug}`;
}
