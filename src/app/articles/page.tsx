import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Articles & Guides for NSW Parents — School Reach",
  description:
    "Practical guides and strategy articles for NSW parents navigating OC and Selective school placement: reserve list strategies, offer decisions, and band explanations.",
  keywords: [
    "OC reserve strategy",
    "selective reserve strategy",
    "NSW placement articles",
    "reserve band guide",
    "OC selective parent guide",
    "school placement advice NSW",
  ],
};

const articles = [
  {
    href: "/articles/oc-reserve-strategy",
    label: "OC Reserve Strategy",
    title: "OC Reserve List Strategy: What to Do When You Get a Band",
    desc: "How to read your OC band, what movement to expect, and a band-by-band strategy for whether to wait or move on.",
    meta: "88 schools · 2025 data",
  },
  {
    href: "/articles/selective-reserve-strategy",
    label: "Selective Reserve Strategy",
    title: "Selective School Reserve List Strategy: A Parent's Guide",
    desc: "Why selective lists move slowly, how to read your band against your school's real history, and the mistakes to avoid.",
    meta: "48 schools · 2025 data",
  },
  {
    href: "/articles/accept-offer-or-wait",
    label: "Decision Guide",
    title: "Accept the Offer or Wait? A Decision Framework",
    desc: "Every scenario at outcomes time — offer only, reserve only, or both — and the clean answer for each.",
    meta: "All scenarios covered",
  },
  {
    href: "/articles/reserve-bands-explained",
    label: "Bands Explained",
    title: "Reserve Bands A to F: What Your Letter Means",
    desc: "A plain-English guide to the band system, approximate timing, and why the same band means different things at different schools.",
    meta: "A–F in plain English",
  },
];

export default function ArticlesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
          Articles &amp; Guides
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-2">
          Clear advice for OC &amp; Selective placement
        </h1>
        <p className="text-base text-muted-foreground mt-3 max-w-xl leading-relaxed">
          Strategy guides written for NSW parents, grounded in how the placement
          and reserve list system actually works.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-5">
        {articles.map((a) => (
          <Link key={a.href} href={a.href} className="block group">
            <Card className="h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-primary/50 mt-0.5">
                    <BookIcon className="w-9 h-9" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      {a.label}
                    </p>
                    <h2 className="text-base font-semibold mt-0.5 leading-snug">{a.title}</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">{a.meta}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
