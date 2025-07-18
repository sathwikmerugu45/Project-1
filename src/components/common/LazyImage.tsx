import React, { useState, useRef, useEffect } from 'react';
import { createIntersectionObserver, getOptimizedImageUrl, supportsWebP } from '../../utils/performance';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  quality?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  quality = 80,
  sizes,
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      observerRef.current = createIntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              if (observerRef.current) {
                observerRef.current.disconnect();
              }
            }
          });
        },
        { rootMargin: '100px' }
      );

      if (observerRef.current) {
        observerRef.current.observe(imgRef.current);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized image sources
  const generateSrcSet = (baseSrc: string) => {
    if (!width) return undefined;
    
    const widths = [width, width * 1.5, width * 2];
    const webpSupported = supportsWebP();
    
    return widths
      .map(w => {
        const optimizedUrl = getOptimizedImageUrl(baseSrc, Math.round(w), quality);
        return `${optimizedUrl} ${w}w`;
      })
      .join(', ');
  };

  // Placeholder component
  const PlaceholderComponent = () => (
    <div 
      className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {placeholder ? (
        <img src={placeholder} alt="" className="opacity-50" />
      ) : (
        <div className="text-gray-400 text-sm">Loading...</div>
      )}
    </div>
  );

  // Error component
  const ErrorComponent = () => (
    <div 
      className={`bg-gray-100 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="text-gray-400 text-sm text-center">
        <div>Image failed to load</div>
        <div className="text-xs mt-1">Please try again</div>
      </div>
    </div>
  );

  if (hasError) {
    return <ErrorComponent />;
  }

  if (!isInView) {
    return <PlaceholderComponent />;
  }

  return (
    <div className="relative">
      {!isLoaded && <PlaceholderComponent />}
      <img
        ref={imgRef}
        src={getOptimizedImageUrl(src, width || 800, quality)}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        decoding="async"
      />
    </div>
  );
};

export default LazyImage;