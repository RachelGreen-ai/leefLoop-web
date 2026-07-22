import Image from "next/image";
import type { ArticleImageData } from "../data/article-media";

type ArticleImageProps = {
  image: ArticleImageData;
};

export function ArticleImage({ image }: ArticleImageProps) {
  return (
    <figure className="article-inline-image">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width ?? 1536}
        height={image.height ?? 1024}
        sizes="(max-width: 760px) calc(100vw - 36px), 840px"
        unoptimized
      />
      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
    </figure>
  );
}
