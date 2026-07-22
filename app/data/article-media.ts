export type ArticleImageData = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export function getArticleSectionImages(
  sections: Array<{ image?: ArticleImageData }>,
): ArticleImageData[] {
  return sections.flatMap((section) => (section.image ? [section.image] : []));
}
