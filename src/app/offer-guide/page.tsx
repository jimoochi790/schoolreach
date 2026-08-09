import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OC & Selective Offer Strategy: What to Do After Placement Outcomes",
  description:
    "Practical guide for NSW parents: what to do when you receive an OC or selective school placement outcome. Learn how offers and reserve lists work, when to accept, and how to navigate the system strategically.",
  keywords: [
    "NSW selective school offer guide",
    "OC placement outcome strategy",
    "accept offer while on reserve list",
    "selective school reserve list strategy",
    "NSW OC offer acceptance",
    "placement outcome guide for parents",
    "what to do after selective outcome",
    "opportunity class reserve strategy",
    "NSW placement outcome FAQ",
  ],
};

export default function OfferGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Should I accept an offer if my child is also on a reserve list for a higher-choice school?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Accept the offer you have. Accepting does not remove your child from any reserve list. If a place opens up at the higher-choice school, you can accept that offer instead.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I decline all offers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you decline every placement offer, your child forfeits all placement in the selective school or OC system. They cannot rejoin a reserve list or be considered for later rounds. Always accept at least one offer if you want to stay in the system.",
                },
              },
              {
                "@type": "Question",
                name: "How long do reserve lists stay active?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reserve lists remain active for at least the first term of the school year, and sometimes longer. Most movement happens in the first three to four months after outcomes are released. Band A offers typically go out within the first month, Band B within two months, and so on, though this varies by school.",
                },
              },
              {
                "@type": "Question",
                name: "Can my child move from an accepted offer to a reserve list offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. If you have accepted an offer for a lower-choice school and later receive a reserve list offer for a higher-choice school, you can accept the new offer. The NSW Department of Education will release your original place, which then goes to another student on the reserve list.",
                },
              },
              {
                "@type": "Question",
                name: "What do the reserve bands (A to F) actually mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reserve bands are the Department of Education's estimate of when your child might receive an offer. Band A is the best (highest chance, usually within about a month). Band B within about two months, and so on. Band F is the lowest and means an offer is unlikely. These are estimates based on previous years; actual movement varies per school and per year.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="py-10 sm:py-14">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
          Offer Strategy Guide
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-2 leading-tight">
          Your child got a placement outcome — now what?
        </h1>
        <p className="text-base text-muted-foreground mt-4 max-w-xl leading-relaxed">
          An offer, a reserve band, both at once — the NSW placement system can be
          confusing. Here is how it actually works, and what NSW parents should do
          at each step, based on the Department of Education&apos;s process.
        </p>
      </section>

      {/* Understanding outcomes */}
      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">Understanding your outcome letter</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          When placement outcomes are released (typically in August for selective schools,
          and shortly after for Opportunity Classes), your child will fall into one of
          four situations. The system is designed around your school choices, ranked
          in order of preference on your application.
        </p>
        <div className="space-y-4 mt-6">
          <div className="pl-4 border-l-2 border-emerald-500 py-1">
            <p className="font-semibold text-sm">1. An offer only</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Your child qualified for their highest-ranked school they were eligible for.
              You have a firm place. Accept it.
            </p>
          </div>
          <div className="pl-4 border-l-2 border-yellow-500 py-1">
            <p className="font-semibold text-sm">2. A reserve list position only</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Your child did not quite reach the cutoff for their listed schools,
              but they are on a reserve list with a band (A to F). No offer yet — you wait.
            </p>
          </div>
          <div className="pl-4 border-l-2 border-amber-500 py-1">
            <p className="font-semibold text-sm">3. Both — an offer AND a reserve position</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              This happens when your child qualifies for a lower-choice school (offer)
              and is also waitlisted for a higher-choice school (reserve). You get the
              best of both worlds: a firm place to fall back on, and a shot at moving up.
            </p>
          </div>
          <div className="pl-4 border-l-2 border-rose-500 py-1">
            <p className="font-semibold text-sm">4. No offer and no reserve position</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Your child did not qualify for any of their listed schools. The placement
              system cannot place them. Consider the local public school option (every
              child has a guaranteed place at their local school) or other pathways.
            </p>
          </div>
        </div>
      </section>

      {/* The golden rule */}
      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">
          The one rule NSW parents need to remember
        </h2>
        <div className="p-5 rounded-xl bg-muted/20 border border-border/40">
          <p className="text-lg font-semibold leading-snug">
            Always accept the offer you have.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
            Accepting an offer never hurts you. It does not remove your child from any
            reserve list. If a higher-choice school later makes an offer from the reserve
            list, you can switch — the Department of Education will release your original
            place automatically. If you decline every offer,
            <strong> your child forfeits all placement</strong> in the system and
            cannot be considered for further rounds.
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The only exception is if you have decided you would rather your child attend
          their local school regardless of any placement outcome. In that case, declining
          an offer is fine — you are not losing anything you wanted.
        </p>
      </section>

      {/* Scenario 3: both */}
      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">
          The &ldquo;both&rdquo; scenario: your best strategy
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          If your child received an offer for their second-choice school AND a reserve
          position for their first choice, here is exactly what to do:
        </p>
        <div className="space-y-6 mt-4">
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              01
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Accept the offer you have, right now
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Accepting your second-choice offer secures a place. It costs you nothing
                and does not affect your first-choice reserve list position at all.
                The two processes run independently.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              02
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Check your first-choice reserve band
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your outcome letter shows a band from A (best) to F (unlikely).
                Use our{" "}
                <a href="/reserve-list" className="text-primary hover:underline">
                  reserve list estimator
                </a>{" "}
                to check how far the list moved at that school in 2024 and 2025.
                If your band has historically received offers, the chances are strong.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              03
            </div>
            <div>
              <h3 className="font-semibold mb-1">
                Watch the reserve list and wait
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Department publishes reserve list movement updates during the
                placement period. If your first-choice school&apos;s list reaches your
                child&apos;s band, you will receive a new offer. At that point, you
                accept the new offer and your original place is released. No drama, no
                forms — the system handles the switch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How reserve lists actually work */}
      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">
          How reserve lists really work (and how fast they move)
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Reserve lists are not a queue where every child moves one by one. Here is
          the actual mechanism:
        </p>
        <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
          <li>
            Each school has an enrolment target. When families with offers decline
            their place, a spot opens up and the next student on the reserve list
            (by score order) receives an offer.
          </li>
          <li>
            The bands (A to F) are the Department&apos;s estimate of when that
            child might be reached, based entirely on how far the list moved at
            that school in previous years.
          </li>
          <li>
            Bands are not guarantees. In 2025, some OC schools&apos; lists moved
            all the way to Band A while others never left Band F. Movement depends
            entirely on how many families decline — no two years are identical.
          </li>
          <li>
            You do not need to &ldquo;do&rdquo; anything while on a reserve list.
            You simply wait. If an offer comes, the Department contacts you.
          </li>
        </ul>

        <div className="grid sm:grid-cols-3 gap-3 mt-6">
          {[
            { band: "A", label: "Within ~1 month", color: "bg-emerald-100 border-emerald-300 text-emerald-800" },
            { band: "B", label: "Within ~2 months", color: "bg-green-100 border-green-300 text-green-800" },
            { band: "C", label: "Within ~3 months", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
            { band: "D", label: "Within ~4 months", color: "bg-orange-100 border-orange-300 text-orange-800" },
            { band: "E", label: "Within ~5 months", color: "bg-red-100 border-red-300 text-red-800" },
            { band: "F", label: "Unlikely", color: "bg-rose-100 border-rose-300 text-rose-800" },
          ].map(({ band, label, color }) => (
            <div key={band} className={`rounded-lg border px-3 py-2.5 ${color}`}>
              <p className="text-xs font-semibold">Band {band}</p>
              <p className="text-xs opacity-80 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">Approximate timeline (typical year)</h2>
        <div className="space-y-4">
          {[
            { month: "October–February", event: "Applications open for the following year's entry" },
            { month: "May", event: "Placement test (computer-based, held in one sitting)" },
            { month: "August–September", event: "Outcomes released: offers, reserve list bands, and unsuccessful notices" },
            { month: "September–October", event: "First round of reserve list offers begins (Band A starts receiving offers)" },
            { month: "October–December", event: "Reserve lists continue to move; Bands B–C often receive offers during this window" },
            { month: "January–March", event: "Further reserve movement; some lists move through Band D and beyond" },
            { month: "End of Term 1", event: "Reserve lists typically close or slow to a halt. Most movement has finished by this point" },
          ].map(({ month, event }) => (
            <div key={month} className="flex gap-4 items-start">
              <p className="text-xs font-mono text-muted-foreground/50 w-28 flex-shrink-0 pt-0.5">
                {month}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{event}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/60 leading-relaxed mt-4">
          These dates are indicative — the Department of Education publishes
          exact dates each year on the selective high schools and opportunity
          classes website. Check the official site for current-year timelines.
        </p>
      </section>

      {/* FAQ */}
      <section className="space-y-4 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Should I accept an offer if my child is also on a reserve list for a higher choice?",
              a: "Yes, always. Accepting the offer you have does not remove your child from any reserve list. The NSW Department of Education allows you to accept an offer and then switch to a higher-choice offer if one comes through later from a reserve list. There is no downside to accepting.",
            },
            {
              q: "What happens if I decline every offer?",
              a: "If you decline all placement offers, your child forfeits all placement in the OC or selective school system. They will not be considered for further rounds, and their reserve list position (if any) is void. Only decline if you have decided you do not want any selective or OC placement.",
            },
            {
              q: "How long do reserve lists stay active?",
              a: "Reserve lists remain active until at least the end of Term 1 of the school year, and sometimes beyond. The bulk of movement — especially for Bands A, B, and C — typically happens between September and December. By February or March, most lists have slowed or stopped.",
            },
            {
              q: "Can I be on two reserve lists at once?",
              a: "No. You are placed on the reserve list for the highest-choice school where you did not quite reach the cutoff, but only one reserve list — not multiple. Your lower-ranked choices are superseded.",
            },
            {
              q: "If my band is lower than what the list reached last year, does that mean no chance?",
              a: "It means an offer is less likely, but not impossible. In 2025 some schools' lists moved further than in 2024, and some moved less. The band is an estimate, and every year is different. Use the historical data as a guide, not a sentence.",
            },
            {
              q: "What if my child's outcome letter shows no band at all?",
              a: "If your outcome letter does not show a reserve band, your child is not on a reserve list. Check the letter carefully — if there is no band listed, your child either received a firm offer (check the offer section) or was unsuccessful for all listed schools.",
            },
            {
              q: "Do I need to do anything to stay on the reserve list?",
              a: "No. The reserve list is automatic. You do not need to respond, accept, or confirm anything to stay on it. If a place becomes available and your child is next in line, the Department contacts you directly.",
            },
            {
              q: "Can I change my school choices after outcomes are released?",
              a: "No. Your school choices are locked once applications close. You cannot add, remove, or re-order schools after the placement test.",
            },
          ].map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-muted/20 border border-border/40">
              <h3 className="font-medium text-base mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground/60 leading-relaxed pt-6 border-t border-border/40">
        This guide is based on the NSW Department of Education&apos;s placement
        process as published on education.nsw.gov.au. Always refer to the
        Department&apos;s official communications for current-year timelines and
        rules, as processes can change.
      </p>
    </div>
  );
}
