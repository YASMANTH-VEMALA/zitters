import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./mobile-overrides.css";
import "./redesign.css";
import "./cinematic.css";
import { MotionSettings } from "../components/motion-settings";
import { SplashScreen } from "../components/splash-screen";

const SITE_URL = "https://www.zitters.com";
const SITE_NAME = "Zitters";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ─── Core ─────────────────────────────────────────────── */
  title: {
    default: "Zitters — Convert Manual Work to Software. Grow with Meta & Google.",
    template: "%s | Zitters",
  },
  description:
    "Zitters replaces paper registers, spreadsheets, and lost leads with purpose-built vertical SaaS — while driving high-intent customers straight to your door via Meta Ads, WhatsApp, and Google Business.",
  keywords: [
    "gym management software",
    "GymOS",
    "Zitters",
    "business automation software",
    "Meta ads for gyms",
    "Google Business optimization",
    "WhatsApp automation",
    "vertical SaaS India",
    "fitness center software",
    "member management system",
    "QR attendance",
    "automated billing software",
    "local business growth",
    "manual to software",
  ],
  authors: [{ name: "Zitters Technologies", url: SITE_URL }],
  creator: "Zitters Technologies",
  publisher: "Zitters Technologies",

  /* ─── Canonical ─────────────────────────────────────────── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ─── Open Graph (Facebook / LinkedIn / WhatsApp / Google) ─ */
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Zitters — Converting Manual Work to Software",
    description:
      "Replace paper registers & lost leads with Zitters vertical software. Drive real customers via Meta Ads, WhatsApp Automation & Google Business domination.",
    images: [
      {
        url: "/og-zitters.jpg",
        width: 1200,
        height: 630,
        alt: "Zitters Platform — Converting manual work to software",
        type: "image/jpeg",
      },
    ],
  },

  /* ─── Twitter / X Card ──────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "Zitters — Convert Manual Business to Modern Software",
    description:
      "Purpose-built vertical SaaS + Meta Ads + WhatsApp Automation + Google Business dominance. Starting with GymOS for fitness centers.",
    images: ["/og-zitters.jpg"],
    creator: "@zittersin",
    site: "@zittersin",
  },

  /* ─── Icons / Favicon ───────────────────────────────────── */
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/zitters-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },

  /* ─── Robots ────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ─── App / PWA ─────────────────────────────────────────── */
  manifest: "/manifest.json",
  applicationName: SITE_NAME,
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zitters",
    alternateName: "Zitters Technologies",
    url: "https://www.zitters.com",
    logo: "https://www.zitters.com/zitters-logo.png",
    description:
      "Zitters converts manual business operations to vertical software while driving customer acquisition through Meta Ads, WhatsApp Automation, and Google Business dominance.",
    sameAs: [
      "https://www.instagram.com/zittersin",
      "https://www.facebook.com/zittersin",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "zitters.contact@gmail.com",
    },
    foundingDate: "2024",
    areaServed: "IN",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zitters Product Suite",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "GymOS",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            description:
              "All-in-one gym management software with QR attendance, member CRM, automated WhatsApp fee collection, and owner analytics dashboard.",
            url: "https://www.zitters.com/products/gymos",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SplashScreen />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionSettings>{children}</MotionSettings>
      </body>
    </html>
  );
}

