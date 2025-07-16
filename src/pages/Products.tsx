import { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'swings', name: 'Swings' },
    { id: 'climbers', name: 'Climbers' },
    { id: 'nets', name: 'Nets' },
    { id: 'nature', name: 'Nature Play' },
    { id: 'ropes', name: 'Ropes Courses' },
    { id: 'sports', name: 'Sports & Fitness' },
  ];

  const products = [
    {
      id: 'biggo-swings',
      name: 'Biggo Swings',
      category: 'swings',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Premium swing sets designed for maximum fun and safety'
    },
    {
      id: 'rotating-climbers',
      name: 'Rotating Climbers',
      category: 'climbers',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Dynamic climbing equipment that rotates for added challenge'
    },
    {
      id: 'frame-nets',
      name: 'Frame Nets',
      category: 'nets',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Sturdy frame nets for climbing and exploration'
    },
    {
      id: 'mast-nets',
      name: 'Mast Nets',
      category: 'nets',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Tall mast nets for adventurous climbing experiences'
    },
    {
      id: 'nature-play',
      name: 'Nature Play',
      category: 'nature',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Natural play elements that connect children with nature'
    },
    {
      id: 'ropes-courses',
      name: 'Ropes Courses',
      category: 'ropes',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Challenging rope courses for skill development'
    },
    {
      id: 'custom-creations',
      name: 'Custom Creations',
      category: 'all',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Bespoke playground equipment tailored to your needs'
    },
    {
      id: 'sports-fitness',
      name: 'Sports and Fitness',
      category: 'sports',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Outdoor fitness equipment for all ages'
    },
    {
      id: 'conludo',
      name: 'Conludo',
      category: 'all',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Interactive play solutions for modern playgrounds'
    },
    {
      id: 'natures-aura',
      name: "Nature's Aura",
      category: 'nature',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Immersive natural play environments'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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

      {/* Category Filter */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {filteredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;