import { useState, useEffect } from 'react';
import { MessageCircle, FileText, Calendar, Globe, X } from 'lucide-react';

const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-700 transition-transform duration-300 ${
      isScrolled ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="container-max px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Secondary actions */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Live Chat</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Get Quote</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Schedule Visit</span>
            </button>
          </div>

          {/* Center - Contact info */}
          <div className="hidden md:flex items-center space-x-6 text-white text-sm">
            <span className="text-primary-200">Need help? We're here to assist you</span>
          </div>

          {/* Right side - Language toggle and close */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-200">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">🇺🇸 EN</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;