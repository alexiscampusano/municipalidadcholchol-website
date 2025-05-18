import React from 'react';
import { Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router';

const TopBar: React.FC = () => {
  return (
    <div className="bg-sky-700 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile version */}
        <div className="sm:hidden flex justify-between items-center">
          <div className="flex items-center">
            <Phone className="h-3 w-3 mr-1" />
            <span className="text-xs">+56 45 2656278</span>
          </div>
          <div className="flex space-x-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-3 w-3" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-3 w-3" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Tablet and desktop version */}
        <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center">
          {/* Contact information */}
          <div className="flex items-center space-x-6 text-sm mb-2 sm:mb-0">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+56 45 2656278</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:contacto@municholchol.cl" className="hover:underline">
                contacto@municholchol.cl
              </a>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Lun-Vie: 8:30 - 14:00</span>
            </div>
          </div>

          {/* Social media and quick links */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <div className="border-l border-sky-500 h-5 mx-2"></div>
            <div className="flex space-x-4 text-xs">
              <Link to="/transparencia" className="hover:underline">
                Transparencia
              </Link>
              <Link to="/intranet" className="hover:underline">
                Intranet
              </Link>
              <Link to="/tramites-en-linea" className="hover:underline">
                Trámites en línea
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 