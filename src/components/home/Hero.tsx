import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Globe, Star, CheckCircle, Play, Users, Clock } from 'lucide-react';
import CertificationBadges from '../CertificationBadges';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Premium Playground Equipment',
      subtitle: 'EN 1176, ASTM & CPSC Certified',
      description: 'Professional playground solutions trusted by schools and communities worldwide',
      cta: {
        primary: { text: 'Explore Products', link: '/products', icon: ArrowRight },
        secondary: { text: 'Get Free Quote', link: '/contact', icon: null },
        tertiary: { text: 'Watch Demo', action: 'video', icon: Play }
      },
      stats: [
        { icon: Shield, value: '25+', label: 'Years Experience', color: 'text-primary-400' },
        { icon: Star, value: '1,200+', label: 'Projects Completed', color: 'text-accent-400' },
        { icon: Users, value: '100K+', label: 'Happy Children', color: 'text-primary-400' }
      ]
    },
    {
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Safety First Innovation',
      subtitle: 'International Standards Compliance',
      description: 'Advanced safety features with cutting-edge playground technology',
      cta: {
        primary: { text: 'View Safety Features', link: '/products?filter=safety', icon: Shield },
        secondary: { text: 'Download Brochure', link: '/resources', icon: null },
        tertiary: { text: 'Schedule Tour', link: '/contact', icon: Clock }
      },
      stats: [
        { icon: CheckCircle, value: '100%', label: 'Safety Compliant', color: 'text-green-400' },
        { icon: Award, value: '15+', label: 'Certifications', color: 'text-accent-400' },
        { icon: Globe, value: '50+', label: 'Countries Served', color: 'text-primary-400' }
      ]
    },
    {
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Custom Design Solutions',
      subtitle: 'Tailored to Your Space',
      description: 'Bespoke playground equipment designed for your specific requirements',
      cta: {
        primary: { text: 'Start Design Process', link: '/contact?type=custom', icon: ArrowRight },
        secondary: { text: 'View Portfolio', link: '/projects', icon: null },
        tertiary: { text: 'Design Consultation', link: '/contact', icon: Users }
      },
      stats: [
        { icon: Star, value: '500+', label: 'Custom Designs', color: 'text-accent-400' },
        { icon: Clock, value: '30 Days', label: 'Average Delivery', color: 'text-primary-400' },
        { icon: CheckCircle, value: '98%', label: 'Client Satisfaction', color: 'text-green-400' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.image}
          alt="Professional playground equipment"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/60 to-neutral-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            {/* Dynamic Certification Badges */}
            <div className="mb-8">
              <CertificationBadges variant="default" size="medium" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {currentSlideData.title}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-primary-400 mb-4 font-semibold">
              {currentSlideData.subtitle}
            </h2>
            
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-3xl">
              {currentSlideData.description}
            </p>

            {/* Dynamic Call-to-Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to={currentSlideData.cta.primary.link} 
                className="btn-primary inline-flex items-center justify-center group"
              >
                {currentSlideData.cta.primary.text}
                {currentSlideData.cta.primary.icon && (
                  <currentSlideData.cta.primary.icon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </Link>
              <Link 
                to={currentSlideData.cta.secondary.link} 
                className="btn-secondary inline-flex items-center justify-center"
              >
                {currentSlideData.cta.secondary.text}
              </Link>
              {currentSlideData.cta.tertiary.action === 'video' ? (
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="btn-outline inline-flex items-center justify-center group"
                >
                  {currentSlideData.cta.tertiary.icon && (
                    <currentSlideData.cta.tertiary.icon className="mr-2 w-5 h-5" />
                  )}
                  {currentSlideData.cta.tertiary.text}
                </button>
              ) : (
                <Link 
                  to={currentSlideData.cta.tertiary.link} 
                  className="btn-outline inline-flex items-center justify-center group"
                >
                  {currentSlideData.cta.tertiary.icon && (
                    <currentSlideData.cta.tertiary.icon className="mr-2 w-5 h-5" />
                  )}
                  {currentSlideData.cta.tertiary.text}
                </Link>
              )}
            </div>

            {/* Dynamic Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              {currentSlideData.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-2">
                    <stat.icon className={`w-6 h-6 ${stat.color} mr-2`} />
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-neutral-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary-400' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;