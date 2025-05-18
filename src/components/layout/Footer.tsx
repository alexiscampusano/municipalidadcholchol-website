import React from 'react';
import { Link } from 'react-router';
import logoMunicipalidad from '@/assets/images/logo/municipalidad-logo.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

const informacionLinks: FooterLink[] = [
  { href: '/municipio', label: 'Municipio' },
  { href: '/unidades-municipales', label: 'Unidades Municipales' },
  { 
    href: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045', 
    label: 'Transparencia Activa',
    isExternal: true 
  },
  { 
    href: 'https://www.leylobby.gob.cl/instituciones/MU045', 
    label: 'Plataforma Ley Lobby',
    isExternal: true 
  },
  { 
    href: '/encuestas-ciudadanas', 
    label: 'Encuestas Ciudadanas' 
  },
];

const serviciosLinks: FooterLink[] = [
  { href: '#', label: 'Trámites Online' },
  { 
    href: 'https://portalweb.insico.cl/Cholchol/Permisos/', 
    label: 'Permisos de Circulación',
    isExternal: true 
  },
  { href: '#', label: 'Pagos Municipales' },
  { href: '#', label: 'Subsidios y Beneficios' },
];

const contactoLinks: FooterLink[] = [
  { href: '#', label: 'Teléfonos de Emergencia' },
  { href: '#', label: 'Directorio Municipal' },
  { href: '/contacto', label: 'Formulario de Contacto' },
  { href: '#', label: 'Mapa de Oficinas' },
  { 
    href: 'https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498', 
    label: 'Solicitar Información',
    isExternal: true 
  },
];

// Survey links
const encuestasLinks: FooterLink[] = [
  { 
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform', 
    label: 'Encuesta Deportiva',
    isExternal: true 
  },
  { 
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform', 
    label: 'Encuesta Riesgos Climáticos',
    isExternal: true 
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Renders links, either internal or external
  const renderLink = (link: FooterLink, index: number) => {
    const linkContent = (
      <>
        <svg className="w-3 h-3 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        {link.label}
      </>
    );

    return (
      <li key={index}>
        {link.isExternal ? (
          <a 
            href={link.href} 
            className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkContent}
          </a>
        ) : (
          <Link 
            to={link.href} 
            className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center"
          >
            {linkContent}
          </Link>
        )}
      </li>
    );
  };
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto w-full">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" aria-label="ir a inicio" className="text-xl font-bold text-gray-800 flex items-center font-display">
              <div className="mr-2">
                <img src={logoMunicipalidad} alt="Logo Municipalidad de Cholchol" className="h-10 w-auto" />
              </div>
              Municipalidad de Cholchol
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed font-sans text-left">
              Comprometidos con el desarrollo y bienestar de nuestra comunidad, trabajando juntos por un futuro mejor para todos los habitantes de Cholchol.
            </p>
            
            {/* Contact information */}
            <div className="mt-4 space-y-2.5 font-sans">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                <span>José Joaquín Pérez 449, Cholchol</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <span>452 734200</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <a href="mailto:oficinadepartes@municholchol.cl" className="hover:text-blue-600">
                  oficinadepartes@municholchol.cl
                </a>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                <span>Lunes a Viernes: 8:30 - 14:00</span>
              </div>
            </div>
            
            {/* Social media */}
            <div className="mt-6 flex gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-sky-100 hover:bg-sky-200 text-sky-600 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"
                  />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73z"
                  />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Information links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2 font-heading">Information</h3>
            <ul className="space-y-2.5 font-sans">
              {informacionLinks.map((link, index) => renderLink(link, index))}
            </ul>

            {/* Survey section */}
            <h3 className="text-lg font-semibold mt-6 mb-4 text-gray-800 border-b border-gray-200 pb-2 font-heading">Surveys</h3>
            <ul className="space-y-2.5 font-sans">
              {encuestasLinks.map((link, index) => renderLink(link, index))}
            </ul>
          </div>
          
          {/* Service links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2 font-heading">Services</h3>
            <ul className="space-y-2.5 font-sans">
              {serviciosLinks.map((link, index) => renderLink(link, index))}
            </ul>
          </div>
          
          {/* Subscription to newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2 font-heading">Contact</h3>
            <ul className="space-y-2.5 font-sans">
              {contactoLinks.map((link, index) => renderLink(link, index))}
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4 text-gray-800 border-b border-gray-200 pb-2 font-heading">Subscribe to newsletter</h3>
            <p className="text-gray-600 text-sm mb-4 font-sans">
              Receive the latest news, events, and updates directly in your email.
            </p>
            <form className="mt-3">
              <div className="flex">
                <Input 
                  className="w-full rounded-r-none border-gray-300" 
                  placeholder="Your email" 
                  type="email" 
                  required 
                />
                <Button type="submit" className="rounded-l-none bg-blue-600 hover:bg-blue-800 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-100 py-6 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-gray-600 text-sm font-sans">&copy; {currentYear} Ilustre Municipalidad de Cholchol. Todos los derechos reservados.</span>
            <div className="flex space-x-6 font-sans">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;