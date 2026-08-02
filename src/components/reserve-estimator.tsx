'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import {
  getReserveSchools,
  estimateReserveChance,
  getProbabilityStyle,
  BAND_OPTIONS,
} from '@/lib/reserve';
import type { ReserveBand } from '@/lib/reserve';

const BAND_COLORS: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  'A': { bg: 'bg-emerald-100 border-emerald-300', border: 'border-l-emerald-600', text: 'text-emerald-800', dot: 'bg-emerald-600' },
  'B': { bg: 'bg-green-100 border-green-300', border: 'border-l-green-500', text: 'text-green-800', dot: 'bg-green-500' },
  'C': { bg: 'bg-yellow-100 border-yellow-300', border: 'border-l-yellow-500', text: 'text-yellow-800', dot: 'bg-yellow-500' },
  'D': { bg: 'bg-orange-100 border-orange-300', border: 'border-l-orange-500', text: 'text-orange-800', dot: 'bg-orange-500' },
  'E': { bg: 'bg-red-100 border-red-300', border: 'border-l-red-500', text: 'text-red-800', dot: 'bg-red-500' },
  'F': { bg: 'bg-rose-100 border-rose-300', border: 'border-l-rose-600', text: 'text-rose-800', dot: 'bg-rose-600' },
};

const BAND_CARD_BORDER: Record<string, string> = {
  'A': 'border-l-emerald-600 bg-emerald-50/60',
  'B': 'border-l-green-500 bg-green-50/60',
  'C': 'border-l-yellow-500 bg-yellow-50/60',
  'D': 'border-l-orange-500 bg-orange-50/60',
  'E': 'border-l-red-500 bg-red-50/60',
  'F': 'border-l-rose-600 bg-rose-50/60',
};

type Locale = 'en' | 'zh';

