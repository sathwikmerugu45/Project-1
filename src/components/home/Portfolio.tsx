import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Calendar } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Riverside Community Park',
      location: 'Portland, Oregon',
      category: 'Community Park',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A comprehensive playground featuring natural play elements, inclusive equipment, and fitness stations for all ages.',
      capacity: '200+ children',
      completed: '2024',
      features: ['Natural Play', 'Inclusive Design', 'Fitness Equipment']
    },
    {
      id: 2,
      title: 'Sunshine Elementary School',
      location: 'Austin, Texas',
      category: 'School Playground',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Age-appropriate play structures designed to support learning and development for K-5 students.',
      capacity: '300+ students',
      completed: '2024',
      features: ['Educational Play', 'Safety Surfacing', 'Shade Structures']
    },
    {
      id: 3,
      title: 'Harmony Inclusive Playground',
      location: 'Denver, Colorado',
      category: 'Inclusive Design',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Fully accessible playground designed for children of all abilities to play together safely.',
      capacity: '150+ children',
      completed: '2023',
      features: ['Universal Access', 'Sensory Play', 'Therapeutic Elements']
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed communities across the country with innovative, 
            safe, and engaging playground solutions.
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
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {project.category}
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

        <div className="text-center">
          <Link to="/projects" className="btn-primary inline-flex items-center group">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;