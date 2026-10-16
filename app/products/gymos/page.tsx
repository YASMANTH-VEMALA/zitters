import type { Metadata } from "next";
import { ExperienceGymOS } from "@/components/experience-gymos";

export const metadata: Metadata = {
  title: "GymOS — Your Gym, in Sync.",
  description:
    "Explore GymOS by Zitters: member records, QR attendance, fee tracking, notifications, a member mobile view and an owner dashboard for your gym.",
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
    title: "GymOS by Zitters — Your Gym, in Sync.",
    description:
      "See the GymOS product views for members, QR attendance, fees, notifications and the owner dashboard.",
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
    title: "GymOS by Zitters — Your Gym, in Sync.",
    description:
      "A connected workspace for member records, attendance, fees and everyday gym operations.",
    images: ["/og-gymos.jpg"],
  },
};

export default function Page() {
  return <ExperienceGymOS />;
}
