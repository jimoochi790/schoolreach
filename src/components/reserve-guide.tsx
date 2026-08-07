import ocData from "@/data/oc-reserve.json";
import selectiveData from "@/data/selective-reserve.json";

type SchoolType = "oc" | "selective";
type Locale = "en" | "zh";
type Band = "A" | "B" | "C" | "D" | "E" | "F";

const BAND_ORDER: Band[] = ["A", "B", "C", "D", "E", "F"];

const BAND_DOT: Record<Band, string> = {
  A: "bg-emerald-600",
  B: "bg-green-500",
  C: "bg-yellow-500",
  D: "bg-orange-500",
  E: "bg-red-500",
  F: "bg-rose-600",
};

interface ReserveSchool {
  name: string;
  band2026?: Band | null;
  band2025?: Band | null;
  band2024?: Band | null;
}

interface BandStats {
  counts: Record<Band, number>;
  total: number;
  byBand: Record<Band, string[]>;
}

function bandStats(schools: ReserveSchool[], field: "band2025" | "band2024"): BandStats {
  const counts: Record<Band, number> = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  const byBand: Record<Band, string[]> = { A: [], B: [], C: [], D: [], E: [], F: [] };
  let total = 0;
  for (const s of schools) {
    const b = s[field];
    if (b && BAND_ORDER.includes(b)) {
      counts[b] += 1;
      byBand[b].push(s.name);
      total += 1;
    }
  }
  for (const b of BAND_ORDER) byBand[b].sort();
  return { counts, total, byBand };
}

function reachedSentence(
  stats: BandStats,
  noun: string,
  withData: number,
  locale: Locale
): string {
  const c = stats.counts;
  if (locale === "zh") {
    const parts: string[] = [];
    if (c.A) parts.push(`A 级 ${c.A} 所`);
    if (c.B) parts.push(`B 级 ${c.B} 所`);
    if (c.C) parts.push(`C 级 ${c.C} 所`);
    if (c.D) parts.push(`D 级 ${c.D} 所`);
    if (c.E) parts.push(`E 级 ${c.E} 所`);
    if (c.F) parts.push(`F 级 ${c.F} 所`);
    return parts.length
      ? `2025 年，${withData} 所${noun}报告了候补推进数据，其中：${parts.join("，")}。`
      : `2025 年，${withData} 所${noun}报告了候补推进数据，但均未获得有效等级记录。`;
  }
  const parts: string[] = [];
  if (c.A) parts.push(`Band A at ${c.A} school${c.A === 1 ? "" : "s"}`);
  if (c.B) parts.push(`Band B at ${c.B} school${c.B === 1 ? "" : "s"}`);
  if (c.C) parts.push(`Band C at ${c.C} school${c.C === 1 ? "" : "s"}`);
  if (c.D) parts.push(`Band D at ${c.D} school${c.D === 1 ? "" : "s"}`);
  if (c.E) parts.push(`Band E at ${c.E} school${c.E === 1 ? "" : "s"}`);
  if (c.F) parts.push(`Band F at ${c.F} school${c.F === 1 ? "" : "s"}`);
  return parts.length
    ? `In 2025, ${withData} of ${noun} reported reserve list movement, with offers reaching ${parts.join(", ")}.`
    : `In 2025, ${withData} ${noun} reported reserve list movement, but none had a band recorded.`;
}

