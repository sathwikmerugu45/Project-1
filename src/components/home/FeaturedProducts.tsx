// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight} from 'lucide-react';
// import CertificationBadges from '../CertificationBadges';

const FeaturedProducts = () => {

  const featuredProducts = [
    {
      id: 'early-childhood',
      name: 'EARLY CHILDHOOD',
      description: 'Start them off right with products designed for young play explorers ages 5 and under.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&h=400',
      category: 'Early Childhood'
    },
    {
      id: 'school-age',
      name: 'SCHOOL-AGE',
      description: 'Wield the power of play with brain-boosting, age-appropriate equipment for kids ages 5 to 12.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&h=400',
      category: 'School Age'
    },
    {
      id: 'fitness-wellness',
      name: 'FITNESS & WELLNESS',
      description: 'Develop healthy habits for life with outdoor fitness equipment designed for people ages 13 to 99.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&h=400',
      category: 'Fitness & Wellness'
    },
    {
      id: 'site-furnishings',
      name: 'SITE FURNISHINGS',
      description: 'Put the perfect finishing touches on your playground with benches, bike racks and tables.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&h=400',
      category: 'Site Furnishings'
    },
    {
      id: 'sale-products',
      name: 'SALE PRODUCTS',
      description: "Don't let tight budgets hinder your path to play. Browse the best play products on sale now.",
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=600&h=400',
      category: 'Sale Products'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-neutral-900">
            OUR PRODUCTS
          </h2>
          <Link 
            to="/products" 
            className="text-orange-500 hover:text-orange-600 font-medium text-sm uppercase tracking-wide transition-colors"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/products?category=${product.id}`}
              className="group text-center hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-lg font-bold text-primary-600 mb-2 group-hover:text-primary-700 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary inline-flex items-center group">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;