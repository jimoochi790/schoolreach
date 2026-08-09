import ocSchools from "@/data/oc-schools.json";
import selectiveSchools from "@/data/selective-schools.json";

type Year = "year3" | "year5";
type Locale = "en" | "zh";

function topSchools(data: any[], n: number) {
  return data
    .filter((s: any) => s.maxEstScore)
    .sort((a: any, b: any) => (b.maxEstScore || 0) - (a.maxEstScore || 0))
    .slice(0, n)
    .map((s: any) => ({ name: s.name, suburb: s.suburb, score: s.maxEstScore }));
}

function scoreRange(data: any[]) {
  const scores = data.filter((s: any) => s.maxEstScore).map((s: any) => s.maxEstScore as number);
  if (!scores.length) return { min: 0, max: 0, count: 0 };
  return { min: Math.min(...scores), max: Math.max(...scores), count: scores.length };
}

function buildContent(
  isOC: boolean, range: ReturnType<typeof scoreRange>, top5: ReturnType<typeof topSchools>,
  testName: string, naplanYear: string, total: number
) {
  const en: Record<string, any> = {
    title: `How NAPLAN Relates to ${isOC ? "OC" : "Selective"} School Placement`,
    subtitle: `A clear explanation of how ${naplanYear} NAPLAN results connect to ${isOC ? "Opportunity Class" : "Selective High School"} entry, what scores matter, and what parents should know.`,
    howTitle: "What is NAPLAN and how does it relate to placement?",
    howP1: "NAPLAN is Australia's national assessment program for students in Years 3, 5, 7, and 9. It tests reading, writing, spelling, grammar, and numeracy. Results are reported as proficiency levels: Exceeding, Strong, Developing, and Needs additional support.",
    howP2: `NAPLAN is NOT the placement test itself. The ${testName} is a separate exam that directly determines entry. NAPLAN results are a helpful readiness check — they give parents a rough sense of where their child sits academically.`,
    howP3: `Our estimator maps NAPLAN band levels onto the 0–300 placement score scale using community-reported cutoffs. The weighting is: ${isOC ? "40% English composite and 60% Numeracy" : "30% English, 30% Numeracy, and 40% Thinking Skills"}.`,
    scoresTitle: `What placement scores do ${isOC ? "OC" : "Selective"} schools require?`,
    scoresP1: `Placement scores range from 0 to 300. Here are the top 5 ${isOC ? "OC" : "Selective"} schools by community-reported cutoff. For the full list, use the estimator above.`,
    scoresCols: ["School", "Suburb", "Approx. cutoff"],
    rangeNote: `Across all ${total} schools with data, cutoffs range from about ${range.min} to ${range.max}. High-demand Sydney schools have higher cutoffs; regional schools often have lower thresholds.`,
    bandsTitle: "NAPLAN bands explained",
    bandsP1: "NAPLAN reports results as proficiency levels. Here is roughly what each band indicates:",
    bandLabels: isOC
      ? ["Band 6 (Exceeding): Well above benchmark. Strong OC readiness.",
         "Band 5 (Strong): Above benchmark. Good readiness.",
         "Band 4 (Developing): At/near benchmark. May need extra preparation.",
         "Band 3 (Developing): Approaching benchmark. Consider extra support.",
         "Bands 1–2 (Needs support): Below benchmark. OC entry unlikely without catch-up."]
      : ["Band 8 (Exceeding): Well above benchmark. Strong Selective readiness.",
         "Band 7 (Strong): Above benchmark. Good readiness.",
         "Band 6 (Developing): At/near benchmark. Focused prep may help.",
         "Band 5 (Developing): Approaching benchmark. Extra work likely needed.",
         "Bands 3–4 (Needs support): Below benchmark. Selective entry unlikely."],
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: `What ${naplanYear} NAPLAN score do I need for ${isOC ? "OC" : "Selective"} entry?`,
        a: `There is no official NAPLAN cutoff — the ${testName} determines entry. Schools with cutoffs above 240+ typically draw from the Exceeding range. Schools in the 200–220 range may take Strong to Exceeding students. Use the estimator above for a personalised estimate.` },
      { q: `Is NAPLAN or the ${isOC ? "OC" : "Selective"} Placement Test more important?`,
        a: `The ${testName} directly determines entry. NAPLAN is a readiness indicator, not a deciding factor. Strong NAPLAN results often correlate with strong placement test performance.` },
      { q: "How accurate is this NAPLAN estimator?",
        a: "It provides an estimate based on community-reported school cutoff data from the most recent intake. Cutoffs vary each year. Treat results as a guide, not a prediction." },
      { q: `What are the hardest ${isOC ? "OC" : "Selective"} schools to get into?`,
        a: `${top5.map((s, i) => `${i + 1}. ${s.name} (${s.suburb}, ~${s.score})`).join("; ")}. These typically need scores in the ${range.max - 20}–${range.max} range.` },
      { q: "When should my child start preparing?",
        a: `Many families begin structured preparation 12–18 months before the test. Lighter daily reading, puzzle-solving, and vocabulary building can start earlier. Consistency matters more than cramming.` },
      { q: "Where does the school cutoff data come from?",
        a: "Cutoff scores are community-reported from parent forums, coaching colleges, and publicly available intake data. Official cutoffs are not published by the NSW Department of Education." },
      { q: `Does my child need to be in the top NAPLAN band?`,
        a: `Not necessarily. The most competitive schools (${range.max - 30}+) draw from the Exceeding range, but ${total} schools serve a wide ability range. Schools with cutoffs in the ${range.min}–${range.min + 30} range may accept Strong or Developing students.` },
    ],
  };

  const zh: Record<string, any> = {
    title: `NAPLAN 与${isOC ? "OC 班" : "精英中学"}入学的关系`,
    subtitle: `清晰解释${naplanYear} NAPLAN 成绩如何与${isOC ? "英才班" : "精英中学"}入学相关联。`,
    howTitle: "什么是 NAPLAN？与入学有什么关系？",
    howP1: "NAPLAN 是澳大利亚 3、5、7、9 年级学生的全国评估项目，测试阅读、写作、拼写、语法和算术。结果分四个等级：优异、良好、发展中、需要额外支持。",
    howP2: `NAPLAN 本身不是入学考试。${testName}才是直接决定入学的考试。NAPLAN 成绩是帮助评估学业水平的参考。`,
    howP3: `本评估器根据社区报告的分数线将 NAPLAN 等级映射到 0-300 入学分数。权重：${isOC ? "英语综合 40%，算术 60%" : "英语 30%，算术 30%，思维能力 40%"}`,
    scoresTitle: `${isOC ? "OC 班" : "精英中学"}需要多少入学分数？`,
    scoresP1: `以下是社区报告的 2025 年${isOC ? "OC" : "精英"}学校前${top5.length}名分数线。`,
    scoresCols: ["学校", "地区", "约分数线"],
    rangeNote: `在${total} 所学校中，分数线范围约 ${range.min} 至 ${range.max}。高需求地区分数线较高。`,
    bandsTitle: "NAPLAN 等级说明",
    bandsP1: "各等级大致含义：",
    bandLabels: isOC
      ? ["6 级（优异）：远高于全国基准。OC 入学准备充分。",
         "5 级（良好）：高于基准。准备良好。",
         "4 级（发展中）：处于或接近基准。可能需要额外辅导。",
         "3 级（发展中）：接近基准。考虑是否适合 OC。",
         "1-2 级（需要额外支持）：低于基准。机会很小。"]
      : ["8 级（优异）：远高于基准。精英入学准备充分。",
         "7 级（良好）：高于基准。准备良好。",
         "6 级（发展中）：处于或接近基准。集中备考可能有帮助。",
         "5 级（发展中）：接近基准。可能需要额外努力。",
         "3-4 级（需要额外支持）：低于基准。机会很小。"],
    faqTitle: "常见问题",
    faqs: [
      { q: `${naplanYear} NAPLAN 需要多少分才能上${isOC ? "OC 班" : "精英中学"}？`,
        a: `没有官方分数线——${testName}才是入学依据。分数线 240+ 的学校通常招收优异水平学生。200-220 范围可能接受良好水平学生。请使用上方工具。` },
      { q: `NAPLAN 还是${isOC ? "OC" : "精英"}入学测试更重要？`,
        a: `${testName}直接决定入学。NAPLAN 是参考指标。两者考察相似能力，NAPLAN 成绩好通常意味着入学测试表现也好。` },
      { q: "这个 NAPLAN 评估器有多准确？",
        a: "基于社区报告的最近年度入学分数线提供估算。分数线每年因申请人变化而波动。请作为参考，而非预测。" },
      { q: `哪些${isOC ? "OC 班" : "精英中学"}最难考？`,
        a: `${top5.map((s, i) => `${i + 1}. ${s.name}（${s.suburb}，约${s.score}分）`).join("；")}。通常需要 ${range.max - 20} 至 ${range.max} 的分数。` },
      { q: "孩子应该什么时候开始准备？",
        a: "许多家庭提前 12-18 个月开始系统备考。轻松的日常阅读、解谜和词汇积累可以更早开始。持续练习比突击更重要。" },
      { q: "学校分数线的数据来自哪里？",
        a: "分数线数据来源于家长论坛、补习学校和公开入学数据的社区报告。官方分数线不会由教育局公布。" },
      { q: "孩子必须在 NAPLAN 最高等级才有机会吗？",
        a: `不一定。最激烈的学校（${range.max - 30}+）通常招收优异水平学生，但 ${total} 所学校覆盖广泛。分数线 ${range.min}-${range.min + 30} 的学校可能接受良好或发展中学生。` },
    ],
  };

  return { en, zh };
}

