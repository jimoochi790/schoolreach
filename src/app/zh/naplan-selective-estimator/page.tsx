import type { Metadata } from "next";
import ScoreForm from "@/components/score-form";

export const metadata: Metadata = {
  title: "NAPLAN 精英中学评估器 — 五年级成绩预估精英中学入学机会",
  description:
    "输入孩子五年级 NAPLAN 成绩，评估新州 48 所精英中学的七年级入学机会。免费评估工具，基于 2025 年社区报告分数线。",
  keywords: [
    "NAPLAN 精英中学评估", "精英中学", "五年级 NAPLAN",
    "新州精英", "华人家长", "入学分数线", "七年级入学",
  ],
};

export default function ZhNaplanSelectivePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          五年级 NAPLAN → 精英中学评估器
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          拖动每个科目成绩条上的黑点，匹配孩子五年级的 NAPLAN 成绩。
          系统会估算 48 所新州精英中学的七年级入学机会，
          分为冲刺、目标和保底三个等级。
        </p>
        <p className="text-xs text-muted-foreground/50 mt-3">
          不确定 NAPLAN 成绩是什么意思？请查看孩子的 NAPLAN 报告单 —
          成绩以优异、良好、发展中或需要额外支持显示。五年级的成绩范围为 3 到 8。
        </p>
      </div>
      <ScoreForm year="year5" />
    </div>
  );
}
