import type { Metadata } from "next";
import { GymOSPage } from "@/components/gymos-page";

export const metadata: Metadata = {
  title: "GymOS — Run Your Gym. Grow Your Community.",
  description:
    "GymOS by Zitters is the all-in-one gym management software. Replace paper registers with QR attendance, automate WhatsApp fee collection, manage members, and track gym growth — all from one cloud dashboard.",
  keywords: [
    "gym management software",
    "GymOS",
    "gym member management",
    "QR attendance gym",
    "automated fee collection gym",
    "fitness center software India",
    "gym CRM",
    "WhatsApp gym payments",
    "gym operating system",
    "paperless gym",
    "member mobile app gym",
    "gym owner dashboard",
    "Zitters GymOS",
  ],
  alternates: {
    canonical: "https://www.zitters.com/products/gymos",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.zitters.com/products/gymos",
    siteName: "Zitters",
    title: "GymOS by Zitters — Run your gym. Grow your community.",
    description:
      "Memberships, QR attendance, automated fee collection, member mobile app, and owner analytics — all in one connected gym operating system.",
    images: [
      {
        url: "/og-gymos.jpg",
        width: 1200,
        height: 630,
        alt: "GymOS by Zitters — Run your gym. Grow your community.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GymOS by Zitters — The Operating System for Modern Gyms",
    description:
      "100% paperless check-ins, automated WhatsApp billing, member CRM, and real-time owner dashboard. Ditch the paper registers forever.",
    images: ["/og-gymos.jpg"],
  },
};

export default function Page() {
  return <GymOSPage />;
}
