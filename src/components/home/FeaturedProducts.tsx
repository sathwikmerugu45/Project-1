import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Award, Eye, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const featuredProducts = [
    {
      id: 'biggo-swings',
      name: 'Biggo Solo™ Swing',
      model: 'DX-3100',
      price: '$2,450',
      originalPrice: '$2,850',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Swings',
      rating: 4.9,
      reviews: 127,
      features: ['EN 1176 Certified', 'Ages 2-12', 'Capacity: 4 users', 'Weather Resistant'],
      badge: 'Best Seller',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'rotating-climbers',
      name: 'Spinner Pro™ Climber',
      model: 'RC-2100',
      price: '$5,850',
      originalPrice: '$6,200',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Climbers',
      rating: 4.8,
      reviews: 89,
      features: ['360° Rotation', 'Ages 5-12', 'Capacity: 8 users', 'Premium Materials'],
      badge: 'New',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'frame-nets',
      name: 'Climb Master™ Net',
      model: 'FN-1500',
      price: '$3,750',
      originalPrice: '$4,100',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Nets',
      rating: 4.7,
      reviews: 156,
      features: ['Heavy Duty Frame', 'Ages 5-12', 'Capacity: 12 users', 'Easy Installation'],
      badge: 'Popular',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'nature-play',
      name: 'Forest Explorer™',
      model: 'NP-2500',
      price: '$4,800',
      originalPrice: '$5,200',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Nature Play',
      rating: 4.9,
      reviews: 203,
      features: ['Natural Materials', 'Ages 2-12', 'Eco-Friendly', 'Custom Design'],
      badge: 'Eco Choice',
      badgeColor: 'bg-green-600'
    },
    {
      id: 'mast-nets',
      name: 'Sky Climber™ Mast',
      model: 'MN-1800',
      price: '$6,200',
      originalPrice: '$6,800',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Mast Nets',
      rating: 4.6,
      reviews: 74,
      features: ['5m Height', 'Ages 8-15', 'Challenge Level: High', 'Safety Certified'],
      badge: 'Premium',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 'ropes-courses',
      name: 'Adventure Trail™',
      model: 'RC-3000',
      price: '$8,500',
      originalPrice: '$9,200',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Ropes Courses',
      rating: 4.8,
      reviews: 92,
      features: ['Multi-Level', 'Ages 8-15', 'Team Building', 'Professional Grade'],
      badge: 'Featured',
      badgeColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover our most popular playground equipment with competitive pricing and professional installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-opacity duration-300 ${
                  hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Eye className="w-5 h-5 text-neutral-700" />
                  </button>
                  <button className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Discount Badge */}
                <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  Save {Math.round(((parseFloat(product.originalPrice.replace('$', '').replace(',', '')) - parseFloat(product.price.replace('$', '').replace(',', ''))) / parseFloat(product.originalPrice.replace('$', '').replace(',', ''))) * 100)}%
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-600 font-medium">{product.category}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-neutral-600">{product.rating} ({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-neutral-500 mb-4">Model: {product.model}</p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-neutral-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-neutral-500">EN 1176 & ASTM Certified</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-neutral-900">{product.price}</span>
                    <span className="text-lg text-neutral-400 line-through ml-2">{product.originalPrice}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-2 px-4 rounded-lg font-medium transition-colors">
                    Quote
                  </button>
                </div>
              </div>
            </div>
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