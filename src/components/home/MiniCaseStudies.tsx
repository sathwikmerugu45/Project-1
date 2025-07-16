import { useState } from 'react';
import { Download, Clock, Quote, MapPin, Calendar, Users } from 'lucide-react';

const MiniCaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'Riverside Community Transformation',
      location: 'Portland, Oregon',
      beforeImage: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      afterImage: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      timeTaken: '4 months',
      budget: '$250,000',
      capacity: '200+ children',
      completed: '2024',
      challenge: 'Underutilized 5,000 sq ft space needed to serve diverse community with varying ages and abilities while maintaining environmental sustainability.',
      solution: 'Integrated playground system combining natural play elements with modern safety features, separate age zones, and universal accessibility.',
      results: [
        'Park usage increased by 300% within first month',
        'Zero safety incidents since installation',
        'Reduced maintenance costs by 40%',
        'Featured as model project by Oregon Parks Association'
      ],
      quote: {
        text: "PlaygroundPro exceeded our expectations in every way. The installation was seamless, and the community response has been overwhelmingly positive. Children of all abilities can play together safely.",
        author: "Sarah Johnson",
        title: "Parks & Recreation Director",
        organization: "City of Portland"
      },
      downloads: {
        siteMap: 'riverside-site-map.pdf',
        plan3D: 'riverside-3d-plan.pdf'
      }
    },
    {
      id: 2,
      title: 'Sunshine Elementary Innovation',
      location: 'Austin, Texas',
      beforeImage: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      afterImage: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      timeTaken: '3 months',
      budget: '$180,000',
      capacity: '300+ students',
      completed: '2024',
      challenge: 'Limited space with high student capacity requirements needed educational integration and year-round weather resistance.',
      solution: 'Vertical play design maximizing play value in compact footprint with integrated learning elements and covered areas.',
      results: [
        'Student engagement during recess increased by 85%',
        'Improved social interaction among different grade levels',
        'Educational play elements enhanced outdoor learning',
        'Weather-resistant design ensures year-round use'
      ],
      quote: {
        text: "The educational play elements have transformed our playground into an outdoor classroom. Students are more engaged during recess, and we've seen improved social interaction across grade levels.",
        author: "Michael Chen",
        title: "Principal",
        organization: "Sunshine Elementary School"
      },
      downloads: {
        siteMap: 'sunshine-site-map.pdf',
        plan3D: 'sunshine-3d-plan.pdf'
      }
    },
    {
      id: 3,
      title: 'Harmony Inclusive Design',
      location: 'Denver, Colorado',
      beforeImage: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      afterImage: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      timeTaken: '5 months',
      budget: '$320,000',
      capacity: '150+ children',
      completed: '2023',
      challenge: 'Creating truly inclusive play experiences for children with diverse abilities while ensuring safety and engagement for all users.',
      solution: 'Universal design principles with specialized therapeutic equipment, sensory-rich environments, and accessible pathways throughout.',
      results: [
        '100% accessibility compliance achieved',
        'Community engagement increased by 400%',
        'Therapeutic benefits documented for special needs children',
        'Model for inclusive design adopted by other cities'
      ],
      quote: {
        text: "The inclusive design features have made our playground truly accessible to all children. The quality and attention to detail in every component is exceptional. It's become a destination for families from across the region.",
        author: "Lisa Rodriguez",
        title: "Community Center Manager",
        organization: "Denver Recreation Department"
      },
      downloads: {
        siteMap: 'harmony-site-map.pdf',
        plan3D: 'harmony-3d-plan.pdf'
      }
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Mini Case Studies
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Detailed project narratives showcasing our problem-solving approach, 
            implementation process, and measurable community impact.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCase === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="card p-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-2">
                  {currentCase.title}
                </h3>
                <div className="flex items-center text-neutral-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{currentCase.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-neutral-100 px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <span>{currentCase.timeTaken}</span>
                </div>
                <div className="flex items-center space-x-2 bg-neutral-100 px-3 py-2 rounded-lg">
                  <Users className="w-4 h-4 text-accent-600" />
                  <span>{currentCase.capacity}</span>
                </div>
                <div className="flex items-center space-x-2 bg-neutral-100 px-3 py-2 rounded-lg">
                  <Calendar className="w-4 h-4 text-primary-600" />
                  <span>{currentCase.completed}</span>
                </div>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">Before</h4>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={currentCase.beforeImage}
                    alt="Before transformation"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">After</h4>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={currentCase.afterImage}
                    alt="After transformation"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-4">Challenge</h4>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {currentCase.challenge}
                </p>
                
                <h4 className="text-xl font-semibold text-neutral-900 mb-4">Solution</h4>
                <p className="text-neutral-600 leading-relaxed">
                  {currentCase.solution}
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-4">Results & Impact</h4>
                <ul className="space-y-3">
                  {currentCase.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-600">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-primary-50 p-6 rounded-xl mb-8">
              <div className="flex items-start space-x-4">
                <Quote className="w-8 h-8 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <blockquote className="text-neutral-700 italic leading-relaxed mb-4">
                    "{currentCase.quote.text}"
                  </blockquote>
                  <div className="border-t border-primary-200 pt-4">
                    <div className="font-semibold text-neutral-900">
                      {currentCase.quote.author}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {currentCase.quote.title}
                    </div>
                    <div className="text-sm text-primary-600">
                      {currentCase.quote.organization}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Downloads */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Site Map Download
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                3D Plan Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniCaseStudies;