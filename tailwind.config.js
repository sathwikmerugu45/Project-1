/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Mobile-first breakpoints
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      // Mobile-optimized spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      // Touch-friendly minimum sizes
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      minWidth: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      // Performance-optimized animations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-fast': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-up-fast': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'scale-in-fast': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      // Mobile-optimized typography
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      // Responsive aspect ratios
      aspectRatio: {
        'video': '16 / 9',
        'square': '1 / 1',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
      },
      // Mobile-optimized shadows
      boxShadow: {
        'touch': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'touch-lg': '0 4px 8px 0 rgba(0, 0, 0, 0.12)',
        'inner-light': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.05)',
      },
      // Performance-optimized transitions
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
    },
  },
  plugins: [],
}