import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "关于 — School Reach 如何运作",
  description:
    "了解 School Reach 如何估算 OC 班和精英中学的入学机会。评估方法、数据来源、等级说明以及常见问题。",
};

export default function ZhAboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">关于 School Reach</h1>

      <Alert className="bg-amber-50 border-amber-200 text-amber-800">
        <AlertDescription className="text-sm">
          <strong>免责声明：</strong>本工具仅提供估算，与 NAPLAN、ACARA 或 NSW 教育局无关。
          学校录取分数线基于社区报告的历史数据，可能无法反映当前的入学要求。
        </AlertDescription>
      </Alert>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">评估原理</h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            评估器使用您孩子在五个科目（阅读、写作、拼写、语法与标点、算术）的
            NAPLAN 成绩，计算出一个 0–300 分的预估入学分数。
          </p>
          <p>
            <strong>OC 班（三年级 NAPLAN）：</strong>英语科目（阅读、写作、拼写、语法）
            取平均分，占 40% 权重。算术占 60% 权重。这反映了 OC 入学考试中对数学推理的重视。
          </p>
          <p>
            <strong>精英中学（五年级 NAPLAN）：</strong>英语综合分占 30%，算术占 30%，
            估算的思维能力分（取自英语和算术的平均值）占 40%。这与新的精英中学入学考试结构一致。
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">等级说明</h2>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">保底</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              您的预估分数高于该校的历史录取分数线。
              仅从 NAPLAN 成绩来看，孩子的竞争力较强。
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">目标</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              您的预估分数与该校的历史录取分数线重叠。
              入学考试成绩将是决定因素。
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">冲刺</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              您的预估分数低于该校的历史分数线，但在合理范围内。
              出色的入学考试成绩可能让孩子有竞争力。
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">数据来源与准确性</h2>
        <div className="text-sm text-muted-foreground space-y-3">
          <p>
            <strong>学校列表</strong>来源于 NSW 教育局官方发布、维基百科和社区教育网站。
            所有 88 所 OC 班和 48 所精英中学均为教育局官方认可的学校。
          </p>
          <p>
            <strong>录取分数线为社区估算。</strong>NSW 教育局不公布最低入学分数。
            显示的分数线范围基于家长论坛、辅导机构和社区跟踪网站的数据。
          </p>
          <p>
            录取分数每年都会因以下因素而有显著变化：申请人数、入学考试难度、
            学校评估分数波动、选拔流程变化。请将本工具作为<strong>大致参考</strong>，
            最终以 NSW 教育局官方信息为准。
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">隐私</h2>
        <div className="text-sm text-muted-foreground">
          <p>
            所有成绩处理完全在您的浏览器中完成。不向任何服务器发送数据，
            不存储或跟踪任何信息。分享链接仅将成绩编码到 URL 参数中——无需数据库。
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">常见问题</h2>
        <div className="space-y-4 text-sm">
          {[
            { q: "为什么没有每所学校的精确录取分数线？", a: "NSW 教育局不公布最低入学分数。录取分数线每年因申请人数量和考试难度而变化，只能通过社区收集的数据事后获知。" },
            { q: "准确度有多高？", a: "我们的数据来自社区收集，可能会有 5–15 分的误差，具体取决于学校和年份。'冲刺'等级的估算最不确定——它们代表需要出色入学考试表现的理想目标。" },
            { q: "可以提交更新的录取数据吗？", a: "目前还不可以——此功能正在开发中。未来，收到录取通知的家长将能匿名提交成绩和录取结果，以改进数据质量。" },
            { q: "其他州呢？", a: "目前本工具仅覆盖新州。其他州（维州 SEAL 项目、昆州精英学院、西澳 GATE）可能会根据需求在未来添加。" },
          ].map(faq => (
            <div key={faq.q} className="space-y-1">
              <h3 className="font-medium">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
