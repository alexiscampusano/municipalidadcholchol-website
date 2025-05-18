import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/sections/ContactForm';
import { PageTitle, FadeInSection, LazyMap } from '@/components/shared';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// Contact information to display on the page
const contactInfo = [
  {
    id: 1,
    icon: <MapPin className="h-8 w-8" />,
    title: "Dirección",
    info: "Calle Principal 123, Cholchol, Región de La Araucanía",
    color: "bg-red-100 text-red-600"
  },
  {
    id: 2,
    icon: <Phone className="h-8 w-8" />,
    title: "Teléfono",
    info: "+56 9 1234 5678",
    color: "bg-green-100 text-green-600"
  },
  {
    id: 3,
    icon: <Mail className="h-8 w-8" />,
    title: "Correo Electrónico",
    info: "contacto@municholchol.cl",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 4,
    icon: <Clock className="h-8 w-8" />,
    title: "Horario de Atención",
    info: "Lunes a Viernes: 8:30 - 14:00 hrs",
    color: "bg-yellow-100 text-yellow-600"
  }
];

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-sky-50 to-white">
        <div className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <FadeInSection direction="down">
              <PageTitle 
                title="Contacto"
                subtitle="¿Tienes alguna consulta o sugerencia? Estamos aquí para ayudarte. Completa el formulario y te responderemos a la brevedad."
              />
            </FadeInSection>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInSection delay={200} direction="right">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-slate-800">Información de Contacto</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((item) => (
                    <Card key={item.id} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className={`${item.color} p-4 rounded-full mb-4`}>
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-slate-600">{item.info}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Nuestra Ubicación</h3>
                  <LazyMap 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.607160059732!2d-72.85235235893017!3d-38.60203583092101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3b2af5f1e91%3A0x81f3f1bfcd08d69e!2sMunicipalidad%20de%20Cholchol!5e0!3m2!1ses!2scl!4v1626908765432!5m2!1ses!2scl" 
                    title="Mapa de ubicación de la Municipalidad de Cholchol"
                    height={300}
                    className="shadow-md"
                  />
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={400} direction="left">
              <ContactForm />
            </FadeInSection>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 