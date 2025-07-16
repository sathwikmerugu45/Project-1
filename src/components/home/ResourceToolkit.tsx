import { Download, FileText, CheckCircle, Shield, Wrench, BookOpen } from 'lucide-react';

const ResourceToolkit = () => {
  const resources = [
    {
      id: 1,
      title: 'Tender Submission Templates',
      description: 'Complete tender documentation templates with all required sections and compliance checklists.',
      icon: FileText,
      fileSize: '2.4 MB',
      format: 'PDF + Word',
      category: 'Documentation',
      featured: true,
      downloads: 1250
    },
    {
      id: 2,
      title: 'Planning Checklist (PDF)',
      description: 'Comprehensive project planning checklist covering all phases from concept to completion.',
      icon: CheckCircle,
      fileSize: '1.8 MB',
      format: 'PDF',
      category: 'Planning',
      featured: true,
      downloads: 980
    },
    {
      id: 3,
      title: 'Surface & Material Guide',
      description: 'Detailed guide covering all playground surfacing options, materials, and safety requirements.',
      icon: Wrench,
      fileSize: '3.2 MB',
      format: 'PDF',
      category: 'Technical',
      featured: true,
      downloads: 1450
    },
    {
      id: 4,
      title: 'ISO/EN Certification PDF',
      description: 'Complete certification documentation including EN 1176, ASTM, and CPSC compliance certificates.',
      icon: Shield,
      fileSize: '1.5 MB',
      format: 'PDF',
      category: 'Certification',
      featured: true,
      downloads: 2100
    },
    {
      id: 5,
      title: 'Safety Standards Handbook',
      description: 'Comprehensive handbook covering international playground safety standards and best practices.',
      icon: BookOpen,
      fileSize: '4.1 MB',
      format: 'PDF',
      category: 'Safety',
      featured: false,
      downloads: 750
    },
    {
      id: 6,
      title: 'Maintenance Schedule Template',
      description: 'Customizable maintenance schedule templates for different types of playground equipment.',
      icon: FileText,
      fileSize: '0.8 MB',
      format: 'Excel',
      category: 'Maintenance',
      featured: false,
      downloads: 650
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources', count: resources.length },
    { id: 'Documentation', label: 'Documentation', count: resources.filter(r => r.category === 'Documentation').length },
    { id: 'Planning', label: 'Planning', count: resources.filter(r => r.category === 'Planning').length },
    { id: 'Technical', label: 'Technical', count: resources.filter(r => r.category === 'Technical').length },
    { id: 'Certification', label: 'Certification', count: resources.filter(r => r.category === 'Certification').length }
  ];

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Resource Toolkit for Buyers
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to plan, specify, and implement your playground project. 
            Professional-grade resources trusted by procurement teams worldwide.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Essential Downloads
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <div
                key={resource.id}
                className="card p-6 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    {resource.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                  {resource.title}
                </h4>
                
                <p className="text-neutral-600 mb-4 leading-relaxed text-sm">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                  <span>{resource.fileSize} • {resource.format}</span>
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                </div>
                
                <button className="w-full btn-primary text-sm flex items-center justify-center group">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Complete Resource Library
          </h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full font-medium transition-colors text-sm"
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                className="card p-6 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <resource.icon className="w-8 h-8 text-primary-600" />
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full">
                    {resource.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                  {resource.title}
                </h4>
                
                <p className="text-neutral-600 mb-4 leading-relaxed text-sm">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                  <span>{resource.fileSize} • {resource.format}</span>
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                </div>
                
                <button className="w-full btn-secondary text-sm flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Need Custom Documentation?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Our team can create project-specific documentation, tender responses, 
            and technical specifications tailored to your requirements.
          </p>
          <button className="btn-primary">
            Request Custom Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourceToolkit;