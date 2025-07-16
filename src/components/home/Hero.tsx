import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Award, Globe, Star, CheckCircle } from 'lucide-react';
import CertificationBadges from '../CertificationBadges';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Premium Playground Equipment',
      subtitle: 'EN 1176, ASTM & CPSC Certified',
      description: 'Professional playground solutions trusted by schools and communities worldwide'
    },
    {
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Safety First Innovation',
      subtitle: 'International Standards Compliance',
      description: 'Advanced safety features with cutting-edge playground technology'
    },
    {
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Custom Design Solutions',
      subtitle: 'Tailored to Your Space',
      description: 'Bespoke playground equipment designed for your specific requirements'
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
              {currentSlideData.title}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-primary-400 mb-4 font-semibold">
              {currentSlideData.subtitle}
            </h2>
            
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-3xl">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/products" className="btn-primary inline-flex items-center justify-center group">
                View Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                Get Quote
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
                  <Star className="w-6 h-6 text-accent-400 mr-2" />
                  <span className="text-3xl font-bold text-white">950+</span>
                </div>
                <p className="text-neutral-300">Projects Completed</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <CheckCircle className="w-6 h-6 text-primary-400 mr-2" />
                  <span className="text-3xl font-bold text-white">50K+</span>
                </div>
                <p className="text-neutral-300">Happy Clients</p>
              </div>
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