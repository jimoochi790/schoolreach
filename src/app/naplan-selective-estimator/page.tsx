import type { Metadata } from "next";
import ScoreForm from "@/components/score-form";

export const metadata: Metadata = {
  title: "NAPLAN Selective Estimator — Year 5 to Selective High School Placement",
  description:
    "Enter your child's Year 5 NAPLAN bands to estimate which NSW Selective High Schools are within reach. Free selective school calculator covering all 48 selective schools with community-reported 2025 cutoffs.",
  keywords: [
    "NAPLAN selective estimator",
    "Selective High School calculator",
    "Year 5 NAPLAN",
    "selective school placement",
    "NSW selective schools",
    "Year 7 entry",
  ],
  openGraph: {
    title: "NAPLAN Selective Estimator — Year 5 to Selective High School",
    description:
      "Enter Year 5 NAPLAN bands to see which of 48 NSW Selective High Schools are within reach for Year 7 entry.",
  },
};

export default function NaplanSelectivePage() {
  return <ScoreForm year="year5" />;
}
