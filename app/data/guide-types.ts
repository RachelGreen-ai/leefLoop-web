export type GuideSource = {
  title: string;
  publisher: string;
  url: string;
  note: string;
};

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
  callout?: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type PlantGuide = {
  slug: string;
  category:
    | "Local find"
    | "Indoor favorite"
    | "Farm to table"
    | "Organic-first"
    | "Seasonal";
  tags: string[];
  aliases?: string[];
  title: string;
  shortTitle: string;
  dek: string;
  answer: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  place: string;
  season: string;
  image: string;
  imagePosition?: string;
  imageAlt: string;
  firstChecks: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
  sources: GuideSource[];
  relatedSlugs: string[];
};

export type GuideSummary = Pick<
  PlantGuide,
  | "slug"
  | "category"
  | "tags"
  | "aliases"
  | "title"
  | "shortTitle"
  | "dek"
  | "answer"
  | "updatedAt"
  | "readingTime"
  | "place"
  | "season"
  | "image"
  | "imagePosition"
>;
