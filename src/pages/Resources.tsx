import { useState } from 'react';
import { Download, FileText, Search, Calendar, User, ArrowRight } from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'guides', label: 'Installation Guides' },
    { id: 'safety', label: 'Safety Standards' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'design', label: 'Design Inspiration' },
    { id: 'research', label: 'Research & Studies' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Playground Safety Guide',
      category: 'safety',
      type: 'PDF Guide',
      description: 'Comprehensive guide covering all aspects of playground safety standards, inspection procedures, and maintenance requirements.',
      downloadUrl: '#',
      fileSize: '2.4 MB',
      pages: 45,
      date: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Installation Best Practices Manual',
      category: 'guides',
      type: 'PDF Manual',
      description: 'Step-by-step installation procedures, tools required, and quality assurance checklists for playground equipment.',
      downloadUrl: '#',
      fileSize: '3.1 MB',
      pages: 62,
      date: '2024-01-10',
      featured: true
    },
    {
      id: 3,
      title: 'Inclusive Design Principles',
      category: 'design',
      type: 'White Paper',
      description: 'Research-backed principles for creating accessible playgrounds that serve children of all abilities.',
      downloadUrl: '#',
      fileSize: '1.8 MB',
      pages: 28,
      date: '2023-12-20',
      featured: true
    },
    {
      id: 4,
      title: 'Maintenance Schedule Template',
      category: 'maintenance',
      type: 'Excel Template',
      description: 'Customizable maintenance schedule template to keep your playground equipment in optimal condition.',
      downloadUrl: '#',
      fileSize: '0.5 MB',
      pages: null,
      date: '2024-01-05',
      featured: false
    },
    {
      id: 5,
      title: 'Natural Play Benefits Study',
      category: 'research',
      type: 'Research Paper',
      description: 'Scientific study on the developmental benefits of natural play environments for children.',
      downloadUrl: '#',
      fileSize: '2.2 MB',
      pages: 34,
      date: '2023-11-30',
      featured: false
    },
    {
      id: 6,
      title: 'Color Psychology in Playgrounds',
      category: 'design',
      type: 'Design Guide',
      description: 'How color choices impact child behavior and play patterns in playground environments.',
      downloadUrl: '#',
      fileSize: '1.5 MB',
      pages: 22,
      date: '2023-11-15',
      featured: false
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Inclusive Playground Design',
      excerpt: 'Exploring emerging trends and technologies that are making playgrounds more accessible for children of all abilities.',
      author: 'Sarah Chen',
      date: '2024-01-20',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Safety Standards: What Every Community Should Know',
      excerpt: 'A comprehensive overview of current playground safety standards and how they protect our children.',
      author: 'David Thompson',
      date: '2024-01-15',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Natural Play: Connecting Children with Nature',
      excerpt: 'The benefits of incorporating natural elements into playground design and how it impacts child development.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Resources &
              <span className="block text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Access our comprehensive library of guides, research, and insights to help you 
              create safer, more engaging playground experiences for your community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-neutral-600">
              Our most popular and essential resources for playground professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={resource.id}
                className="card p-6 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {resource.type}
                  </span>
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <span>{resource.fileSize}</span>
                  {resource.pages && <span>{resource.pages} pages</span>}
                </div>
                
                <button className="w-full btn-primary flex items-center justify-center group">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-neutral-50 border-y border-neutral-100">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <div
                key={resource.id}
                className="card p-6 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                    {resource.type}
                  </span>
                  <FileText className="w-5 h-5 text-neutral-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-neutral-600 mb-4 leading-relaxed text-sm">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                  <span>{resource.fileSize}</span>
                  <span>{new Date(resource.date).toLocaleDateString()}</span>
                </div>
                
                <button className="w-full btn-secondary text-sm flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-neutral-600">
              Stay updated with the latest trends, research, and best practices in playground design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="card overflow-hidden group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">{post.readTime}</span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest resources, industry insights, 
            and playground safety updates delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-900 focus:ring-2 focus:ring-accent-400 focus:outline-none"
              />
              <button className="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-primary-100 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;