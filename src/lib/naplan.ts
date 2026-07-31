import bandsData from '@/data/naplan-bands.json';

export interface YearInfo {
  year: 'year3' | 'year5';
  label: string;
  ocOrSelective: 'oc' | 'selective';
  bands: { value: number; label: string }[];
}

export const YEAR_OPTIONS: YearInfo[] = [
  {
    year: 'year3',
    label: 'Year 3 (Estimate OC Schools)',
    ocOrSelective: 'oc',
    bands: [
      { value: 1, label: 'Band 1' },
      { value: 2, label: 'Band 2' },
      { value: 3, label: 'Band 3 (Minimum standard)' },
      { value: 4, label: 'Band 4' },
      { value: 5, label: 'Band 5' },
      { value: 6, label: 'Band 6 (Excellence)' },
    ],
  },
  {
    year: 'year5',
    label: 'Year 5 (Estimate Selective Schools)',
    ocOrSelective: 'selective',
    bands: [
      { value: 3, label: 'Band 3' },
      { value: 4, label: 'Band 4 (Minimum standard)' },
      { value: 5, label: 'Band 5' },
      { value: 6, label: 'Band 6' },
      { value: 7, label: 'Band 7' },
      { value: 8, label: 'Band 8 (Excellence)' },
    ],
  },
];

export const DOMAIN_LABELS: Record<string, string> = {
  reading: 'Reading',
  writing: 'Writing',
  spelling: 'Spelling',
  grammar: 'Grammar & Punctuation',
  numeracy: 'Numeracy',
};

/** Get the band range info for display */
export function getYearInfo(year: 'year3' | 'year5'): YearInfo {
  return YEAR_OPTIONS.find(o => o.year === year) ?? YEAR_OPTIONS[0];
}

/** Get the scaled score mid-point for a band, for display purposes */
export function getBandMidpoint(year: 'year3' | 'year5', band: number): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bandData = (bandsData as any)[year].band;
  return bandData[band.toString()]?.mid ?? 0;
}
