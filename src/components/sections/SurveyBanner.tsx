import React from 'react';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/shared';
import { Link } from 'react-router';
import bannerPlaza from '@/assets/images/banners/PLAZAYFRONTISMUNICIPALIDAD1.jpg';

const SurveyBanner: React.FC = () => {
  return (
    <section 
      className="bg-sky-50 py-8 md:py-12 w-full"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(224, 242, 254, 0.9), rgba(224, 242, 254, 0.95)), url(${bannerPlaza})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle 
          title="ENCUESTAS CIUDADANAS" 
          align="center"
          titleSize="md"
          className="text-sky-700 uppercase tracking-wide"
        />
        
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md border border-sky-100">
          <p className="text-gray-700 mb-6 font-sans text-left">
            Participe en nuestras encuestas ciudadanas y ayúdenos a mejorar los servicios municipales. 
            Su opinión es importante para construir una mejor comuna.
          </p>
          
          <div className="flex justify-center">
            <Link to="/encuestas-ciudadanas" className="group">
              <Button 
                className="bg-blue-600 group-hover:bg-blue-800 transition-all duration-300 transform group-hover:translate-y-[-2px] px-8 py-2.5"
              >
                Participar en Encuestas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyBanner; 