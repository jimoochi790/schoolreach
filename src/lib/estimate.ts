import bandsData from '@/data/naplan-bands.json';

export interface ScoreInput {
  reading: number;
  writing: number;
  spelling: number;
  grammar: number;
  numeracy: number;
  useScaledScore: boolean;
}

export interface DomainScore {
  min: number;
  mid: number;
  max: number;
}

/**
 * Convert a band number to a scaled score range for the given year.
 */
export function bandToScaled(band: number, year: 'year3' | 'year5'): DomainScore {
  const bandData = bandsData[year].band;
  const key = band.toString();
  const entry = bandData[key as keyof typeof bandData];
  if (!entry) {
    throw new Error(`Invalid band ${band} for ${year}`);
  }
  return entry;
}

/**
 * Directly estimate an OC profile score (0-300) from Year 3 NAPLAN bands.
 * Uses linear interpolation between known anchor points based on community data.
 */
function ocBandToScore(avgBand: number): number {
  // Anchor points: (avg_band, profile_score)
  const anchors = [
    [1.0, 80], [1.5, 95], [2.0, 110], [2.5, 125],
    [3.0, 140], [3.5, 155], [4.0, 170], [4.5, 185],
    [5.0, 200], [5.5, 220], [5.8, 235], [6.0, 250],
  ];
  for (let i = 0; i < anchors.length - 1; i++) {
    if (avgBand >= anchors[i][0] && avgBand <= anchors[i + 1][0]) {
      const t = (avgBand - anchors[i][0]) / (anchors[i + 1][0] - anchors[i][0]);
      return Math.round(anchors[i][1] + t * (anchors[i + 1][1] - anchors[i][1]));
    }
  }
  if (avgBand > anchors[anchors.length - 1][0]) return anchors[anchors.length - 1][1];
  return anchors[0][1];
}

/**
 * Directly estimate a Selective profile score (0-300) from Year 5 NAPLAN bands.
 */
function selectiveBandToScore(avgBand: number): number {
  const anchors = [
    [3.0, 110], [3.5, 120], [4.0, 135], [4.5, 150],
    [5.0, 165], [5.5, 180], [6.0, 195], [6.5, 215],
    [7.0, 235], [7.5, 250], [8.0, 265],
  ];
  for (let i = 0; i < anchors.length - 1; i++) {
    if (avgBand >= anchors[i][0] && avgBand <= anchors[i + 1][0]) {
      const t = (avgBand - anchors[i][0]) / (anchors[i + 1][0] - anchors[i][0]);
      return Math.round(anchors[i][1] + t * (anchors[i + 1][1] - anchors[i][1]));
    }
  }
  if (avgBand > anchors[anchors.length - 1][0]) return anchors[anchors.length - 1][1];
  return anchors[0][1];
}

/**
 * Calculate the full weighted composite (0-1000 scale) from NAPLAN bands.
 * Used for scaled-score mode.
 */
function calcWeightedFromScaled(scaled: Record<string, number>, year: 'year3' | 'year5'): number {
  const englishComposite = (scaled.reading + scaled.writing + scaled.spelling + scaled.grammar) / 4;
  if (year === 'year3') {
    // OC: English 40%, Numeracy 60%
    return englishComposite * 0.4 + scaled.numeracy * 0.6;
  } else {
    // Selective: English 30%, Numeracy 30%, Thinking Skills 40%
    const estimatedTS = (englishComposite + scaled.numeracy) / 2;
    return englishComposite * 0.3 + scaled.numeracy * 0.3 + estimatedTS * 0.4;
  }
}

/**
 * Estimate an OC placement score (0-300 scale) from Year 3 NAPLAN scores.
 */
