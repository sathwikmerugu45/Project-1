import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Download, Phone } from 'lucide-react';

const ProductDetail = () => {
  const { category } = useParams();

  const productData = {
    'natural-play': {
      title: 'Natural Play Equipment',
      subtitle: 'Connecting Children with Nature',
      description: 'Our natural play equipment combines the beauty of nature with innovative design to create engaging play experiences that foster creativity, exploration, and environmental awareness.',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'Sustainably sourced materials',
        'Weather-resistant finishes',
        'Promotes imaginative play',
        'Encourages physical activity',
        'Environmentally conscious design',
        'Low maintenance requirements'
      ],
      specifications: {
        'Age Range': '2-12 years',
        'Materials': 'FSC-certified wood, recycled plastics',
        'Safety Standards': 'EN 1176, ASTM F1487, CPSC',
        'Installation': 'Professional installation included',
        'Warranty': '15-year structural warranty',
        'Maintenance': 'Annual inspection recommended'
      },
      products: [
        {
          name: 'Tree House Adventure',
          description: 'Multi-level tree house with climbing elements and slides',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Nature Trail System',
          description: 'Winding pathways with natural obstacles and challenges',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Log Balance Course',
          description: 'Natural log elements for balance and coordination',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
      ]
    },
    'inclusive-design': {
      title: 'Inclusive Design Equipment',
      subtitle: 'Play for Everyone',
      description: 'Our inclusive playground equipment ensures that children of all abilities can play together, promoting social interaction, independence, and joy for every child.',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'Universal accessibility features',
        'Sensory play elements',
        'Wheelchair accessible ramps',
        'Tactile and auditory components',
        'Therapeutic benefits',
        'Social interaction promotion'
      ],
      specifications: {
        'Age Range': '2-12 years',
        'Accessibility': 'ADA compliant',
        'Safety Standards': 'EN 1176, ASTM F1487, CPSC',
        'Materials': 'Non-slip surfaces, rounded edges',
        'Installation': 'Specialized installation team',
        'Warranty': '20-year structural warranty'
      },
      products: [
        {
          name: 'Accessible Play Tower',
          description: 'Multi-level tower with ramp access and transfer platforms',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Sensory Garden Play',
          description: 'Interactive sensory elements for tactile exploration',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Inclusive Swing Set',
          description: 'Variety of swings including wheelchair accessible options',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
      ]
    },
    'fitness-equipment': {
      title: 'Outdoor Fitness Equipment',
      subtitle: 'Health and Wellness for All Ages',
      description: 'Our outdoor fitness equipment promotes healthy lifestyles and community wellness with durable, weather-resistant equipment suitable for all fitness levels.',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'All-weather construction',
        'Low-impact exercise options',
        'Suitable for all fitness levels',
        'Vandal-resistant design',
        'Minimal maintenance required',
        'Community wellness focus'
      ],
      specifications: {
        'Age Range': '13+ years',
        'Materials': 'Galvanized steel, powder coating',
        'Safety Standards': 'EN 16630, ASTM F2276',
        'Weather Rating': 'All-season outdoor use',
        'Installation': 'Surface or in-ground mounting',
        'Warranty': '10-year structural warranty'
      },
      products: [
        {
          name: 'Cardio Trail System',
          description: 'Series of cardio stations for circuit training',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Strength Training Zone',
          description: 'Multi-station strength equipment for upper and lower body',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Senior Fitness Area',
          description: 'Low-impact equipment designed for older adults',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
      ]
    },
    'playground-systems': {
      title: 'Complete Playground Systems',
      subtitle: 'Integrated Play Solutions',
      description: 'Our comprehensive playground systems combine multiple play elements into cohesive, engaging environments that maximize fun while ensuring safety and durability.',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'Modular design flexibility',
        'Age-appropriate configurations',
        'Integrated safety features',
        'Customizable color schemes',
        'Scalable installations',
        'Comprehensive play value'
      ],
      specifications: {
        'Age Range': '2-12 years (age-specific zones)',
        'Materials': 'Powder-coated steel, HDPE plastics',
        'Safety Standards': 'EN 1176, ASTM F1487, CPSC',
        'Customization': 'Colors, themes, configurations',
        'Installation': 'Complete turnkey service',
        'Warranty': '15-year structural warranty'
      },
      products: [
        {
          name: 'Adventure Castle',
          description: 'Large multi-level play structure with towers and bridges',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'Toddler Play Zone',
          description: 'Safe, age-appropriate equipment for 2-5 year olds',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        },
        {
          name: 'School Age Complex',
          description: 'Challenging equipment designed for 5-12 year olds',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        }
      ]
    }
  };

  const product = productData[category as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/60"></div>
        
        <div className="relative z-10 container-max text-center text-white">
          <Link
            to="/products"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <h1 className="text-5xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl">{product.subtitle}</p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Product Overview
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Specifications
              </h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start">
                    <span className="font-medium text-neutral-700">{key}:</span>
                    <span className="text-neutral-600 text-right ml-4">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                <button className="w-full btn-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Request Quote
                </button>
                <button className="w-full btn-secondary flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Featured Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.products.map((item, index) => (
              <div key={index} className="card overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our playground experts are ready to help you design the perfect solution 
            for your community. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-neutral-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule Consultation
            </Link>
            <Link to="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;