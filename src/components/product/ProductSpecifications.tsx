import { useState } from 'react';
import { ProductSpec } from '../../types/product';

interface ProductSpecificationsProps {
  specifications: Record<string, ProductSpec[]>;
  className?: string;
}

const ProductSpecifications = ({ specifications, className = '' }: ProductSpecificationsProps) => {
  const [activeStandard, setActiveStandard] = useState(Object.keys(specifications)[0]);
  const [isMetric, setIsMetric] = useState(true);

  if (!specifications || Object.keys(specifications).length === 0) {
    return (
      <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
        <p className="text-gray-500">No specifications available</p>
      </div>
    );
  }

  const standards = Object.keys(specifications);
  const currentSpecs = specifications[activeStandard] || [];

  // Group specifications by category
  const groupedSpecs = currentSpecs.reduce((acc, spec) => {
    const category = spec.category || 'general';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(spec);
    return acc;
  }, {} as Record<string, ProductSpec[]>);

  const categoryOrder = ['dimensions', 'capacity', 'safety', 'materials', 'performance', 'general'];
  const sortedCategories = categoryOrder.filter(cat => groupedSpecs[cat]);

  const getCategoryTitle = (category: string) => {
    const titles: Record<string, string> = {
      dimensions: 'Dimensions',
      capacity: 'Capacity',
      safety: 'Safety',
      materials: 'Materials',
      performance: 'Performance',
      general: 'General'
    };
    return titles[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Specifications</h3>
          
          {/* Unit Toggle */}
          <button
            onClick={() => setIsMetric(!isMetric)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            {isMetric ? 'Imperial' : 'Metric'} Units
          </button>
        </div>

        {/* Standards Tabs */}
        {standards.length > 1 && (
          <div className="flex space-x-0 mb-6 border-b">
            {standards.map((standard, _index) => (
              <button
                key={standard}
                onClick={() => setActiveStandard(standard)}
                className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                  activeStandard === standard
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {standard}
              </button>
            ))}
          </div>
        )}

        {/* Specifications Table */}
        <div className="space-y-6">
          {sortedCategories.map((category) => (
            <div key={category}>
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                {getCategoryTitle(category)}
              </h4>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full">
                  <tbody>
                    {groupedSpecs[category].map((spec, index) => (
                      <tr
                        key={`${spec.name}-${index}`}
                        className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 w-1/2">
                          {spec.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {spec.value}
                          {spec.unit && (
                            <span className="text-gray-500 ml-1">{spec.unit}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            * Specifications may vary based on local regulations and installation requirements.
            Please consult with our technical team for specific project requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;