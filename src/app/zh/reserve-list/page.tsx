import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionDivider, WaitlistIcon } from "@/components/icons";

export default function ZhReserveListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="py-20">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-snug">
          查询孩子从 OC 班或精英中学候补名单收到录取通知的几率。
        </h1>
        <p className="text-base text-muted-foreground mt-5 max-w-xl leading-relaxed">
          孩子收到了候补名单位置，想知道录取几率有多大？选择下面的学校类型查看历史数据。
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
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
                  <h2 className="text-lg font-semibold mt-0.5">精英中学</h2>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                选择精英中学和候补等级（A-F），查看收到七年级录取通知的几率。
              </p>
              <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                48 所学校 · 3 年数据 · 社区跟踪
              </p>
            </CardContent>
            <div className="h-0.5 bg-orange-500/20 group-hover:bg-orange-500/40 transition-colors" />
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
                  <h2 className="text-lg font-semibold mt-0.5">OC 班（英才班）</h2>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                选择 OC 班和候补等级（A-F），查看收到五年级录取通知的几率。
              </p>
              <p className="text-[11px] text-muted-foreground/50 mt-3 font-mono">
                88 所学校 · 3 年数据 · 社区跟踪
              </p>
            </CardContent>
            <div className="h-0.5 bg-teal-500/20 group-hover:bg-teal-500/40 transition-colors" />
          </Card>
        </Link>
      </div>

      <SectionDivider />

      <section className="py-16">
        <h2 className="text-xl font-semibold mb-8">候补名单如何运作</h2>
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">01</div>
            <div>
              <h3 className="font-semibold mb-1">您会收到一个等级</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                当孩子被列入候补名单时，录取通知信会显示一个等级（A 最佳 — F 不太可能），
                该等级根据去年的录取情况估算录取几率。
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">02</div>
            <div>
              <h3 className="font-semibold mb-1">录取通知逐步发放</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                随着家庭拒绝首轮录取，空位逐步释放。候补名单在几个月内逐级推进，
                从等级 A 一直到等级 F。
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
            <div className="text-muted-foreground/40 text-sm font-mono sm:w-20 flex-shrink-0">03</div>
            <div>
              <h3 className="font-semibold mb-1">等级仅为估算</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                基于去年的候补数据，不构成保证。实际候补名单的推进取决于当年多少家庭接受或拒绝录取。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
