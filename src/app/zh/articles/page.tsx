import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BookIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "文章与指南 — School Reach 新州家长资源",
  description:
    "面向新州家长的实用指南和策略文章：候补名单策略、录取决定、候补等级说明，帮助家长应对 OC 班和精英中学入学。",
  keywords: [
    "OC 候补策略", "精英中学候补策略", "候补等级说明",
    "OC 精英入学指南", "新州入学文章", "华人家长入学",
  ],
};

const articles = [
  {
    href: "/zh/articles/oc-reserve-strategy",
    label: "OC 候补策略",
    title: "OC 班候补名单策略：收到等级后该怎么办",
    desc: "如何理解 OC 候补等级、预期推进速度，以及按等级制定的等待还是放弃策略。",
    meta: "88 所学校 · 2025 数据",
  },
  {
    href: "/zh/articles/selective-reserve-strategy",
    label: "精英候补策略",
    title: "精英中学候补名单策略：家长指南",
    desc: "为什么精英候补名单推进缓慢，如何结合学校真实历史解读等级，以及需要避免的错误。",
    meta: "48 所学校 · 2025 数据",
  },
  {
    href: "/zh/articles/accept-offer-or-wait",
    label: "决策指南",
    title: "接受录取还是继续等待？决策框架",
    desc: "结果公布时的各种情况——只有录取、只有候补、或两者皆有——以及每种情况的明确答案。",
    meta: "覆盖所有情况",
  },
  {
    href: "/zh/articles/reserve-bands-explained",
    label: "等级说明",
    title: "候补等级 A 到 F 详解：通知信意味着什么",
    desc: "用通俗易懂的方式解读候补等级制度、大致时间，以及为什么相同等级在不同学校含义不同。",
    meta: "A–F 通俗解读",
  },
];

export default function ZhArticlesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
          文章与指南
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-2">
          关于 OC 班与精英中学入学的清晰建议
        </h1>
        <p className="text-base text-muted-foreground mt-3 max-w-xl leading-relaxed">
          为 NSW 家长撰写的策略指南，基于录取与候补名单制度的真实运作方式。
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-5">
        {articles.map((a) => (
          <Link key={a.href} href={a.href} className="block group">
            <Card className="h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="text-primary/50 mt-0.5">
                    <BookIcon className="w-9 h-9" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/70">
                      {a.label}
                    </p>
                    <h2 className="text-base font-semibold mt-0.5 leading-snug">{a.title}</h2>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">{a.meta}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
