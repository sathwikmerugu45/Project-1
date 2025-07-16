import { useState } from 'react';
import { Play, X, Volume2, VolumeX, Subtitles } from 'lucide-react';

const BrandVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);

  const testimonials = [
    {
      quote: "Sathwik transformed our community park beyond expectations",
      author: "Sarah Johnson",
      title: "Parks Director, Portland"
    },
    {
      quote: "The children's joy is immeasurable since installation",
      author: "Michael Chen",
      title: "Principal, Austin Elementary"
    },
    {
      quote: "Quality and safety standards exceeded international benchmarks",
      author: "Lisa Rodriguez",
      title: "Recreation Manager, Denver"
    }
  ];

  return (
    <section id="brand-video" className="section-padding bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story in Motion
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've been creating magical play experiences for over a decade. 
            From our founder's vision to children's laughter across the globe.
          </p>
        </div>

        {/* Video Preview */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
              alt="Professional playground equipment showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
            
            {/* Video Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">The Sathwik Story</h3>
                <p className="text-sm text-neutral-200 mb-3">
                  Founder narration • Drone installations • Equipment showcase
                </p>
                <div className="flex items-center space-x-4 text-xs text-neutral-300">
                  <span className="flex items-center">
                    <Subtitles className="w-4 h-4 mr-1" />
                    EN + VN Subtitles
                  </span>
                  <span>5:30 duration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Micro Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <blockquote className="text-neutral-200 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-neutral-400">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-4">
            {/* Video Controls */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
              <button
                onClick={() => setShowSubtitles(!showSubtitles)}
                className={`p-2 rounded-lg transition-colors ${
                  showSubtitles ? 'bg-white/20 text-white' : 'bg-white/10 text-white/60'
                }`}
              >
                <Subtitles className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
              </button>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Video Player Placeholder */}
            <div className="aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Brand Video Player</p>
                <p className="text-sm text-neutral-400 mt-2">
                  Founder narration + Kids playing + Drone shots
                </p>
                {showSubtitles && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 px-4 py-2 rounded">
                    <p className="text-sm">Subtitles: EN + VN Available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandVideo;