import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  ClipboardList,
  School,
  GraduationCap,
  BarChart3,
  Search,
  ShieldCheck,
  BookOpen,
  Users,
  Award,
  ChevronRight,
  Star,
} from "lucide-react";

const tools = [
  {
    href: "/oc",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-500",
    border: "border-t-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    title: "NAPLAN → OC Estimator",
    desc: "Year 3 NAPLAN to Opportunity Class placement",
    detail: "See which of 88 NSW OC schools are within reach for Year 5 entry based on your child's NAPLAN bands.",
    stat: "88 schools",
  },
  {
    href: "/selective",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-500",
    border: "border-t-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    title: "NAPLAN → Selective Estimator",
    desc: "Year 5 NAPLAN to Selective High School placement",
    detail: "See which of 48 Selective High Schools are realistic for Year 7 entry based on NAPLAN bands.",
    stat: "48 schools",
  },
  {
    href: "/reserve-list/oc",
    icon: ClipboardList,
    color: "from-emerald-500 to-teal-500",
    border: "border-t-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    title: "OC Reserve List Checker",
    desc: "Chances of an OC offer from the waitlist",
    detail: "Based on 2024–2026 community-tracked reserve band movement across all 88 OC schools.",
    stat: "3yr data",
  },
  {
    href: "/reserve-list/selective",
    icon: Users,
    color: "from-amber-500 to-orange-500",
    border: "border-t-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    title: "Selective Reserve List Checker",
    desc: "Chances of a Selective offer from the waitlist",
    detail: "Based on 2024–2026 community-tracked reserve band movement across all 48 selective schools.",
    stat: "3yr data",
  },
];

const steps = [
  {
    icon: Search,
    title: "Enter scores or band",
    desc: "For the NAPLAN estimator, drag the dots to match your child's bands. For the reserve list checker, pick your school and reserve band.",
  },
  {
    icon: BarChart3,
    title: "We estimate your chances",
    desc: "Our tools map your inputs against community-reported school cutoffs and historical reserve list movement from 2024–2026.",
  },
  {
    icon: ShieldCheck,
    title: "Plan with confidence",
    desc: "See which schools are Stretch, Target, or Safe — or understand your reserve list chances — so you can make informed decisions.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 py-20 sm:py-28 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
            <Star className="w-3.5 h-3.5" />
            Free Tools for NSW Parents
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
            Helping Parents Navigate
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              OC & Selective Schools
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Free NAPLAN estimator, reserve list checker, and school guides.
            Built for NSW parents, using community-reported data.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/oc"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              Try NAPLAN Estimator
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/reserve-list"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background font-medium text-sm hover:bg-muted transition-colors"
            >
              Check Reserve List
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-5xl mx-auto px-4 pb-20 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Tools</h2>
          <p className="text-muted-foreground">Free, no sign-up required</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.href} href={tool.href} className="block group">
                <Card className={`h-full border-t-[3px] ${tool.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`p-2.5 rounded-xl ${tool.bg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        {tool.stat}
                      </span>
                    </div>
                    <CardTitle className="text-xl mt-3">{tool.title}</CardTitle>
                    <CardDescription className="text-sm">{tool.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.detail}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <Alert className="bg-amber-50/80 border-amber-200 text-amber-800">
          <AlertDescription className="text-sm leading-relaxed">
            <strong>Important:</strong> All tools provide estimates based on
            community-reported historical data. They are not official
            prediction tools. Always verify with the NSW Department of
            Education.
          </AlertDescription>
        </Alert>
      </div>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <Separator className="mb-12" />
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">How our tools work</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative group p-6 rounded-2xl border border-border/60 bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                  {i + 1}
                </div>
                <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* What is NAPLAN */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <Separator className="mb-12" />
        <div className="grid sm:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Learn
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">What is NAPLAN?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NAPLAN (National Assessment Program — Literacy and Numeracy) is
              an annual assessment for Australian students in Years 3, 5, 7
              and 9. It measures skills in five domains:{" "}
              <strong className="text-foreground">numeracy</strong>,{" "}
              <strong className="text-foreground">reading</strong>,{" "}
              <strong className="text-foreground">writing</strong>,{" "}
              <strong className="text-foreground">spelling</strong> and{" "}
              <strong className="text-foreground">grammar</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Results are reported across four proficiency bands:{" "}
              <strong>Exceeding</strong>, <strong>Strong</strong>,{" "}
              <strong>Developing</strong> and{" "}
              <strong>Needs additional support</strong>.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Award, label: "OC Placement", text: "NAPLAN results help determine eligibility for Opportunity Class (OC) placements in Year 5." },
              { icon: GraduationCap, label: "Selective Entry", text: "Strong NAPLAN results indicate readiness for Selective High School placement in Year 7." },
              { icon: School, label: "NSW Schools", text: "Covers all 88 OC and 48 Selective schools across NSW with community-reported cutoff data." },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/40">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <ItemIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OC & Selective */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <Separator className="mb-12" />
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">OC and Selective Schools in NSW</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800">
            <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/40 w-fit mb-4">
              <School className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">Opportunity Classes (OC)</h3>
            <p className="text-sm text-muted-foreground mb-4">Year 5 entry for high-achieving Year 4 students</p>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                Available at 75+ public primary schools across NSW
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                Students sit the OC Placement Test in Year 4
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                Placement combines test scores with school assessments
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                Highly competitive in metropolitan areas like Sydney
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border border-violet-200 dark:border-violet-800">
            <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-900/40 w-fit mb-4">
              <GraduationCap className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">Selective High Schools</h3>
            <p className="text-sm text-muted-foreground mb-4">Year 7 entry for high-achieving Year 6 students</p>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                Over 40 fully and partially selective schools across NSW
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                Students sit the Selective High School Placement Test
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                Entry determined by test performance and school assessments
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-500 mt-1">•</span>
                Some schools have cutoff scores above 230 out of 300
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <Separator className="mb-12" />
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
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
            <details key={faq.q} className="group rounded-xl border border-border/40 bg-background">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-medium select-none marker:content-none">
                {faq.q}
                <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 flex-shrink-0" />
              </summary>
              <div className="px-5 pb-5 -mt-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
