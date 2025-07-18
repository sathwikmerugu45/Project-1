import { useState } from 'react';
import { ProductVariant } from '../../types/product';
import { Check } from 'lucide-react';

interface ProductVariantsProps {
  variants: ProductVariant[];
  selectedVariantId?: string;
  onVariantSelect: (variant: ProductVariant) => void;
  className?: string;
}

const ProductVariants = ({ 
  variants, 
  selectedVariantId, 
  onVariantSelect, 
  className = '' 
}: ProductVariantsProps) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    variants.find(v => v.id === selectedVariantId) || variants[0] || null
  );

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    onVariantSelect(variant);
  };

  if (!variants || variants.length === 0) {
    return null;
  }

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Configurations</h3>
        
        {/* Variant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {variants.map((variant) => (
            <div
              key={variant.id}
              className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedVariant?.id === variant.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => handleVariantSelect(variant)}
            >
              {/* Selection Indicator */}
              {selectedVariant?.id === variant.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}

              {/* Variant Image */}
              {variant.images && variant.images.length > 0 && (
                <div className="aspect-square w-full mb-3 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={variant.images[0].url}
                    alt={variant.images[0].alt || variant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Variant Info */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{variant.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{variant.model}</p>
                
                {variant.description && (
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {variant.description}
                  </p>
                )}

                {/* Key Features */}
                {variant.features && variant.features.length > 0 && (
                  <div className="space-y-1">
                    {variant.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                    {variant.features.length > 3 && (
                      <p className="text-xs text-gray-500">
                        +{variant.features.length - 3} more features
                      </p>
                    )}
                  </div>
                )}

                {/* Price Modifier */}
                {variant.priceModifier && variant.priceModifier !== 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span className={`text-sm font-medium ${
                      variant.priceModifier > 0 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {variant.priceModifier > 0 ? '+' : ''}
                      {variant.priceModifier}% price adjustment
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Variant Details */}
        {selectedVariant && (
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Selected: {selectedVariant.name}
            </h4>
            
            {/* Detailed Specifications */}
            {selectedVariant.specifications && selectedVariant.specifications.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-3">Key Specifications</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedVariant.specifications.slice(0, 6).map((spec, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{spec.name}:</span>
                      <span className="font-medium text-gray-900">
                        {spec.value}
                        {spec.unit && <span className="text-gray-500 ml-1">{spec.unit}</span>}
                      </span>
                    </div>
                  ))}
                </div>
                
                {selectedVariant.specifications.length > 6 && (
                  <p className="text-sm text-gray-500 mt-3">
                    View full specifications below for complete details
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductVariants;