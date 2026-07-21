import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { SITE_NAME, SITE_OG_IMAGE, SITE_TAGLINE } from "./lib/site-brand";
import { getSiteUrl } from "./lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans-serif",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Practical Plant Care Notes`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Weekly plant notes for indoor favorites, local finds, seasonal growing, organic fixes, and small farm-to-table gardens.",
  keywords: [
    "plant care newsletter",
    "Costco plant care",
    "indoor plant care",
    "Monstera care",
    "farm to table garden",
    "local plant trends",
    "organic plant care",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: `${SITE_NAME} | Practical Plant Care Notes`,
    description:
      "Practical plant-care notes for local plant finds, indoor favorites, seasonal growing, and small farm-to-table rituals.",
    type: "website",
    siteName: SITE_NAME,
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
    title: `${SITE_NAME} | Practical Plant Care Notes`,
    description:
      "Local plant finds, indoor plant care, seasonal growing, and practical organic-first fixes.",
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
