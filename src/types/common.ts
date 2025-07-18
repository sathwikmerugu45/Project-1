// Common UI types for frontend prototype

export interface Image {
  url: string;
  alt: string;
  caption?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  content: string;
  rating: number;
}

// Simple constants for UI display
export const AGE_GROUPS = {
  TODDLER: '2-5 years',
  SCHOOL_AGE: '5-12 years',
  TEEN: '13+ years'
} as const;

export type AgeGroup = typeof AGE_GROUPS[keyof typeof AGE_GROUPS];

export const INSTALLATION_TYPES = {
  INDOOR: 'Indoor',
  OUTDOOR: 'Outdoor',
  BOTH: 'Indoor/Outdoor'
} as const;

export type InstallationType = typeof INSTALLATION_TYPES[keyof typeof INSTALLATION_TYPES];

export const SAFETY_STANDARDS = {
  EN_1176: 'EN 1176',
  ASTM: 'ASTM',
  CPSC: 'CPSC'
} as const;

export type SafetyStandard = typeof SAFETY_STANDARDS[keyof typeof SAFETY_STANDARDS];

export const PROJECT_TYPES = {
  SCHOOL: 'School',
  PARK: 'Public Park',
  COMMUNITY: 'Community Center',
  RESIDENTIAL: 'Residential'
} as const;

export type ProjectType = typeof PROJECT_TYPES[keyof typeof PROJECT_TYPES];