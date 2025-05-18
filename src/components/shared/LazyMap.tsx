import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LazyMapProps {
  src: string;
  title: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const LazyMap: React.FC<LazyMapProps> = ({
  src,
  title,
  className,
  width = '100%',
  height = 300,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  // Initialize Intersection Observer to load map only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, [isVisible]);

  // Handle iframe load event
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={mapRef}
      className={cn(
        "w-full rounded-lg overflow-hidden bg-slate-100 relative",
        className
      )}
      style={{ height }}
    >
      {/* Skeleton/placeholder while map is loading */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center">
            <div className="animate-pulse w-12 h-12 bg-slate-200 rounded-full mx-auto mb-3"></div>
            <p className="text-slate-400 text-sm">Cargando mapa...</p>
          </div>
        </div>
      )}

      {/* Load iframe only when component is visible */}
      {isVisible && (
        <iframe
          src={src}
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title={title}
          className="w-full h-full"
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

export default LazyMap; 