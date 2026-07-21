import type { Metadata } from "next";

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
      siteName: "Garden Companion",
      url: path,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Garden Companion: practical plant notes for real homes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
