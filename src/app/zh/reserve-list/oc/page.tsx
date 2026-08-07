import type { Metadata } from "next";
import ReserveEstimator from "@/components/reserve-estimator";
import ReserveGuide from "@/components/reserve-guide";

export const metadata: Metadata = {
  title: "OC 班候补名单 2025：哪些等级收到了录取通知",
  description:
    "查看 2025 年新州各 OC 班候补名单推进到的等级，查询孩子所在等级的历史录取几率。覆盖全部 88 所 OC 班 2024–2026 年数据。",
  keywords: [
    "OC 班候补名单 2025",
    "OC 候补等级 2025",
    "OC 班候补",
    "候补名单",
    "OC 班",
    "五年级入学",
    "NSW OC",
    "录取几率",
  ],
};

export default function ZhOCReservePage() {
  return (
    <>
      <ReserveEstimator initialSchoolType="oc" locale="zh" />
      <ReserveGuide schoolType="oc" locale="zh" />
    </>
  );
}
