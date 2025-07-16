import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users, DollarSign, CheckCircle, Quote } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API
  const projectData = {
    '1': {
      title: 'Riverside Community Park',
      location: 'Portland, Oregon',
      type: 'Community Park',
      completed: '2024',
      budget: '$250,000',
      capacity: '200+ children',
      client: 'City of Portland Parks & Recreation',
      duration: '6 months',
      size: '5,000 sq ft',
      images: [
        'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      overview: 'The Riverside Community Park project transformed an underutilized green space into a vibrant community hub featuring natural play elements, inclusive equipment, and fitness stations for all ages. This comprehensive playground serves as a model for sustainable, accessible recreation design.',
      challenge: 'The City of Portland needed to revitalize a 5,000 square foot area that would serve a diverse community with varying ages and abilities. The space needed to accommodate high usage while maintaining environmental sustainability and ensuring universal accessibility.',
      solution: 'Our team designed an integrated playground system that combines natural play elements with modern safety features. The design includes separate zones for different age groups, wheelchair-accessible pathways, and sustainable materials that blend seamlessly with the natural environment.',
      features: [
        'Natural play elements using sustainable materials',
        'Fully accessible ramps and transfer platforms',
        'Separate play zones for ages 2-5 and 5-12',
        'Adult fitness stations integrated throughout',
        'Shade structures and seating areas',
        'Sustainable drainage and landscaping'
      ],
      results: [
        'Increased park usage by 300% within first month',
        'Positive feedback from 95% of community members',
        'Zero safety incidents since installation',
        'Featured as model project by Oregon Parks Association',
        'Reduced maintenance costs by 40% compared to previous equipment'
      ],
      testimonial: {
        quote: "PlaygroundPro exceeded our expectations in every way. The installation was seamless, and the community response has been overwhelmingly positive. Children of all abilities can play together safely, which was our primary goal.",
        author: "Sarah Johnson",
        title: "Parks & Recreation Director",
        organization: "City of Portland"
      }
    }
  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="btn-primary">
            Back to Projects
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
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/60"></div>
        
        <div className="relative z-10 container-max text-center text-white">
          <Link
            to="/projects"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl">{project.location}</p>
        </div>
      </section>

      {/* Project Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {project.overview}
              </p>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  The Challenge
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Our Solution
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {project.solution}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Results & Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" />
                      <span className="text-neutral-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-neutral-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Location
                    </span>
                    <span className="text-neutral-900 font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-neutral-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Completed
                    </span>
                    <span className="text-neutral-900 font-medium">{project.completed}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-neutral-600">
                      <Users className="w-4 h-4 mr-2" />
                      Capacity
                    </span>
                    <span className="text-neutral-900 font-medium">{project.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-neutral-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Investment
                    </span>
                    <span className="text-neutral-900 font-medium">{project.budget}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="card p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                  <blockquote className="text-neutral-700 italic leading-relaxed">
                    "{project.testimonial.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-neutral-100 pt-4">
                  <div className="font-semibold text-neutral-900">
                    {project.testimonial.author}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {project.testimonial.title}
                  </div>
                  <div className="text-sm text-primary-600">
                    {project.testimonial.organization}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Project Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="card overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Inspired by This Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a similar transformation for your community. 
            Our experts are ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-neutral-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Start Your Project
            </Link>
            <Link to="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors">
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;