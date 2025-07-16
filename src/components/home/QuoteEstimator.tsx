import { useState } from 'react';
import { Calculator, Download, MessageCircle, MapPin, Home } from 'lucide-react';

interface FormData {
  projectType: string;
  surfaceArea: string;
  ageGroups: string[];
  location: string;
  addOns: string[];
  environment: string;
}

const QuoteEstimator = () => {
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    surfaceArea: '',
    ageGroups: [],
    location: '',
    addOns: [],
    environment: ''
  });
  
  const [estimate, setEstimate] = useState<{min: number, max: number} | null>(null);
  const [showEstimate, setShowEstimate] = useState(false);

  const projectTypes = [
    { id: 'school', label: 'School Playground', icon: '🏫', multiplier: 1.2 },
    { id: 'community', label: 'Community Park', icon: '🏞️', multiplier: 1.5 },
    { id: 'daycare', label: 'Daycare Center', icon: '👶', multiplier: 1.0 },
    { id: 'housing', label: 'Housing Development', icon: '🏘️', multiplier: 1.3 },
    { id: 'commercial', label: 'Commercial Space', icon: '🏢', multiplier: 1.8 }
  ];

  const ageGroups = [
    { id: '2-5', label: '2-5 years', multiplier: 1.0 },
    { id: '5-12', label: '5-12 years', multiplier: 1.2 },
    { id: '13+', label: '13+ years', multiplier: 1.4 }
  ];

  const addOns = [
    { id: 'safety-surfacing', label: 'Safety Surfacing', cost: 50000 },
    { id: 'shade-structures', label: 'Shade Structures', cost: 80000 },
    { id: 'fencing', label: 'Perimeter Fencing', cost: 30000 },
    { id: 'seating', label: 'Seating Areas', cost: 25000 },
    { id: 'landscaping', label: 'Landscaping', cost: 40000 },
    { id: 'lighting', label: 'LED Lighting', cost: 60000 }
  ];

  const calculateEstimate = () => {
    if (!formData.projectType || !formData.surfaceArea) return;

    const baseProject = projectTypes.find(p => p.id === formData.projectType);
    const baseCostPerSqm = 15000; // Base cost in VND per square meter
    
    let totalCost = parseInt(formData.surfaceArea) * baseCostPerSqm;
    
    // Apply project type multiplier
    if (baseProject) {
      totalCost *= baseProject.multiplier;
    }
    
    // Apply age group multipliers
    const ageMultiplier = formData.ageGroups.reduce((acc, ageId) => {
      const age = ageGroups.find(a => a.id === ageId);
      return acc + (age ? age.multiplier : 0);
    }, 0) || 1;
    
    totalCost *= ageMultiplier;
    
    // Add selected add-ons
    const addOnCost = formData.addOns.reduce((acc, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return acc + (addOn ? addOn.cost : 0);
    }, 0);
    
    totalCost += addOnCost;
    
    // Environment factor
    if (formData.environment === 'indoor') {
      totalCost *= 1.3;
    }
    
    // Add variance range (±15%)
    const min = Math.round(totalCost * 0.85);
    const max = Math.round(totalCost * 1.15);
    
    setEstimate({ min, max });
    setShowEstimate(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setShowEstimate(false);
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof FormData] as string[]).includes(value)
        ? (prev[field as keyof FormData] as string[]).filter((item: string) => item !== value)
        : [...(prev[field as keyof FormData] as string[]), value]
    }));
    setShowEstimate(false);
  };

  return (
    <section id="quote-estimator" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
              AI-Powered Quote Estimator
            </h2>
          </div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Get an instant estimate for your playground project. Our smart calculator considers 
            all factors to provide accurate pricing in seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                {/* Project Type */}
                <div>
                  <label className="block text-lg font-semibold text-neutral-900 mb-4">
                    Project Type *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleInputChange('projectType', type.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                          formData.projectType === type.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{type.icon}</span>
                          <span className="font-medium">{type.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Surface Area */}
                <div>
                  <label className="block text-lg font-semibold text-neutral-900 mb-3">
                    Surface Area (m²) *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.surfaceArea}
                      onChange={(e) => handleInputChange('surfaceArea', e.target.value)}
                      placeholder="Enter area in square meters"
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                      m²
                    </div>
                  </div>
                </div>

                {/* Age Groups */}
                <div>
                  <label className="block text-lg font-semibold text-neutral-900 mb-3">
                    Age Groups
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {ageGroups.map((age) => (
                      <button
                        key={age.id}
                        onClick={() => handleArrayToggle('ageGroups', age.id)}
                        className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                          formData.ageGroups.includes(age.id)
                            ? 'border-primary-600 bg-primary-600 text-white'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        {age.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Environment */}
                <div>
                  <label className="block text-lg font-semibold text-neutral-900 mb-3">
                    Environment
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleInputChange('environment', 'outdoor')}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.environment === 'outdoor'
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-neutral-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="w-5 h-5" />
                        <span>Outdoor</span>
                      </div>
                    </button>
                    <button
                      onClick={() => handleInputChange('environment', 'indoor')}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.environment === 'indoor'
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-neutral-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Home className="w-5 h-5" />
                        <span>Indoor</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <label className="block text-lg font-semibold text-neutral-900 mb-3">
                    Add-ons & Features
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {addOns.map((addOn) => (
                      <button
                        key={addOn.id}
                        onClick={() => handleArrayToggle('addOns', addOn.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                          formData.addOns.includes(addOn.id)
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{addOn.label}</span>
                          <span className="text-sm text-neutral-600">
                            +{formatCurrency(addOn.cost)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calculateEstimate}
                  disabled={!formData.projectType || !formData.surfaceArea}
                  className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Estimate
                </button>
              </div>

              {/* Results Section */}
              <div className="lg:pl-8">
                {showEstimate && estimate ? (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white p-6 rounded-xl">
                      <h3 className="text-2xl font-bold mb-4">Your Project Estimate</h3>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">
                          {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
                        </div>
                        <p className="text-primary-100">
                          Estimated range based on your specifications
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-neutral-900 mb-2">What's Included:</h4>
                        <ul className="text-sm text-neutral-600 space-y-1">
                          <li>• Equipment supply and delivery</li>
                          <li>• Professional installation</li>
                          <li>• Safety compliance certification</li>
                          <li>• 1-year warranty coverage</li>
                        </ul>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <button className="btn-primary flex items-center justify-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download Estimate
                        </button>
                        <button className="btn-secondary flex items-center justify-center">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Talk to Consultant
                        </button>
                      </div>

                      <div className="text-center text-sm text-neutral-500">
                        <p>Final pricing may vary based on site conditions and customizations</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-neutral-400">
                      <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Fill out the form to get your instant estimate</p>
                      <p className="text-sm mt-2">
                        Our AI considers all factors for accurate pricing
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteEstimator;