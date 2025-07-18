import { AgeGroup } from './common';

// Simple quote request form for UI prototype
export interface QuoteRequest {
  projectName: string;
  projectType: 'new-installation' | 'replacement' | 'expansion';
  location: string;
  ageGroups: AgeGroup[];
  budgetRange: string;
  timeline: string;
  spaceSize: string;
  additionalRequirements: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
}

// Simple form step interface
export interface QuoteFormStep {
  id: string;
  title: string;
  isCompleted: boolean;
}