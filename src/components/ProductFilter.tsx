import React, { useState, useEffect } from 'react';
import { Filter, X, ChevronDown, Search } from 'lucide-react';
import { AgeGroup, InstallationType, SafetyStandard, AGE_GROUPS, INSTALLATION_TYPES, SAFETY_STANDARDS } from '../types/common';
import { useResponsive } from '../hooks/useResponsive';
import TouchFriendlyButton from './common/TouchFriendlyButton';

export interface ProductFilterState {
  ageGroups: AgeGroup[];
  safetyStandards: SafetyStandard[];
  installationType: InstallationType | 'all';
  categories: string[];
  priceRange: [number, number];
  searchQuery: string;
  sortBy: 'name' | 'price' | 'popularity' | 'newest';
}

interface ProductFilterProps {
  filters: ProductFilterState;
  onFiltersChange: (filters: ProductFilterState) => void;
  categories: Array<{ id: string; name: string }>;
  priceRange: [number, number];
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  filters,
  onFiltersChange,
  categories,
  priceRange
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState(filters.searchQuery);
  const { isMobile, isTablet } = useResponsive();

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      onFiltersChange({ ...filters, searchQuery: searchTerm });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleAgeGroupToggle = (ageGroup: AgeGroup) => {
    const newAgeGroups = filters.ageGroups.includes(ageGroup)
      ? filters.ageGroups.filter(ag => ag !== ageGroup)
      : [...filters.ageGroups, ageGroup];
    
    onFiltersChange({ ...filters, ageGroups: newAgeGroups });
  };

  const handleSafetyStandardToggle = (standard: SafetyStandard) => {
    const newStandards = filters.safetyStandards.includes(standard)
      ? filters.safetyStandards.filter(ss => ss !== standard)
      : [...filters.safetyStandards, standard];
    
    onFiltersChange({ ...filters, safetyStandards: newStandards });
  };

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(c => c !== categoryId)
      : [...filters.categories, categoryId];
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleInstallationTypeChange = (type: InstallationType | 'all') => {
    onFiltersChange({ ...filters, installationType: type });
  };

  // const handlePriceRangeChange = (newRange: [number, number]) => {
  //   onFiltersChange({ ...filters, priceRange: newRange });
  // };

  const handleSortChange = (sortBy: ProductFilterState['sortBy']) => {
    onFiltersChange({ ...filters, sortBy });
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    onFiltersChange({
      ageGroups: [],
      safetyStandards: [],
      installationType: 'all',
      categories: [],
      priceRange: priceRange,
      searchQuery: '',
      sortBy: 'name'
    });
  };

  const hasActiveFilters = 
    filters.ageGroups.length > 0 ||
    filters.safetyStandards.length > 0 ||
    filters.installationType !== 'all' ||
    filters.categories.length > 0 ||
    filters.searchQuery.length > 0 ||
    filters.priceRange[0] !== priceRange[0] ||
    filters.priceRange[1] !== priceRange[1];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Toggle Button */}
        <div className={`flex items-center justify-between mb-4 ${isMobile ? 'flex-col gap-3' : ''}`}>
          <TouchFriendlyButton
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
            variant="ghost"
            size={isMobile ? 'md' : 'sm'}
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </TouchFriendlyButton>

          <div className={`flex items-center gap-4 ${isMobile ? 'w-full justify-between' : ''}`}>
            {hasActiveFilters && (
              <TouchFriendlyButton
                onClick={clearAllFilters}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                variant="ghost"
                size="sm"
              >
                <X className="w-4 h-4" />
                <span className={isMobile ? 'text-xs' : 'text-sm'}>Clear All</span>
              </TouchFriendlyButton>
            )}
            
            <select
              value={filters.sortBy}
              onChange={(e) => handleSortChange(e.target.value as ProductFilterState['sortBy'])}
              className={`border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isMobile ? 'px-2 py-3 text-sm flex-1' : 'px-3 py-2'
              }`}
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="popularity">Sort by Popularity</option>
              <option value="newest">Sort by Newest</option>
            </select>
          </div>
        </div>

        {/* Expanded Filters */}
        {isExpanded && (
          <div className={`grid gap-6 p-6 bg-gray-50 rounded-lg ${
            isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {/* Age Groups */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Age Groups</h3>
              <div className="space-y-2">
                {Object.values(AGE_GROUPS).map((ageGroup) => (
                  <label key={ageGroup} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.ageGroups.includes(ageGroup)}
                      onChange={() => handleAgeGroupToggle(ageGroup)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{ageGroup}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Safety Standards */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Safety Standards</h3>
              <div className="space-y-2">
                {Object.values(SAFETY_STANDARDS).map((standard) => (
                  <label key={standard} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.safetyStandards.includes(standard)}
                      onChange={() => handleSafetyStandardToggle(standard)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{standard}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Installation Type */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Installation Type</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="installationType"
                    checked={filters.installationType === 'all'}
                    onChange={() => handleInstallationTypeChange('all')}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">All Types</span>
                </label>
                {Object.values(INSTALLATION_TYPES).map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      name="installationType"
                      checked={filters.installationType === type}
                      onChange={() => handleInstallationTypeChange(type)}
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={() => handleCategoryToggle(category.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.ageGroups.map((ageGroup) => (
              <span
                key={ageGroup}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {ageGroup}
                <button
                  onClick={() => handleAgeGroupToggle(ageGroup)}
                  className="hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.safetyStandards.map((standard) => (
              <span
                key={standard}
                className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
              >
                {standard}
                <button
                  onClick={() => handleSafetyStandardToggle(standard)}
                  className="hover:bg-green-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.installationType !== 'all' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                {filters.installationType}
                <button
                  onClick={() => handleInstallationTypeChange('all')}
                  className="hover:bg-purple-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;