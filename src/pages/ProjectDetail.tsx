import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Users, DollarSign, CheckCircle, Quote, Image as ImageIcon } from 'lucide-react';
import ProjectImageViewer from '../components/project/ProjectImageViewer';
import ProjectMetrics from '../components/project/ProjectMetrics';
import BeforeAfterComparison from '../components/project/BeforeAfterComparison';
// import { Project, ProjectMetrics as } from '../types/project';

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Enhanced project data with advanced features
  const projectData: Record<string, Project> = {
    '1': {
      id: '1',
      title: 'Riverside Community Park',
      clientType: 'park',
      clientName: 'City of Portland Parks & Recreation',
      location: 'Portland, Oregon',
      completionYear: 2024,
      images: [
        {
          id: '1',
          url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
          alt: 'Riverside Community Park - Main playground area',
          caption: 'Main playground area featuring natural play elements and inclusive design',
          type: 'hero',
          isZoomable: true,
          equipmentTags: [
            { id: 'tag1', name: 'Natural Climbing Structure', x: 30, y: 40, productId: 'climb-001' },
            { id: 'tag2', name: 'Accessible Ramp System', x: 60, y: 70 },
            { id: 'tag3', name: 'Sensory Play Panel', x: 80, y: 30 }
          ]
        },
        {
          id: '2',
          url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
          alt: 'Riverside Community Park - Fitness area',
          caption: 'Adult fitness stations integrated with playground design',
          type: 'gallery',
          isZoomable: true,
          equipmentTags: [
            { id: 'tag4', name: 'Outdoor Fitness Station', x: 45, y: 50, productId: 'fitness-001' }
          ]
        },
        {
          id: '3',
          url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
          alt: 'Riverside Community Park - Age-specific zones',
          caption: 'Separate play zones designed for different age groups',
          type: 'detail',
          isZoomable: true
        }
      ],
      description: 'The Riverside Community Park project transformed an underutilized green space into a vibrant community hub featuring natural play elements, inclusive equipment, and fitness stations for all ages. This comprehensive playground serves as a model for sustainable, accessible recreation design.',
      equipmentUsed: ['Natural Climbing Structures', 'Accessible Ramp Systems', 'Sensory Play Panels', 'Fitness Stations', 'Shade Structures'],
      testimonial: {
        quote: "PlaygroundPro exceeded our expectations in every way. The installation was seamless, and the community response has been overwhelmingly positive. Children of all abilities can play together safely, which was our primary goal.",
        author: "Sarah Johnson",
        title: "Parks & Recreation Director",
        organization: "City of Portland"
      },
      budgetRange: '$200K - $300K',
      isFeatured: true,
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
      metrics: {
        userCapacity: 200,
        installationTime: '6 months',
        budgetAmount: 250000,
        satisfactionScore: 4.8,
        safetyIncidents: 0,
        usageIncrease: '300%',
        maintenanceReduction: '40%',
        communityImpact: [
          'Increased physical activity among local children by 250%',
          'Created gathering space for 15+ community events annually',
          'Improved property values in surrounding neighborhood by 12%',
          'Provided accessible play opportunities for 50+ children with disabilities'
        ]
      },
      timeline: '6 months from design to completion',
      size: '5,000 sq ft',
      beforeAfterImages: {
        before: {
          id: 'before-1',
          url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          alt: 'Empty lot before playground installation',
          caption: 'Underutilized green space before transformation'
        },
        after: {
          id: 'after-1',
          url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
          alt: 'Completed playground with children playing',
          caption: 'Vibrant community playground serving 200+ children daily'
        },
        description: 'The transformation of Riverside Community Park from an empty lot to a thriving community hub demonstrates the power of thoughtful playground design.'
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
                {project.description}
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
                    <span className="text-neutral-900 font-medium">{project.completionYear}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-neutral-600">
                      <Users className="w-4 h-4 mr-2" />
                      Capacity
                    </span>
                    <span className="text-neutral-900 font-medium">{project.metrics.userCapacity}+ children</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-neutral-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Investment
                    </span>
                    <span className="text-neutral-900 font-medium">{project.budgetRange}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-neutral-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      Client
                    </span>
                    <span className="text-neutral-900 font-medium text-right text-sm">{project.clientName}</span>
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

      {/* Project Metrics */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ProjectMetrics metrics={project.metrics} />
        </div>
      </section>

      {/* Before/After Comparison */}
      {project.beforeAfterImages && (
        <section className="section-padding bg-neutral-50">
          <div className="container-max">
            <BeforeAfterComparison beforeAfterImages={project.beforeAfterImages} />
          </div>
        </section>
      )}

      {/* Enhanced Image Gallery */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              Project Gallery
            </h2>
            <div className="flex items-center text-neutral-600">
              <ImageIcon className="w-5 h-5 mr-2" />
              <span>{project.images.length} images</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={image.id} className="card overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                  {image.equipmentTags && image.equipmentTags.length > 0 && (
                    <div className="absolute top-3 right-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {image.equipmentTags.length} tags
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <ImageIcon className="w-6 h-6 text-neutral-900" />
                      </div>
                    </div>
                  </div>
                </div>
                {image.caption && (
                  <div className="p-4">
                    <p className="text-sm text-neutral-600">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <ProjectImageViewer
          images={project.images}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onImageChange={setSelectedImageIndex}
        />
      )}

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