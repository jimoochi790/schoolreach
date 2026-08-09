import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionDivider, WaitlistIcon } from "@/components/icons";

export default function ReserveListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="py-20">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug">
          Check your child&apos;s chances of receiving an offer from the OC or
          Selective school reserve list.
        </h1>
        <p className="text-base text-muted-foreground mt-5 max-w-xl leading-relaxed">
          Your child got a reserve band and you&apos;re wondering if an offer
          will come through. Pick your school type below to see the historical
          odds.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Link href="/reserve-list/selective" className="block group">
          <Card className="h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-4">
                <div className="text-amber-600 dark:text-amber-400 mt-0.5">
                  <WaitlistIcon className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                    Reserve list
                  </p>
                  <h2 className="text-lg font-semibold mt-0.5">Selective High Schools</h2>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pick your selective school and reserve band (A-F) to see the
                likelihood of receiving a Year 7 placement offer.
              </p>
              <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                48 schools · 3 years of data · community-tracked
              </p>
            </CardContent>
            <div className="h-0.5 bg-amber-500/20 group-hover:bg-amber-500/40 transition-colors" />
          </Card>
        </Link>

        <Link href="/reserve-list/oc" className="block group">
          <Card className="h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-4">
                <div className="text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <WaitlistIcon className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                    Reserve list
                  </p>
                  <h2 className="text-lg font-semibold mt-0.5">Opportunity Classes</h2>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pick your OC school and reserve band (A-F) to see the
                likelihood of receiving a Year 5 placement offer.
              </p>
              <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                88 schools · 3 years of data · community-tracked
              </p>
            </CardContent>
            <div className="h-0.5 bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-colors" />
          </Card>
        </Link>
      </div>

      <SectionDivider />

      <section className="py-16">
        <h2 className="text-xl font-bold mb-8">How reserve lists work</h2>
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              01
            </div>
            <div>
              <h3 className="font-semibold mb-1">You get a band</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When your child is placed on a reserve list, the outcome
                letter shows a band from A (best) to F (unlikely) estimating
                your chances based on last year&apos;s movement.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              02
            </div>
            <div>
              <h3 className="font-semibold mb-1">Offers roll down</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As families decline their initial offers, places open up. The
                reserve list moves band by band over several months, from A
                through to F.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              03
            </div>
            <div>
              <h3 className="font-semibold mb-1">Bands are estimates</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Based on last year&apos;s movement, not guarantees. The actual
                list can move further or less depending on how many families
                accept or decline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
