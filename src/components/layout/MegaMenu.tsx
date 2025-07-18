import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface MegaMenuCategory {
  name: string;
  path: string;
  image: string;
  description: string;
  featured?: boolean;
}

interface MegaMenuSection {
  title: string;
  categories: MegaMenuCategory[];
}

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const productSections: MegaMenuSection[] = [
    {
      title: 'Play Equipment',
      categories: [
        {
          name: 'Biggo Swings',
          path: '/products/biggo-swings',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Premium swing sets for all ages',
          featured: true
        },
        {
          name: 'Rotating Climbers',
          path: '/products/rotating-climbers',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Dynamic climbing experiences'
        },
        {
          name: 'Frame Nets',
          path: '/products/frame-nets',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Structured climbing networks'
        }
      ]
    },
    {
      title: 'Specialized Equipment',
      categories: [
        {
          name: 'Mast Nets',
          path: '/products/mast-nets',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Vertical climbing challenges'
        },
        {
          name: 'Nature Play',
          path: '/products/nature-play',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Natural play environments',
          featured: true
        },
        {
          name: 'Ropes Courses',
          path: '/products/ropes-courses',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
          description: 'Adventure course systems'
        }
      ]
    }
  ];

  const featuredProducts = productSections
    .flatMap(section => section.categories)
    .filter(category => category.featured);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Product Categories */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={onClose}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-16 h-12 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {category.name}
                            </h4>
                            {category.featured && (
                              <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Featured Products
            </h3>
            <div className="space-y-4">
              {featuredProducts.map((product) => (
                <Link
                  key={product.name}
                  to={product.path}
                  onClick={onClose}
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="font-medium text-white text-sm">{product.name}</h4>
                      <p className="text-xs text-gray-200 mt-1">{product.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* View All Products Link */}
              <Link
                to="/products"
                onClick={onClose}
                className="flex items-center justify-center space-x-2 p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
                  View All Products
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap items-center space-x-6">
              <Link
                to="/products?filter=age-2-5"
                onClick={onClose}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Ages 2-5
              </Link>
              <Link
                to="/products?filter=age-5-12"
                onClick={onClose}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Ages 5-12
              </Link>
              <Link
                to="/products?filter=age-13+"
                onClick={onClose}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Ages 13+
              </Link>
              <Link
                to="/products?filter=indoor"
                onClick={onClose}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Indoor Equipment
              </Link>
              <Link
                to="/products?filter=outdoor"
                onClick={onClose}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Outdoor Equipment
              </Link>
            </div>
            <Link
              to="/certifications"
              onClick={onClose}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Safety Certifications →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;