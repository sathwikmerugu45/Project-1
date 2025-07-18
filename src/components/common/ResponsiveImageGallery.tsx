import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { useResponsive, useTouch } from '../../hooks/useResponsive';
import LazyImage from './LazyImage';
import TouchFriendlyButton from './TouchFriendlyButton';

interface ImageData {
  url: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
}

interface ResponsiveImageGalleryProps {
  images: ImageData[];
  className?: string;
  showThumbnails?: boolean;
  allowZoom?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ResponsiveImageGallery: React.FC<ResponsiveImageGalleryProps> = ({
  images,
  className = '',
  showThumbnails = true,
  allowZoom = true,
  autoPlay = false,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  
  const galleryRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { isMobile, isTablet } = useResponsive();
  // const isTouch = useTouch();

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isFullscreen) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length, isFullscreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'Escape':
          e.preventDefault();
          closeFullscreen();
          break;
        case '+':
        case '=':
          e.preventDefault();
          zoomIn();
          break;
        case '-':
          e.preventDefault();
          zoomOut();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          rotate();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const minSwipeDistance = 50;

    // Horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    // Vertical swipe to close fullscreen
    if (isFullscreen && deltaY > minSwipeDistance && Math.abs(deltaX) < minSwipeDistance) {
      closeFullscreen();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
    resetZoomAndRotation();
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    resetZoomAndRotation();
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    resetZoomAndRotation();
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    resetZoomAndRotation();
    document.body.style.overflow = '';
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  };

  const rotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const resetZoomAndRotation = () => {
    setZoomLevel(1);
    setRotation(0);
  };

  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <>
      {/* Main Gallery */}
      <div className={`relative ${className}`} ref={galleryRef}>
        {/* Main Image Container */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <div 
            className="relative aspect-video cursor-pointer"
            onClick={allowZoom ? openFullscreen : undefined}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <LazyImage
              src={currentImage.url}
              alt={currentImage.alt}
              className="w-full h-full object-cover"
              sizes={isMobile ? '100vw' : isTablet ? '50vw' : '33vw'}
            />
            
            {/* Zoom indicator */}
            {allowZoom && (
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full">
                <ZoomIn className="w-4 h-4" />
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <TouchFriendlyButton
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                variant="ghost"
                size="sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </TouchFriendlyButton>
              
              <TouchFriendlyButton
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                variant="ghost"
                size="sm"
              >
                <ChevronRight className="w-5 h-5" />
              </TouchFriendlyButton>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <p className="mt-2 text-sm text-gray-600 text-center">
            {currentImage.caption}
          </p>
        )}

        {/* Thumbnails */}
        {showThumbnails && images.length > 1 && (
          <div className="mt-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-primary-500 ring-2 ring-primary-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <LazyImage
                    src={image.thumbnail || image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    width={64}
                    height={64}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          {/* Close Button */}
          <TouchFriendlyButton
            onClick={closeFullscreen}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            variant="ghost"
            size="sm"
          >
            <X className="w-6 h-6" />
          </TouchFriendlyButton>

          {/* Controls */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <TouchFriendlyButton
              onClick={zoomOut}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              variant="ghost"
              size="sm"
              disabled={zoomLevel <= 0.5}
            >
              <ZoomOut className="w-5 h-5" />
            </TouchFriendlyButton>
            
            <TouchFriendlyButton
              onClick={zoomIn}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              variant="ghost"
              size="sm"
              disabled={zoomLevel >= 3}
            >
              <ZoomIn className="w-5 h-5" />
            </TouchFriendlyButton>
            
            <TouchFriendlyButton
              onClick={rotate}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
              variant="ghost"
              size="sm"
            >
              <RotateCw className="w-5 h-5" />
            </TouchFriendlyButton>
          </div>

          {/* Main Image */}
          <div 
            className="relative max-w-full max-h-full overflow-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              ref={imageRef}
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain transition-transform duration-300"
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg)`
              }}
            />
          </div>

          {/* Navigation in Fullscreen */}
          {images.length > 1 && (
            <>
              <TouchFriendlyButton
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
                variant="ghost"
                size="md"
              >
                <ChevronLeft className="w-6 h-6" />
              </TouchFriendlyButton>
              
              <TouchFriendlyButton
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
                variant="ghost"
                size="md"
              >
                <ChevronRight className="w-6 h-6" />
              </TouchFriendlyButton>
            </>
          )}

          {/* Image Counter in Fullscreen */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ResponsiveImageGallery;