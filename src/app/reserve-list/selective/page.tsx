import type { Metadata } from "next";
import ReserveEstimator from "@/components/reserve-estimator";

export const metadata: Metadata = {
  title: "Selective High School Reserve List Estimator",
  description:
    "Check the likelihood of receiving a Year 7 offer from the NSW Selective High School reserve list. Enter your school and reserve band to see historical chances based on 2024–2026 data. Covers all 48 selective schools.",
  keywords: [
    "selective school reserve list",
    "NSW selective high school",
    "selective school placement",
    "reserve band estimator",
    "Year 7 entry",
    "selective school offer chance",
  ],
};

export default function SelectiveReservePage() {
  return <ReserveEstimator initialSchoolType="selective" />;
}
