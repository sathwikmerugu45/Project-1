import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {  ShoppingCart, Share2, Bookmark } from 'lucide-react';
import { sampleProducts } from '../data/products';
import { Product, ProductVariant, CustomizationOption } from '../types/product';
import { Certification } from '../types/certification';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductSpecifications from '../components/product/ProductSpecifications';
import ProductVariants from '../components/product/ProductVariants';
import RelatedProducts from '../components/product/RelatedProducts';
import CertificationDisplay from '../components/product/CertificationDisplay';
import CustomizationOptions from '../components/product/CustomizationOptions';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [, setCustomizationSelections] = useState<Record<string, string>>({});

  // Find the product from our sample data
  const currentProduct = sampleProducts.find(p => p.id === id);

  // Enhanced product data with comprehensive details
  const getEnhancedProduct = (product: Product): Product => {
    // Create enhanced specifications based on existing data
    const enhancedSpecs: Record<string, any> = {
      ASTM: [
        { name: 'Length', value: product.dimensions.split(' x ')[0] || '4m', unit: 'm', category: 'dimensions' },
        { name: 'Width', value: product.dimensions.split(' x ')[1] || '3m', unit: 'm', category: 'dimensions' },
        { name: 'Height', value: product.dimensions.split(' x ')[2] || '2.5m', unit: 'm', category: 'dimensions' },
        { name: 'Capacity', value: product.capacity, unit: 'children', category: 'capacity' },
        { name: 'Age Range', value: product.ageGroups.join(', '), unit: '', category: 'safety' },
        { name: 'Installation Type', value: product.installationType, unit: '', category: 'safety' },
        { name: 'Material', value: 'Galvanized Steel, HDPE', unit: '', category: 'materials' },
        { name: 'Warranty', value: '10 years structural', unit: '', category: 'performance' }
      ]
    };

    // Add variants for products with multiple configurations
    const variants: ProductVariant[] = [];
    if (product.id === 'biggo-swings') {
      variants.push(
        {
          id: 'biggo-solo',
          name: 'Biggo Solo™',
          model: 'DX-3100',
          specifications: enhancedSpecs.ASTM,
          images: product.images,
          description: 'Single swing configuration for smaller spaces'
        },
        {
          id: 'biggo-duo',
          name: 'Biggo Duo™',
          model: 'DX-3200',
          specifications: enhancedSpecs.ASTM,
          images: product.images,
          priceModifier: 25,
          description: 'Double swing configuration for increased capacity'
        }
      );
    }

    // Add certifications
    const certifications: Certification[] = product.safetyStandards.map(standard => ({
      id: `${product.id}-${standard}`,
      standard,
      certificationNumber: `${standard}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      issuingBody: standard === 'EN 1176' ? 'European Committee for Standardization' : 'ASTM International',
      validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000 * 2), // 2 years from now
      regions: standard === 'EN 1176' ? ['Europe', 'UK'] : ['North America', 'Australia'],
      logoUrl: `/certifications/${standard.toLowerCase().replace(' ', '-')}-logo.png`,
      description: `${standard} safety certification for playground equipment`,
      documentUrl: `/documents/${product.id}-${standard.toLowerCase().replace(' ', '-')}-cert.pdf`,
      isValid: true
    }));

    // Add customization options
    const customizationOptions: CustomizationOption[] = [
      {
        id: 'color',
        name: 'Color Scheme',
        type: 'color',
        required: true,
        options: [
          { id: 'blue-green', name: 'Ocean Blue & Forest Green', description: 'Classic playground colors' },
          { id: 'red-yellow', name: 'Fire Red & Sunshine Yellow', description: 'Vibrant and energetic', priceModifier: 5 },
          { id: 'purple-orange', name: 'Royal Purple & Orange', description: 'Modern and bold', priceModifier: 10 },
          { id: 'natural', name: 'Natural Wood Tones', description: 'Eco-friendly appearance', priceModifier: 15 }
        ]
      },
      {
        id: 'surfacing',
        name: 'Safety Surfacing',
        type: 'material',
        required: false,
        options: [
          { id: 'rubber-mulch', name: 'Rubber Mulch', description: 'Recycled rubber surfacing', priceModifier: 20 },
          { id: 'pour-in-place', name: 'Pour-in-Place Rubber', description: 'Seamless rubber surface', priceModifier: 35 },
          { id: 'artificial-turf', name: 'Artificial Turf', description: 'Low maintenance grass alternative', priceModifier: 25 }
        ]
      }
    ];

    return {
      ...product,
      specifications: enhancedSpecs,
      variants: variants.length > 0 ? variants : undefined,
      certifications,
      customizationOptions,
      relatedProducts: sampleProducts
        .filter(p => p.id !== product.id && (
          p.category === product.category || 
          p.ageGroups.some(age => product.ageGroups.includes(age))
        ))
        .slice(0, 4)
        .map(p => p.id),
      installationRequirements: [
        'Level ground surface required',
        'Minimum 2m clearance on all sides',
        'Professional installation recommended',
        'Concrete footings required for permanent installation'
      ],
      warranty: '10 years structural, 2 years components',
      materials: ['Galvanized Steel Frame', 'HDPE Plastic Components', 'Stainless Steel Hardware']
    };
  };

  useEffect(() => {
    // Reset selections when product changes
    setSelectedVariant(null);
    setCustomizationSelections({});
  }, [id]);

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const enhancedProduct = getEnhancedProduct(currentProduct);

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  const handleCustomizationChange = (selections: Record<string, string>) => {
    setCustomizationSelections(selections);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/products" className="text-blue-600 hover:text-blue-700">
              Products
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 capitalize">{enhancedProduct.category}</span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-500">{enhancedProduct.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image Gallery */}
            <div>
              <ProductImageGallery 
                images={enhancedProduct.images} 
                productName={enhancedProduct.name}
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {enhancedProduct.name}
                  </h1>
                  {enhancedProduct.model && (
                    <p className="text-lg text-gray-600">Model: {enhancedProduct.model}</p>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6">
                {enhancedProduct.description}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {enhancedProduct.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Age Groups & Certifications */}
              <div className="flex flex-wrap gap-2 mb-6">
                {enhancedProduct.ageGroups.map((ageGroup) => (
                  <span
                    key={ageGroup}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {ageGroup}
                  </span>
                ))}
                {enhancedProduct.safetyStandards.map((standard) => (
                  <span
                    key={standard}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {standard}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {enhancedProduct.priceRange}
                </div>
                <p className="text-sm text-gray-500">
                  Price varies based on configuration and installation requirements
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Request Quote
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants */}
      {enhancedProduct.variants && enhancedProduct.variants.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductVariants
              variants={enhancedProduct.variants}
              selectedVariantId={selectedVariant?.id}
              onVariantSelect={handleVariantSelect}
            />
          </div>
        </section>
      )}

      {/* Customization Options */}
      {enhancedProduct.customizationOptions && enhancedProduct.customizationOptions.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CustomizationOptions
              options={enhancedProduct.customizationOptions}
              onSelectionChange={handleCustomizationChange}
            />
          </div>
        </section>
      )}

      {/* Product Specifications */}
      {enhancedProduct.specifications && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductSpecifications specifications={enhancedProduct.specifications} />
          </div>
        </section>
      )}

      {/* Certifications */}
      {enhancedProduct.certifications && enhancedProduct.certifications.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CertificationDisplay certifications={enhancedProduct.certifications} />
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedProducts
            currentProduct={enhancedProduct}
            allProducts={sampleProducts}
            maxItems={4}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;