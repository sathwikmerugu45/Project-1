import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Dumbbell, Puzzle } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      id: 'natural-play',
      title: 'Natural Play',
      icon: Leaf,
      description: 'Eco-friendly playground equipment that connects children with nature while promoting imaginative play.',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Sustainable Materials', 'Nature-Inspired Design', 'Environmental Learning'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'inclusive-design',
      title: 'Inclusive Design',
      icon: Heart,
      description: 'Accessible playground equipment designed for children of all abilities to play together safely.',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Universal Access', 'Sensory Elements', 'Therapeutic Benefits'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'fitness-equipment',
      title: 'Fitness Equipment',
      icon: Dumbbell,
      description: 'Outdoor fitness solutions that promote healthy lifestyles for all ages and fitness levels.',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['All Ages Design', 'Weather Resistant', 'Low Maintenance'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'playground-systems',
      title: 'Playground Systems',
      icon: Puzzle,
      description: 'Complete playground solutions with integrated play structures for maximum fun and engagement.',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Modular Design', 'Age-Appropriate', 'Safety Certified'],
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Our Product
              <span className="block text-gradient">Categories</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Discover our comprehensive range of playground equipment designed to inspire, 
              challenge, and delight children while ensuring their safety and development.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="card overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-6 left-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {category.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/products/${category.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
                  >
                    Explore {category.title}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Help Choosing the Right Equipment?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Our playground experts are here to help you select the perfect equipment 
            for your space, budget, and community needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link to="/resources" className="btn-secondary">
              Download Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;