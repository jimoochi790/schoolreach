import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookIcon, ChartIcon, WaitlistIcon, SchoolIcon, SectionDivider } from "@/components/icons";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-20 pb-8 sm:pt-24 sm:pb-10 relative">
        <div className="absolute inset-0 bg-linear-to-b from-[oklch(0.92_0.05_235)]/40 to-transparent pointer-events-none" />
        <div className="relative">
        <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-balance leading-snug">
          Free tools for NSW parents navigating Opportunity Class and Selective
          High School placement.
        </h1>
        <p className="text-base text-muted-foreground mt-4 max-w-xl leading-relaxed">
          Enter your child&apos;s NAPLAN results to see which schools are within
          reach, or check your odds of getting an offer from the reserve list.
          Everything is free, no sign-up required.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/naplan-oc-estimator"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Try the NAPLAN estimator
          </Link>
          <Link
            href="/reserve-list"
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-muted/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            Check OC &amp; Selective reserve list
          </Link>
        </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 py-6 border-y border-border/40">
          <div className="text-center">
            <p className="text-2xl font-semibold tabular-nums">88</p>
            <p className="text-xs text-muted-foreground mt-0.5">OC schools</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold tabular-nums">48</p>
            <p className="text-xs text-muted-foreground mt-0.5">Selective schools</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold tabular-nums">3</p>
            <p className="text-xs text-muted-foreground mt-0.5">Years of reserve data</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold tabular-nums">0</p>
            <p className="text-xs text-muted-foreground mt-0.5">Cost or sign-up</p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/naplan-oc-estimator" className="block group">
            <Card className="h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                    <ChartIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      NAPLAN estimator
                    </p>
                    <h2 className="text-lg font-semibold mt-0.5">Year 3 → Opportunity Class</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Drag the dots on each NAPLAN band to match your child&apos;s
                  Year 3 results. We&apos;ll show you which of the 88 NSW OC
                  schools are realistic for Year 5 entry — sorted into Stretch,
                  Target, and Safe tiers.
                </p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                  88 schools · community-reported cutoffs · 2025 data
                </p>
              </CardContent>
              <div className="h-0.5 bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors" />
            </Card>
          </Link>

          <Link href="/naplan-selective-estimator" className="block group">
            <Card className="h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-violet-600 dark:text-violet-400 mt-0.5">
                    <ChartIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      NAPLAN estimator
                    </p>
                    <h2 className="text-lg font-semibold mt-0.5">Year 5 → Selective High School</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Same tool, for Year 5. Enter NAPLAN bands to see which of the
                  48 NSW Selective High Schools are within reach for Year 7
                  entry. All cutoffs are community-reported and updated for the
                  latest intake.
                </p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                  48 schools · community-reported cutoffs · 2025 data
                </p>
              </CardContent>
              <div className="h-0.5 bg-violet-500/20 group-hover:bg-violet-500/40 transition-colors" />
            </Card>
          </Link>

          <Link href="/reserve-list/oc" className="block group">
            <Card className="h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-teal-600 dark:text-teal-400 mt-0.5">
                    <WaitlistIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      Reserve list
                    </p>
                    <h2 className="text-lg font-semibold mt-0.5">OC waitlist odds</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your child got a reserve band — now what? Pick your OC school
                  and band (A–F) to see the historical likelihood of receiving
                  an offer. Based on 2024–2026 community-tracked reserve
                  movement for all 88 schools.
                </p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                  3 years of data · 88 schools · community-tracked
                </p>
              </CardContent>
              <div className="h-0.5 bg-teal-500/20 group-hover:bg-teal-500/40 transition-colors" />
            </Card>
          </Link>

          <Link href="/reserve-list/selective" className="block group">
            <Card className="h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-orange-600 dark:text-orange-400 mt-0.5">
                    <WaitlistIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      Reserve list
                    </p>
                    <h2 className="text-lg font-semibold mt-0.5">Selective waitlist odds</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Same tool for Selective High Schools. Pick your school,
                  pick your band, see the odds. Covers all 48 NSW selective
                  schools with 2024–2026 reserve band history.
                </p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                  3 years of data · 48 schools · community-tracked
                </p>
              </CardContent>
              <div className="h-0.5 bg-orange-500/20 group-hover:bg-orange-500/40 transition-colors" />
            </Card>
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold mb-8">How it works</h2>
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">
              01
            </div>
            <div>
              <h3 className="font-semibold mb-1">Enter your child&apos;s results</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For the NAPLAN estimator, you drag a dot on each subject bar
                to match your child&apos;s band. For the reserve list checker,
                you pick a school and your assigned reserve band (A through F).
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">
              02
            </div>
            <div>
              <h3 className="font-semibold mb-1">We compare against historical data</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The NAPLAN estimator maps band levels to placement scores using
                community-reported school cutoffs. The reserve list checker
                compares your band against how far the waitlist moved at that
                school in 2024, 2025, and 2026.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">
              03
            </div>
            <div>
              <h3 className="font-semibold mb-1">You get a clear picture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Schools are shown as Stretch, Target, or Safe. Reserve list
                results show your odds as a percentage. Everything is an
                estimate — use it as a starting point, not a guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* NAPLAN info */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <div className="text-muted-foreground/40 mb-3">
              <BookIcon className="w-9 h-9" />
            </div>
            <h2 className="text-xl font-semibold mb-3">What is NAPLAN?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              NAPLAN (National Assessment Program — Literacy and Numeracy) is
              an annual test for Australian students in Years 3, 5, 7 and 9.
              It covers numeracy, reading, writing, spelling, and grammar.
              Results are reported as bands — Exceeding, Strong, Developing,
              or Needs additional support.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              NAPLAN results are a key ingredient in Opportunity Class and
              Selective High School placement. While the placement test itself
              carries the most weight, strong NAPLAN bands are a good indicator
              of readiness.
            </p>
            <p>
              Our cutoff data is community-reported from past intake rounds.
              Cutoffs vary year to year depending on the applicant pool and
              available places. Treat every number as indicative — check the
              NSW Department of Education for official guidance.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* OC & Selective */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold mb-8">OC and Selective Schools in NSW</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border-l-[3px] border-l-blue-500 border border-border/60 hover:shadow-sm transition-all">
            <div className="text-blue-500/40 mb-3">
              <SchoolIcon className="w-7 h-7" />
            </div>
            <h3 className="text-base font-semibold mb-2">Opportunity Classes</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              For high-achieving Year 4 students aiming for Year 5 entry.
              Around 75 OC classes across NSW public primary schools.
              Students sit the OC Placement Test in Year 4.
            </p>
            <p className="text-xs text-muted-foreground/50">
              Highly competitive in Sydney metro. Many families start
              preparation in Year 3.
            </p>
          </div>
          <div className="p-5 rounded-xl border-l-[3px] border-l-violet-500 border border-border/60 hover:shadow-sm transition-all">
            <div className="text-violet-500/40 mb-3">
              <SchoolIcon className="w-7 h-7" />
            </div>
            <h3 className="text-base font-semibold mb-2">Selective High Schools</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              For high-achieving Year 6 students aiming for Year 7 entry.
              Over 40 fully and partially selective schools across NSW.
              Students sit the Selective Placement Test in Year 6.
            </p>
            <p className="text-xs text-muted-foreground/50">
              Top schools like James Ruse and Baulkham Hills have cutoff
              scores above 230 out of 300.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold mb-6">Frequently asked questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "How accurate are these tools?",
              a: "They provide estimates based on community-reported data from past years. Cutoffs and reserve list movement change every intake, so treat the numbers as a guide rather than a prediction. Always check with the NSW Department of Education for official information.",
            },
            {
              q: "Where does the data come from?",
              a: "Cutoff scores and reserve bands are crowdsourced from parent forums, community trackers, and publicly available NSW Department of Education publications. We combine multiple years to give a fuller picture.",
            },
            {
              q: "Are you affiliated with the NSW Government?",
              a: "No. School Reach is independent. We are not connected to NAPLAN, ACARA, or the NSW Department of Education.",
            },
            {
              q: "Does a good NAPLAN band guarantee a spot?",
              a: "No. Placement depends mostly on the OC or Selective Placement Test and school assessment scores. NAPLAN bands are a useful readiness check, not a deciding factor.",
            },
            {
              q: "How should we prepare?",
              a: "Past papers, vocabulary building, and problem-solving practice help. Many families use tutoring or online practice exams. Start early and keep it low-pressure — the test is only one part of the picture.",
            },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 className="font-medium mb-1 text-sm">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-muted/40 border border-border/40 px-6 py-10 text-center">
          <h2 className="text-xl font-semibold mb-2">Ready to check your child&apos;s chances?</h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
            Pick a tool and get started. No sign-up, no data collected —
            everything runs in your browser.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/naplan-oc-estimator"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              Estimate OC schools
            </Link>
            <Link
              href="/naplan-selective-estimator"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              Estimate Selective schools
            </Link>
            <Link
              href="/reserve-list"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-muted/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Check reserve list odds
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/50 mt-6 max-w-md mx-auto">
            All tools provide estimates based on community-reported historical
            data. Not affiliated with NAPLAN, ACARA, or the NSW Department of
            Education. Always verify with official sources.
          </p>
        </div>
      </section>
    </>
  );
}
