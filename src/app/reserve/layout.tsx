import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reserve List Chance Estimator — OC & Selective",
  description:
    "Check the likelihood of your child receiving an offer from the NSW OC or Selective school reserve list. Based on community-tracked historical reserve band data for 2024–2026.",
};

export default function ReserveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
