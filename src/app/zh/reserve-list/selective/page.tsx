import type { Metadata } from "next";
import ReserveEstimator from "@/components/reserve-estimator";
import ReserveGuide from "@/components/reserve-guide";

export const metadata: Metadata = {
  title: "精英中学候补名单 2025：哪些等级收到了录取通知",
  description:
    "查看 2025 年新州各精英中学候补名单推进到的等级，查询孩子所在等级的历史录取几率。覆盖全部 48 所精英中学 2024–2026 年数据。",
  keywords: [
    "精英中学候补名单 2025",
    "精英中学候补等级 2025",
    "精英中学候补",
    "候补名单",
    "精英中学",
    "七年级入学",
    "NSW 精英",
    "录取几率",
  ],
};

export default function ZhSelectiveReservePage() {
  return (
    <>
      <ReserveEstimator initialSchoolType="selective" locale="zh" />
      <ReserveGuide schoolType="selective" locale="zh" />
    </>
  );
}
