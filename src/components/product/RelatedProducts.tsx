import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ArrowRight, Star } from 'lucide-react';

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
  maxItems?: number;
  className?: string;
}

const RelatedProducts = ({ 
  currentProduct, 
  allProducts, 
  maxItems = 4, 
  className = '' 
}: RelatedProductsProps) => {
  
  // Intelligent product suggestion algorithm
  const getRelatedProducts = (): Product[] => {
    const related = allProducts
      .filter(product => product.id !== currentProduct.id)
      .map(product => {
        let score = 0;
        
        // Same category gets highest score
        if (product.category === currentProduct.category) {
          score += 10;
        }
        
        // Overlapping age groups
        const ageGroupOverlap = product.ageGroups.filter(age => 
          currentProduct.ageGroups.includes(age)
        ).length;
        score += ageGroupOverlap * 3;
        
        // Same installation type
        if (product.installationType === currentProduct.installationType) {
          score += 2;
        }
        
        // Overlapping safety standards
        const safetyOverlap = product.safetyStandards.filter(standard => 
          currentProduct.safetyStandards.includes(standard)
        ).length;
        score += safetyOverlap * 2;
        
        // Popular products get slight boost
        if (product.isPopular) {
          score += 1;
        }
        
        // Featured products get slight boost
        if (product.isFeatured) {
          score += 1;
        }
        
        // Explicit related products (if specified)
        if (currentProduct.relatedProducts?.includes(product.id)) {
          score += 15;
        }
        
        return { product, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, maxItems)
      .map(item => item.product);
    
    return related;
  };

  const relatedProducts = getRelatedProducts();

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Related Products</h3>
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group block"
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.images[0]?.url || '/placeholder-product.jpg'}
                    alt={product.images[0]?.alt || product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {product.name}
                    </h4>
                    
                    {/* Badges */}
                    <div className="flex flex-col space-y-1 ml-2">
                      {product.isNew && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          New
                        </span>
                      )}
                      {product.isPopular && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Age Groups */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.ageGroups.slice(0, 2).map((ageGroup) => (
                      <span
                        key={ageGroup}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {ageGroup}
                      </span>
                    ))}
                    {product.ageGroups.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{product.ageGroups.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Price Range */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {product.priceRange}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.capacity}
                    </span>
                  </div>

                  {/* Key Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="space-y-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why These Products Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Why these products?</h4>
          <p className="text-sm text-gray-600">
            These products are recommended based on similar age groups, safety standards, 
            and installation requirements. They complement your current selection and are 
            popular choices among similar projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;