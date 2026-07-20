import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gardencompanion.example"),
  title: {
    default: "Garden Companion | Practical Plant Care Notes",
    template: "%s | Garden Companion",
  },
  description:
    "Subscribe to practical weekly plant notes about local plant finds, indoor potted plants, seasonal care, organic fixes, farm-to-table ideas, and PlantPulse trend signals.",
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
    title: "Garden Companion | Practical Plant Care Notes",
    description:
      "Practical plant-care notes for local plant finds, indoor favorites, seasonal growing, and small farm-to-table rituals.",
    type: "website",
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
    title: "Garden Companion | Practical Plant Care Notes",
    description:
      "Local plant finds, indoor plant care, seasonal growing, and practical organic-first fixes.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
