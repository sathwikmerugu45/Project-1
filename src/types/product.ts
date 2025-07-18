import { AgeGroup, InstallationType, SafetyStandard, Image } from './common';
import { Certification } from './certification';

// Enhanced product specification interface
export interface ProductSpec {
  name: string;
  value: string;
  unit?: string;
  category: 'dimensions' | 'capacity' | 'materials' | 'safety' | 'performance';
}

// Product variant interface for different configurations
export interface ProductVariant {
  id: string;
  name: string;
  model: string;
  specifications: ProductSpec[];
  images: Image[];
  priceModifier?: number;
  description?: string;
  features?: string[];
}

// Enhanced product interface for comprehensive display
export interface Product {
  id: string;
  name: string;
  model?: string;
  category: string;
  ageGroups: AgeGroup[];
  safetyStandards: SafetyStandard[];
  installationType: InstallationType;
  images: Image[];
  description: string;
  priceRange: string;
  features: string[];
  dimensions: string;
  capacity: string;
  isPopular: boolean;
  isFeatured: boolean;
  isNew: boolean;
  // Enhanced fields for detailed view
  specifications?: Record<string, ProductSpec[]>;
  variants?: ProductVariant[];
  certifications?: Certification[];
  relatedProducts?: string[];
  customizationOptions?: CustomizationOption[];
  installationRequirements?: string[];
  warranty?: string;
  materials?: string[];
}

// Customization options interface
export interface CustomizationOption {
  id: string;
  name: string;
  type: 'color' | 'size' | 'material' | 'accessory';
  options: CustomizationChoice[];
  required: boolean;
}

export interface CustomizationChoice {
  id: string;
  name: string;
  description?: string;
  priceModifier?: number;
  image?: string;
}

// Simple filter interface for UI
export interface ProductFilter {
  ageGroups: AgeGroup[];
  categories: string[];
  installationType: InstallationType | 'all';
  searchQuery: string;
}

// Product category for navigation
export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: Image;
  productCount: number;
}