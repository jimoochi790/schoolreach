'use client';

import { useState, useMemo } from 'react';
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

export default function ReserveEstimator({ initialSchoolType = 'selective' }: { initialSchoolType?: 'selective' | 'oc' }) {
  const [schoolType, setSchoolType] = useState<'selective' | 'oc'>(initialSchoolType);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [yourBand, setYourBand] = useState<ReserveBand | null>(null);

  const schools = useMemo(() => getReserveSchools(schoolType), [schoolType]);

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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <section className="text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Reserve List Tool
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          Reserve List Chance Estimator
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance">
          Find out the likelihood of your child receiving an offer from the
          OC or Selective school reserve list, based on historical data.
        </p>
      </section>

      {/* Input Card */}
      <Card>
        <CardHeader>
          <CardTitle>Check your chances</CardTitle>
          <CardDescription>
            Select the school type, find your school, and choose your child&apos;s reserve band.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* School type toggle */}
          <div>
            <label className="text-sm font-medium mb-2 block">School type</label>
            <div className="flex gap-2">
              <Button
                variant={schoolType === 'selective' ? 'default' : 'outline'}
                size="sm"
                onClick={() => { setSchoolType('selective'); setSelectedSchool(null); setSearchQuery(''); }}
              >
                Selective (Year 7)
              </Button>
              <Button
                variant={schoolType === 'oc' ? 'default' : 'outline'}
                size="sm"
                onClick={() => { setSchoolType('oc'); setSelectedSchool(null); setSearchQuery(''); }}
              >
                OC (Year 5)
              </Button>
            </div>
          </div>

          {/* School search */}
          <div>
            <label className="text-sm font-medium mb-2 block">Search for your school</label>
            <div className="relative">
              <Input
                type="text"
                placeholder={`Search ${schoolType === 'selective' ? 'selective' : 'OC'} schools...`}
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setSelectedSchool(null);
                }}
                className="pl-8"
              />
              <svg
                className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            {searchQuery.trim() && !selectedSchool && (
              <div className="mt-2 border rounded-lg max-h-60 overflow-y-auto">
                {filteredSchools.length > 0 ? (
                  filteredSchools.map(school => (
                    <button
                      key={school.name}
                      onClick={() => handleSchoolSelect(school.name)}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors border-b last:border-b-0"
                    >
                      {school.name}
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    No schools found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Band selector */}
          {selectedSchool && (
            <div>
              <label className="text-sm font-medium mb-2 block">
                Your child&apos;s reserve band
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {BAND_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setYourBand(opt.value)}
                    className={`text-left px-3 py-2 rounded-lg border text-sm transition-all ${
                      BAND_COLORS[opt.value].bg
                    } ${
                      yourBand === opt.value
                        ? `${BAND_COLORS[opt.value].text} border-transparent font-medium shadow-sm ring-2 ring-offset-1 ring-current/30`
                        : `${BAND_COLORS[opt.value].text} border-transparent/30 opacity-75 hover:opacity-100 hover:shadow-sm`
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results — show when school + band selected */}
      {estimate && (
        <div className="space-y-6">
          <Card className={`border-l-[4px] ${BAND_CARD_BORDER[estimate.yourBand] || ''}`}>
            <CardContent className="py-6 space-y-4">
              {/* School + band */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">{estimate.school.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {schoolType === 'selective' ? 'Selective High School' : 'Opportunity Class'} — Your reserve band: {estimate.yourBand}
                  </p>
                </div>
                <Badge
                  className="text-base px-4 py-1.5 font-semibold"
                  style={{
                    backgroundColor: getProbabilityStyle(estimate.probability).color,
                    color: '#fff',
                    border: 'none',
                  }}
                >
                  {getProbabilityStyle(estimate.probability).label} — {estimate.chancePercent}% chance
                </Badge>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {estimate.description}
                </p>
              </div>

              {/* Historical data */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Historical reserve band data</h4>
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
                    <span className="text-xs text-muted-foreground">No historical data available for this school.</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to interpret */}
          <Alert className="bg-amber-50 border-amber-200 text-amber-800">
            <AlertDescription className="text-sm leading-relaxed">
              <strong>Important:</strong> These estimates are based on community-tracked
              historical reserve list movement. The NSW Department of Education assigns
              bands based on previous years, but actual movement varies. Bands are updated
              periodically during the offer period. This tool provides a guide, not a guarantee.
            </AlertDescription>
          </Alert>

          {/* Band reference */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Reserve band reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {BAND_OPTIONS.map(opt => (
                  <div key={opt.value} className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ${BAND_COLORS[opt.value]?.dot || ''}`}
                    />
                    <span><strong>{opt.value}</strong>: {opt.label.split(' — ')[1] || opt.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="outline" onClick={handleReset}>
              Check another school
            </Button>
          </div>
        </div>
      )}

      {/* Info section below (show when no results yet) */}
      {!estimate && (
        <>
          <Separator />
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">How reserve lists work</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">
                  1
                </div>
                <h3 className="font-medium mt-3">You get a band</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When your child is placed on a reserve list, the outcome letter shows
                  a band from A (best) to F (unlikely). The band estimates your chances
                  based on previous years.
                </p>
              </div>
              <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">
                  2
                </div>
                <h3 className="font-medium mt-3">Offers roll down</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As families decline their initial offers, places open up. The reserve
                  list moves down band by band over several months, from Band A through
                  to Band F.
                </p>
              </div>
              <div className="space-y-2 p-5 rounded-xl bg-muted/30 border border-border/50">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground text-lg font-bold">
                  3
                </div>
                <h3 className="font-medium mt-3">Bands are estimates</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bands are based on last year&apos;s movement — they are not guarantees.
                  The actual list can move further or less depending on how many families
                  decline each year.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <Separator />
            <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            {[
              {
                q: 'How accurate is this estimator?',
                a: 'Our tool compares your reserve band against community-tracked historical data from 2024-2026. It gives an informed estimate but cannot predict the exact movement for this year, which depends on how many families decline their offers.',
              },
              {
                q: 'Where does the data come from?',
                a: 'Reserve band data is sourced from community tracking sites and NSW Department of Education publications. We use bands reported for 2024, 2025, and the live 2026 cycle.',
              },
              {
                q: 'What do the bands mean?',
                a: 'Band A means offers within ~1 month, Band B ~2 months, Band C ~3 months, Band D ~4 months, Band E ~5 months, and Band F means unlikely to receive an offer at all. These are approximate timeframes.',
              },
              {
                q: 'Can my child move between bands?',
                a: 'The band assigned to your child stays the same, but the bands themselves are updated as offers go out. The Department updates the minimum band that has received an offer periodically during the placement period.',
              },
              {
                q: 'Should I accept another offer while on the reserve list?',
                a: 'Yes. Accept any firm offer you have. If a reserve list offer comes through later, you can typically switch. Being on a reserve list does not guarantee a place.',
              },
            ].map(faq => (
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
