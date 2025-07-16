import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Users, Globe, Award } from 'lucide-react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {isVideoLoaded ? (
          <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
            {/* Video Placeholder - In production, this would be an actual video element */}
            <div className="relative w-full h-full">
              <img
                src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
                alt="Professional playground equipment installation"
                className="w-full h-full object-cover"
              />
              {/* Video overlay to simulate video playback */}
              <div className="absolute inset-0 bg-black/20">
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>
                
                {/* Simulated video controls */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>Professional Playground Installation - Riverside Park</span>
                      <div className="flex items-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>2:34 / 5:20</span>
                      </div>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                      <div className="bg-primary-400 h-1 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg">Loading playground video...</p>
            </div>
          </div>
        )}
        
        {/* Video Overlay */}
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
              Safety First.
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Innovation Always.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-3xl">
              EN 1176, ASTM & CPSC certified equipment trusted by communities worldwide. 
              We don't just build play areas, we help cities and schools design childhood.
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

      {/* Video Quality Indicator */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>HD Quality</span>
        </div>
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