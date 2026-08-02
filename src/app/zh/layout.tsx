import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "School Reach — 新州 OC 班与精英中学入学评估工具",
    template: "%s — School Reach",
  },
  description:
    "免费的新州 OC 班与精英中学入学评估工具。输入孩子的 NAPLAN 成绩，查看哪些学校有机会，或查询候补名单的录取几率。基于社区数据，无需注册。",
  alternates: {
    canonical: "https://schoolreach.com.au/zh",
    languages: {
      "en-AU": "https://schoolreach.com.au",
      "zh-CN": "https://schoolreach.com.au/zh",
    },
  },
};

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
