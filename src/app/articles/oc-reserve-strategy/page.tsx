import type { Metadata } from "next";
import ArticleShell from "@/components/article-shell";

export const metadata: Metadata = {
  title: "OC Reserve List Strategy: What to Do When You Get a Band",
  description:
    "A practical strategy guide for NSW parents who received an Opportunity Class reserve band. Learn what your band means, when offers move, and how to decide whether to wait or move on.",
  keywords: [
    "OC reserve list strategy",
    "OC reserve band meaning",
    "what to do OC reserve list",
    "opportunity class reserve NSW",
    "OC reserve list timeline",
    "Year 5 OC entry reserve",
  ],
};

export default function OCReserveStrategyArticle() {
  return (
    <ArticleShell
      category="Articles · OC Placement"
      title="OC Reserve List Strategy: What to Do When You Get a Band"
      subtitle="Your child is on an Opportunity Class reserve list and you're wondering what happens next. Here's a clear, practical strategy based on how NSW reserve lists actually work."
      date="August 2026"
      readTime="6 min read"
      sections={[
        {
          heading: "First, understand what your band actually means",
          paragraphs: [
            "When your child is placed on an OC reserve list, the outcome letter shows a band from A to F. This band is the Department of Education's estimate of when your child might receive an offer, based on how far that school's list moved in previous years.",
            "Band A is the best position — it means offers typically reach your child within about a month. Band B means roughly two months, and so on down to Band F, where an offer is unlikely. These are estimates, not guarantees: a school whose list moved to Band B last year might only reach Band D this year, or it might reach Band A.",
          ],
        },
        {
          heading: "The single most important rule: accept every firm offer",
          paragraphs: [
            "If your child received an offer from a lower-choice school AND a reserve band at a higher-choice school, accept the offer immediately. Accepting does not remove your child from any reserve list — the two processes run completely independently.",
            "If a place later opens at the higher-choice school, you simply accept the new offer and your original place is released to the next child on that list. There is no downside to accepting, and a very real downside to declining: decline all offers and your child forfeits all placement in the OC system.",
          ],
        },
        {
          heading: "How the OC reserve list actually moves",
          paragraphs: [
            "Reserve lists move when families with firm offers decline them. Each decline opens a place, which goes to the next child on the reserve list, in score order. The list is not a queue you can influence — you cannot do anything to speed up or improve your position.",
            "Most movement happens in the first three to four months after outcomes are released. Our own community-tracked data shows that in 2025, the OC reserve list moved to Band B or better at 41 of 77 schools that reported data, while many other schools never moved past Band E. The variation between schools is enormous.",
          ],
        },
        {
          heading: "A realistic strategy, band by band",
          paragraphs: [
            "Your strategy depends on where your band sits relative to that school's recent history:",
          ],
          bullets: [
            "Band A or B: An offer is very likely. Stay the course, but still accept any firm offer you hold as a safety net.",
            "Band C: A genuine possibility. Keep your firm offer, monitor the list, and prepare for both outcomes.",
            "Band D: Possible but not certain. Treat this as a maybe — keep your child's other schooling options fully in motion.",
            "Band E or F: An offer is unlikely based on recent years. Plan as if you are not getting in, and treat any later offer as a pleasant surprise.",
          ],
        },
        {
          heading: "What to do while you wait",
          paragraphs: [
            "Waiting is the hardest part, but there is nothing to 'do' that improves your position. Your child's place on the list is fixed. What you can do: accept any firm offer you have, check the Department's reserve list updates periodically, and keep your child's other options (local school, alternate programs) progressing normally.",
            "Do not put other decisions on hold waiting for a reserve offer. Enrol at the school where your child has a confirmed place. If a reserve offer arrives later, you can switch — that is exactly what the system is designed to allow.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Can I improve my child's position on the OC reserve list?",
          a: "No. Reserve list positions are fixed in score order when outcomes are released. There is no appeal process, no way to add information, and nothing you can do to move up. The only thing that changes a list is families declining offers ahead of you.",
        },
        {
          q: "How long does the OC reserve list stay open?",
          a: "OC reserve lists generally remain active through the first term of the school year, and sometimes beyond. Most offers, however, go out in the first three to four months. If your child has not received an offer by the end of Term 1, the realistic chance of one is low.",
        },
        {
          q: "Does my band change as the list moves?",
          a: "Your child's assigned band stays the same. What changes is the band that has 'reached' an offer at each school — the Department publishes updates as offers roll out. If the school's list reaches your child's band, your child receives the next available offer.",
        },
      ]}
      cta={{
        text: "Check the historical movement at your school",
        href: "/reserve-list/oc",
        label: "Try the OC reserve estimator",
      }}
    />
  );
}
