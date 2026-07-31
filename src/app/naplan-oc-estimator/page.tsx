import type { Metadata } from "next";
import ScoreForm from "@/components/score-form";

export const metadata: Metadata = {
  title: "NAPLAN OC Estimator — Year 3 to Opportunity Class Placement",
  description:
    "Enter your child's Year 3 NAPLAN bands to estimate which NSW Opportunity Class schools are within reach. Free OC calculator covering all 88 OC schools with community-reported 2025 cutoffs.",
  keywords: [
    "NAPLAN OC estimator",
    "Opportunity Class calculator",
    "Year 3 NAPLAN",
    "OC placement",
    "NSW OC schools",
    "Year 5 entry",
  ],
  openGraph: {
    title: "NAPLAN OC Estimator — Year 3 to Opportunity Class",
    description:
      "Enter Year 3 NAPLAN bands to see which of 88 NSW OC schools are within reach for Year 5 entry.",
  },
};

export default function NaplanOCPage() {
  return <ScoreForm year="year3" />;
}