export default function NaplanGuide({ year, locale = "en" }: { year: Year; locale?: Locale }) {
  const isOC = year === "year3";
  const range = scoreRange(isOC ? ocSchools : selectiveSchools);
  const top5 = topSchools(isOC ? ocSchools : selectiveSchools, 5);
  const total = isOC ? 88 : 48;
  const testName = isOC ? "OC Placement Test" : "Selective High School Placement Test";
  const naplanYear = isOC ? "Year 3" : "Year 5";

  const { en, zh } = buildContent(isOC, range, top5, testName, naplanYear, total);
  const txt: Record<string, any> = locale === "zh" ? zh : en;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: txt.faqs.map((f: any) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 space-y-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{txt.title}</h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">{txt.subtitle}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{txt.howTitle}</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          <p>{txt.howP1}</p>
          <p>{txt.howP2}</p>
          <p>{txt.howP3}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{txt.scoresTitle}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{txt.scoresP1}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border/60 rounded-lg">
            <thead>
              <tr className="bg-muted/40">
                {txt.scoresCols.map((col: string) => (
                  <th key={col} className="text-left px-4 py-2 font-semibold text-xs">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {top5.map((s) => (
                <tr key={s.name} className="border-t border-border/40">
                  <td className="px-4 py-2">{s.name}</td>
                  <td className="px-4 py-2 text-muted-foreground">{s.suburb}</td>
                  <td className="px-4 py-2 font-mono tabular-nums">~{s.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{txt.rangeNote}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{txt.bandsTitle}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{txt.bandsP1}</p>
        <div className="space-y-2">
          {txt.bandLabels.map((label: string, i: number) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed pl-3 border-l-2 border-primary/30">{label}</p>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">{txt.faqTitle}</h2>
        <div className="space-y-4">
          {txt.faqs.map((faq: any) => (
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
