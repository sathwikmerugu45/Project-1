import React, { useState, useRef, useEffect } from 'react';
import { useTouch } from '../../hooks/useResponsive';

interface TouchFriendlyButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  ripple?: boolean;
}

const TouchFriendlyButton: React.FC<TouchFriendlyButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  ripple = true
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isTouch = useTouch();
  const rippleIdRef = useRef(0);

  // Base classes for touch-friendly sizing
  const baseClasses = 'relative overflow-hidden transition-all duration-200 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Size classes with touch-friendly minimum sizes
  const sizeClasses = {
    sm: isTouch ? 'px-4 py-3 text-sm min-h-[44px]' : 'px-3 py-2 text-sm',
    md: isTouch ? 'px-6 py-3 text-base min-h-[48px]' : 'px-4 py-2 text-base',
    lg: isTouch ? 'px-8 py-4 text-lg min-h-[52px]' : 'px-6 py-3 text-lg'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white focus:ring-primary-500',
    secondary: 'bg-white hover:bg-gray-50 active:bg-gray-100 text-primary-600 border-2 border-primary-600 focus:ring-primary-500',
    accent: 'bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-white focus:ring-accent-500',
    outline: 'bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-700 border-2 border-gray-300 focus:ring-gray-500',
    ghost: 'bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 focus:ring-gray-500'
  };

  // Touch feedback classes
  const touchClasses = isTouch ? 'active:scale-95 select-none' : 'hover:shadow-lg hover:-translate-y-0.5';

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    // Create ripple effect
    if (ripple && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      const newRipple = {
        id: rippleIdRef.current++,
        x,
        y
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    }

    onClick?.(event);
  };

  const handleTouchStart = () => {
    if (isTouch) {
      setIsPressed(true);
    }
  };

  const handleTouchEnd = () => {
    if (isTouch) {
      setIsPressed(false);
    }
  };

  // Combine all classes
  const buttonClasses = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    touchClasses,
    fullWidth ? 'w-full' : '',
    isPressed ? 'scale-95' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={buttonRef}
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={() => setIsPressed(false)}
      disabled={disabled || loading}
    >
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Button content */}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>

      {/* Ripple effects */}
      {ripple && ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white bg-opacity-30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animationDuration: '0.6s'
          }}
        />
      ))}
    </button>
  );
};

export default TouchFriendlyButton;