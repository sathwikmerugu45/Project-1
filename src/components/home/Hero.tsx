import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Users, Globe, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: '10 Years. 950+ Projects.',
      subtitle: 'Globally Trusted Playground Partner',
      description: 'We don\'t just build play areas, we help cities and schools design childhood.'
    },
    {
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Safety First.',
      subtitle: 'Innovation Always.',
      description: 'EN 1176, ASTM & CPSC certified equipment trusted by communities worldwide.'
    },
    {
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'From Vision',
      subtitle: 'To Joyful Reality',
      description: 'Every playground tells a story. Let us help you write yours.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Transition */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt="Children playing on playground equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/60 to-neutral-900/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            {/* Certification Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-primary-400" />
                <span className="text-white text-sm font-medium">EN 1176 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-accent-400" />
                <span className="text-white text-sm font-medium">ASTM Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                <Globe className="w-5 h-5 text-primary-400" />
                <span className="text-white text-sm font-medium">Global Standards</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {heroSlides[currentSlide].title}
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-3xl">
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="#brand-video" className="btn-primary inline-flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="#quote-estimator" className="btn-secondary inline-flex items-center justify-center">
                Get Smart Quote
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Shield className="w-6 h-6 text-primary-400 mr-2" />
                  <span className="text-3xl font-bold text-white">10+</span>
                </div>
                <p className="text-neutral-300">Years of Excellence</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Play className="w-6 h-6 text-accent-400 mr-2" />
                  <span className="text-3xl font-bold text-white">950+</span>
                </div>
                <p className="text-neutral-300">Projects Completed</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Users className="w-6 h-6 text-primary-400 mr-2" />
                  <span className="text-3xl font-bold text-white">50K+</span>
                </div>
                <p className="text-neutral-300">Happy Children Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
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