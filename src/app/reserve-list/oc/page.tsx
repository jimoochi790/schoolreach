import type { Metadata } from "next";
import ReserveEstimator from "@/components/reserve-estimator";

export const metadata: Metadata = {
  title: "Opportunity Class (OC) Reserve List Estimator",
  description:
    "Check the likelihood of receiving a Year 5 OC placement offer from the NSW Opportunity Class reserve list. Enter your school and reserve band to see historical chances based on 2024–2026 data. Covers all 88 OC schools.",
  keywords: [
    "OC reserve list",
    "Opportunity Class NSW",
    "OC placement",
    "reserve band estimator",
    "Year 5 entry",
    "OC school offer chance",
    "NSW opportunity class",
  ],
};

export default function OCReservePage() {
  return <ReserveEstimator initialSchoolType="oc" />;
}
