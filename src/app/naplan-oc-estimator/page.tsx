import type { Metadata } from "next";
import ScoreForm from "@/components/score-form";
import NaplanGuide from "@/components/naplan-guide";

export const metadata: Metadata = {
  title: "NAPLAN OC Estimator — Year 3 to Opportunity Class Placement",
  description:
    "Enter your child's Year 3 NAPLAN bands to estimate which NSW Opportunity Class schools are within reach. Free OC calculator with detailed placement guide covering all 88 OC schools with community-reported cutoffs.",
  keywords: [
    "NAPLAN OC estimator",
    "Opportunity Class calculator",
    "Year 3 NAPLAN",
    "OC placement score guide",
    "NAPLAN band to OC score",
    "NSW OC schools",
    "Year 5 entry",
    "OC school cutoff scores 2025",
  ],
};

export default function NaplanOCPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Year 3 NAPLAN to OC Estimator
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Drag the dots on each subject bar to match your child's Year 3
            NAPLAN bands. We'll estimate which of the 88 NSW Opportunity
            Class schools are realistic for Year 5 entry, sorted into Stretch,
            Target, and Safe tiers.
          </p>
          <p className="text-xs text-muted-foreground/50 mt-3">
            Not sure what NAPLAN bands mean? Check your child's NAPLAN
            report — the bands are shown as Exceeding, Strong, Developing, or
            Needs additional support. Each maps to a number from 1 to 6.
          </p>
        </div>
        <ScoreForm year="year3" />
      </div>
      <NaplanGuide year="year3" />
    </>
  );
}
