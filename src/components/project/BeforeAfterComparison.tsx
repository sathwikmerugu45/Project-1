import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BeforeAfterImages } from '../../types/project';

interface BeforeAfterComparisonProps {
  beforeAfterImages: BeforeAfterImages;
  className?: string;
}

const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({ 
  beforeAfterImages, 
  className = '' 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className={`${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
          Before & After Transformation
        </h3>
        <p className="text-neutral-600">
          {beforeAfterImages.description}
        </p>
      </div>

      <div className="card overflow-hidden">
        <div 
          className="relative w-full h-96 cursor-col-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0">
            <img
              src={beforeAfterImages.before.url}
              alt={beforeAfterImages.before.alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Before
            </div>
          </div>

          {/* After Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeAfterImages.after.url}
              alt={beforeAfterImages.after.alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              After
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
              <ChevronLeft className="w-3 h-3 text-neutral-600 -mr-1" />
              <ChevronRight className="w-3 h-3 text-neutral-600 -ml-1" />
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            Drag to compare
          </div>
        </div>

        {/* Image Captions */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-50">
          <div>
            <h4 className="font-semibold text-neutral-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
              Before
            </h4>
            <p className="text-neutral-600 text-sm">
              {beforeAfterImages.before.caption || 'Original state before renovation'}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-2 flex items-center">
              <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
              After
            </h4>
            <p className="text-neutral-600 text-sm">
              {beforeAfterImages.after.caption || 'Transformed space after installation'}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Toggle Buttons */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setSliderPosition(10)}
          className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium transition-colors"
        >
          Show Before
        </button>
        <button
          onClick={() => setSliderPosition(50)}
          className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg font-medium transition-colors"
        >
          50/50 Split
        </button>
        <button
          onClick={() => setSliderPosition(90)}
          className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg font-medium transition-colors"
        >
          Show After
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;