import React, { useState } from 'react';
import { Search, Filter, X, Calendar, MapPin, DollarSign, Users, ChevronDown } from 'lucide-react';
import { ProjectFilter as ProjectFilterType, PROJECT_SORT_OPTIONS } from '../../types/project';
import { ProjectType } from '../../types/common';

interface ProjectFilterProps {
  filter: ProjectFilterType;
  onFilterChange: (filter: ProjectFilterType) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  totalResults: number;
  className?: string;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  filter,
  onFilterChange,
  sortBy,
  onSortChange,
  totalResults,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const clientTypeOptions: { value: ProjectType; label: string }[] = [
    { value: 'School', label: 'Schools' },
    { value: 'Public Park', label: 'Parks & Recreation' },
    { value: 'Community Center', label: 'Community Centers' },
    { value: 'Residential', label: 'Residential' }
  ];

  const budgetRangeOptions = [
    { value: 'under-100k', label: 'Under $100K' },
    { value: '100k-250k', label: '$100K - $250K' },
    { value: '250k-500k', label: '$250K - $500K' },
    { value: '500k-1m', label: '$500K - $1M' },
    { value: 'over-1m', label: 'Over $1M' }
  ];

  const yearOptions = Array.from({ length: 10 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { value: year, label: year.toString() };
  });

  const featureOptions = [
    'Natural Play',
    'Inclusive Design',
    'Fitness Equipment',
    'Water Play',
    'Shade Structures',
    'Safety Surfacing',
    'Educational Elements',
    'Sensory Play',
    'Climbing Features',
    'Swings & Slides'
  ];

  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filter, searchQuery: value });
  };

  const handleClientTypeToggle = (clientType: ProjectType) => {
    const newClientTypes = filter.clientTypes.includes(clientType)
      ? filter.clientTypes.filter(type => type !== clientType)
      : [...filter.clientTypes, clientType];
    onFilterChange({ ...filter, clientTypes: newClientTypes });
  };

  const handleBudgetRangeToggle = (budgetRange: string) => {
    const newBudgetRanges = filter.budgetRanges.includes(budgetRange)
      ? filter.budgetRanges.filter(range => range !== budgetRange)
      : [...filter.budgetRanges, budgetRange];
    onFilterChange({ ...filter, budgetRanges: newBudgetRanges });
  };

  const handleYearToggle = (year: number) => {
    const newYears = filter.years.includes(year)
      ? filter.years.filter(y => y !== year)
      : [...filter.years, year];
    onFilterChange({ ...filter, years: newYears });
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = filter.features.includes(feature)
      ? filter.features.filter(f => f !== feature)
      : [...filter.features, feature];
    onFilterChange({ ...filter, features: newFeatures });
  };

  const clearAllFilters = () => {
    onFilterChange({
      clientTypes: [],
      years: [],
      searchQuery: '',
      budgetRanges: [],
      features: [],
      locations: []
    });
  };

  const getActiveFilterCount = () => {
    return filter.clientTypes.length + 
           filter.years.length + 
           filter.budgetRanges.length + 
           filter.features.length + 
           filter.locations.length +
           (filter.searchQuery ? 1 : 0);
  };

  return (
    <div className={`bg-white border-b border-neutral-200 ${className}`}>
      <div className="container-max py-6">
        {/* Search and Sort Row */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search projects by name, location, or client..."
              value={filter.searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {PROJECT_SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 px-4 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
            {getActiveFilterCount() > 0 && (
              <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getActiveFilterCount()}
              </span>
            )}
          </button>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-neutral-600">
            Showing {totalResults} project{totalResults !== 1 ? 's' : ''}
          </p>
          {getActiveFilterCount() > 0 && (
            <button
              onClick={clearAllFilters}
              className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium"
            >
              <X className="w-4 h-4" />
              <span>Clear all filters</span>
            </button>
          )}
        </div>

        {/* Expanded Filters */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-neutral-50 rounded-lg">
            {/* Client Type Filter */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Client Type
              </h4>
              <div className="space-y-2">
                {clientTypeOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filter.clientTypes.includes(option.value)}
                      onChange={() => handleClientTypeToggle(option.value)}
                      className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-neutral-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget Range Filter */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Budget Range
              </h4>
              <div className="space-y-2">
                {budgetRangeOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filter.budgetRanges.includes(option.value)}
                      onChange={() => handleBudgetRangeToggle(option.value)}
                      className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-neutral-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Completion Year
              </h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {yearOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filter.years.includes(option.value)}
                      onChange={() => handleYearToggle(option.value)}
                      className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-neutral-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Features Filter */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Features
              </h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {featureOptions.map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filter.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-neutral-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {getActiveFilterCount() > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {filter.searchQuery && (
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                Search: "{filter.searchQuery}"
                <button
                  onClick={() => handleSearchChange('')}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filter.clientTypes.map((type) => (
              <span key={type} className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                {clientTypeOptions.find(opt => opt.value === type)?.label}
                <button
                  onClick={() => handleClientTypeToggle(type)}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filter.budgetRanges.map((range) => (
              <span key={range} className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                {budgetRangeOptions.find(opt => opt.value === range)?.label}
                <button
                  onClick={() => handleBudgetRangeToggle(range)}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filter.years.map((year) => (
              <span key={year} className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                {year}
                <button
                  onClick={() => handleYearToggle(year)}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filter.features.map((feature) => (
              <span key={feature} className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                {feature}
                <button
                  onClick={() => handleFeatureToggle(feature)}
                  className="ml-2 hover:text-primary-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;