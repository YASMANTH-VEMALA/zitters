import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./experience.css";
import { MotionSettings } from "../components/motion-settings";
import { SmoothScroll } from "../components/smooth-scroll";

const displayFont = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

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
    default: "Zitters — Less Admin. More Momentum.",
    template: "%s | Zitters",
  },
  description:
    "Zitters connects local business operations and customer discovery. Explore GymOS for member records, QR attendance, fee tracking and a clearer gym workflow.",
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
    title: "Zitters — Less Admin. More Momentum.",
    description:
      "Purpose-built software for local business operations, starting with GymOS for gyms and fitness centers.",
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
    title: "Zitters — Less Admin. More Momentum.",
    description:
      "Explore GymOS and a connected approach to local business operations and discovery.",
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
      "Zitters builds purpose-built software for local business operations, starting with GymOS for gyms and fitness centers.",
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
            operatingSystem: "Web",
            description:
              "Gym management software with member records, QR attendance, fee tracking, notifications, a member view and an owner dashboard.",
            url: "https://www.zitters.com/products/gymos",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${displayFont.variable} ${monoFont.variable}`}>
      <body>
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionSettings>{children}</MotionSettings>
      </body>
    </html>
  );
}

