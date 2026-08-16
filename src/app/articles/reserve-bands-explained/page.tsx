import type { Metadata } from "next";
import ArticleShell from "@/components/article-shell";

export const metadata: Metadata = {
  title: "Reserve Bands A to F Explained: What Your Letter Means",
  description:
    "What do reserve bands A through F actually mean for OC and selective school placement? Plain-English explanation of each band, timing expectations, and how to read your outcome letter.",
  keywords: [
    "reserve band A meaning",
    "reserve band F meaning",
    "OC reserve bands explained",
    "selective reserve bands explained",
    "reserve band timeline NSW",
    "what does my reserve band mean",
  ],
};

export default function ReserveBandsArticle() {
  return (
    <ArticleShell
      category="Articles · Explained"
      title="Reserve Bands A to F Explained: What Your Letter Means"
      subtitle="A plain-English guide to the reserve band system. What each band means, how long each stage typically takes, and why two children with the same band at different schools can face very different odds."
      date="August 2026"
      readTime="4 min read"
      sections={[
        {
          heading: "The bands in one sentence each",
          paragraphs: [
            "The NSW Department of Education assigns every child on a reserve list a band from A (best) to F (unlikely). The band is an estimate of when your child might receive an offer, based on how far that specific school's list moved in previous years.",
          ],
          bullets: [
            "Band A — offers typically reach this band within about one month. The best possible position.",
            "Band B — offers typically within about two months. A strong position.",
            "Band C — offers typically within about three months. A genuine possibility.",
            "Band D — offers typically within about four months. Possible but uncertain.",
            "Band E — offers typically within about five months. Less likely.",
            "Band F — an offer is unlikely based on recent history.",
          ],
        },
        {
          heading: "The timing is approximate, not a schedule",
          paragraphs: [
            "These timeframes are rough averages, not promises. A Band B child at one school might get an offer in three weeks, while a Band B child at another school waits four months or never receives one. The band reflects that school's history, but every year's actual movement is different.",
            "The only hard fact is the order: offers roll down from Band A towards Band F. A child can only receive an offer once the list has 'reached' their band at that school.",
          ],
        },
        {
          heading: "Same band, different schools, very different odds",
          paragraphs: [
            "This is the single most misunderstood point in the whole system. A Band C at a school whose list reliably moves to Band B or A each year is effectively a strong maybe. A Band C at a school whose list has barely moved past Band D for three years is effectively a no.",
            "In 2025, community-tracked data shows OC lists moved to Band B or better at 41 of 77 reporting schools — but many other schools never got past Band E. Selective lists moved even less: no school reached Band A, and only nine reached Band B.",
          ],
        },
        {
          heading: "How to check what your band really means",
          paragraphs: [
            "Look up your school's reserve history for the last two or three years. Compare the band the list reached each year against the band your child was assigned. If your band has historically been reached, your chances are good. If your band is below the worst historical result, an offer is unlikely.",
            "Our reserve estimator does exactly this comparison for you — enter your school and band, and it shows the historical bands reached and your estimated chance.",
          ],
        },
        {
          heading: "Your band does not change, but the list does",
          paragraphs: [
            "One more common confusion: your child's assigned band is fixed. It does not improve or worsen over time. What changes is the band the school's list has 'reached' — the Department publishes updates showing the minimum band that has received an offer. When that reaches your child's band, your child is next in line.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Is Band A guaranteed to get an offer?",
          a: "Not absolutely, but Band A is the strongest position and offers almost always reach it. The only exceptions are rare cases where a school's list barely moves at all. Even then, Band A children are first in line.",
        },
        {
          q: "Can my band change if the list moves further than expected?",
          a: "No. Your assigned band is fixed. If the list moves further than expected, it simply reaches more bands — including, potentially, yours. Your band itself never changes.",
        },
        {
          q: "Do OC and selective schools use the same band system?",
          a: "Yes, both use the same A to F band scale, but the actual movement patterns differ sharply. Selective lists tend to move more slowly and less far than OC lists, because selective offers are held for longer.",
        },
      ]}
      cta={{
        text: "Find out what your band means at your school",
        href: "/reserve-list",
        label: "Check your reserve odds",
      }}
    />
  );
}
