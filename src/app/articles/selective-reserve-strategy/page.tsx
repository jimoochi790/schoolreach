import type { Metadata } from "next";
import ArticleShell from "@/components/article-shell";

export const metadata: Metadata = {
  title: "Selective School Reserve List Strategy: A Parent's Guide",
  description:
    "What to do when your child is on a NSW selective high school reserve list. Band meanings, realistic timelines, and a clear strategy for whether to wait or move on.",
  keywords: [
    "selective school reserve list strategy",
    "selective reserve band meaning",
    "what to do selective reserve list",
    "NSW selective reserve strategy",
    "selective school reserve timeline",
    "Year 7 selective entry reserve",
  ],
};

export default function SelectiveReserveStrategyArticle() {
  return (
    <ArticleShell
      category="Articles · Selective Placement"
      title="Selective School Reserve List Strategy: A Parent's Guide"
      subtitle="Selective school reserve lists move slowly and unpredictably. Here's how to read your band, what to expect, and the strategy that protects your child's options."
      date="August 2026"
      readTime="6 min read"
      sections={[
        {
          heading: "Selective reserve lists move differently from OC lists",
          paragraphs: [
            "The biggest mistake parents make is assuming selective reserve lists behave like OC lists. They do not. Selective schools are far more sought-after, families hold their offers for longer, and as a result the lists move much more slowly and less predictably.",
            "Our community-tracked data from 2025 shows this clearly: across the 41 selective schools that reported reserve movement, no school's list reached Band A. Only nine schools reached Band B. More than half the lists ended the year at Band D, E, or F — meaning many families on those lists never received an offer at all.",
          ],
        },
        {
          heading: "Read your band against your school's real history",
          paragraphs: [
            "Your band only means something in the context of the specific school you are waitlisted at. A Band C at a school whose list rarely moves past Band B is effectively a no. A Band C at a school that regularly reaches Band B or A is a genuine maybe.",
            "Do not rely on the band letter alone. Look up your school's reserve history for the last two or three years — our reserve estimator shows this data for every school. That historical pattern is the single best predictor of what your band means this year.",
          ],
        },
        {
          heading: "The strategy: protect what you have, watch, and stay flexible",
          paragraphs: [
            "The core strategy for selective reserve lists has three parts:",
          ],
          bullets: [
            "Accept every firm offer you hold. This is non-negotiable. Accepting costs you nothing and keeps every option open.",
            "Check the Department's reserve list updates regularly during the offer period, roughly fortnightly through Term 4.",
            "Keep your child's confirmed school placement fully enrolled and normal. Do not keep a place in limbo waiting on a maybe.",
          ],
        },
        {
          heading: "What 'no offer by Christmas' usually means",
          paragraphs: [
            "A useful rule of thumb: the bulk of selective reserve movement happens between late August and late December, with a second smaller wave in January as families finalise moves. If your child has not received an offer by the start of the school year, the realistic chance of one is low — though a handful of places do move in the first weeks of Term 1.",
            "By the end of January, it is wise to mentally close the chapter and fully commit to the school your child is enrolled at. Any offer that still arrives after that point is a bonus, not the plan.",
          ],
        },
        {
          heading: "Avoid these common mistakes",
          paragraphs: [
            "The most damaging mistakes we see are all variations of putting life on hold for a maybe. Specifically:",
          ],
          bullets: [
            "Declining a firm offer at a good school to 'wait' for a better reserve list — you forfeit everything and gain nothing.",
            "Not enrolling your child anywhere while waiting — every child has a guaranteed place at their local school, and you should hold it until a better offer materialises.",
            "Assuming this year will move like last year — lists move differently every single year, in both directions.",
          ],
        },
      ]}
      faqs={[
        {
          q: "How long do selective reserve lists stay open?",
          a: "Selective reserve lists remain active through at least the first term of Year 7, and sometimes longer. However, the large majority of offers go out between August and December. Movement after Term 1 is rare.",
        },
        {
          q: "Can I be on reserve lists for more than one selective school?",
          a: "No. You are placed on the reserve list for the single highest-choice school where your child did not quite reach the cutoff. Lower choices are superseded, so there is only ever one reserve list per child.",
        },
        {
          q: "What if I get an offer from a lower choice but I'm waiting on a higher choice reserve?",
          a: "Accept the lower-choice offer immediately. You remain on the higher-choice reserve list. If that school later makes an offer, you accept it and the lower-choice place is automatically released. This is the standard, intended flow of the system.",
        },
      ]}
      cta={{
        text: "Look up your school's reserve history",
        href: "/reserve-list/selective",
        label: "Try the selective reserve estimator",
      }}
    />
  );
}
