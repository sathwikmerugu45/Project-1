import { ProjectType, Image, Testimonial } from './common';

// Enhanced project interface with advanced features
export interface Project {
  id: string;
  title: string;
  clientType: ProjectType;
  clientName: string;
  location: string;
  completionYear: number;
  images: ProjectImage[];
  description: string;
  equipmentUsed: string[];
  testimonial?: Testimonial;
  budgetRange: string;
  isFeatured: boolean;
  // Enhanced fields for advanced features
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  metrics: ProjectMetrics;
  timeline: string;
  size: string;
  beforeAfterImages?: BeforeAfterImages;
}

// Enhanced project image with equipment tags and metadata
export interface ProjectImage extends Image {
  type: 'hero' | 'gallery' | 'before' | 'after' | 'detail';
  equipmentTags?: EquipmentTag[];
  isZoomable?: boolean;
}

// Equipment identification tags for images
export interface EquipmentTag {
  id: string;
  name: string;
  x: number; // X coordinate percentage (0-100)
  y: number; // Y coordinate percentage (0-100)
  productId?: string; // Link to product if available
}

// Project metrics for impact display
export interface ProjectMetrics {
  userCapacity: number;
  installationTime: string;
  budgetAmount: number;
  satisfactionScore?: number;
  safetyIncidents: number;
  usageIncrease?: string;
  maintenanceReduction?: string;
  communityImpact?: string[];
}

// Before/after image comparison
export interface BeforeAfterImages {
  before: Image;
  after: Image;
  description: string;
}

// Enhanced filter for project gallery
export interface ProjectFilter {
  clientTypes: ProjectType[];
  years: number[];
  searchQuery: string;
  budgetRanges: string[];
  features: string[];
  locations: string[];
}

// Project sorting options
export interface ProjectSortOption {
  value: string;
  label: string;
}

export const PROJECT_SORT_OPTIONS: ProjectSortOption[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'budget-high', label: 'Highest Budget' },
  { value: 'budget-low', label: 'Lowest Budget' },
  { value: 'capacity-high', label: 'Highest Capacity' },
  { value: 'alphabetical', label: 'Alphabetical' }
];