export function estimateOC(input: ScoreInput): { score: number; rangeMin: number; rangeMax: number } {
  const domains = ['reading', 'writing', 'spelling', 'grammar', 'numeracy'] as const;
  const scaled: Record<string, number> = {};
  let totalBand = 0;

  for (const domain of domains) {
    const value = input[domain];
    if (input.useScaledScore) {
      scaled[domain] = Math.max(0, Math.min(1000, value));
    } else {
      const range = bandToScaled(value, 'year3');
      scaled[domain] = range.mid;
      totalBand += value;
    }
  }

  let score: number;
  if (input.useScaledScore) {
    // Use the weighted formula with scaled scores
    const raw = calcWeightedFromScaled(scaled, 'year3');
    score = Math.round((raw / 1000) * 300);
  } else {
    // Use direct band-to-score mapping
    const avgBand = totalBand / 5;
    score = ocBandToScore(avgBand);
  }
  
  const margin = 20;

  return {
    score,
    rangeMin: Math.max(0, score - margin),
    rangeMax: Math.min(300, score + margin),
  };
}

/**
 * Estimate a Selective placement score (0-300 scale) from Year 5 NAPLAN scores.
 */
export function estimateSelective(input: ScoreInput): { score: number; rangeMin: number; rangeMax: number } {
  const domains = ['reading', 'writing', 'spelling', 'grammar', 'numeracy'] as const;
  const scaled: Record<string, number> = {};
  let totalBand = 0;

  for (const domain of domains) {
    const value = input[domain];
    if (input.useScaledScore) {
      scaled[domain] = Math.max(0, Math.min(1000, value));
    } else {
      const range = bandToScaled(value, 'year5');
      scaled[domain] = range.mid;
      totalBand += value;
    }
  }

  let score: number;
  if (input.useScaledScore) {
    // Use the weighted formula with scaled scores
    const raw = calcWeightedFromScaled(scaled, 'year5');
    score = Math.round((raw / 1000) * 300);
  } else {
    // Use direct band-to-score mapping
    const avgBand = totalBand / 5;
    score = selectiveBandToScore(avgBand);
  }
  
  const margin = 22;

  return {
    score,
    rangeMin: Math.max(0, score - margin),
    rangeMax: Math.min(300, score + margin),
  };
}

export interface School {
  id: number;
  name: string;
  suburb: string;
  minEstScore: number;
  maxEstScore: number;
  scoreConfidence: string;
  dataYear: number;
  isEstimate?: boolean;
  dataSource?: string;
  gender?: string;
  tier?: string;
  selectivityRank?: number;
}

export type Tier = 'reach' | 'target' | 'safety';

export interface TieredSchool extends School {
  tier: Tier;
  yourChanceDescription: string;
}

/**
 * Categorise schools into Reach / Target / Safety based on estimated score range.
 */
export function tierSchools(
  schools: School[],
  estimatedRangeMin: number,
  estimatedRangeMax: number
): { reach: TieredSchool[]; target: TieredSchool[]; safety: TieredSchool[] } {
  const result: { reach: TieredSchool[]; target: TieredSchool[]; safety: TieredSchool[] } = {
    reach: [],
    target: [],
    safety: [],
  };

  for (const school of schools) {
    const schoolMin = school.minEstScore;
    const schoolMax = school.maxEstScore;

    const isSafety = estimatedRangeMin >= schoolMax;
    const isTarget = estimatedRangeMax >= schoolMin && estimatedRangeMin <= schoolMax;
    const isReach = !isTarget && !isSafety && estimatedRangeMax >= schoolMin - 30;

    if (isSafety) {
      result.safety.push({
        ...school,
        tier: 'safety',
        yourChanceDescription: 'Your estimated score is above this school\'s typical range — strong chance.',
      });
    } else if (isTarget) {
      result.target.push({
        ...school,
        tier: 'target',
        yourChanceDescription: 'Your estimated score overlaps with this school\'s typical range — realistic option.',
      });
    } else if (isReach) {
      result.reach.push({
        ...school,
        tier: 'reach',
        yourChanceDescription: 'Your estimated score is below this school\'s typical range but within reach — would need strong test performance.',
      });
    }
  }

  return result;
}
