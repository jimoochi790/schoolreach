import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Reserve List Chance Estimator — OC & Selective Schools",
    template: "%s — Reserve List — School Reach",
  },
  description:
    "Check the likelihood of receiving an offer from the NSW OC or Selective school reserve list. Based on community-tracked historical reserve band data for 2024–2026.",
};

export default function ReserveListLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
