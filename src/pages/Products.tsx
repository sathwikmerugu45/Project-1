import { useState, useMemo } from 'react';
import ProductFilter, { ProductFilterState } from '../components/ProductFilter';
import ProductCard from '../components/ProductCard';
import { sampleProducts, productCategories } from '../data/products';
import { Product } from '../types/product';

const Products = () => {
  const [filters, setFilters] = useState<ProductFilterState>({
    ageGroups: [],
    safetyStandards: [],
    installationType: 'all',
    categories: [],
    priceRange: [0, 20000],
    searchQuery: '',
    sortBy: 'name'
  });

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = sampleProducts.filter((product: Product) => {
      // Age group filter
      if (filters.ageGroups.length > 0) {
        const hasMatchingAgeGroup = filters.ageGroups.some(ageGroup => 
          product.ageGroups.includes(ageGroup)
        );
        if (!hasMatchingAgeGroup) return false;
      }

      // Safety standards filter
      if (filters.safetyStandards.length > 0) {
        const hasMatchingStandard = filters.safetyStandards.some(standard => 
          product.safetyStandards.includes(standard)
        );
        if (!hasMatchingStandard) return false;
      }

      // Installation type filter
      if (filters.installationType !== 'all') {
        if (product.installationType !== filters.installationType) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(product.category)) return false;
      }

      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDescription = product.description.toLowerCase().includes(query);
        const matchesFeatures = product.features.some(feature => 
          feature.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDescription && !matchesFeatures) return false;
      }

      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          // Simple price comparison based on first number in price range
          const priceA = parseInt(a.priceRange.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.priceRange.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'popularity':
          // Sort by popular first, then featured, then new
          const scoreA = (a.isPopular ? 3 : 0) + (a.isFeatured ? 2 : 0) + (a.isNew ? 1 : 0);
          const scoreB = (b.isPopular ? 3 : 0) + (b.isFeatured ? 2 : 0) + (b.isNew ? 1 : 0);
          return scoreB - scoreA;
        case 'newest':
          // Sort new items first
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative h-64 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl">Discover our comprehensive range of playground equipment</p>
          </div>
        </div>
      </section>

      {/* Enhanced Product Filter */}
      <ProductFilter
        filters={filters}
        onFiltersChange={setFilters}
        categories={productCategories}
        priceRange={[0, 20000]}
      />

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {sampleProducts.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                searchTerm={filters.searchQuery}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button
                onClick={() => setFilters({
                  ageGroups: [],
                  safetyStandards: [],
                  installationType: 'all',
                  categories: [],
                  priceRange: [0, 20000],
                  searchQuery: '',
                  sortBy: 'name'
                })}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;