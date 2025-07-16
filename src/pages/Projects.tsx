import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Filter, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'community', label: 'Community Parks' },
    { id: 'school', label: 'Schools' },
    { id: 'inclusive', label: 'Inclusive Design' },
    { id: 'natural', label: 'Natural Play' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Riverside Community Park',
      location: 'Portland, Oregon',
      category: 'community',
      type: 'Community Park',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A comprehensive playground featuring natural play elements, inclusive equipment, and fitness stations for all ages.',
      capacity: '200+ children',
      completed: '2024',
      budget: '$250,000',
      features: ['Natural Play', 'Inclusive Design', 'Fitness Equipment'],
      challenge: 'Creating a multi-generational space that serves diverse community needs',
      solution: 'Integrated design with separate age zones and universal accessibility'
    },
    {
      id: 2,
      title: 'Sunshine Elementary School',
      location: 'Austin, Texas',
      category: 'school',
      type: 'School Playground',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Age-appropriate play structures designed to support learning and development for K-5 students.',
      capacity: '300+ students',
      completed: '2024',
      budget: '$180,000',
      features: ['Educational Play', 'Safety Surfacing', 'Shade Structures'],
      challenge: 'Limited space with high student capacity requirements',
      solution: 'Vertical play design maximizing play value in compact footprint'
    },
    {
      id: 3,
      title: 'Harmony Inclusive Playground',
      location: 'Denver, Colorado',
      category: 'inclusive',
      type: 'Inclusive Design',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Fully accessible playground designed for children of all abilities to play together safely.',
      capacity: '150+ children',
      completed: '2023',
      budget: '$320,000',
      features: ['Universal Access', 'Sensory Play', 'Therapeutic Elements'],
      challenge: 'Creating truly inclusive play experiences for all abilities',
      solution: 'Universal design principles with specialized therapeutic equipment'
    },
    {
      id: 4,
      title: 'Woodland Adventure Park',
      location: 'Seattle, Washington',
      category: 'natural',
      type: 'Natural Play',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Nature-inspired playground using sustainable materials and natural elements.',
      capacity: '100+ children',
      completed: '2023',
      budget: '$200,000',
      features: ['Sustainable Materials', 'Nature Integration', 'Environmental Learning'],
      challenge: 'Preserving existing trees while creating engaging play space',
      solution: 'Custom design integrating natural landscape features'
    },
    {
      id: 5,
      title: 'Metro High School Fitness Zone',
      location: 'Phoenix, Arizona',
      category: 'school',
      type: 'Fitness Equipment',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Outdoor fitness equipment designed for high school students and community use.',
      capacity: '50+ users',
      completed: '2023',
      budget: '$150,000',
      features: ['Teen Fitness', 'Community Access', 'Weather Resistant'],
      challenge: 'Equipment suitable for both students and community members',
      solution: 'Versatile fitness stations with adjustable difficulty levels'
    },
    {
      id: 6,
      title: 'Lakeside Family Recreation',
      location: 'Minneapolis, Minnesota',
      category: 'community',
      type: 'Community Park',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Multi-generational playground with separate areas for different age groups.',
      capacity: '250+ visitors',
      completed: '2022',
      budget: '$300,000',
      features: ['Multi-Age Design', 'Water Play', 'Picnic Integration'],
      challenge: 'Seasonal weather considerations and year-round usability',
      solution: 'Weather-resistant materials with covered play areas'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Our Project
              <span className="block text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Explore our successful playground installations across the country. Each project 
              represents our commitment to safety, innovation, and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center text-neutral-600 mr-4">
              <Filter className="w-5 h-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="card overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-neutral-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-neutral-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{project.capacity}</span>
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Completed {project.completed}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    View Case Study
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-neutral-300">
              Numbers that showcase our commitment to communities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">1000+</div>
              <div className="text-neutral-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400 mb-2">50</div>
              <div className="text-neutral-300">States Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">500K+</div>
              <div className="text-neutral-300">Children Served Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400 mb-2">25+</div>
              <div className="text-neutral-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create an amazing playground experience 
            for your community. Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-neutral-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Start Your Project
            </Link>
            <Link to="/resources" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors">
              Download Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;