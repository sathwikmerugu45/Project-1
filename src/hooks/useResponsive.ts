import { useState, useEffect } from 'react';
import { throttle } from '../utils/performance';

// Breakpoint definitions matching Tailwind CSS
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

interface ResponsiveState {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  breakpoint: Breakpoint | 'xs';
  orientation: 'portrait' | 'landscape';
  isTouch: boolean;
}

export const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>(() => {
    if (typeof window === 'undefined') {
      return {
        width: 1024,
        height: 768,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isLargeDesktop: false,
        breakpoint: 'lg' as const,
        orientation: 'landscape' as const,
        isTouch: false
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    return {
      width,
      height,
      isMobile: width < BREAKPOINTS.md,
      isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
      isDesktop: width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl,
      isLargeDesktop: width >= BREAKPOINTS.xl,
      breakpoint: getBreakpoint(width),
      orientation: width > height ? 'landscape' : 'portrait',
      isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0
    };
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setState({
        width,
        height,
        isMobile: width < BREAKPOINTS.md,
        isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
        isDesktop: width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl,
        isLargeDesktop: width >= BREAKPOINTS.xl,
        breakpoint: getBreakpoint(width),
        orientation: width > height ? 'landscape' : 'portrait',
        isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0
      });
    }, 100);

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return state;
};

const getBreakpoint = (width: number): Breakpoint | 'xs' => {
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
};

// Hook for specific breakpoint checks
export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const { width } = useResponsive();
  return width >= BREAKPOINTS[breakpoint];
};

// Hook for media queries
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    setMatches(mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};

// Hook for touch device detection
export const useTouch = (): boolean => {
  const [isTouch, setIsTouch] = useState(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    // Check on mount and when the window regains focus
    checkTouch();
    window.addEventListener('focus', checkTouch);

    return () => window.removeEventListener('focus', checkTouch);
  }, []);

  return isTouch;
};

// Hook for reduced motion preference
export const useReducedMotion = (): boolean => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

// Hook for high contrast preference
export const useHighContrast = (): boolean => {
  return useMediaQuery('(prefers-contrast: high)');
};

// Hook for dark mode preference
export const useDarkMode = (): boolean => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};