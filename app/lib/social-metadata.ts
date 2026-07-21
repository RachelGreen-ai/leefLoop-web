import type { Metadata } from "next";
import { SITE_NAME, SITE_OG_IMAGE, SITE_TAGLINE } from "./site-brand";

type SocialMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function buildSocialMetadata({
  title,
  description,
  path,
}: SocialMetadataOptions): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      type: "website",
      siteName: SITE_NAME,
      url: path,
      images: [
        {
          url: SITE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME}: ${SITE_TAGLINE.toLowerCase()}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE],
    },
  };
}
