import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Children playing on playground equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 via-neutral-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Creating
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Joyful Spaces
              </span>
              Where Children Thrive
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-2xl">
              Premium playground equipment designed for safety, inclusivity, and endless fun. 
              Transforming communities through innovative play experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/projects" className="btn-primary inline-flex items-center justify-center group">
                Explore Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                Get Free Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Shield className="w-6 h-6 text-primary-400 mr-2" />
                  <span className="text-3xl font-bold text-white">25+</span>
                </div>
                <p className="text-neutral-300">Years of Safety Excellence</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Play className="w-6 h-6 text-accent-400 mr-2" />
                  <span className="text-3xl font-bold text-white">1000+</span>
                </div>
                <p className="text-neutral-300">Playgrounds Installed</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Users className="w-6 h-6 text-primary-400 mr-2" />
                  <span className="text-3xl font-bold text-white">500K+</span>
                </div>
                <p className="text-neutral-300">Happy Children Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;