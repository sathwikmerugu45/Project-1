import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Star } from 'lucide-react';

const StoriesOfPlay = () => {
  return (
    <section className="relative section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&h=800"
          alt="Children playing on playground equipment"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-accent-600/80"></div>
      </div>

      <div className="relative z-10 container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stories of Play
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              A new on-site playground doesn't just mean more fun for the whole community—it also means more 
              opportunities for children to learn, grow, and develop essential life skills through play.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-sm text-primary-100">Communities Served</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">100K+</div>
                <div className="text-sm text-primary-100">Happy Children</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">25+</div>
                <div className="text-sm text-primary-100">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/projects" 
                className="btn-white inline-flex items-center justify-center group"
              >
                View Our Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline-white inline-flex items-center justify-center"
              >
                Start Your Story
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=300&h=200"
                alt="Children playing on swings"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=250"
                alt="Playground climbing structure"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&h=250"
                alt="Children on playground equipment"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&h=200"
                alt="Playground site furnishings"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesOfPlay;