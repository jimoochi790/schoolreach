import type { Metadata } from "next";
import ScoreForm from '@/components/score-form';

export const metadata: Metadata = {
  title: "Year 3 NAPLAN — OC School Estimator",
  description:
    "Enter your child's Year 3 NAPLAN results to estimate which NSW Opportunity Class (OC) schools are within reach for Year 5 entry. Free OC calculator with community-reported cutoffs.",
};

export default function OCPage() {
  return <ScoreForm year="year3" />;
}
