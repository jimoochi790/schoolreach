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
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Year 5 NAPLAN to Selective Estimator
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Drag the dots on each subject bar to match your child&apos;s Year 5
          NAPLAN bands. We&apos;ll estimate which of the 48 NSW Selective High
          Schools are within reach for Year 7 entry, sorted into Stretch,
          Target, and Safe tiers.
        </p>
        <p className="text-xs text-muted-foreground/50 mt-3">
          Not sure what NAPLAN bands mean? Check your child&apos;s NAPLAN
          report — the bands are shown as Exceeding, Strong, Developing, or
          Needs additional support. For Year 5, bands range from 3 to 8.
        </p>
      </div>
      <ScoreForm year="year5" />
    </div>
  );
}
