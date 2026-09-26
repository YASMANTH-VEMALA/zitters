import type { Metadata } from "next";
import { GymOSPage } from "@/components/gymos-page";
export const metadata: Metadata = { title: "GymOS by Zitters — Run your gym. Grow your community.", description: "Memberships, attendance, fees, workouts, communication and growth in one connected gym operating system." };
export default function Page() { return <GymOSPage />; }
