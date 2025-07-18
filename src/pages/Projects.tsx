import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ArrowRight, Award, TrendingUp } from 'lucide-react';
import ProjectFilter from '../components/project/ProjectFilter';
import { Project, ProjectFilter as ProjectFilterType } from '../types/project';
import { ProjectType } from '../types/common';

const Projects = () => {
  const [filter, setFilter] = useState<ProjectFilterType>({
    clientTypes: [],
    years: [],
    searchQuery: '',
    budgetRanges: [],
    features: [],
    locations: []
  });
  const [sortBy, setSortBy] = useState('newest');

  // Enhanced project data with full Project interface
  const projects: Project[] = [
    {
      id: '1',
      title: 'Riverside Community Park',
      clientType: 'Public Park',
      clientName: 'City of Portland Parks & Recreation',
      location: 'Portland, Oregon',
      completionYear: 2024,
      images: [{
        url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        alt: 'Riverside Community Park',
        caption: 'Main playground area',
        type: 'hero'
      }],
      description: 'A comprehensive playground featuring natural play elements, inclusive equipment, and fitness stations for all ages.',
      equipmentUsed: ['Natural Climbing Structures', 'Accessible Ramps', 'Fitness Stations'],
      budgetRange: '$200K - $300K',
      isFeatured: true,
      challenge: 'Creating a multi-generational space that serves diverse community needs',
      solution: 'Integrated design with separate age zones and universal accessibility',
      features: ['Natural Play', 'Inclusive Design', 'Fitness Equipment'],
      results: ['300% increase in park usage', '95% community satisfaction', 'Zero safety incidents'],
      metrics: {
        userCapacity: 200,
        installationTime: '6 months',
        budgetAmount: 250000,
        satisfactionScore: 4.8,
        safetyIncidents: 0,
        usageIncrease: '300%',
        communityImpact: ['Increased physical activity', 'Community gathering space']
      },
      timeline: '6 months',
      size: '5,000 sq ft'
    },
    {
      id: '2',
      title: 'Sunshine Elementary School',
      clientType: 'School',
      clientName: 'Austin Independent School District',
      location: 'Austin, Texas',
      completionYear: 2024,
      images: [{
        url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        alt: 'Sunshine Elementary School Playground',
        caption: 'Educational play structures',
        type: 'hero'
      }],
      description: 'Age-appropriate play structures designed to support learning and development for K-5 students.',
      equipmentUsed: ['Educational Play Panels', 'Safety Surfacing', 'Shade Structures'],
      budgetRange: '$150K - $200K',
      isFeatured: false,
      challenge: 'Limited space with high student capacity requirements',
      solution: 'Vertical play design maximizing play value in compact footprint',
      features: ['Educational Play', 'Safety Surfacing', 'Shade Structures'],
      results: ['Increased student engagement', 'Improved playground safety', 'Enhanced learning opportunities'],
      metrics: {
        userCapacity: 300,
        installationTime: '4 months',
        budgetAmount: 180000,
        satisfactionScore: 4.6,
        safetyIncidents: 0,
        usageIncrease: '150%',
        communityImpact: ['Enhanced educational play', 'Improved student wellness']
      },
      timeline: '4 months',
      size: '3,500 sq ft'
    },
    {
      id: '3',
      title: 'Harmony Inclusive Playground',
      clientType: 'Community Center',
      clientName: 'Denver Parks and Recreation',
      location: 'Denver, Colorado',
      completionYear: 2023,
      images: [{
        url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        alt: 'Harmony Inclusive Playground',
        caption: 'Fully accessible playground design',
        type: 'hero'
      }],
      description: 'Fully accessible playground designed for children of all abilities to play together safely.',
      equipmentUsed: ['Universal Access Ramps', 'Sensory Play Panels', 'Therapeutic Equipment'],
      budgetRange: '$300K - $400K',
      isFeatured: true,
      challenge: 'Creating truly inclusive play experiences for all abilities',
      solution: 'Universal design principles with specialized therapeutic equipment',
      features: ['Universal Access', 'Sensory Play', 'Therapeutic Elements'],
      results: ['100% accessibility compliance', 'Increased inclusive play opportunities', 'Community recognition award'],
      metrics: {
        userCapacity: 150,
        installationTime: '8 months',
        budgetAmount: 320000,
        satisfactionScore: 4.9,
        safetyIncidents: 0,
        usageIncrease: '400%',
        communityImpact: ['Inclusive play for all abilities', 'Therapeutic benefits for special needs children']
      },
      timeline: '8 months',
      size: '4,200 sq ft'
    },
    {
      id: '4',
      title: 'Woodland Adventure Park',
      clientType: 'Public Park',
      clientName: 'Seattle Parks Department',
      location: 'Seattle, Washington',
      completionYear: 2023,
      images: [{
        url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        alt: 'Woodland Adventure Park',
        caption: 'Nature-inspired playground',
        type: 'hero'
      }],
      description: 'Nature-inspired playground using sustainable materials and natural elements.',
      equipmentUsed: ['Natural Climbing Features', 'Sustainable Materials', 'Environmental Learning Stations'],
      budgetRange: '$150K - $250K',
      isFeatured: false,
      challenge: 'Preserving existing trees while creating engaging play space',
      solution: 'Custom design integrating natural landscape features',
      features: ['Sustainable Materials', 'Nature Integration', 'Environmental Learning'],
      results: ['Zero tree removal', 'LEED certification', 'Environmental education hub'],
      metrics: {
        userCapacity: 100,
        installationTime: '5 months',
        budgetAmount: 200000,
        satisfactionScore: 4.7,
        safetyIncidents: 0,
        usageIncrease: '250%',
        communityImpact: ['Environmental education', 'Sustainable play practices']
      },
      timeline: '5 months',
      size: '3,800 sq ft'
    },
    {
      id: '5',
      title: 'Metro High School Fitness Zone',
      clientType: 'School',
      clientName: 'Phoenix Union High School District',
      location: 'Phoenix, Arizona',
      completionYear: 2023,
      images: [{
        url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        alt: 'Metro High School Fitness Zone',
        caption: 'Outdoor fitness equipment',
        type: 'hero'
      }],
      description: 'Outdoor fitness equipment designed for high school students and community use.',
      equipmentUsed: ['Teen Fitness Stations', 'Weather Resistant Equipment', 'Multi-User Stations'],
      budgetRange: '$100K - $200K',
      isFeatured: false,
      challenge: 'Equipment suitable for both students and community members',
      solution: 'Versatile fitness stations with adjustable difficulty levels',
      features: ['Teen Fitness', 'Community Access', 'Weather Resistant'],
      results: ['Increased student fitness participation', 'Community health improvement', 'Extended facility usage'],
      metrics: {
        userCapacity: 50,
        installationTime: '3 months',
        budgetAmount: 150000,
        satisfactionScore: 4.5,
        safetyIncidents: 0,
        usageIncrease: '180%',
        communityImpact: ['Teen fitness improvement', 'Community health programs']
      },
      timeline: '3 months',
      size: '2,500 sq ft'
    },
    {
      id: '6',
      title: 'Lakeside Family Recreation',
      clientType: 'Public Park',
      clientName: 'Minneapolis Park Board',
      location: 'Minneapolis, Minnesota',
      completionYear: 2022,
      images: [{
        url: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        alt: 'Lakeside Family Recreation',
        caption: 'Multi-generational playground',
        type: 'hero'
      }],
      description: 'Multi-generational playground with separate areas for different age groups.',
      equipmentUsed: ['Multi-Age Play Structures', 'Water Play Features', 'Picnic Integration'],
      budgetRange: '$250K - $350K',
      isFeatured: true,
      challenge: 'Seasonal weather considerations and year-round usability',
      solution: 'Weather-resistant materials with covered play areas',
      features: ['Multi-Age Design', 'Water Play', 'Picnic Integration'],
      results: ['Year-round usage', 'Family gathering destination', 'Weather durability proven'],
      metrics: {
        userCapacity: 250,
        installationTime: '7 months',
        budgetAmount: 300000,
        satisfactionScore: 4.8,
        safetyIncidents: 0,
        usageIncrease: '220%',
        communityImpact: ['Multi-generational gathering space', 'Year-round recreation']
      },
      timeline: '7 months',
      size: '6,000 sq ft'
    }
  ];

  // Filtering and sorting logic
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Apply filters
    if (filter.searchQuery) {
      const query = filter.searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.clientName.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      );
    }

    if (filter.clientTypes.length > 0) {
      filtered = filtered.filter(project => 
        filter.clientTypes.includes(project.clientType)
      );
    }

    if (filter.years.length > 0) {
      filtered = filtered.filter(project => 
        filter.years.includes(project.completionYear)
      );
    }

    if (filter.budgetRanges.length > 0) {
      filtered = filtered.filter(project => 
        filter.budgetRanges.includes(getBudgetRangeKey(project.budgetRange))
      );
    }

    if (filter.features.length > 0) {
      filtered = filtered.filter(project => 
        filter.features.some(feature => project.features.includes(feature))
      );
    }

    if (filter.locations.length > 0) {
      filtered = filtered.filter(project => 
        filter.locations.some(location => project.location.includes(location))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => b.completionYear - a.completionYear);
        break;
      case 'oldest':
        filtered.sort((a, b) => a.completionYear - b.completionYear);
        break;
      case 'budget-high':
        filtered.sort((a, b) => b.metrics.budgetAmount - a.metrics.budgetAmount);
        break;
      case 'budget-low':
        filtered.sort((a, b) => a.metrics.budgetAmount - b.metrics.budgetAmount);
        break;
      case 'capacity-high':
        filtered.sort((a, b) => b.metrics.userCapacity - a.metrics.userCapacity);
        break;
      case 'alphabetical':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [filter, sortBy, projects]);

  // Helper function to map budget ranges to filter keys
  const getBudgetRangeKey = (budgetRange: string): string => {
    if (budgetRange.includes('Under $100K')) return 'under-100k';
    if (budgetRange.includes('$100K - $250K')) return '100k-250k';
    if (budgetRange.includes('$150K - $200K')) return '100k-250k';
    if (budgetRange.includes('$150K - $250K')) return '100k-250k';
    if (budgetRange.includes('$200K - $300K')) return '250k-500k';
    if (budgetRange.includes('$250K - $350K')) return '250k-500k';
    if (budgetRange.includes('$250K - $500K')) return '250k-500k';
    if (budgetRange.includes('$300K - $400K')) return '250k-500k';
    if (budgetRange.includes('$500K - $1M')) return '500k-1m';
    if (budgetRange.includes('Over $1M')) return 'over-1m';
    return 'under-100k';
  };

  const getClientTypeLabel = (clientType: ProjectType): string => {
    const labels: Record<ProjectType, string> = {
      'School': 'School',
      'Public Park': 'Park & Recreation',
      'Community Center': 'Community Center',
      'Residential': 'Residential'
    };
    return labels[clientType] || clientType;
  };

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

      {/* Enhanced Filter Section */}
      <ProjectFilter
        filter={filter}
        onFilterChange={setFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalResults={filteredAndSortedProjects.length}
      />

      {/* Enhanced Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProjects.map((project, index) => (
              <div
                key={project.id}
                className="card overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]?.url}
                    alt={project.images[0]?.alt || project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                      {getClientTypeLabel(project.clientType)}
                    </span>
                  </div>
                  {project.isFeatured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-accent-500 text-white p-2 rounded-full">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                  {project.metrics.satisfactionScore && project.metrics.satisfactionScore >= 4.8 && (
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {project.metrics.satisfactionScore}/5.0
                      </div>
                    </div>
                  )}
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
                      <span>{project.metrics.userCapacity}+ users</span>
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Completed {project.completionYear}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Metrics Preview */}
                  <div className="bg-neutral-50 rounded-lg p-3 mb-4">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-center">
                        <div className="font-semibold text-primary-600">{project.budgetRange}</div>
                        <div className="text-neutral-600">Investment</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-accent-600">{project.metrics.usageIncrease}</div>
                        <div className="text-neutral-600">Usage Increase</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group w-full justify-center py-2 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredAndSortedProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-neutral-400 mb-4">
                <Users className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                No projects found
              </h3>
              <p className="text-neutral-600 mb-6">
                Try adjusting your filters to see more results.
              </p>
              <button
                onClick={() => setFilter({
                  clientTypes: [],
                  years: [],
                  searchQuery: '',
                  budgetRanges: [],
                  features: [],
                  locations: []
                })}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
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