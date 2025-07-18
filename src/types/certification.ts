import { SafetyStandard } from './common';

// Enhanced certification interface for comprehensive display
export interface Certification {
  id: string;
  standard: SafetyStandard;
  certificationNumber: string;
  issuingBody: string;
  validUntil: Date;
  regions: string[];
  logoUrl: string;
  description: string;
  documentUrl?: string;
  isValid: boolean;
}

// Certification document interface
export interface CertificationDocument {
  id: string;
  name: string;
  type: 'certificate' | 'test_report' | 'compliance_sheet' | 'installation_guide';
  url: string;
  fileSize: string;
  lastUpdated: Date;
}

// Certification info for display
export interface CertificationInfo {
  id: string;
  name: SafetyStandard;
  fullName: string;
  description: string;
  logoUrl: string;
  regions: string[];
  requirements: string[];
  documents: CertificationDocument[];
}