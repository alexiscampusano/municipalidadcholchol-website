import React from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitleClassName?: string;
  subtitleAlign?: 'left' | 'center' | 'right';
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className,
  subtitleClassName,
  subtitleAlign,
}) => {
  // Define alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn("mb-10 w-full", alignClasses[align])}>
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 
          className={cn(
            "text-4xl md:text-5xl font-bold mb-6 text-slate-800 font-display",
            className
          )}
        >
          {title}
        </h1>
        
        {subtitle && (
          <p 
            className={cn(
              "text-slate-600 max-w-3xl font-sans",
              (subtitleAlign || align) === 'center' && 'mx-auto',
              subtitleAlign ? `text-${subtitleAlign}` : '',
              subtitleClassName
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageTitle; 