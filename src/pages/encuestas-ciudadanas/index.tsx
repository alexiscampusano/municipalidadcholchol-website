import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Direct imports of survey images
import deporteImg from '@/assets/images/surveys/encuesta-deportiva.png';
import climaImg from '@/assets/images/surveys/encuesta-clima.png';

interface EncuestaProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const encuestas: EncuestaProps[] = [
  {
    title: "Encuesta de Gustos y Actividades Deportivas",
    description: "Ayúdanos a conocer tus preferencias deportivas para mejorar la oferta de actividades en nuestra comuna.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform",
    image: deporteImg,
  },
  {
    title: "Encuesta sobre Riesgos Climáticos",
    description: "Esta encuesta busca recopilar información sobre los cambios climáticos percibidos por la comunidad, sus impactos y medidas de adaptación.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform",
    image: climaImg,
  },
];

const EncuestaCard: React.FC<EncuestaProps> = ({ title, description, url, image }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image is not available
            e.currentTarget.src = "https://via.placeholder.com/400x200?text=Encuesta";
          }}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-heading text-slate-800">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-full group">
          <Button className="w-full bg-blue-600 group-hover:bg-blue-800 transition-all duration-300 transform group-hover:translate-y-[-2px]">
            Responder encuesta
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const EncuestasCiudadanasPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 font-display">Encuestas Ciudadanas</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
            Tu opinión es importante para mejorar nuestra gestión y servicios. Participa en nuestras encuestas y ayúdanos a construir una mejor comuna para todos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {encuestas.map((encuesta, index) => (
            <EncuestaCard key={index} {...encuesta} />
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-slate-800 font-heading">¿Tienes sugerencias para futuras encuestas?</h2>
          <p className="text-gray-600 mb-4 font-sans">
            Si tienes ideas sobre temas que te gustaría que abordemos en nuestras próximas encuestas, puedes escribirnos a través de nuestro formulario de contacto o directamente a nuestro correo electrónico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contacto" className="group">
              <Button variant="outline" className="w-full sm:w-auto group-hover:bg-slate-100 transition-all duration-200">
                Formulario de contacto
              </Button>
            </a>
            <a href="mailto:participacion@municholchol.cl" className="group">
              <Button variant="ghost" className="w-full sm:w-auto group-hover:bg-slate-100 transition-all duration-200">
                Enviar correo electrónico
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EncuestasCiudadanasPage; 