import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  link?: string;
  isExternal?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
  link,
  isExternal = false,
}) => {
  const cardContent = (
    <>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600 text-left">{description}</p>
    </>
  );

  const cardClasses = cn(
    "bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-slate-100",
    "hover:bg-sky-50 hover:border-sky-200",
    link && "cursor-pointer",
    className
  );

  if (link) {
    if (isExternal) {
      return (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClasses}
        >
          {cardContent}
        </a>
      );
    } else {
      return (
        <Link to={link} className={cardClasses}>
          {cardContent}
        </Link>
      );
    }
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

export default ServiceCard; 