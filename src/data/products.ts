import { Product } from '../types/product';
import { AGE_GROUPS, INSTALLATION_TYPES, SAFETY_STANDARDS } from '../types/common';

export const sampleProducts: Product[] = [
  {
    id: 'biggo-swings',
    name: 'Biggo Swings',
    category: 'swings',
    ageGroups: [AGE_GROUPS.SCHOOL_AGE, AGE_GROUPS.TEEN],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.ASTM],
    installationType: INSTALLATION_TYPES.OUTDOOR,
    images: [
      {
        url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Biggo Swings playground equipment'
      }
    ],
    description: 'Premium swing sets designed for maximum fun and safety with robust construction',
    priceRange: '$2,500 - $4,000',
    features: ['Weather Resistant', 'Anti-Vandal Design', 'Easy Installation'],
    dimensions: '4m x 3m x 2.5m',
    capacity: '4-6 children',
    isPopular: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'rotating-climbers',
    name: 'Rotating Climbers',
    category: 'climbers',
    ageGroups: [AGE_GROUPS.SCHOOL_AGE],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.CPSC],
    installationType: INSTALLATION_TYPES.OUTDOOR,
    images: [
      {
        url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Rotating Climbers playground equipment'
      }
    ],
    description: 'Dynamic climbing equipment that rotates for added challenge and skill development',
    priceRange: '$3,200 - $5,500',
    features: ['360° Rotation', 'Non-Slip Grips', 'Adjustable Difficulty'],
    dimensions: '3m x 3m x 2.8m',
    capacity: '3-4 children',
    isPopular: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'frame-nets',
    name: 'Frame Nets',
    category: 'nets',
    ageGroups: [AGE_GROUPS.SCHOOL_AGE, AGE_GROUPS.TEEN],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.ASTM, SAFETY_STANDARDS.CPSC],
    installationType: INSTALLATION_TYPES.OUTDOOR,
    images: [
      {
        url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Frame Nets climbing structure'
      }
    ],
    description: 'Sturdy frame nets for climbing and exploration with multiple access points',
    priceRange: '$4,500 - $7,200',
    features: ['Multi-Level Access', 'High-Strength Rope', 'Modular Design'],
    dimensions: '5m x 4m x 3.5m',
    capacity: '8-12 children',
    isPopular: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'mast-nets',
    name: 'Mast Nets',
    category: 'nets',
    ageGroups: [AGE_GROUPS.TEEN],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.ASTM],
    installationType: INSTALLATION_TYPES.OUTDOOR,
    images: [
      {
        url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Mast Nets tall climbing structure'
      }
    ],
    description: 'Tall mast nets for adventurous climbing experiences and physical challenges',
    priceRange: '$6,000 - $9,500',
    features: ['Extra Height', 'Challenge Course', 'Professional Grade'],
    dimensions: '4m x 4m x 5m',
    capacity: '6-8 children',
    isPopular: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'nature-play',
    name: 'Nature Play Elements',
    category: 'nature',
    ageGroups: [AGE_GROUPS.TODDLER, AGE_GROUPS.SCHOOL_AGE],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.CPSC],
    installationType: INSTALLATION_TYPES.OUTDOOR,
    images: [
      {
        url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Nature Play Elements natural playground'
      }
    ],
    description: 'Natural play elements that connect children with nature and encourage exploration',
    priceRange: '$1,800 - $3,500',
    features: ['Natural Materials', 'Eco-Friendly', 'Sensory Play'],
    dimensions: '6m x 4m x 1.5m',
    capacity: '10-15 children',
    isPopular: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'ropes-courses',
    name: 'Ropes Courses',
    category: 'ropes',
    ageGroups: [AGE_GROUPS.TEEN],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.ASTM],
    installationType: INSTALLATION_TYPES.OUTDOOR,
    images: [
      {
        url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Ropes Courses adventure playground'
      }
    ],
    description: 'Challenging rope courses for skill development and team building activities',
    priceRange: '$8,500 - $15,000',
    features: ['Multi-Station Course', 'Safety Harness Points', 'Progressive Difficulty'],
    dimensions: '12m x 8m x 4m',
    capacity: '4-6 children',
    isPopular: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sports-fitness',
    name: 'Sports and Fitness Equipment',
    category: 'sports',
    ageGroups: [AGE_GROUPS.TEEN],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.ASTM],
    installationType: INSTALLATION_TYPES.BOTH,
    images: [
      {
        url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Sports and Fitness outdoor equipment'
      }
    ],
    description: 'Outdoor fitness equipment designed for all ages and fitness levels',
    priceRange: '$3,500 - $6,800',
    features: ['All-Weather Design', 'Multiple Exercises', 'Low Maintenance'],
    dimensions: '8m x 6m x 2.5m',
    capacity: '6-10 users',
    isPopular: true,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'toddler-play',
    name: 'Toddler Play Structure',
    category: 'toddler',
    ageGroups: [AGE_GROUPS.TODDLER],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.CPSC],
    installationType: INSTALLATION_TYPES.BOTH,
    images: [
      {
        url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Toddler Play Structure safe playground'
      }
    ],
    description: 'Safe and engaging play structures specifically designed for toddlers',
    priceRange: '$2,200 - $4,200',
    features: ['Low Height Design', 'Rounded Edges', 'Bright Colors'],
    dimensions: '4m x 3m x 1.8m',
    capacity: '6-8 toddlers',
    isPopular: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'inclusive-play',
    name: 'Inclusive Play Equipment',
    category: 'inclusive',
    ageGroups: [AGE_GROUPS.TODDLER, AGE_GROUPS.SCHOOL_AGE],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.ASTM, SAFETY_STANDARDS.CPSC],
    installationType: INSTALLATION_TYPES.OUTDOOR,
    images: [
      {
        url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Inclusive Play Equipment accessible playground'
      }
    ],
    description: 'Accessible playground equipment designed for children of all abilities',
    priceRange: '$5,500 - $9,200',
    features: ['Wheelchair Accessible', 'Sensory Elements', 'Universal Design'],
    dimensions: '7m x 5m x 2.2m',
    capacity: '8-12 children',
    isPopular: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'water-play',
    name: 'Water Play Features',
    category: 'water',
    ageGroups: [AGE_GROUPS.TODDLER, AGE_GROUPS.SCHOOL_AGE],
    safetyStandards: [SAFETY_STANDARDS.EN_1176, SAFETY_STANDARDS.CPSC],
    installationType: INSTALLATION_TYPES.OUTDOOR,
    images: [
      {
        url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        alt: 'Water Play Features splash playground'
      }
    ],
    description: 'Interactive water play features for cooling fun during hot weather',
    priceRange: '$4,200 - $8,500',
    features: ['Water Recycling', 'Interactive Controls', 'Non-Slip Surfaces'],
    dimensions: '6m x 6m x 2m',
    capacity: '12-20 children',
    isPopular: true,
    isFeatured: false,
    isNew: false
  }
];

export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'swings', name: 'Swings' },
  { id: 'climbers', name: 'Climbers' },
  { id: 'nets', name: 'Nets' },
  { id: 'nature', name: 'Nature Play' },
  { id: 'ropes', name: 'Ropes Courses' },
  { id: 'sports', name: 'Sports & Fitness' },
  { id: 'toddler', name: 'Toddler Equipment' },
  { id: 'inclusive', name: 'Inclusive Play' },
  { id: 'water', name: 'Water Play' }
];