import selectiveData from '@/data/selective-reserve.json';
import ocData from '@/data/oc-reserve.json';

export type ReserveBand = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface ReserveSchool {
  name: string;
  band2026: ReserveBand | null;
  band2025?: ReserveBand;
  band2024?: ReserveBand;
}

export type ProbabilityLevel = 'very-high' | 'high' | 'good' | 'moderate' | 'low' | 'very-low' | 'unknown';

export interface ReserveEstimate {
  school: ReserveSchool;
  yourBand: ReserveBand;
  probability: ProbabilityLevel;
  chancePercent: number;
  description: string;
  historicalBands: string[];
  historicalSummary: string;
}

/** Band to numeric weight for comparison (higher = better chance of offer) */
const BAND_WEIGHT: Record<ReserveBand, number> = {
  'A': 6,
  'B': 5,
  'C': 4,
  'D': 3,
  'E': 2,
  'F': 1,
};

/** Probability levels with their descriptions */
const PROBABILITY_LEVELS: Record<ProbabilityLevel, { label: string; description: string; color: string }> = {
  'very-high': {
    label: 'Very High',
    description: 'Based on past years, your child is very likely to receive an offer from the reserve list. Offers typically reach this band or beyond.',
    color: '#16a34a',
  },
  'high': {
    label: 'High',
    description: 'There is a strong chance of receiving an offer. In most past years, the reserve list reached at least this band.',
    color: '#22c55e',
  },
  'good': {
    label: 'Good',
    description: 'There is a reasonable chance. Some past years reached this band, though it is not guaranteed.',
    color: '#eab308',
  },
  'moderate': {
    label: 'Moderate',
    description: 'It is possible but not certain. The reserve list has only sometimes reached this band in past years.',
    color: '#f97316',
  },
  'low': {
    label: 'Low',
    description: 'Based on historical data, it is unlikely the reserve list will reach this band. Consider other options.',
    color: '#ef4444',
  },
  'very-low': {
    label: 'Very Low',
    description: 'The reserve list has not reached this band in recent years. An offer is very unlikely.',
    color: '#991b1b',
  },
  'unknown': {
    label: 'Unknown',
    description: 'There is not enough historical data to estimate. Check the NSW Department of Education for the most current information.',
    color: '#6b7280',
  },
};

/** Get all schools for a given type */
export function getReserveSchools(type: 'selective' | 'oc'): ReserveSchool[] {
  if (type === 'selective') {
    return selectiveData as ReserveSchool[];
  }
  return ocData as ReserveSchool[];
}

/** Get a specific school by name (fuzzy match) */
export function getReserveSchool(type: 'selective' | 'oc', name: string): ReserveSchool | undefined {
  const schools = getReserveSchools(type);
  const normalized = name.toLowerCase().trim();
  return schools.find(s => s.name.toLowerCase().includes(normalized));
}

/** 
 * Estimate the chance of getting an offer from the reserve list.
 * 
 * Logic:
 * - Collect all historical bands that the reserve list reached
 * - Compare your child's band against those historical bands
 * - If your band is better than or equal to the best-ever band → very high chance
 * - If your band is equal to a band that was reached in some years → good/high chance
 * - If your band is worse than all reached bands → low/very-low chance
 */
export function estimateReserveChance(
  school: ReserveSchool,
  yourBand: ReserveBand
): ReserveEstimate {
  const yourWeight = BAND_WEIGHT[yourBand];

  // Collect non-null historical bands
  const years: { year: string; band: ReserveBand }[] = [];
  if (school.band2026) years.push({ year: '2026 (Live)', band: school.band2026 });
  if (school.band2025) years.push({ year: '2025', band: school.band2025 });
  if (school.band2024) years.push({ year: '2024', band: school.band2024 });

  const historicalBands = years.map(y => `Band ${y.band}`);

  if (years.length === 0) {
    return {
      school,
      yourBand,
      probability: 'unknown',
      chancePercent: 0,
      description: PROBABILITY_LEVELS.unknown.description,
      historicalBands: ['No historical data'],
      historicalSummary: 'No past data available for this school.',
    };
  }

  const historicalWeights = years.map(y => BAND_WEIGHT[y.band]);
  const bestHistoricalWeight = Math.max(...historicalWeights);
  const worstHistoricalWeight = Math.min(...historicalWeights);
  const avgHistoricalWeight = historicalWeights.reduce((a, b) => a + b, 0) / historicalWeights.length;

  // Probability logic
  let probability: ProbabilityLevel;
  let chancePercent: number;

  if (yourWeight >= bestHistoricalWeight) {
    // Your band is better than or equal to the best historical band reached
    probability = 'very-high';
    chancePercent = 90;
  } else if (yourWeight >= avgHistoricalWeight) {
    // Your band is above average historical reach
    probability = 'high';
    chancePercent = 75;
  } else if (yourWeight >= worstHistoricalWeight) {
    // Your band is between average and worst historical
    const range = bestHistoricalWeight - worstHistoricalWeight;
    if (range === 0) {
      probability = 'good';
      chancePercent = 60;
    } else {
      const position = (yourWeight - worstHistoricalWeight) / range;
      if (position > 0.5) {
        probability = 'good';
        chancePercent = Math.round(40 + position * 30);
      } else {
        probability = 'moderate';
        chancePercent = Math.round(15 + position * 45);
      }
    }
  } else if (yourWeight === worstHistoricalWeight - 1) {
    // Just one band below the worst historical
    probability = 'low';
    chancePercent = 10;
  } else {
    // Two or more bands below the worst
    probability = 'very-low';
    chancePercent = 3;
  }

  const historicalSummary = `Based on ${years.length} year${years.length > 1 ? 's' : ''} of data: ${years.map(y => `Band ${y.band} (${y.year})`).join(', ')}`;

  return {
    school,
    yourBand,
    probability,
    chancePercent,
    description: PROBABILITY_LEVELS[probability].description,
    historicalBands,
    historicalSummary,
  };
}

/** Get the probability level styling */
export function getProbabilityStyle(level: ProbabilityLevel) {
  return PROBABILITY_LEVELS[level];
}

/** Band descriptions for the dropdown */
export const BAND_OPTIONS: { value: ReserveBand; label: string }[] = [
  { value: 'A', label: 'Band A — within 1 month (Very High chance)' },
  { value: 'B', label: 'Band B — within 2 months (High chance)' },
  { value: 'C', label: 'Band C — within 3 months (Good chance)' },
  { value: 'D', label: 'Band D — within 4 months (Moderate chance)' },
  { value: 'E', label: 'Band E — within 5 months (Low chance)' },
  { value: 'F', label: 'Band F — unlikely (Very Low chance)' },
];