const T: Record<Locale, {
  badge: string;
  title: string;
  subtitle: string;
  checkChances: string;
  selectSchool: string;
  schoolTypeLabel: (isSelective: boolean) => string;
  switchLink: (isSelective: boolean) => string;
  searchLabel: string;
  searchPlaceholder: (isSelective: boolean) => string;
  noSchoolsFound: string;
  bandLabel: string;
  bandOptions: { value: ReserveBand; label: string }[];
  schoolTypeResult: (isSelective: boolean) => string;
  yourBand: string;
  chance: string;
  historicalData: string;
  noData: string;
  important: string;
  importantText: string;
  bandReference: string;
  howItWorks: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  checkAnother: string;
}> = {
  en: {
    badge: 'Reserve List Tool',
    title: 'Reserve List Chance Estimator',
    subtitle: 'Find out the likelihood of your child receiving an offer from the OC or Selective school reserve list, based on historical data.',
    checkChances: 'Check your chances',
    selectSchool: 'Select the school type, find your school, and choose your child\'s reserve band.',
    schoolTypeLabel: (isSelective) => isSelective ? 'Selective High Schools (Year 7 entry)' : 'Opportunity Classes (Year 5 entry)',
    switchLink: (isSelective) => isSelective ? 'Check OC instead' : 'Check Selective instead',
    searchLabel: 'Search for your school',
    searchPlaceholder: (isSelective) => `Search ${isSelective ? 'selective' : 'OC'} schools...`,
    noSchoolsFound: 'No schools found',
    bandLabel: "Your child's reserve band",
    bandOptions: BAND_OPTIONS,
    schoolTypeResult: (isSelective) => isSelective ? 'Selective High School' : 'Opportunity Class',
    yourBand: 'Your reserve band',
    chance: 'chance',
    historicalData: 'Historical reserve band data',
    noData: 'No historical data available for this school.',
    important: 'Important:',
    importantText: 'These estimates are based on community-tracked historical reserve list movement. The NSW Department of Education assigns bands based on previous years, but actual movement varies. Bands are updated periodically during the offer period. This tool provides a guide, not a guarantee.',
    bandReference: 'Reserve band reference',
    howItWorks: 'How reserve lists work',
    step1Title: 'You get a band',
    step1Desc: 'When your child is placed on a reserve list, the outcome letter shows a band from A (best) to F (unlikely). The band estimates your chances based on previous years.',
    step2Title: 'Offers roll down',
    step2Desc: 'As families decline their initial offers, places open up. The reserve list moves down band by band over several months, from Band A through to Band F.',
    step3Title: 'Bands are estimates',
    step3Desc: "Bands are based on last year's movement — they are not guarantees. The actual list can move further or less depending on how many families decline each year.",
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How accurate is this estimator?', a: 'Our tool compares your reserve band against community-tracked historical data from 2024-2026. It gives an informed estimate but cannot predict the exact movement for this year, which depends on how many families decline their offers.' },
      { q: 'Where does the data come from?', a: 'Reserve band data is sourced from community tracking sites and NSW Department of Education publications. We use bands reported for 2024, 2025, and the live 2026 cycle.' },
      { q: 'What do the bands mean?', a: 'Band A means offers within ~1 month, Band B ~2 months, Band C ~3 months, Band D ~4 months, Band E ~5 months, and Band F means unlikely to receive an offer at all. These are approximate timeframes.' },
      { q: 'Can my child move between bands?', a: 'The band assigned to your child stays the same, but the bands themselves are updated as offers go out. The Department updates the minimum band that has received an offer periodically during the placement period.' },
      { q: 'Should I accept another offer while on the reserve list?', a: 'Yes. Accept any firm offer you have. If a reserve list offer comes through later, you can typically switch. Being on a reserve list does not guarantee a place.' },
    ],
    checkAnother: 'Check another school',
  },
  zh: {
    badge: '候补名单工具',
    title: '候补名单录取几率查询',
    subtitle: '根据历史数据，查询您的孩子从 OC 班或精英中学候补名单收到录取通知的几率。',
    checkChances: '查询录取几率',
    selectSchool: '选择学校类型，找到您的学校，然后选择孩子收到的候补等级。',
    schoolTypeLabel: (isSelective) => isSelective ? '精英中学（七年级入学）' : 'OC 班（英才班，五年级入学）',
    switchLink: (isSelective) => isSelective ? '查看 OC 班' : '查看精英中学',
    searchLabel: '搜索您的学校',
    searchPlaceholder: (isSelective) => `搜索${isSelective ? '精英中学' : 'OC 班'}...`,
    noSchoolsFound: '未找到学校',
    bandLabel: '孩子的候补等级',
    bandOptions: [
      { value: 'A', label: '等级 A — 1 个月内（几率很高）' },
      { value: 'B', label: '等级 B — 2 个月内（几率较高）' },
      { value: 'C', label: '等级 C — 3 个月内（几率良好）' },
      { value: 'D', label: '等级 D — 4 个月内（几率中等）' },
      { value: 'E', label: '等级 E — 5 个月内（几率较低）' },
      { value: 'F', label: '等级 F — 不太可能（几率很低）' },
    ],
    schoolTypeResult: (isSelective) => isSelective ? '精英中学' : 'OC 班（英才班）',
    yourBand: '候补等级',
    chance: '几率',
    historicalData: '历史候补数据',
    noData: '该学校暂无历史数据。',
    important: '重要提示：',
    importantText: '这些估算基于社区跟踪的历史候补名单数据。NSW 教育局根据往年数据分配等级，但实际候补推进会有变化。录取期间等级会定期更新。本工具仅为参考，不构成保证。',
    bandReference: '候补等级参考',
    howItWorks: '候补名单如何运作',
    step1Title: '您会收到一个等级',
    step1Desc: '当孩子被列入候补名单时，录取通知信会显示一个等级（A 最佳 — F 不太可能），该等级根据去年的录取情况估算录取几率。',
    step2Title: '录取通知逐步发放',
    step2Desc: '随着家庭拒绝首轮录取，空位逐步释放。候补名单在几个月内逐级推进，从等级 A 一直到等级 F。',
    step3Title: '等级仅为估算',
    step3Desc: '基于去年的候补数据，不构成保证。实际候补名单的推进取决于当年多少家庭接受或拒绝录取。',
    faqTitle: '常见问题',
    faqs: [
      { q: '这个工具有多准确？', a: '本工具将您的候补等级与 2024-2026 年社区跟踪的历史数据进行对比。它提供一个有依据的估算，但无法精确预测今年的情况——这取决于有多少家庭拒绝录取。' },
      { q: '数据从哪里来？', a: '候补等级数据来源于社区跟踪网站和 NSW 教育局出版物。我们使用 2024、2025 年及 2026 年实时报告的数据。' },
      { q: '等级代表什么意思？', a: '等级 A 表示约 1 个月内有录取通知，B 约 2 个月，C 约 3 个月，D 约 4 个月，E 约 5 个月，F 表示不太可能收到录取通知。以上均为大致时间范围。' },
      { q: '孩子的等级会变化吗？', a: '分配给孩子的等级本身不会变，但等级对应的最低录取线会随着录取通知的发放而更新。教育局会在录取期间定期更新已发录取的最低等级。' },
      { q: '在候补名单期间应该接受其他录取通知吗？', a: '应该。请接受已有的任何确定录取通知。如果候补名单的录取通知稍后到达，通常可以转换。列入候补名单不保证能获得录取。' },
    ],
    checkAnother: '查询其他学校',
  },
};

