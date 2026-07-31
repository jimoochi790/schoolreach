'use client';

import { useMemo, useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { estimateOC, estimateSelective, tierSchools } from '@/lib/estimate';
import { getOCSchools, getSelectiveSchools } from '@/lib/schools';
import { DOMAIN_LABELS } from '@/lib/naplan';
import type { ScoreInput, TieredSchool } from '@/lib/estimate';

const TIER_STYLES: Record<string, { label: string; color: string; badgeClass: string }> = {
  safety: {
    label: 'Safe',
    color: 'border-l-green-500 bg-green-50 dark:bg-green-950/20',
    badgeClass: 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200',
  },
  target: {
    label: 'Target',
    color: 'border-l-blue-500 bg-blue-50 dark:bg-blue-950/20',
    badgeClass: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200',
  },
  reach: {
    label: 'Stretch',
    color: 'border-l-amber-500 bg-amber-50 dark:bg-amber-950/20',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900 dark:text-amber-200',
  },
};

const DOMAINS = ['numeracy', 'reading', 'writing', 'spelling', 'grammar'] as const;

// Domain colour dots matching the NAPLAN bars
const DOMAIN_COLORS: Record<string, string> = {
  numeracy: '#99c3f4',
  reading: '#bad4f6',
  writing: '#d9e7fb',
  spelling: '#ffffff',
  grammar: '#99c3f4',
};

function parseResultsParams(searchString: string) {
  const params = new URLSearchParams(searchString);

  const year = params.get('year');
  if (!year || (year !== 'year3' && year !== 'year5')) return null;

  const useScaled = params.get('useScaled') === '1';
  const scores: Record<string, number> = {};

  for (const domain of DOMAINS) {
    const raw = params.get(domain);
    if (!raw) return null;
    const num = parseInt(raw, 10);
    if (isNaN(num)) return null;
    scores[domain] = num;
  }

  return {
    year,
    input: {
      reading: scores.reading,
      writing: scores.writing,
      spelling: scores.spelling,
      grammar: scores.grammar,
      numeracy: scores.numeracy,
      useScaledScore: useScaled,
    } as ScoreInput,
  };
}

function ResultsInner({
  searchParamsString,
}: {
  searchParamsString: string;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const result = useMemo(() => {
    const parsed = parseResultsParams(searchParamsString);
    if (!parsed) return { error: 'Invalid or missing results data. Please go back and enter your scores.' } as const;

    const { input, year } = parsed;

    let estimate;
    let schools;
    let title;

    if (year === 'year3') {
      estimate = estimateOC(input);
      schools = getOCSchools();
      title = 'Opportunity Class (OC) Estimates';
    } else {
      estimate = estimateSelective(input);
      schools = getSelectiveSchools();
      title = 'Selective High School Estimates';
    }

    const tiered = tierSchools(schools, estimate.rangeMin, estimate.rangeMax);

    return { estimate, tiered, title, input, year } as const;
  }, [searchParamsString]);

  // Combine all tiered schools into one sorted list, best to worst
  const allSchools = useMemo(() => {
    if ('error' in result) return [];
    const combined = [
      ...result.tiered.safety.map(s => ({ ...s, tierLabel: 'safe' as const })),
      ...result.tiered.target.map(s => ({ ...s, tierLabel: 'target' as const })),
      ...result.tiered.reach.map(s => ({ ...s, tierLabel: 'stretch' as const })),
    ];
    // Sort by minEstScore descending (best to worst)
    combined.sort((a, b) => b.minEstScore - a.minEstScore);
    return combined;
  }, [result]);

  // Filter by search query
  const filteredSchools = useMemo(() => {
    if (!searchQuery.trim()) return allSchools;
    const q = searchQuery.toLowerCase();
    return allSchools.filter(
      s => s.name.toLowerCase().includes(q) || s.suburb.toLowerCase().includes(q)
    );
  }, [allSchools, searchQuery]);

  const copyShareLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
  }, []);

  if ('error' in result) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Alert variant="destructive">
          <AlertTitle>No results to show</AlertTitle>
          <AlertDescription>{result.error}</AlertDescription>
        </Alert>
        <div className="mt-4">
          <Link href="/">
            <Button>Go home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const { estimate, title, input, year } = result;
  const hasResults = allSchools.length > 0;

  const safetyCount = result.tiered.safety.length;
  const targetCount = result.tiered.target.length;
  const reachCount = result.tiered.reach.length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Score summary */}
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Based on your NAPLAN {year === 'year3' ? 'Year 3' : 'Year 5'} scores
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {DOMAINS.map(d => (
              <div key={d} className="p-3 rounded-xl bg-muted/50 border border-border/50 text-center">
                <div className="min-h-[2.5rem] flex items-end justify-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0 mb-0.5" style={{ backgroundColor: DOMAIN_COLORS[d] }} />
                  <div className="font-medium text-xs sm:text-sm">{DOMAIN_LABELS[d].split(' (')[0]}</div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-primary mt-1.5">
                  {input[d]}
                </div>
              </div>
            ))}
          </div>

          <Separator />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="text-sm text-muted-foreground">Estimated placement score range</div>
              <div className="text-3xl font-bold">
                {estimate.rangeMin} – {estimate.rangeMax}
                <span className="text-base font-normal text-muted-foreground ml-2">/ 300</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={copyShareLink}>
                Copy share link
              </Button>
              <Button variant="outline" size="sm" onClick={() => router.back()}>
                Adjust scores
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Alert className="bg-amber-50 border-amber-200 text-amber-800">
        <AlertDescription className="text-sm">
          <strong>Important:</strong> This is an estimate based on community-reported
          historical cutoff data. Cutoffs change yearly and depend on the placement
          test, school assessments, and the applicant pool. Use this as a guide,
          not a guarantee.
        </AlertDescription>
      </Alert>

      {/* Results */}
      {hasResults ? (
        <div className="space-y-4">
          {/* Search box */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Input
                type="text"
                placeholder="Search schools by name or suburb..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
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
            <div className="text-xs text-muted-foreground">
              {filteredSchools.length} school{filteredSchools.length !== 1 ? 's' : ''}
              {' · '}
              <span className="text-amber-600">{reachCount} stretch</span>
              {' / '}
              <span className="text-blue-600">{targetCount} target</span>
              {' / '}
              <span className="text-green-600">{safetyCount} safe</span>
            </div>
          </div>

          {/* School list */}
          <div className="space-y-2">
            {filteredSchools.length > 0 ? (
              filteredSchools.map(school => {
                const style = TIER_STYLES[school.tierLabel === 'stretch' ? 'reach' : school.tierLabel === 'safe' ? 'safety' : school.tierLabel];
                return (
                  <Card key={school.id} className={`border-l-[3px] overflow-hidden transition-all duration-150 hover:shadow-md ${style ? style.color : ''}`}>
                    <CardContent className="py-3.5 px-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-sm">{school.name}</h3>
                            <Badge variant="outline" className={`text-xs font-medium border-0 ${style ? style.badgeClass : ''}`}>
                              {style ? style.label : school.tierLabel}
                            </Badge>
                            {school.isEstimate && (
                              <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200/50">
                                Estimated
                              </Badge>
                            )}
                            {school.gender && (
                              <Badge variant="outline" className="text-xs text-muted-foreground border-border/50">
                                {school.gender}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{school.suburb}</p>
                          <p className="text-xs mt-1.5 text-muted-foreground">
                            {school.yourChanceDescription}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-sm font-semibold tabular-nums">
                            ~{school.minEstScore}–{school.maxEstScore}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            <span className="tabular-nums">{school.scoreConfidence}</span> &middot; {school.dataYear} data
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No schools match &quot;{searchQuery}&quot;. Try a different search term.
              </div>
            )}
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="py-8 text-center space-y-3">
            <p className="text-lg font-medium">No matching schools found</p>
            <p className="text-sm text-muted-foreground">
              Your estimated score range is outside the available school cutoff data.
              This may mean the scores entered are very low or very high compared to
              the dataset. Try adjusting your scores or{' '}
              <Link href={year === 'year3' ? '/oc' : '/selective'} className="underline">
                go back
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default function ResultsContent() {
  const [searchParamsString, setSearchParamsString] = useState('');

  useEffect(() => {
    setSearchParamsString(window.location.search);
  }, []);

  if (!searchParamsString) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center text-muted-foreground">
        Loading results...
      </div>
    );
  }

  return <ResultsInner searchParamsString={searchParamsString} />;
}
