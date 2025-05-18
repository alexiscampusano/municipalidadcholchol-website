import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  subtitleClassName?: string;
  subtitleAlign?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  titleSize = 'md',
  className,
  subtitleClassName,
  subtitleAlign,
}) => {
  // Define title size classes
  const titleSizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl',
  };

  // Define alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn("mb-8", alignClasses[align])}>
      <h2 
        className={cn(
          "font-bold mb-4 text-slate-800 font-heading",
          titleSizeClasses[titleSize],
          className
        )}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p 
          className={cn(
            "text-slate-600 mb-8 max-w-3xl font-sans",
            (subtitleAlign || align) === 'center' && 'mx-auto',
            subtitleAlign ? `text-${subtitleAlign}` : '',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 