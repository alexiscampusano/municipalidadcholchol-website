import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If element is visible in viewport
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // If effect should occur only once, disconnect observer
          if (once) {
            observer.unobserve(domRef.current!);
          }
        } else if (!once) {
          // If effect should repeat each time element enters/exits viewport
          setIsVisible(false);
        }
      },
      { threshold: threshold }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [once, threshold]);

  // Animation direction classes
  const directionClasses = {
    up: 'translate-y-10',
    down: 'translate-y-[-10px]',
    left: 'translate-x-10',
    right: 'translate-x-[-10px]',
    none: '',
  };

  // Inline styles for delay and duration
  const animationStyle = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all opacity-0',
        directionClasses[direction],
        isVisible && 'opacity-100 translate-x-0 translate-y-0',
        className
      )}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default FadeInSection; 