interface ReserveEstimatorProps {
  initialSchoolType?: 'selective' | 'oc';
  locale?: Locale;
}

export default function ReserveEstimator({ initialSchoolType = 'selective', locale = 'en' }: ReserveEstimatorProps) {
  const [schoolType] = useState<'selective' | 'oc'>(initialSchoolType);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [yourBand, setYourBand] = useState<ReserveBand | null>(null);

  const schools = useMemo(() => getReserveSchools(schoolType), [schoolType]);
  const t = T[locale];
  const bandOpts = t.bandOptions;

  const filteredSchools = useMemo(() => {
    if (!searchQuery.trim()) return schools;
    const q = searchQuery.toLowerCase();
    return schools.filter(s => s.name.toLowerCase().includes(q));
  }, [schools, searchQuery]);

  const estimate = useMemo(() => {
    if (!selectedSchool || !yourBand) return null;
    const school = schools.find(s => s.name === selectedSchool);
    if (!school) return null;
    return estimateReserveChance(school, yourBand);
  }, [selectedSchool, yourBand, schools]);

  const handleSchoolSelect = (name: string) => {
    setSelectedSchool(name);
    setSearchQuery(name);
    setYourBand(null);
  };

  const handleReset = () => {
    setSelectedSchool(null);
    setYourBand(null);
    setSearchQuery('');
  };

  const isSelective = schoolType === 'selective';
  const otherPath = isSelective
    ? (locale === 'zh' ? '/zh/reserve-list/oc' : '/reserve-list/oc')
    : (locale === 'zh' ? '/zh/reserve-list/selective' : '/reserve-list/selective');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <section className="text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {t.badge}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          {t.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance">
          {t.subtitle}
        </p>
      </section>

      {/* Input Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t.checkChances}</CardTitle>
          <CardDescription>{t.selectSchool}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">{t.schoolTypeLabel(isSelective)}</p>
            <Link href={otherPath} className="text-sm text-primary hover:underline">
              {t.switchLink(isSelective)}
            </Link>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t.searchLabel}</label>
            <div className="relative">
              <Input
                type="text"
                placeholder={t.searchPlaceholder(isSelective)}
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setSelectedSchool(null);
                }}
                className="pl-8"
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            {searchQuery.trim() && !selectedSchool && (
              <div className="mt-2 border rounded-lg max-h-60 overflow-y-auto">
                {filteredSchools.length > 0 ? (
                  filteredSchools.map(school => (
                    <button key={school.name} onClick={() => handleSchoolSelect(school.name)}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors border-b last:border-b-0">
                      {school.name}
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-muted-foreground">{t.noSchoolsFound}</div>
                )}
              </div>
            )}
          </div>

          {selectedSchool && (
            <div>
              <label className="text-sm font-medium mb-2 block">{t.bandLabel}</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {bandOpts.map(opt => (
                  <button key={opt.value} onClick={() => setYourBand(opt.value)}
                    className={`text-left px-3 py-2 rounded-lg border text-sm transition-all ${
                      BAND_COLORS[opt.value].bg
                    } ${
                      yourBand === opt.value
                        ? `${BAND_COLORS[opt.value].text} border-transparent font-medium shadow-sm ring-2 ring-offset-1 ring-current/30`
                        : `${BAND_COLORS[opt.value].text} border-transparent/30 opacity-75 hover:opacity-100 hover:shadow-sm`
                    }`}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      {estimate && (
        <div className="space-y-6">
          <Card className={`border-l-[4px] ${BAND_CARD_BORDER[estimate.yourBand] || ''}`}>
            <CardContent className="py-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">{estimate.school.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {t.schoolTypeResult(isSelective)} — {t.yourBand}: {estimate.yourBand}
                  </p>
                </div>
                <Badge className="text-base px-4 py-1.5 font-semibold"
                  style={{ backgroundColor: getProbabilityStyle(estimate.probability).color, color: '#fff', border: 'none' }}>
                  {getProbabilityStyle(estimate.probability).label} — {estimate.chancePercent}% {t.chance}
                </Badge>
              </div>
              <Separator />
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">{estimate.description}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">{t.historicalData}</h4>
                <p className="text-xs text-muted-foreground mb-2">{estimate.historicalSummary}</p>
                <div className="flex flex-wrap gap-2">
                  {estimate.school.band2026 && (
                    <Badge className={`${BAND_COLORS[estimate.school.band2026].bg} ${BAND_COLORS[estimate.school.band2026].text} border`}>
                      2026 (Live): Band {estimate.school.band2026}
                    </Badge>
                  )}
                  {estimate.school.band2025 && (
                    <Badge className={`${BAND_COLORS[estimate.school.band2025].bg} ${BAND_COLORS[estimate.school.band2025].text} border`}>
                      2025: Band {estimate.school.band2025}
                    </Badge>
                  )}
                  {estimate.school.band2024 && (
                    <Badge className={`${BAND_COLORS[estimate.school.band2024].bg} ${BAND_COLORS[estimate.school.band2024].text} border`}>
                      2024: Band {estimate.school.band2024}
                    </Badge>
                  )}
                  {!estimate.school.band2026 && !estimate.school.band2025 && !estimate.school.band2024 && (
                    <span className="text-xs text-muted-foreground">{t.noData}</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="bg-amber-50 border-amber-200 text-amber-800">
            <AlertDescription className="text-sm leading-relaxed">
              <strong>{t.important}</strong> {t.importantText}
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.bandReference}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {bandOpts.map(opt => (
                  <div key={opt.value} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${BAND_COLORS[opt.value]?.dot || ''}`} />
                    <span><strong>{opt.value}</strong>: {opt.label.split(' — ')[1] || opt.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="outline" onClick={handleReset}>{t.checkAnother}</Button>
          </div>
        </div>
      )}

      {/* Info section */}
      {!estimate && (
        <>
          <Separator />
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">{t.howItWorks}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">1</div>
                <h3 className="font-medium mt-3">{t.step1Title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.step1Desc}</p>
              </div>
              <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">2</div>
                <h3 className="font-medium mt-3">{t.step2Title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.step2Desc}</p>
              </div>
              <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">3</div>
                <h3 className="font-medium mt-3">{t.step3Title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.step3Desc}</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <Separator />
            <h2 className="text-xl font-semibold">{t.faqTitle}</h2>
            {t.faqs.map(faq => (
              <div key={faq.q} className="p-5 rounded-xl bg-muted/20 border border-border/40">
                <h3 className="font-medium text-base mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
