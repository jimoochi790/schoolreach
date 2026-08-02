import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: "About — How School Reach Works",
  description:
    "Learn how School Reach estimates OC and Selective school placement chances. Methodology, data sources, tier explanations, and FAQ about estimated cutoffs for NSW opportunity classes and selective high schools.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">About School Reach</h1>

      <Alert className="bg-amber-50 border-amber-200 text-amber-800">
        <AlertDescription className="text-sm">
          <strong>Disclaimer:</strong> This tool provides estimates only. It is not
          affiliated with NAPLAN, ACARA, or the NSW Department of Education. School
          cutoff scores are based on community-reported historical data and may not
          reflect current entry requirements.
        </AlertDescription>
      </Alert>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How the estimation works</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            The estimator uses your child&apos;s NAPLAN scores across five domains
            (Reading, Writing, Spelling, Grammar &amp; Punctuation, and Numeracy) to
            calculate an estimated placement score on a 0&ndash;300 scale.
          </p>
          <p>
            <strong>For Opportunity Classes (Year 3 NAPLAN):</strong> The English
            domains (Reading, Writing, Spelling, Grammar) are averaged to form an
            English composite, which is weighted at 40%. Numeracy is weighted at
            60%. This reflects the emphasis on mathematical reasoning in the OC
            placement test.
          </p>
          <p>
            <strong>For Selective High Schools (Year 5 NAPLAN):</strong> English
            composite is weighted at 30%, Numeracy at 30%, and an estimated
            Thinking Skills score (derived from the average of English and Numeracy)
            at 40%. This mirrors the new Selective High School Placement Test
            structure.
          </p>
          <p>
            The raw composite is mapped from the NAPLAN 0&ndash;1000 scale to the
            placement test 0&ndash;300 scale. A margin of &plusmn;15 points (OC)
            or &plusmn;18 points (Selective) is added to account for yearly
            variation and the gap between NAPLAN performance and placement test
            outcomes.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Understanding the tiers</h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Safety</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Your estimated score range is above the school&apos;s typical cutoff
              range. These are schools where your child is likely competitive based
              on NAPLAN performance alone.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Target</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Your estimated score range overlaps with the school&apos;s typical
              cutoff range. These are realistic options where placement test
              performance will be the deciding factor.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Reach</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Your estimated score is below the school&apos;s typical cutoff, but
              within a reasonable range. A strong placement test performance could
              make these schools competitive.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data sources & accuracy</h2>
        <div className="text-sm text-muted-foreground space-y-3">
          <p>
            <strong>School lists</strong> are sourced from the NSW Department of Education
            (via official publications), Wikipedia, and community education sites. All 76 OC
            schools and 44 selective high schools listed are officially recognised by the Department.
          </p>
          <p>
            <strong>Cutoff scores are community estimates.</strong> The NSW Department
            of Education does not publish minimum entry scores. The cutoff ranges shown
            are based on data scraped from:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Mockstar</strong> &mdash; OC school rankings with tier-based cutoff ranges</li>
            <li><strong>SelectiveExams</strong> &mdash; Selective school cutoff score estimates</li>
            <li><strong>Wikipedia</strong> &mdash; Official school lists and locations</li>
            <li><strong>Community consensus</strong> &mdash; Parent forums and tutoring centre reports</li>
          </ul>
          <p>
            Every school card is labelled with an &ldquo;Estimated&rdquo; badge and a confidence
            range (e.g. &plusmn;5, &plusmn;10, &plusmn;15) to indicate the degree of uncertainty.
          </p>
          <p>
            Cutoff scores can vary significantly from year to year depending on:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>The number of applicants</li>
            <li>The difficulty of the placement test</li>
            <li>School assessment score variations</li>
            <li>Changes to the selection process</li>
          </ul>
          <p>
            We recommend using this tool as a <strong>rough guide</strong> and
            verifying with school open days, tutoring centres, and the official
            NSW Department of Education placement information.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Privacy</h2>
        <div className="text-sm text-muted-foreground">
          <p>
            All score processing happens entirely in your browser. No data is
            sent to any server, stored, or tracked. The share link simply encodes
            your scores in the URL parameters — no database involved.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="space-y-4 text-sm">
          <div className="space-y-1">
            <h3 className="font-medium">Why isn&apos;t there an exact cutoff for each school?</h3>
            <p className="text-muted-foreground">
              The NSW Department of Education does not publish minimum entry
              scores. Cutoffs vary every year based on the applicant pool and
              are only known retrospectively through community-collected data.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">How accurate is this?</h3>
            <p className="text-muted-foreground">
              Our data is crowd-sourced and may be off by 5&ndash;15 points
              depending on the school and year. &ldquo;Reach&rdquo; estimates
              are the least reliable — they represent aspirational outcomes
              that would require exceptional placement test performance.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">Can I submit updated cutoff data?</h3>
            <p className="text-muted-foreground">
              Not yet — this feature is in development. In future, parents who
              receive offers will be able to anonymously submit their scores
              and offer results to improve the dataset for everyone.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">What about other states?</h3>
            <p className="text-muted-foreground">
              Currently this tool covers NSW only. Other states (VIC SEAL
              programs, QLD Selective Academies, WA GATE) may be added in
              future based on demand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
