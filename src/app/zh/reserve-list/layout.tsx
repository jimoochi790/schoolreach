import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "候补名单查询 — OC 班与精英中学 — School Reach",
    template: "%s — 候补名单 — School Reach",
  },
  description:
    "查询 OC 班和精英中学候补名单的录取几率。基于 2024–2026 年社区跟踪的历史候补数据。",
};

export default function ZhReserveListLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
