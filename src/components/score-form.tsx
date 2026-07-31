'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import NaplanSliders from '@/components/naplan-sliders';
import { DOMAIN_LABELS, getYearInfo } from '@/lib/naplan';

interface ScoreFormProps {
  year: 'year3' | 'year5';
}

const DOMAINS = ['reading', 'writing', 'spelling', 'grammar', 'numeracy'] as const;

export default function ScoreForm({ year }: ScoreFormProps) {
  const router = useRouter();
  const yearInfo = getYearInfo(year);
  const [scores, setScores] = useState<Record<string, number>>({
    reading: year === 'year3' ? 4 : 5,
    writing: year === 'year3' ? 4 : 5,
    spelling: year === 'year3' ? 4 : 5,
    grammar: year === 'year3' ? 4 : 5,
    numeracy: year === 'year3' ? 4 : 5,
  });
  const [error, setError] = useState('');

  const handleBandChange = useCallback((domain: string, value: string) => {
    if (!value) return;
    setScores(prev => ({ ...prev, [domain]: parseInt(value, 10) }));
    setError('');
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Validate all domains filled
      for (const domain of DOMAINS) {
        if (scores[domain] === undefined || scores[domain] === 0) {
          setError(`Please set a score for ${DOMAIN_LABELS[domain]}.`);
          return;
        }
      }

      // Build query params
      const params = new URLSearchParams();
      params.set('year', year);
      for (const domain of DOMAINS) {
        params.set(domain, scores[domain].toString());
      }

      router.push(`/results?${params.toString()}`);
    },
    [scores, year, router]
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Card className="shadow-sm border-border/60">
        <CardHeader className="pb-4">
          <CardTitle>{yearInfo.label}</CardTitle>
          <CardDescription>
            Drag the dot on each bar to match your child&apos;s NAPLAN results.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <NaplanSliders year={year} scores={scores} onChange={handleBandChange} />

            {error && (
              <Alert variant="destructive" className="rounded-lg">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Separator className="my-6" />

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>How this works:</strong> Drag the black dot up or down on each
                coloured bar to match your child&apos;s NAPLAN band for that subject. The
                bars use the same colour scale as the official NAPLAN report &mdash; green
                at the top (higher bands), red at the bottom (lower bands).
              </p>
              <p>
                Results are <strong>estimates only</strong>. Actual placement depends
                on the placement test, school assessments, and yearly cohort variation.
              </p>
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto shadow-sm">
              See estimated schools
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
