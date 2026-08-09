import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OC 班与精英中学录取策略：收到结果后该怎么办",
  description:
    "新州家长实用指南：收到 OC 班或精英中学录取结果后该怎么办。了解录取通知和候补名单的运作方式，何时该接受，以及如何策略性地应对。",
  keywords: [
    "新州精英中学录取指南",
    "OC 班录取策略",
    "候补名单期间接受录取",
    "精英中学候补策略",
    "NSW 录取结果指南",
    "收到录取结果后怎么办",
    "OC 候补名单攻略",
  ],
};

export default function ZhOfferGuidePage() {
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
                name: "如果孩子既收到了录取通知，又在更高志愿学校的候补名单上，应该接受录取吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "是的。接受现有的录取不会将孩子从任何候补名单中移除。如果更高志愿学校后来从候补名单中发放录取通知，您可以接受新的录取并放弃原来的名额。",
                },
              },
              {
                "@type": "Question",
                name: "拒绝所有录取会怎样？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "如果拒绝所有录取，孩子将失去在精英中学或 OC 班系统中的所有名额。他们将不能参加后续轮次的候补。如果希望留在系统中，请务必至少接受一个录取。",
                },
              },
              {
                "@type": "Question",
                name: "候补名单会保持多久？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "候补名单至少保持到学年第一学期结束，有时更长。大部分推进发生在结果公布后的三到四个月内。A 级通常在一个月内收到通知，B 级约两个月，以此类推，但各校情况不同。",
                },
              },
              {
                "@type": "Question",
                name: "孩子可以从已接受的录取转到候补名单的录取吗？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "可以。如果您已接受较低志愿的录取，后来较高志愿学校的候补名单发出了录取通知，您可以接受新录取。NSW 教育局会释放原来的名额，该名额转给候补名单上的下一位学生。",
                },
              },
              {
                "@type": "Question",
                name: "候补等级 A 到 F 具体代表什么？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "候补等级是教育局对您可能收到录取通知时间的估算。A 级为最佳（约一个月内几率很高），B 级约两个月内，以此类推。F 级最低，表示不太可能收到录取。这些是基于往年数据的估算，各校每年实际推进情况会有所不同。",
                },
              },
            ],
          }),
        }}
      />

      <section className="py-10 sm:py-14">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
          录取策略指南
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-2 leading-tight">
          收到录取结果了——接下来怎么办？
        </h1>
        <p className="text-base text-muted-foreground mt-4 max-w-xl leading-relaxed">
          录取通知、候补等级、两者同时出现——NSW 的录取系统有时令人困惑。
          以下是根据教育局流程整理的实际情况，以及新州家长在每个阶段应该如何应对。
        </p>
      </section>

      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">理解您的录取结果信</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          录取结果通常在八月份（精英中学）和随后的时间内（OC 班）公布。
          您孩子的情况会落在以下四种之中。系统是基于您在申请中排名的志愿顺序运作的。
        </p>
        <div className="space-y-4 mt-6">
          <div className="pl-4 border-l-2 border-emerald-500 py-1">
            <p className="font-semibold text-sm">1. 仅收到录取通知</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              孩子达到了其所选的最高可用学校的分数线。您有一个确定的名额。接受即可。
            </p>
          </div>
          <div className="pl-4 border-l-2 border-yellow-500 py-1">
            <p className="font-semibold text-sm">2. 仅在候补名单上</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              孩子没有达到所选学校的分数线，但被列入候补名单并分配了等级（A 到 F）。目前没有录取——需要等待。
            </p>
          </div>
          <div className="pl-4 border-l-2 border-amber-500 py-1">
            <p className="font-semibold text-sm">3. 同时收到录取通知和候补资格</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              这种情况发生在孩子被较低志愿学校录取（录取通知），同时在较高志愿学校被列入候补名单时。
              你既有保底的名额，也有更上一层楼的机会。
            </p>
          </div>
          <div className="pl-4 border-l-2 border-rose-500 py-1">
            <p className="font-semibold text-sm">4. 无录取也无候补资格</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              孩子没有达到任何所选学校的分数线。录取系统无法为其安排名额。考虑本地的公立学校
              （每一位孩子在自己的学区内都保证有一个名额）或其他教育路径。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">新州家长需要记住的关键原则</h2>
        <div className="p-5 rounded-xl bg-muted/20 border border-border/40">
          <p className="text-lg font-semibold leading-snug">永远接受你手中的录取通知。</p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
            接受录取绝不会有坏处。它不会将孩子从任何候补名单中移除。如果更高志愿的学校后来
            从候补名单中发出录取通知，您可以直接转换——教育局会自动释放您原来接受的名额。
            如果您拒绝所有录取通知，<strong>孩子将失去所有的录取资格</strong>，无法参加后续轮次。
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          唯一例外：如果您已决定无论结果如何都让孩子就读本地的普通学校。这种情况下拒绝录取通知
          没有问题——您不会失去任何想要的东西。
        </p>
      </section>

      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">最佳策略：“两者同时”的情况</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          如果孩子收到了第二志愿的录取通知，同时在第一志愿的候补名单上，以下是具体操作步骤：
        </p>
        <div className="space-y-6 mt-4">
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              01
            </div>
            <div>
              <h3 className="font-semibold mb-1">立即接受手中的录取</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                接受第二志愿的录取将确保一个名额。这完全不影响第一志愿的候补资格。
                两个过程是独立运行的。
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              02
            </div>
            <div>
              <h3 className="font-semibold mb-1">查看第一志愿的候补等级</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                录取结果信上会显示一个等级（A 最佳 — F 不太可能）。
                使用我们的{" "}
                <a href="/zh/reserve-list" className="text-primary hover:underline">
                  候补名单查询工具
                </a>{" "}
                查看该学校在 2024 和 2025 年候补名单的实际推进情况。
                如果该等级在往年曾收到过录取通知，几率就比较高。
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-24 flex-shrink-0">
              03
            </div>
            <div>
              <h3 className="font-semibold mb-1">关注候补名单，耐心等待</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                教育局会在录取期间定期发布候补名单推进更新。如果第一志愿学校的名单推进到
                您孩子的等级，您会收到新的录取通知。届时要做的只是接受新录取——系统会自动
                释放原来的名额。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">候补名单的实际运作方式</h2>
        <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
          <li>每个学校都有招生名额。当收到录取通知的家庭拒绝时，名额会被释放，候补名单上的下一位学生（按分数排序）将收到录取通知。</li>
          <li>等级（A 到 F）是教育局根据该学校往年候补名单的实际推进距离估算的。</li>
          <li>等级不是保证。2025 年，部分 OC 班的候补名单推进到了 A 级，而另一些学校的名单从未离开过 F 级。推进程度完全取决于有多少家庭拒绝——每年都不同。</li>
          <li>在候补名单上不需要做任何操作。只需等待。如果有录取通知，教育局会直接联系您。</li>
        </ul>

        <div className="grid sm:grid-cols-3 gap-3 mt-6">
          {[
            { band: "A", label: "约 1 个月内", color: "bg-emerald-100 border-emerald-300 text-emerald-800" },
            { band: "B", label: "约 2 个月内", color: "bg-green-100 border-green-300 text-green-800" },
            { band: "C", label: "约 3 个月内", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
            { band: "D", label: "约 4 个月内", color: "bg-orange-100 border-orange-300 text-orange-800" },
            { band: "E", label: "约 5 个月内", color: "bg-red-100 border-red-300 text-red-800" },
            { band: "F", label: "不太可能", color: "bg-rose-100 border-rose-300 text-rose-800" },
          ].map(({ band, label, color }) => (
            <div key={band} className={`rounded-lg border px-3 py-2.5 ${color}`}>
              <p className="text-xs font-semibold">{band} 级</p>
              <p className="text-xs opacity-80 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">大致时间表（典型年份）</h2>
        <div className="space-y-4">
          {[
            { month: "10 月–2 月", event: "下一年度入学申请开放" },
            { month: "5 月", event: "入学测试（电脑测试，一次完成）" },
            { month: "8 月–9 月", event: "结果公布：录取通知、候补等级及未录取通知书" },
            { month: "9 月–10 月", event: "第一轮候补录取开始（A 级开始收到通知）" },
            { month: "10 月–12 月", event: "候补名单继续推进；B–C 级通常在此期间收到通知" },
            { month: "1 月–3 月", event: "进一步推进；部分名单推进至 D 级及以后" },
            { month: "第一学期结束", event: "候补名单通常关闭或推进显著减缓，大部分录取发放已完成" },
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
          以上时间为参考，教育局每年会在精英中学和 OC 班网站上公布确切的日期。
          请以官方发布的当前年度时间表为准。
        </p>
      </section>

      <section className="space-y-4 py-10 border-t border-border/40">
        <h2 className="text-xl font-semibold">常见问题</h2>
        <div className="space-y-4">
          {[
            {
              q: "如果孩子既收到了录取通知，又在更高志愿学校的候补名单上，应该接受吗？",
              a: "是的，永远接受。接受已有的录取不会移除候补名单上的资格。NSW 教育局允许您接受现有录取，然后如果更高志愿的候补名单后来发出录取通知，可以转换到新学校。接受录取没有坏处。",
            },
            {
              q: "拒绝所有录取会怎样？",
              a: "如果拒绝所有录取，孩子将失去所有 OC 或精英中学录取资格。他们将不再被考虑进入后续轮次，候补名单资格也将作废。仅当您决定不让孩子就读任何此类学校时才拒绝。",
            },
            {
              q: "候补名单会保持多久？",
              a: "候补名单至少保持到学年第一学期结束，有时更长。大部分推进（特别是 A、B、C 级）通常发生在 9 月至 12 月。到 2 月或 3 月，大部分名单已推进完毕或停止。",
            },
            {
              q: "可以同时在两个候补名单上吗？",
              a: "不可以。您只会被列入一个候补名单——即您未达到分数线但排名最高的志愿学校。较低的志愿会被覆盖。",
            },
            {
              q: "如果我的等级低于去年名单所达到的等级，是否意味着没有希望？",
              a: "意味着录取几率较低，但并非不可能。2025 年部分学校的名单推进超过了 2024 年，也有的推进更少。等级只是估算，每年都不同。将历史数据作为参考，而不是定论。",
            },
            {
              q: "如果录取结果信上没有任何等级怎么办？",
              a: "如果结果信上没有显示候补等级，说明您的孩子不在候补名单上。请仔细检查——如果没有等级列明，可能孩子收到了直接录取（查看录取部分），或者在所有志愿学校都未被录取。",
            },
            {
              q: "是否需要做什么才能保持在候补名单上？",
              a: "不需要。候补名单是自动的。您不需要回复、接受或确认任何内容来保持资格。如果有名额释放且您的孩子是下一位，教育局会直接联系您。",
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
        本指南基于 NSW 教育局在 education.nsw.gov.au 上发布的录取流程编制。
        请始终以教育局的官方通知为准获取当前年度的具体时间安排和规定，因为流程可能会有调整。
      </p>
    </div>
  );
}
