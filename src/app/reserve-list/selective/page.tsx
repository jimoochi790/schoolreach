import type { Metadata } from "next";
import ReserveEstimator from "@/components/reserve-estimator";
import ReserveGuide from "@/components/reserve-guide";

export const metadata: Metadata = {
  title: "Selective Reserve List 2025: Which Bands Got Offers",
  description:
    "See which NSW selective school reserve lists reached which bands in 2025, check your child's chances from their reserve band, and understand how the list moves. Data for all 48 selective schools, 2024 to 2026.",
  keywords: [
    "selective school reserve list 2025",
    "selective reserve list 2025",
    "selective reserve band 2025",
    "selective reserve list NSW",
    "reserve band estimator",
    "Year 7 entry",
    "selective school offer chance",
  ],
};

export default function SelectiveReservePage() {
  return (
    <>
      <ReserveEstimator initialSchoolType="selective" />
      <ReserveGuide schoolType="selective" />
    </>
  );
}
