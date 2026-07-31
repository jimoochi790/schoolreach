import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ReserveListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <section className="text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Reserve List Tool
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          Reserve List Chance Estimator
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance">
          Find out the likelihood of receiving an offer from the OC or Selective
          school reserve list, based on historical data.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 gap-6">
        <Link href="/reserve-list/selective" className="block group">
          <Card className="h-full transition-all duration-200 hover:shadow-xl hover:border-primary/30 group-hover:-translate-y-0.5">
            <CardHeader>
              <CardTitle className="text-2xl">Selective Schools</CardTitle>
              <CardDescription className="text-base">
                Year 7 entry reserve list estimator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Select your child&apos;s selective high school and reserve band
                to see the chance of receiving a placement offer. Covers all 48
                NSW selective high schools with data from 2024–2026.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/reserve-list/oc" className="block group">
          <Card className="h-full transition-all duration-200 hover:shadow-xl hover:border-primary/30 group-hover:-translate-y-0.5">
            <CardHeader>
              <CardTitle className="text-2xl">Opportunity Classes</CardTitle>
              <CardDescription className="text-base">
                Year 5 entry reserve list estimator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Select your child&apos;s Opportunity Class school and reserve
                band to see the chance of receiving a placement offer. Covers
                all 88 NSW OC schools with data from 2024–2026.
              </p>
            </CardContent>
          </Card>
        </Link>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">How reserve lists work</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">1</div>
            <h3 className="font-medium mt-3">You get a band</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When placed on a reserve list, the outcome letter shows a band
              from A (best) to F (unlikely) estimating your chances.
            </p>
          </div>
          <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">2</div>
            <h3 className="font-medium mt-3">Offers roll down</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              As families decline offers, places open up and the reserve list
              moves band by band over several months.
            </p>
          </div>
          <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">3</div>
            <h3 className="font-medium mt-3">Bands are estimates</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on last year&apos;s movement — not guarantees. Actual lists
              vary depending on how many families accept or decline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
