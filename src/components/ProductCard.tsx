import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Shield, Users, MapPin } from 'lucide-react';
import { Product } from '../types/product';
import { AgeGroup, SafetyStandard } from '../types/common';
import { useResponsive } from '../hooks/useResponsive';
import LazyImage from './common/LazyImage';
import TouchFriendlyButton from './common/TouchFriendlyButton';

interface ProductCardProps {
  product: Product;
  searchTerm?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, searchTerm = '' }) => {
  const { isMobile, isTablet, isTouch } = useResponsive();

  // Highlight search terms in text
  const highlightText = (text: string, term: string) => {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Get age group color
  const getAgeGroupColor = (ageGroup: AgeGroup) => {
    switch (ageGroup) {
      case '2-5 years':
        return 'bg-green-100 text-green-800';
      case '5-12 years':
        return 'bg-blue-100 text-blue-800';
      case '13+ years':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get safety standard badge color
  const getSafetyStandardColor = (standard: SafetyStandard) => {
    switch (standard) {
      case 'EN 1176':
        return 'bg-blue-500 text-white';
      case 'ASTM':
        return 'bg-green-500 text-white';
      case 'CPSC':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className={`group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
      !isTouch ? 'transform hover:-translate-y-1' : ''
    } overflow-hidden ${isMobile ? 'mx-2' : ''}`}>
      <Link to={`/products/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <LazyImage
            src={product.images[0]?.url || '/placeholder-product.jpg'}
            alt={product.images[0]?.alt || product.name}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isMobile ? 'h-40' : 'h-48'
            }`}
            width={isMobile ? 300 : 400}
            height={isMobile ? 160 : 192}
            sizes={isMobile ? '100vw' : isTablet ? '50vw' : '33vw'}
          />
          
          {/* Badges Overlay */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded">
                NEW
              </span>
            )}
            {product.isPopular && (
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">
                POPULAR
              </span>
            )}
            {product.isFeatured && (
              <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
                FEATURED
              </span>
            )}
          </div>

          {/* Installation Type Badge */}
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-white bg-opacity-90 text-gray-700 text-xs rounded">
              <MapPin className="w-3 h-3" />
              {product.installationType}
            </span>
          </div>

          {/* Safety Standards */}
          <div className="absolute bottom-2 left-2 flex gap-1">
            {product.safetyStandards.slice(0, 2).map((standard) => (
              <span
                key={standard}
                className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded ${getSafetyStandardColor(standard)}`}
              >
                <Shield className="w-3 h-3" />
                {standard}
              </span>
            ))}
            {product.safetyStandards.length > 2 && (
              <span className="px-2 py-1 bg-gray-500 text-white text-xs font-semibold rounded">
                +{product.safetyStandards.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {highlightText(product.name, searchTerm)}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {highlightText(product.description, searchTerm)}
          </p>

          {/* Age Groups */}
          <div className="flex flex-wrap gap-1 mb-3">
            <Users className="w-4 h-4 text-gray-400 mt-0.5" />
            {product.ageGroups.map((ageGroup) => (
              <span
                key={ageGroup}
                className={`px-2 py-1 text-xs font-medium rounded-full ${getAgeGroupColor(ageGroup)}`}
              >
                {ageGroup}
              </span>
            ))}
          </div>

          {/* Features */}
          {product.features.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {feature}
                  </span>
                ))}
                {product.features.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    +{product.features.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Price Range */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">
              {product.priceRange}
            </span>
            
            {/* Action Buttons */}
            <div className="flex gap-1">
              <TouchFriendlyButton
                onClick={(e) => {
                  e.preventDefault();
                  // Handle favorite toggle
                }}
                className="text-gray-400 hover:text-red-500 transition-colors"
                variant="ghost"
                size="sm"
                ripple={false}
              >
                <Heart className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'}`} />
              </TouchFriendlyButton>
              <TouchFriendlyButton
                onClick={(e) => {
                  e.preventDefault();
                  // Handle add to quote
                }}
                className="text-gray-400 hover:text-blue-500 transition-colors"
                variant="ghost"
                size="sm"
                ripple={false}
              >
                <ShoppingCart className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'}`} />
              </TouchFriendlyButton>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div>
                <span className="font-medium">Capacity:</span> {product.capacity}
              </div>
              <div>
                <span className="font-medium">Size:</span> {product.dimensions}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;