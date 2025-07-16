import React from 'react';
import { CheckCircle, Award, Clock, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    {
      icon: Award,
      number: '25+',
      label: 'Years Experience',
      description: 'Industry-leading expertise'
    },
    {
      icon: CheckCircle,
      number: '1000+',
      label: 'Projects Completed',
      description: 'Successful installations'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
      description: 'Ongoing maintenance'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'States Served',
      description: 'Nationwide coverage'
    }
  ];

  const benefits = [
    'Certified safety standards compliance',
    'Custom design and engineering',
    'Professional installation services',
    'Comprehensive warranty coverage',
    'Ongoing maintenance support',
    'Sustainable material options',
    'Inclusive accessibility features',
    'Community engagement programs'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              The PlaygroundPro
              <span className="block text-gradient">Advantage</span>
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              When you choose PlaygroundPro, you're partnering with the industry's most trusted 
              name in playground equipment. Our commitment to safety, innovation, and community 
              impact sets us apart.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center space-x-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-neutral-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Schedule Consultation
              </button>
              <button className="btn-secondary">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <div className="text-3xl font-bold text-neutral-900 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-lg font-semibold text-neutral-800 mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-neutral-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;