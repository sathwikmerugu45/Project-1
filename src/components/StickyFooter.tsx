import { useState } from 'react';
import { Phone, Download, Calendar, Globe, MapPin, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-700">
      <div className="container-max px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Quick actions */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Book a Call</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Download Brochure</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">See Our Map</span>
            </button>
          </div>

          {/* Center - Contact info */}
          <div className="hidden md:flex items-center space-x-6 text-white text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary-400" />
              <span>1-800-PLAYGROUND</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-accent-400" />
              <span>Mon-Fri 8AM-6PM</span>
            </div>
          </div>

          {/* Right side - Language toggle and close */}
          <div className="flex items-center space-x-3">
            <LanguageToggle />
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