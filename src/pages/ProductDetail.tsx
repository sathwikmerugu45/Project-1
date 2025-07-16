import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Activity, Heart, Zap } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeSpec, setActiveSpec] = useState('ASTM');

  // Mock product data based on the Biggo Swings example
  const productData = {
    'biggo-swings': {
      title: 'Explore Our Biggo Swings Products',
      subtitle: 'The best things in life are shared, so Sathwik took a traditional playground favourite and made it even better.',
      products: [
        {
          id: 'dx-3100',
          name: 'Biggo Solo™',
          model: 'DX-3100',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Our classic, inclusive biggo swing with 2 fro swinging action. This game allows for more people to swing together!',
          features: [
            { icon: Activity, label: 'Imagination', color: 'text-blue-500' },
            { icon: Users, label: 'Inclusive', color: 'text-blue-500' },
            { icon: Users, label: 'Interactive/Social', color: 'text-blue-500' },
            { icon: Zap, label: 'Swinging', color: 'text-blue-500' },
            { icon: Activity, label: 'Balancing', color: 'text-blue-500' },
            { icon: Heart, label: 'Fitness', color: 'text-blue-500' }
          ],
          sku: 'DX-3100',
          category: 'Biggo Swings',
          price: '$2,450',
          specifications: {
            ASTM: {
              'Size -- Length': '3.758 m',
              'Size -- Height': '3.096 m',
              'Ages': '2 - 12 yrs',
              'Capacity': '4',
              'Use Zone -- Length': '8.436 m',
              'Use Zone -- Width': '7.416 m',
              'Use Zone -- Area': '39.61 m²',
              'Fall Height': '2.109 m'
            },
            CSA: {
              'Size -- Length': '3.758 m',
              'Size -- Height': '3.096 m',
              'Ages': '2 - 12 yrs',
              'Capacity': '4',
              'Use Zone -- Length': '8.436 m',
              'Use Zone -- Width': '7.416 m',
              'Use Zone -- Area': '39.61 m²',
              'Fall Height': '2.109 m'
            },
            EN: {
              'Size -- Length': '3.758 m',
              'Size -- Height': '3.096 m',
              'Ages': '2 - 12 yrs',
              'Capacity': '4',
              'Use Zone -- Length': '8.436 m',
              'Use Zone -- Width': '7.416 m',
              'Use Zone -- Area': '39.61 m²',
              'Fall Height': '2.109 m'
            }
          }
        },
        {
          id: 'dx-3200',
          name: 'Biggo Duo™',
          model: 'DX-3200',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          price: '$3,250'
        },
        {
          id: 'dx-3300',
          name: 'Biggo Trio™',
          model: 'DX-3300',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          price: '$4,150'
        }
      ]
    },
    'rotating-climbers': {
      title: 'Explore Our Rotating Climbers Products',
      subtitle: 'Dynamic climbing equipment that challenges children while providing safe, engaging play experiences.',
      products: [
        {
          id: 'rc-2100',
          name: 'Spinner Pro™',
          model: 'RC-2100',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Revolutionary rotating climber that spins 360 degrees while children climb and play.',
          features: [
            { icon: Activity, label: 'Balance', color: 'text-green-500' },
            { icon: Users, label: 'Social Play', color: 'text-green-500' },
            { icon: Zap, label: 'Rotation', color: 'text-green-500' },
            { icon: Heart, label: 'Fitness', color: 'text-green-500' }
          ],
          sku: 'RC-2100',
          category: 'Rotating Climbers',
          price: '$5,850',
          specifications: {
            ASTM: {
              'Size -- Diameter': '4.2 m',
              'Size -- Height': '3.5 m',
              'Ages': '5 - 12 yrs',
              'Capacity': '8',
              'Use Zone -- Diameter': '10.2 m',
              'Use Zone -- Area': '81.7 m²',
              'Fall Height': '2.8 m'
            }
          }
        }
      ]
    },
    'frame-nets': {
      title: 'Explore Our Frame Nets Products',
      subtitle: 'Sturdy climbing nets that provide challenging and safe climbing experiences for all ages.',
      products: [
        {
          id: 'fn-1500',
          name: 'Climb Master™',
          model: 'FN-1500',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Heavy-duty frame net designed for intensive climbing and exploration activities.',
          features: [
            { icon: Activity, label: 'Climbing', color: 'text-purple-500' },
            { icon: Users, label: 'Group Play', color: 'text-purple-500' },
            { icon: Heart, label: 'Strength', color: 'text-purple-500' }
          ],
          sku: 'FN-1500',
          category: 'Frame Nets',
          price: '$3,750',
          specifications: {
            ASTM: {
              'Size -- Length': '6.0 m',
              'Size -- Width': '4.0 m',
              'Size -- Height': '3.2 m',
              'Ages': '5 - 12 yrs',
              'Capacity': '12',
              'Use Zone -- Length': '12.0 m',
              'Use Zone -- Width': '10.0 m',
              'Use Zone -- Area': '120 m²',
              'Fall Height': '2.5 m'
            }
          }
        }
      ]
    },
    'mast-nets': {
      title: 'Explore Our Mast Nets Products',
      subtitle: 'Tall climbing structures that challenge adventurous children with vertical climbing experiences.',
      products: [
        {
          id: 'mn-1800',
          name: 'Sky Climber™',
          model: 'MN-1800',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Towering mast net that provides the ultimate climbing challenge for brave adventurers.',
          features: [
            { icon: Activity, label: 'Adventure', color: 'text-red-500' },
            { icon: Heart, label: 'Courage', color: 'text-red-500' },
            { icon: Zap, label: 'Challenge', color: 'text-red-500' }
          ],
          sku: 'MN-1800',
          category: 'Mast Nets',
          price: '$6,200',
          specifications: {
            ASTM: {
              'Size -- Diameter': '3.5 m',
              'Size -- Height': '5.0 m',
              'Ages': '8 - 15 yrs',
              'Capacity': '6',
              'Use Zone -- Diameter': '9.5 m',
              'Use Zone -- Area': '70.9 m²',
              'Fall Height': '4.2 m'
            }
          }
        }
      ]
    },
    'nature-play': {
      title: 'Explore Our Nature Play Products',
      subtitle: 'Natural play elements that connect children with nature while providing engaging play experiences.',
      products: [
        {
          id: 'np-2500',
          name: 'Forest Explorer™',
          model: 'NP-2500',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Natural wood climbing structure that blends seamlessly with outdoor environments.',
          features: [
            { icon: Activity, label: 'Nature Connection', color: 'text-green-600' },
            { icon: Users, label: 'Exploration', color: 'text-green-600' },
            { icon: Heart, label: 'Sustainability', color: 'text-green-600' }
          ],
          sku: 'NP-2500',
          category: 'Nature Play',
          price: '$4,800',
          specifications: {
            ASTM: {
              'Size -- Length': '8.0 m',
              'Size -- Width': '6.0 m',
              'Size -- Height': '2.5 m',
              'Ages': '2 - 12 yrs',
              'Capacity': '15',
              'Use Zone -- Length': '14.0 m',
              'Use Zone -- Width': '12.0 m',
              'Use Zone -- Area': '168 m²',
              'Fall Height': '1.8 m'
            }
          }
        }
      ]
    },
    'ropes-courses': {
      title: 'Explore Our Ropes Courses Products',
      subtitle: 'Challenging rope courses that develop balance, coordination, and confidence in children.',
      products: [
        {
          id: 'rc-3000',
          name: 'Adventure Trail™',
          model: 'RC-3000',
          image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          description: 'Multi-level rope course with various challenges and obstacles for skill development.',
          features: [
            { icon: Activity, label: 'Balance', color: 'text-orange-500' },
            { icon: Users, label: 'Teamwork', color: 'text-orange-500' },
            { icon: Heart, label: 'Confidence', color: 'text-orange-500' },
            { icon: Zap, label: 'Agility', color: 'text-orange-500' }
          ],
          sku: 'RC-3000',
          category: 'Ropes Courses',
          price: '$8,500',
          specifications: {
            ASTM: {
              'Size -- Length': '12.0 m',
              'Size -- Width': '8.0 m',
              'Size -- Height': '4.0 m',
              'Ages': '8 - 15 yrs',
              'Capacity': '10',
              'Use Zone -- Length': '18.0 m',
              'Use Zone -- Width': '14.0 m',
              'Use Zone -- Area': '252 m²',
              'Fall Height': '3.5 m'
            }
          }
        }
      ]
    }
  };

  const product = productData[id as keyof typeof productData];
  const mainProduct = product?.products[0];

  if (!product || !mainProduct) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Category Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {product.subtitle}
          </p>
        </div>
      </section>

      {/* Product Variants */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {product.products.map((item, index) => (
              <div key={item.id} className="text-center">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.name} | {item.model}
                </h3>
                {item.price && (
                  <p className="text-lg font-bold text-blue-600 mb-4">
                    {item.price}
                  </p>
                )}
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get More Info
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product View */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div>
              <img
                src={mainProduct.image}
                alt={mainProduct.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {mainProduct.name} | {mainProduct.model}
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                {mainProduct.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {mainProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <span className="text-gray-700">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Product Info */}
              <div className="space-y-2 mb-6">
                <p><span className="font-semibold">SKU:</span> {mainProduct.sku}</p>
                <p><span className="font-semibold">Category:</span> {mainProduct.category}</p>
                <p className="text-2xl font-bold text-blue-600">{mainProduct.price}</p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Specifications Table */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications:</h3>
              
              {/* Spec Tabs */}
              <div className="flex space-x-0 mb-6">
                {Object.keys(mainProduct.specifications).map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setActiveSpec(spec)}
                    className={`px-6 py-3 font-semibold transition-colors ${
                      activeSpec === spec
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } ${spec === 'ASTM' ? 'rounded-l-lg' : spec === 'EN' ? 'rounded-r-lg' : ''}`}
                  >
                    {spec}
                  </button>
                ))}
              </div>

              {/* Specifications Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(mainProduct.specifications[activeSpec as keyof typeof mainProduct.specifications]).map(([key, value], index) => (
                      <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{key}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Imperial | Metric
                </button>
              </div>
            </div>

            {/* Printable Resources */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Printable Resources:</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                  <span className="text-gray-700">Layout Drawing</span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">ASTM</button>
                    <span className="text-gray-400">Alternatives: CSA, EN</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                  <span className="text-gray-700">2D DWG</span>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">ASTM</button>
                    <span className="text-gray-400">Alternatives: CSA, EN</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow">
                  <button className="text-blue-600 hover:text-blue-700 font-medium block mb-2">
                    Specification Sheet
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium block mb-2">
                    Product Rendering
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium block mb-2">
                    Colour Options
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium block">
                    Warranty
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;