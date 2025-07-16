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
      subtitle: 'The best things in life are shared, so Dynamo took a traditional playground favourite and made it even better.',
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