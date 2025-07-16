import React from 'react';
import { Shield, Leaf, Heart, Wrench, Award, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All equipment meets or exceeds international safety standards including EN 1176, ASTM, and CPSC certifications.',
      color: 'text-primary-600'
    },
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description: 'Eco-friendly materials and manufacturing processes that protect our planet for future generations.',
      color: 'text-green-600'
    },
    {
      icon: Heart,
      title: 'Inclusive Design',
      description: 'Accessible play experiences for children of all abilities, promoting social interaction and development.',
      color: 'text-accent-600'
    },
    {
      icon: Wrench,
      title: 'Expert Installation',
      description: 'Professional installation and ongoing maintenance support to ensure long-lasting performance.',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized industry leader with multiple awards for innovation, design, and safety excellence.',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Bringing communities together through thoughtfully designed spaces that encourage social play.',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Why Choose PlaygroundPro?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We combine decades of expertise with innovative design to create playground experiences 
            that inspire, challenge, and delight children while ensuring their safety and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card p-8 group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color.split('-')[1]}-100 to-${feature.color.split('-')[1]}-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;