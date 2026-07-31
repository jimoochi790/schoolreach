import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-20">
      {/* Hero */}
      <section className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Free Tools for NSW Parents
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
          Helping Parents Navigate OC & Selective Schools
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          Understand your child&apos;s chances with our free NAPLAN estimator
          and reserve list checker. Built for NSW parents, using
          community-reported data.
        </p>
      </section>

      {/* Tools Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Our Tools</h2>
          <p className="text-muted-foreground mt-1">
            Free, no sign-up required
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/oc" className="block group">
            <Card className="h-full transition-all duration-200 hover:shadow-xl hover:border-primary/30 group-hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle className="text-2xl">NAPLAN → OC Estimator</CardTitle>
                <CardDescription className="text-base">
                  Year 3 NAPLAN to Opportunity Class placement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enter your child&apos;s Year 3 NAPLAN bands to see which of
                  the 88 NSW Opportunity Class schools are within reach for
                  Year 5 entry.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/selective" className="block group">
            <Card className="h-full transition-all duration-200 hover:shadow-xl hover:border-primary/30 group-hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle className="text-2xl">NAPLAN → Selective Estimator</CardTitle>
                <CardDescription className="text-base">
                  Year 5 NAPLAN to Selective High School placement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enter your child&apos;s Year 5 NAPLAN bands to see which of
                  the 48 NSW Selective High Schools are realistic for Year 7
                  entry.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/reserve-list/oc" className="block group">
            <Card className="h-full transition-all duration-200 hover:shadow-xl hover:border-primary/30 group-hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle className="text-2xl">OC Reserve List Checker</CardTitle>
                <CardDescription className="text-base">
                  What are the chances of an OC offer from the waitlist?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Select your OC school and reserve band to see the likelihood
                  of receiving a placement offer, based on 2024–2026 community
                  data. Covers all 88 OC schools.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/reserve-list/selective" className="block group">
            <Card className="h-full transition-all duration-200 hover:shadow-xl hover:border-primary/30 group-hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle className="text-2xl">Selective Reserve List Checker</CardTitle>
                <CardDescription className="text-base">
                  What are the chances of a Selective offer from the waitlist?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Select your selective school and reserve band to see the
                  likelihood of receiving a Year 7 placement offer. Covers all
                  48 NSW selective high schools.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <Alert className="bg-amber-50/80 border-amber-200 text-amber-800">
        <AlertDescription className="text-sm leading-relaxed">
          <strong>Important:</strong> All tools on School Reach provide
          estimates based on community-reported historical data. They are not
          official prediction tools. Actual outcomes depend on placement test
          performance, school assessment scores, and the cohort each year.
          Always verify with the NSW Department of Education.
        </AlertDescription>
      </Alert>

      {/* How it works */}
      <section className="space-y-6">
        <Separator />
        <h2 className="text-xl font-semibold pt-2">How our tools work</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">
              1
            </div>
            <h3 className="font-medium mt-3">Enter scores or band</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For the NAPLAN estimator, drag the dots to match your
              child&apos;s bands. For the reserve list checker, pick your
              school and reserve band.
            </p>
          </div>
          <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">
              2
            </div>
            <h3 className="font-medium mt-3">We estimate your chances</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our tools map your inputs against community-reported school
              cutoffs and historical reserve list movement from 2024–2026.
            </p>
          </div>
          <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">
              3
            </div>
            <h3 className="font-medium mt-3">Plan with confidence</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              See which schools are Stretch, Target, or Safe — or understand
              your reserve list chances — so you can make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* What is NAPLAN */}
      <section className="space-y-6">
        <Separator />
        <h2 className="text-2xl font-semibold">What is NAPLAN?</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              NAPLAN (National Assessment Program — Literacy and Numeracy) is
              an annual assessment for Australian students in Years 3, 5, 7 and
              9. It measures skills in five domains:{" "}
              <strong className="text-foreground">numeracy</strong>,{" "}
              <strong className="text-foreground">reading</strong>,{" "}
              <strong className="text-foreground">writing</strong>,{" "}
              <strong className="text-foreground">spelling</strong> and{" "}
              <strong className="text-foreground">grammar</strong>.
            </p>
            <p>
              Results are reported across four proficiency bands:{" "}
              <strong>Exceeding</strong>, <strong>Strong</strong>,{" "}
              <strong>Developing</strong> and{" "}
              <strong>Needs additional support</strong>. These bands help
              parents and teachers understand a child&apos;s performance
              relative to the national standard.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              NAPLAN results are one of the key factors in determining
              eligibility for NSW Opportunity Class (OC) placements in Year 5
              and Selective High School placements in Year 7. While the
              placement test score carries the most weight, strong NAPLAN
              results can indicate readiness.
            </p>
            <p>
              Our tools combine community-reported historical data with your
              child&apos;s bands to produce realistic estimates — designed to
              help parents make informed decisions about school applications.
            </p>
          </div>
        </div>
      </section>

      {/* OC & Selective info */}
      <section className="space-y-6">
        <Separator />
        <h2 className="text-2xl font-semibold">OC and Selective Schools in NSW</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3 p-6 rounded-xl bg-muted/30 border border-border/50">
            <h3 className="text-lg font-semibold">Opportunity Classes (OC)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>&bull; For high-achieving Year 4 students, with entry in Year 5</li>
              <li>&bull; Available at approximately 75 public primary schools across NSW</li>
              <li>&bull; Students sit the OC Placement Test in Year 4</li>
              <li>&bull; Placement combines test scores with school assessment scores</li>
              <li>&bull; Highly competitive in metropolitan areas like Sydney</li>
            </ul>
          </div>
          <div className="space-y-3 p-6 rounded-xl bg-muted/30 border border-border/50">
            <h3 className="text-lg font-semibold">Selective High Schools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>&bull; For high-achieving Year 6 students, with entry in Year 7</li>
              <li>&bull; Over 40 fully and partially selective schools across NSW</li>
              <li>&bull; Students sit the Selective High School Placement Test</li>
              <li>&bull; Entry is determined by test performance and school assessments</li>
              <li>&bull; Some schools have cutoff scores above 230 out of 300</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <Separator />
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How accurate are the School Reach tools?",
              a: "Our tools provide estimates based on community-reported historical data from previous years. They are designed as guides — not guarantees. Actual placement outcomes vary each year based on the applicant cohort, test difficulty, and school capacity.",
            },
            {
              q: "Where does the data come from?",
              a: "Cutoff scores and reserve list bands are sourced from parent communities, school forums, and publicly available NSW Department of Education data. Figures should be treated as indicative — they fluctuate annually.",
            },
            {
              q: "Is School Reach affiliated with the NSW Department of Education?",
              a: "No. School Reach is an independent resource. We are not affiliated with NAPLAN, ACARA, or the NSW Department of Education. Always verify important decisions with official sources.",
            },
            {
              q: "Does my child's NAPLAN band guarantee placement?",
              a: "No. Placement is primarily determined by the OC or Selective Placement Test, plus school assessment scores. NAPLAN bands provide a useful readiness indicator but are not the deciding factor.",
            },
            {
              q: "How do I prepare my child for the test?",
              a: "We recommend familiarising your child with the test format through past papers, building vocabulary and problem-solving skills, and considering structured practice. Many parents also use tutoring services and online practice exams.",
            },
          ].map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-muted/20 border border-border/40">
              <h3 className="font-medium text-base mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
