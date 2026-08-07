import type { Metadata } from "next";
import ReserveEstimator from "@/components/reserve-estimator";
import ReserveGuide from "@/components/reserve-guide";

export const metadata: Metadata = {
  title: "OC Reserve List 2025: Which Bands Got Offers",
  description:
    "See which NSW OC reserve lists reached which bands in 2025, check your child's chances from their reserve band, and understand how the list moves. Data for all 88 opportunity classes, 2024 to 2026.",
  keywords: [
    "OC reserve list 2025",
    "opportunity class reserve list 2025",
    "OC reserve band 2025",
    "OC reserve list NSW",
    "reserve band estimator",
    "Year 5 entry",
    "OC school offer chance",
    "NSW opportunity class",
  ],
};

export default function OCReservePage() {
  return (
    <>
      <ReserveEstimator initialSchoolType="oc" />
      <ReserveGuide schoolType="oc" />
    </>
  );
}
