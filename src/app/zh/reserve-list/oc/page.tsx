import type { Metadata } from "next";
import ReserveEstimator from "@/components/reserve-estimator";

export const metadata: Metadata = {
  title: "OC 班候补名单查询 — 五年级入学录取几率",
  description:
    "选择孩子被列入候补名单的 OC 班和等级（A-F），查看历史录取几率。基于 2024–2026 年 88 所 OC 班的候补数据。",
  keywords: [
    "OC 班候补", "候补名单", "reserve list", "OC 班",
    "五年级入学", "NSW OC", "录取几率",
  ],
};

export default function ZhOCReservePage() {
  return <ReserveEstimator initialSchoolType="oc" />;
}
