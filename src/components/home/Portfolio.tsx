import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Calendar, DollarSign, Clock, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Riverside Community Park',
      location: 'Portland, Oregon',
      city: 'Portland',
      category: 'Community Park',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A comprehensive playground featuring natural play elements, inclusive equipment, and fitness stations for all ages.',
      capacity: '200+ children',
      completed: '2024',
      budget: '$250,000',
      budgetValue: '250K USD',
      duration: '4 months',
      repeatStatus: 'Repeat Client',
      features: ['Natural Play', 'Inclusive Design', 'Fitness Equipment'],
      challenge: 'Creating a multi-generational space that serves diverse community needs while maintaining environmental sustainability.',
      solution: 'Integrated design with separate age zones, universal accessibility features, and sustainable materials that blend with natural landscape.',
      results: {
        usageIncrease: '300%',
        satisfactionRate: '95%',
        safetyRecord: 'Zero incidents',
        maintenanceReduction: '40%'
      }
    },
    {
      id: 2,
      title: 'Sunshine Elementary School',
      location: 'Austin, Texas',
      city: 'Austin',
      category: 'School Playground',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Age-appropriate play structures designed to support learning and development for K-5 students.',
      capacity: '300+ students',
      completed: '2024',
      budget: '$180,000',
      budgetValue: '180K USD',
      duration: '3 months',
      repeatStatus: 'New Client',
      features: ['Educational Play', 'Safety Surfacing', 'Shade Structures'],
      challenge: 'Limited space with high student capacity requirements and need for educational integration.',
      solution: 'Vertical play design maximizing play value in compact footprint with integrated learning elements.',
      results: {
        usageIncrease: '250%',
        satisfactionRate: '92%',
        safetyRecord: 'Zero incidents',
        learningEngagement: '85% improvement'
      }
    },
    {
      id: 3,
      title: 'Harmony Inclusive Playground',
      location: 'Denver, Colorado',
      city: 'Denver',
      category: 'Inclusive Design',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Fully accessible playground designed for children of all abilities to play together safely.',
      capacity: '150+ children',
      completed: '2023',
      budget: '$320,000',
      budgetValue: '320K USD',
      duration: '5 months',
      repeatStatus: 'Repeat Client',
      features: ['Universal Access', 'Sensory Play', 'Therapeutic Elements'],
      challenge: 'Creating truly inclusive play experiences that serve children with diverse abilities and needs.',
      solution: 'Universal design principles with specialized therapeutic equipment and sensory-rich environments.',
      results: {
        inclusivityRate: '100%',
        satisfactionRate: '98%',
        safetyRecord: 'Zero incidents',
        communityEngagement: '400% increase'
      }
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Featured Projects & Results
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed communities with measurable impact. Each project 
            showcases our commitment to safety, innovation, and tangible results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card overflow-hidden group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${
                    project.repeatStatus === 'Repeat Client' ? 'bg-accent-600' : 'bg-neutral-600'
                  }`}>
                    {project.repeatStatus}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-neutral-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.city}</span>
                </div>

                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-neutral-50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-primary-600 mr-1" />
                      <span className="font-semibold text-neutral-900">{project.budgetValue}</span>
                    </div>
                    <p className="text-xs text-neutral-600">Budget Value</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-accent-600 mr-1" />
                      <span className="font-semibold text-neutral-900">{project.duration}</span>
                    </div>
                    <p className="text-xs text-neutral-600">Completion Time</p>
                  </div>
                </div>

                {/* Challenge & Solution Preview */}
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm mb-1">Challenge:</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm mb-1">Solution:</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Results & Impact */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-900 text-sm mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1 text-primary-600" />
                    Results & Impact:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-2 bg-primary-50 rounded">
                        <span className="text-neutral-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="font-semibold text-primary-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

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
                  View Full Case Study
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects" className="btn-primary inline-flex items-center group">
            View All Projects & Results
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;