export default function ReserveGuide({
  schoolType,
  locale = "en",
}: {
  schoolType: SchoolType;
  locale?: Locale;
}) {
  const schools = (schoolType === "oc" ? ocData : selectiveData) as ReserveSchool[];
  const isSelective = schoolType === "selective";

  const s25 = bandStats(schools, "band2025");
  const s24 = bandStats(schools, "band2024");

  const nounEnShort = isSelective ? "selective schools" : "OC schools";
  const nounZh = isSelective ? "精英中学" : "OC 班";

  const bestBands25 = BAND_ORDER.filter(b => s25.byBand[b].length > 0);

  const T = {
    en: {
      kicker: "2025 reserve list results",
      title: "What reserve bands were reached in 2025?",
      lead: `Parents ask us this every year: did the reserve list actually move, and how far? Here is what happened last year across NSW, based on community-tracked data.`,
      summary25: reachedSentence(s25, nounEnShort, s25.total, "en"),
      compare25to24: isSelective
        ? `Movement in 2024 was even smaller: only ${s24.total} schools reported bands, and nearly every list ended at Band E or F.`
        : `Compared with 2024, last year's lists moved much further: only ${s24.counts.B} schools reached Band B in 2024, and none reached Band A.`,
      ocNote: isSelective
        ? ""
        : `One OC school saw the list move all the way to Band A in 2025: Cudgegong Valley Public School. That is rare, and it shows how much lists vary between schools.`,
      reachedHeading: `Schools where the reserve list reached Band B or better in 2025`,
      bandLabel: (b: Band) => `Band ${b} (${s25.byBand[b].length} school${s25.byBand[b].length === 1 ? "" : "s"})`,
      meaningsTitle: "What do the reserve bands mean?",
      meaningsLead: "Your outcome letter shows a band from A (best) to F (unlikely). Here is roughly what each band means for timing:",
      meanings: {
        A: "Very high chance. Offers usually go out within about a month.",
        B: "High chance. Offers usually go out within about two months.",
        C: "Good chance. Offers usually go out within about three months.",
        D: "Moderate chance. Offers usually go out within about four months.",
        E: "Low chance. Offers usually go out within about five months.",
        F: "Very low chance. An offer is unlikely.",
      } as Record<Band, string>,
      faqTitle: "Frequently asked questions",
      faqs: [
        {
          q: "What reserve bands were successful in 2025?",
          a: isSelective
            ? `For selective schools, ${s25.total} of 48 schools reported reserve list movement in 2025. No list reached Band A; ${s25.counts.B} schools reached Band B, ${s25.counts.C} reached Band C, and ${s25.counts.D} reached Band D. The remaining lists ended at Band E or F.`
            : `For OC classes, ${s25.total} of 88 schools reported reserve list movement in 2025. One school reached Band A (Cudgegong Valley Public School), ${s25.counts.B} schools reached Band B, ${s25.counts.C} reached Band C, and ${s25.counts.D} reached Band D. The rest ended at Band E or lower.`,
        },
        {
          q: "When do reserve list offers go out?",
          a: "Offers roll out over several months after the initial placement outcomes. As families decline offers, places open up and the list moves down band by band, usually starting within weeks of outcomes day and continuing through the following months.",
        },
        {
          q: "How long is the reserve list?",
          a: "There is no published length. The list runs as deep as the number of students placed on it, and how far it moves depends on how many families decline their offer. Most movement happens in the first few months.",
        },
        {
          q: "Will the list move as far this year as it did in 2025?",
          a: "Not necessarily. Movement depends on how many families accept, decline, or change schools each year. Treat this year's live band as the current signal and last year's band as a guide, not a promise.",
        },
        {
          q: "What does it mean if my band is below last year's lowest band?",
          a: "It means an offer is unlikely based on recent history, though lists can surprise. Keep an eye on the live 2026 bands in the tool above, which update as offers go out.",
        },
        {
          q: "Where does this data come from?",
          a: "Reserve bands are community-tracked from NSW Department of Education publications and reserve list updates, with three years of history: 2024, 2025 and the live 2026 cycle. The data was last updated in September 2025.",
        },
      ],
      note: "Bands reflect the lowest band that received an offer at each school, as reported by the community. Schools without data in a given year are excluded from that year's totals.",
    },
    zh: {
      kicker: "2025 年候补名单结果",
      title: "2025 年候补名单推进到什么等级？",
      lead: `每年都有家长问：候补名单到底有没有推进，推进了多少？以下是根据社区跟踪数据整理的 2025 年新州各校实际情况。`,
      summary25: reachedSentence(s25, nounZh, s25.total, "zh"),
      compare25to24: isSelective
        ? `相比之下，2024 年的推进更少：仅有 ${s24.total} 所学校报告了等级数据，而且几乎全部停留在 E 级或 F 级。`
        : `与 2024 年相比，去年的候补名单推进明显更快：2024 年只有 ${s24.counts.B} 所学校推进到 B 级，没有一所学校到达 A 级。`,
      ocNote: isSelective
        ? ""
        : `2025 年有一所 OC 班的候补名单一路推进到了 A 级：Cudgegong Valley Public School。这种情况非常少见，也说明各校之间的差异很大。`,
      reachedHeading: `2025 年候补名单推进到 B 级或以上的学校`,
      bandLabel: (b: Band) => `${b} 级（${s25.byBand[b].length} 所）`,
      meaningsTitle: "候补等级代表什么？",
      meaningsLead: "录取通知信上的等级从 A（最佳）到 F（不太可能）。大致对应如下时间范围：",
      meanings: {
        A: "几率很高。通常约一个月内收到录取通知。",
        B: "几率较高。通常约两个月内收到录取通知。",
        C: "几率良好。通常约三个月内收到录取通知。",
        D: "几率中等。通常约四个月内收到录取通知。",
        E: "几率较低。通常约五个月内收到录取通知。",
        F: "几率很低。基本不太可能收到录取通知。",
      } as Record<Band, string>,
      faqTitle: "常见问题",
      faqs: [
        {
          q: "2025 年哪些候补等级收到了录取通知？",
          a: isSelective
            ? `精英中学方面，2025 年 ${s25.total} 所（共 48 所）报告了候补推进数据。没有一所学校推进到 A 级；${s25.counts.B} 所推进到 B 级，${s25.counts.C} 所推进到 C 级，${s25.counts.D} 所推进到 D 级，其余停留在 E 级或 F 级。`
            : `OC 班方面，2025 年 ${s25.total} 所（共 88 所）报告了候补推进数据。一所学校推进到了 A 级（Cudgegong Valley Public School），${s25.counts.B} 所推进到 B 级，${s25.counts.C} 所推进到 C 级，${s25.counts.D} 所推进到 D 级，其余停留在 E 级或更低。`,
        },
        {
          q: "候补名单的录取通知什么时候发放？",
          a: "首轮录取结果公布后，录取通知会在几个月内陆续发放。随着家庭拒绝录取，空位释放，候补名单会逐级推进，通常在结果公布后几周内开始，并持续数月。",
        },
        {
          q: "候补名单有多长？",
          a: "官方没有公布候补名单的长度。名单深度取决于进入候补的学生人数，推进速度取决于每年有多少家庭拒绝录取。大部分推进发生在最初几个月。",
        },
        {
          q: "今年候补名单会像去年一样推进吗？",
          a: "不一定。推进情况取决于每年有多少家庭接受、拒绝或更换学校。请以今年的实时等级为主要参考，去年的等级只作为参考，不能作为保证。",
        },
        {
          q: "如果我的等级低于去年的最低等级，意味着什么？",
          a: "根据近年数据，这意味着收到录取通知的可能性较低，但名单推进偶尔会有意外。请关注上方工具中的 2026 年实时等级，它们会随录取发放而更新。",
        },
        {
          q: "这些数据从哪里来？",
          a: "候补等级数据由社区根据 NSW 教育局发布的信息和候补名单更新跟踪整理，包含三年历史：2024 年、2025 年以及 2026 年实时数据。数据最近更新于 2025 年 9 月。",
        },
      ],
      note: "等级反映的是各校候补名单实际推进到的最低等级（社区报告数据）。某一年没有数据的学校不计入该年统计。",
    },
  }[locale];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: T.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 space-y-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 2025 results */}
      <section className="space-y-5">
        <div>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
            {T.kicker}
          </p>
          <h2 className="text-xl font-semibold mt-1.5">{T.title}</h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          {T.lead}
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          {BAND_ORDER.map(b => (
            <div
              key={b}
              className={`flex items-center gap-3 p-4 rounded-xl border ${
                s25.counts[b] > 0
                  ? "bg-muted/30 border-border/50"
                  : "bg-muted/10 border-border/30 opacity-60"
              }`}
            >
              <span className={`w-3 h-3 rounded-full flex-shrink-0 ${BAND_DOT[b]}`} />
              <div>
                <p className="text-xs text-muted-foreground">Band {b}</p>
                <p className="text-lg font-semibold tabular-nums">
                  {s25.counts[b]} <span className="text-sm font-normal text-muted-foreground">{locale === "zh" ? "所" : "schools"}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-base text-muted-foreground leading-relaxed max-w-2xl">
          <p>{T.summary25}</p>
          {T.ocNote && <p>{T.ocNote}</p>}
          <p>{T.compare25to24}</p>
        </div>
      </section>

      {/* Schools reached Band B+ */}
      {bestBands25.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{T.reachedHeading}</h2>
          <div className="space-y-4">
            {bestBands25.map(b => (
              <div key={b} className="space-y-2">
                <p className="text-sm font-semibold">{T.bandLabel(b)}</p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
                  {s25.byBand[b].map(name => (
                    <p key={name} className="text-sm text-muted-foreground leading-relaxed">
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Band meanings */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{T.meaningsTitle}</h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          {T.meaningsLead}
        </p>
        <div className="space-y-2">
          {BAND_ORDER.map(b => (
            <div key={b} className="flex items-start gap-3 py-2.5 border-b border-border/40">
              <span className={`mt-1.5 w-3 h-3 rounded-full flex-shrink-0 ${BAND_DOT[b]}`} />
              <p className="text-sm leading-relaxed">
                <strong className="font-semibold">Band {b}:</strong>{" "}
                <span className="text-muted-foreground">{T.meanings[b]}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{T.faqTitle}</h2>
        <div className="space-y-4">
          {T.faqs.map(faq => (
            <div key={faq.q} className="p-5 rounded-xl bg-muted/20 border border-border/40">
              <h3 className="font-medium text-base mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground/60 leading-relaxed">{T.note}</p>
    </div>
  );
}
