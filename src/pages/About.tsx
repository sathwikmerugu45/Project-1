import { Shield, Award, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificationBadges from '../components/CertificationBadges';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every product we create meets or exceeds the highest safety standards, ensuring children can play with confidence.'
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'We believe every child deserves to play. Our inclusive designs ensure accessibility for children of all abilities.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Premium materials and expert craftsmanship result in playground equipment that stands the test of time.'
    },
    {
      icon: Globe,
      title: 'Community Impact',
      description: 'We create spaces that bring communities together, fostering social connections and healthy lifestyles.'
    }
  ];

  const timeline = [
    {
      year: '1999',
      title: 'Company Founded',
      description: 'PlaygroundPro was established with a mission to create safer, more engaging playground experiences.'
    },
    {
      year: '2005',
      title: 'First Major Innovation',
      description: 'Introduced our revolutionary safety surfacing system, setting new industry standards.'
    },
    {
      year: '2010',
      title: 'Inclusive Design Pioneer',
      description: 'Launched our first fully accessible playground system, leading the industry in inclusive design.'
    },
    {
      year: '2015',
      title: 'Sustainability Initiative',
      description: 'Committed to using 100% sustainable materials in all new playground installations.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Introduced virtual playground design tools and augmented reality planning systems.'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as the leading playground equipment provider with 1000+ successful installations.'
    }
  ];

  const team = [
    {
      name: 'Michael Rodriguez',
      title: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: '25+ years in playground design and child development. Passionate about creating inclusive play experiences.'
    },
    {
      name: 'Sarah Chen',
      title: 'Head of Design',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Award-winning designer specializing in accessible and sustainable playground solutions.'
    },
    {
      name: 'David Thompson',
      title: 'Safety Director',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former safety inspector with expertise in international playground safety standards and regulations.'
    },
    {
      name: 'Lisa Park',
      title: 'Community Relations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Dedicated to building strong relationships with communities and understanding their unique needs.'
    }
  ];

  const certifications = [
    'EN 1176 European Safety Standards',
    'ASTM International Standards',
    'CPSC Safety Guidelines',
    'ADA Compliance Certified',
    'ISO 9001 Quality Management',
    'GREENGUARD Environmental Standards'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              About
              <span className="block text-gradient">PlaygroundPro</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              For over 25 years, we've been dedicated to creating innovative, safe, and inclusive 
              playground experiences that bring communities together and inspire children to play, 
              learn, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                To create exceptional playground experiences that promote physical activity, 
                social interaction, and cognitive development while ensuring the highest 
                standards of safety and accessibility for all children.
              </p>
              
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                A world where every child has access to safe, engaging, and inclusive play 
                environments that foster creativity, build confidence, and strengthen communities.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Children playing together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These principles guide everything we do, from design and manufacturing 
              to installation and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card p-8 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, here are the key milestones 
              that have shaped PlaygroundPro into the company we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-neutral-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our passionate team of experts brings together decades of experience in 
              playground design, safety, and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-primary-600 font-medium mb-4">
                  {member.title}
                </p>
                
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We maintain the highest industry certifications and exceed international safety standards 
              to ensure every playground we create is safe, durable, and globally compliant.
            </p>
          </div>

          <div className="mb-12">
            <CertificationBadges variant="detailed" size="large" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="flex items-center space-x-3 p-4 bg-neutral-50 rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="text-neutral-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                International Trust & Compliance
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                Our EN certification and global compliance standards ensure your playground 
                meets international safety requirements, building trust with communities worldwide.
              </p>
              <button className="btn-primary">
                Download Certification Documents
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Our team is ready to help you 
            design and build the perfect playground for your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-neutral-50 px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center group transition-colors">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;