import type { Metadata } from "next";
import ScoreForm from '@/components/score-form';

export const metadata: Metadata = {
  title: "Year 5 NAPLAN — Selective School Estimator",
  description:
    "Enter your child's Year 5 NAPLAN results to estimate which NSW Selective High Schools are within reach for Year 7 entry. Free selective school calculator with community-reported cutoffs.",
};

export default function SelectivePage() {
  return <ScoreForm year="year5" />;
}
