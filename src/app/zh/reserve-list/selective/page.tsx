import type { Metadata } from "next";
import ReserveEstimator from "@/components/reserve-estimator";

export const metadata: Metadata = {
  title: "精英中学候补名单查询 — 七年级入学录取几率",
  description:
    "选择孩子被列入候补名单的精英中学和等级（A-F），查看历史录取几率。基于 2024–2026 年 48 所精英中学的候补数据。",
  keywords: [
    "精英中学候补", "候补名单", "reserve list", "精英中学",
    "七年级入学", "NSW 精英", "录取几率",
  ],
};

export default function ZhSelectiveReservePage() {
  return <ReserveEstimator initialSchoolType="selective" />;
}
