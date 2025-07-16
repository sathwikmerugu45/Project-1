import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    {
      id: 'swings',
      name: 'Swings',
      description: 'Premium swing sets for all ages',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      productCount: 12,
      priceRange: '$1,200 - $4,500'
    },
    {
      id: 'climbers',
      name: 'Climbers',
      description: 'Challenging climbing structures',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      productCount: 18,
      priceRange: '$2,800 - $8,200'
    },
    {
      id: 'nets',
      name: 'Nets',
      description: 'Durable climbing nets',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      productCount: 15,
      priceRange: '$1,800 - $6,500'
    },
    {
      id: 'nature',
      name: 'Nature Play',
      description: 'Natural playground elements',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      productCount: 22,
      priceRange: '$3,200 - $9,800'
    },
    {
      id: 'ropes',
      name: 'Ropes Courses',
      description: 'Adventure rope challenges',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      productCount: 8,
      priceRange: '$5,500 - $15,000'
    },
    {
      id: 'sports',
      name: 'Sports & Fitness',
      description: 'Outdoor fitness equipment',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      productCount: 14,
      priceRange: '$2,400 - $7,800'
    }
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Product Categories
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our comprehensive range of playground equipment organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">{category.productCount} Products</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-neutral-600 mb-4">
                  {category.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-500">
                    Price Range: <span className="font-semibold text-neutral-700">{category.priceRange}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;