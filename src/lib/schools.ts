import ocSchoolsData from '@/data/oc-schools.json';
import selectiveSchoolsData from '@/data/selective-schools.json';
import type { School } from './estimate';

/** Get all OC schools */
export function getOCSchools(): School[] {
  return ocSchoolsData as School[];
}

/** Get all Selective schools */
export function getSelectiveSchools(): School[] {
  return selectiveSchoolsData as School[];
}

/** Get an OC school by ID */
export function getOCSchoolById(id: number): School | undefined {
  return (ocSchoolsData as School[]).find(s => s.id === id);
}

/** Get a Selective school by ID */
export function getSelectiveSchoolById(id: number): School | undefined {
  return (selectiveSchoolsData as School[]).find(s => s.id === id);
}
