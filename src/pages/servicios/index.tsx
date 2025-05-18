import React from 'react';
import Layout from '@/components/layout/Layout';
import ServicesSection from '@/components/sections/ServicesSection';
import { PageTitle, FadeInSection } from '@/components/shared';
import { BadgeCheck, Scroll, HeartHandshake, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Information on how to access services
const serviceSteps = [
  {
    id: 1,
    icon: <BadgeCheck className="h-10 w-10" />,
    title: "Identifica el servicio",
    description: "Revisa la lista de servicios disponibles y selecciona el que necesitas.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    icon: <Scroll className="h-10 w-10" />,
    title: "Verifica los requisitos",
    description: "Cada servicio tiene requisitos específicos que debes cumplir.",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    icon: <HeartHandshake className="h-10 w-10" />,
    title: "Realiza el trámite",
    description: "Acércate a la oficina correspondiente o realiza el trámite en línea si está disponible.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    icon: <HelpCircle className="h-10 w-10" />,
    title: "¿Necesitas ayuda?",
    description: "Nuestro equipo está disponible para asesorarte en todo el proceso.",
    color: "bg-amber-100 text-amber-600",
  },
];

const ServiciosPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <FadeInSection direction="down">
              <PageTitle 
                title="Servicios Municipales"
                subtitle="La Municipalidad de Cholchol ofrece diversos servicios para el bienestar de todos los vecinos de la comuna."
              />
            </FadeInSection>
          </div>
        </div>
        
        <FadeInSection delay={300}>
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">¿Cómo acceder a nuestros servicios?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceSteps.map((step, index) => (
                <FadeInSection key={step.id} delay={150 * index} direction="up">
                  <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className={`${step.color} p-4 rounded-full mb-4`}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      
        {/* Services section with custom options */}
        <FadeInSection delay={200}>
          <ServicesSection 
            showTitle={false} 
            showAllServicesLink={false}
            initialView="expanded"
          />
        </FadeInSection>
        
        {/* Additional information section */}
        <FadeInSection delay={400} direction="up">
          <div className="container mx-auto px-4 py-12 mb-10">
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas información adicional?</h2>
                <p className="text-white/90 mb-8">
                  Nuestro equipo está disponible para resolver todas tus dudas y ayudarte con cualquier trámite municipal.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="tel:+56912345678" 
                    className="bg-white text-blue-700 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Llamar ahora</span>
                  </a>
                  <a 
                    href="/contacto" 
                    className="bg-transparent hover:bg-white/20 border border-white text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Contacto</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </Layout>
  );
};

export default ServiciosPage; 