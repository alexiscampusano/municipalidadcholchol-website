import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router';
import { SectionTitle, ServiceCard } from '@/components/shared';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link?: string;
  isExternal?: boolean;
}

interface ServicesSectionProps {
  showAllServicesLink?: boolean;
  showTitle?: boolean;
  customTitle?: string;
  customSubtitle?: string;
  initialView?: 'compact' | 'expanded';
}

const initialServices: Service[] = [
  {
    id: 1,
    title: 'Registro Civil',
    description: 'Obtén certificados de nacimiento, matrimonio y defunción.',
    icon: '📝',
  },
  {
    id: 2,
    title: 'Patentes Municipales',
    description: 'Trámites para obtener y renovar patentes comerciales.',
    icon: '🏪',
  },
  {
    id: 3,
    title: 'Permisos de Construcción',
    description: 'Solicita permisos para construcciones y obras.',
    icon: '🏗️',
  },
];

const additionalServices: Service[] = [
  {
    id: 4,
    title: 'Asistencia Social',
    description: 'Programas de apoyo para las familias de la comuna.',
    icon: '👪',
  },
  {
    id: 5,
    title: 'Departamento de Tránsito',
    description: 'Renovación de licencias y permisos de circulación.',
    icon: '🚗',
    link: 'https://portalweb.insico.cl/Cholchol/Permisos/',
    isExternal: true
  },
  {
    id: 6,
    title: 'Cultura y Deportes',
    description: 'Talleres y actividades culturales para la comunidad.',
    icon: '🎭',
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  showAllServicesLink = true,
  showTitle = true,
  customTitle = "Nuestros Servicios",
  customSubtitle = "Conoce los diferentes servicios que la Municipalidad ofrece a los vecinos de Cholchol.",
  initialView = 'compact'
}) => {
  const [services, setServices] = useState<Service[]>(
    initialView === 'expanded' ? [...initialServices, ...additionalServices] : initialServices
  );
  const [showAll, setShowAll] = useState(initialView === 'expanded');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const isServicesPage = location.pathname === '/servicios';

  // Simulates loading data from a server
  const loadMoreServices = () => {
    setLoading(true);
    
    // Simulate loading time
    setTimeout(() => {
      setServices([...services, ...additionalServices]);
      setShowAll(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-12 bg-white w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        {showTitle && (
          <SectionTitle 
            title={customTitle}
            subtitle={customSubtitle}
            titleSize="md"
            align="left"
            subtitleAlign="left"
          />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              isExternal={service.isExternal}
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          {!isServicesPage && (
            <>
              {!showAll ? (
                <Button 
                  onClick={loadMoreServices} 
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-800 transition-all duration-300"
                >
                  {loading ? 'Cargando...' : 'Ver Más Servicios'}
                </Button>
              ) : showAllServicesLink && (
                <Link to="/servicios" className="group">
                  <Button 
                    className="bg-blue-600 group-hover:bg-blue-800 transition-all duration-300 transform group-hover:translate-y-[-2px]"
                  >
                    Ver Todos los Servicios
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 