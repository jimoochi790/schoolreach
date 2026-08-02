import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookIcon, ChartIcon, WaitlistIcon, SchoolIcon, SectionDivider } from "@/components/icons";

export const metadata: Metadata = {
  title: "School Reach — 新州家长 OC 班与精英中学免费评估工具",
  description:
    "输入孩子 NAPLAN 成绩，免费评估新州 OC 班和精英中学的入学机会。涵盖 88 所 OC 学校和 48 所精英中学，基于社区报告的历史录取数据。",
  keywords: [
    "OC班", "精英中学", "NAPLAN", "新州", "澳洲教育",
    "华人家长", "入学评估", "候补名单", "录取分数线",
  ],
  openGraph: {
    title: "School Reach — 新州华人家长 OC 与精英中学评估工具",
    description:
      "免费评估您孩子的 NAPLAN 成绩能上哪所 OC 班或精英中学，以及候补名单的录取几率。",
    url: "https://schoolreach.com.au/zh",
  },
};

export default function ZhHomePage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 pt-20 pb-8 sm:pt-24 sm:pb-10">
        <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-balance leading-snug">
          免费评估工具 — 帮助新州家长了解 OC 班与精英中学入学机会
        </h1>
        <p className="text-base text-muted-foreground mt-4 max-w-xl leading-relaxed">
          输入孩子的 NAPLAN 成绩，查看哪些 OC 班和精英中学有机会。
          或查询候补名单的录取几率。全部免费，无需注册。
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/zh/naplan-oc-estimator"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            试试 NAPLAN 评估器
          </Link>
          <Link
            href="/zh/reserve-list"
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            查看候补名单几率
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 py-6 border-y border-border/40">
          <div className="text-center">
            <p className="text-2xl font-semibold tabular-nums">88</p>
            <p className="text-xs text-muted-foreground mt-0.5">OC 班学校</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold tabular-nums">48</p>
            <p className="text-xs text-muted-foreground mt-0.5">精英中学</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold tabular-nums">3</p>
            <p className="text-xs text-muted-foreground mt-0.5">年候补数据</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold tabular-nums">0</p>
            <p className="text-xs text-muted-foreground mt-0.5">费用或注册</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/zh/naplan-oc-estimator" className="block group">
            <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 dark:text-blue-400 mt-0.5">
                    <ChartIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      NAPLAN 评估
                    </p>
                    <h2 className="text-lg font-semibold mt-0.5">三年级 → OC 班</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  拖动 NAPLAN 各科成绩条上的黑点，匹配孩子三年级的成绩。
                  系统会评估 88 所 NSW OC 班的入学机会，分为冲刺、目标和保底三个等级。
                </p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                  88 所学校 · 社区报告分数线 · 2025 数据
                </p>
              </CardContent>
              <div className="h-0.5 bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors" />
            </Card>
          </Link>

          <Link href="/zh/naplan-selective-estimator" className="block group">
            <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-violet-600 dark:text-violet-400 mt-0.5">
                    <ChartIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      NAPLAN 评估
                    </p>
                    <h2 className="text-lg font-semibold mt-0.5">五年级 → 精英中学</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  同样的工具，适用于五年级。输入 NAPLAN 成绩，查看 48 所 NSW
                  精英中学的七年级入学机会。全部录取分数线来源于社区报告。
                </p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                  48 所学校 · 社区报告分数线 · 2025 数据
                </p>
              </CardContent>
              <div className="h-0.5 bg-violet-500/20 group-hover:bg-violet-500/40 transition-colors" />
            </Card>
          </Link>

          <Link href="/zh/reserve-list/oc" className="block group">
            <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-teal-600 dark:text-teal-400 mt-0.5">
                    <WaitlistIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      候补名单
                    </p>
                    <h2 className="text-lg font-semibold mt-0.5">OC 班候补录取几率</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  孩子拿到了候补名单位置？选择学校和候补等级（A-F），
                  查看历史上收到录取通知的几率。基于 2024–2026 年 88 所学校的候补数据。
                </p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                  3 年数据 · 88 所学校 · 社区跟踪
                </p>
              </CardContent>
              <div className="h-0.5 bg-teal-500/20 group-hover:bg-teal-500/40 transition-colors" />
            </Card>
          </Link>

          <Link href="/zh/reserve-list/selective" className="block group">
            <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-orange-600 dark:text-orange-400 mt-0.5">
                    <WaitlistIcon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      候补名单
                    </p>
                    <h2 className="text-lg font-semibold mt-0.5">精英中学候补录取几率</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  同样的工具，适用于精英中学。选择学校和候补等级，查看录取几率。
                  涵盖所有 48 所 NSW 精英中学的 2024–2026 年候补数据。
                </p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                  3 年数据 · 48 所学校 · 社区跟踪
                </p>
              </CardContent>
              <div className="h-0.5 bg-orange-500/20 group-hover:bg-orange-500/40 transition-colors" />
            </Card>
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold mb-8">如何使用</h2>
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">01</div>
            <div>
              <h3 className="font-semibold mb-1">输入孩子的成绩</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                NAPLAN 评估器：拖动每个科目成绩条上的黑点，匹配孩子的成绩。
                候补名单查询器：选择学校和您收到的候补等级（A 到 F）。
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">02</div>
            <div>
              <h3 className="font-semibold mb-1">与历史数据对比</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                NAPLAN 评估器将成绩映射到社区报告的学校分数线。
                候补名单查询器对比您孩子的候补等级与该校 2024、2025、2026 年的候补名单移动情况。
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">03</div>
            <div>
              <h3 className="font-semibold mb-1">获得清晰的评估结果</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                学校被分为冲刺、目标和保底三个等级。候补名单结果以百分比显示几率。
                所有结果均为估计，作为参考起点，不构成保证。
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <div className="text-muted-foreground/40 mb-3">
              <BookIcon className="w-9 h-9" />
            </div>
            <h2 className="text-xl font-semibold mb-3">什么是 NAPLAN？</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              NAPLAN（国家评估计划 — 识字与算术）是澳大利亚三、五、七、九年级
              学生的年度评估。涵盖算术、阅读、写作、拼写和语法。成绩分为四个等级：
              优异、良好、发展中、需要额外支持。
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              NAPLAN 成绩是 OC 班和精英中学入学的重要参考指标之一。
              虽然入学考试分数权重最高，但良好的 NAPLAN 成绩能反映孩子的学习能力。
            </p>
            <p>
              我们的分数线数据来自社区历年收集的入学报告。分数线每年都会有变化，
              取决于当年申请人数和名额。请将数据作为参考，最终以 NSW 教育局官方信息为准。
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold mb-8">新州 OC 班与精英中学</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border-l-[3px] border-l-blue-500 border border-border/60">
            <div className="text-blue-500/40 mb-3">
              <SchoolIcon className="w-7 h-7" />
            </div>
            <h3 className="text-base font-semibold mb-2">OC 班（英才班）</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              面向四年级优秀学生，五年级入学。新州约 75 所公立小学设有 OC 班。
              学生在四年级参加 OC 入学考试。
            </p>
            <p className="text-xs text-muted-foreground/50">
              悉尼地区竞争非常激烈，很多家庭从三年级开始准备。
            </p>
          </div>
          <div className="p-5 rounded-xl border-l-[3px] border-l-violet-500 border border-border/60">
            <div className="text-violet-500/40 mb-3">
              <SchoolIcon className="w-7 h-7" />
            </div>
            <h3 className="text-base font-semibold mb-2">精英中学</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              面向六年级优秀学生，七年级入学。新州有 40 多所全精英和部分精英中学。
              学生在六年级参加精英中学入学考试。
            </p>
            <p className="text-xs text-muted-foreground/50">
              James Ruse 和 Baulkham Hills 等顶尖学校录取分数线超过 230 分（满分 300）。
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold mb-6">常见问题</h2>
        <div className="space-y-5">
          {[
            {
              q: "这些工具有多准确？",
              a: "工具基于往年的社区报告数据提供估算。录取分数线和候补名单每年都在变化，请将这些数字作为参考，而非预测。最终请以 NSW 教育局官方信息为准。",
            },
            {
              q: "数据从哪里来？",
              a: "录取分数线来自家长论坛、社区跟踪网站和 NSW 教育局公开发布的资料。我们综合多年数据以提供更全面的参考。",
            },
            {
              q: "你们与 NSW 政府有关联吗？",
              a: "没有。School Reach 是独立网站，与 NAPLAN、ACARA 和 NSW 教育局无关。",
            },
            {
              q: "NAPLAN 成绩好就能保证入学吗？",
              a: "不能。入学主要取决于 OC 或精英入学考试成绩以及学校评估分数。NAPLAN 成绩是一个有用的参考指标，但不是决定因素。",
            },
            {
              q: "应该如何备考？",
              a: "建议做历年真题，积累词汇，练习解题技巧。很多家庭会使用辅导班或在线模拟考试。尽早开始，保持轻松心态——考试只是评估的一部分。",
            },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 className="font-medium mb-1 text-sm">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="rounded-2xl bg-muted/40 border border-border/40 px-6 py-10 text-center">
          <h2 className="text-xl font-semibold mb-2">准备查看孩子的入学机会？</h2>
          <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
            选择一个工具开始使用。无需注册，不收集数据——所有计算都在浏览器中完成。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/zh/naplan-oc-estimator"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              评估 OC 班
            </Link>
            <Link
              href="/zh/naplan-selective-estimator"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              评估精英中学
            </Link>
            <Link
              href="/zh/reserve-list"
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-muted/50 transition-colors"
            >
              查看候补名单几率
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/50 mt-6 max-w-md mx-auto">
            所有工具的结果均为基于社区历史数据的估算。与 NAPLAN、ACARA 或 NSW 教育局无关。
            请以官方信息为准。
          </p>
        </div>
      </section>
    </>
  );
}
