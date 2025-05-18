import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import logoMunicipalidad from '@/assets/images/logo/municipalidad-logo.png';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileMenuButton from './MobileMenuButton';

// Interface for submenu items
interface MenuItem {
  title: string;
  href: string;
  isExternal?: boolean;
  submenu?: {
    title: string;
    href: string;
    isExternal?: boolean;
  }[];
}

// Menu items with simplified submenus
const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Municipio",
    href: "/municipio",
    submenu: [
      { title: "Información Municipal", href: "/municipio" },
      { title: "Noticias", href: "/noticias" }
    ]
  },
  {
    title: "Unidades Municipales",
    href: "/unidades-municipales",
    submenu: [
      { title: "Servicios", href: "/servicios" },
      { title: "Permisos de Circulación", href: "https://portalweb.insico.cl/Cholchol/Permisos/", isExternal: true }
    ]
  },
  {
    title: "Encuestas",
    href: "/encuestas-ciudadanas",
    submenu: [
      { title: "Encuesta Deportiva", href: "https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform", isExternal: true },
      { title: "Encuesta Riesgos Climáticos", href: "https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform", isExternal: true },
      { title: "Ver todas", href: "/encuestas-ciudadanas" },
    ]
  },
  {
    title: "Contactos",
    href: "/contacto",
  },
];

// Quick links for header with official external URLs
const quickLinks: { title: string; href: string; isExternal?: boolean }[] = [
  {
    title: "SOLICITAR INFORMACIÓN",
    href: "https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498",
    isExternal: true
  },
  {
    title: "TRANSPARENCIA ACTIVA",
    href: "https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045",
    isExternal: true
  },
  {
    title: "PLATAFORMA LEY LOBBY",
    href: "https://www.leylobby.gob.cl/instituciones/MU045",
    isExternal: true
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuHover = (menuTitle: string) => {
    setHoveredMenu(menuTitle);
    setIsSubmenuOpen(true);
  };

  const handleMenuLeave = () => {
    // Keep menu open to allow users to move cursor to submenu
    setTimeout(() => {
      if (!isSubmenuOpen) {
        setHoveredMenu(null);
      }
    }, 100);
  };
  
  return (
    <header className="bg-white text-slate-800 shadow-md sticky top-0 z-50 w-full">
      {/* Quick links */}
      <div className="bg-sky-700 text-white py-1.5 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-end items-center">
          <div className="flex space-x-4 text-xs font-medium">
            {quickLinks.map((link) => (
              link.isExternal ? (
                <a 
                  key={link.title} 
                  href={link.href}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ) : (
                <Link 
                  key={link.title} 
                  to={link.href}
                  className="hover:underline"
                >
                  {link.title}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* Municipality logo */}
          <div className="h-14 w-14 mr-3">
            <img 
              src={logoMunicipalidad} 
              alt="Logo Municipalidad de Cholchol" 
              className="h-full w-full object-contain"
              onError={(e) => {
                // Fallback to local image if unavailable
                e.currentTarget.src = logoMunicipalidad;
              }}
            />
          </div>
          <span className="text-xl font-bold text-slate-800 hover:text-sky-700 transition-colors duration-200 font-display">
            <span className="hidden sm:inline">Municipalidad de</span> Cholchol
          </span>
        </Link>

        {/* Desktop menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="font-heading">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => handleMenuHover(item.title)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <Link 
                      to={item.href} 
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-white text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition-colors duration-200",
                        location.pathname === item.href ? "text-sky-700 font-medium" : "",
                        "flex items-center gap-1"
                      )}
                    >
                      {item.title}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="h-4 w-4"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </Link>

                    {/* Dropdown menu with improved behavior */}
                    {hoveredMenu === item.title && (
                      <div 
                        className="absolute left-0 mt-1 py-2 bg-white rounded-md shadow-lg min-w-48 z-20 border border-gray-100"
                        onMouseEnter={() => setIsSubmenuOpen(true)}
                        onMouseLeave={() => {
                          setIsSubmenuOpen(false);
                          setHoveredMenu(null);
                        }}
                      >
                        {item.submenu.map((subItem, idx) => (
                          subItem.isExternal ? (
                            <a 
                              key={idx} 
                              href={subItem.href} 
                              className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-sky-700"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {subItem.title}
                            </a>
                          ) : (
                            <Link 
                              key={idx} 
                              to={subItem.href} 
                              className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-sky-700"
                            >
                              {subItem.title}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  item.isExternal ? (
                    <a 
                      href={item.href} 
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-white text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition-colors duration-200"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link 
                      to={item.href} 
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-white text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition-colors duration-200",
                        location.pathname === item.href ? "text-sky-700 font-medium" : ""
                      )}
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white py-2 px-4 shadow-inner">
            <ul className="space-y-2 font-heading">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.submenu ? (
                    <div>
                      <Link 
                        to={item.href} 
                        className={cn(
                          "block py-2 px-4 rounded-md text-slate-700 hover:bg-slate-50 hover:text-sky-700 transition-colors flex items-center justify-between",
                          location.pathname === item.href ? "bg-slate-50 text-sky-700 font-medium" : ""
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="h-4 w-4"
                        >
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </Link>
                      <div className="pl-4 mt-1 border-l-2 border-gray-100 ml-4">
                        {item.submenu.map((subItem, idx) => (
                          subItem.isExternal ? (
                            <a 
                              key={idx} 
                              href={subItem.href} 
                              className="block py-2 px-4 text-sm text-slate-700 hover:bg-slate-50 hover:text-sky-700 rounded-md"
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.title}
                            </a>
                          ) : (
                            <Link 
                              key={idx} 
                              to={subItem.href} 
                              className="block py-2 px-4 text-sm text-slate-700 hover:bg-slate-50 hover:text-sky-700 rounded-md"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  ) : (
                    item.isExternal ? (
                      <a 
                        href={item.href} 
                        className="block py-2 px-4 rounded-md text-slate-700 hover:bg-slate-50 hover:text-sky-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link 
                        to={item.href} 
                        className={cn(
                          "block py-2 px-4 rounded-md text-slate-700 hover:bg-slate-50 hover:text-sky-700 transition-colors",
                          location.pathname === item.href ? "bg-slate-50 text-sky-700 font-medium" : ""
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                </li>
              ))}
              {/* Quick links in mobile menu */}
              <li className="pt-2 border-t border-gray-200 mt-2">
                <p className="px-4 text-xs text-gray-500 uppercase">Enlaces rápidos</p>
                {quickLinks.map((link) => (
                  link.isExternal ? (
                    <a 
                      key={link.title} 
                      href={link.href} 
                      className="block py-2 px-4 rounded-md text-slate-700 hover:bg-slate-50 hover:text-sky-700 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link 
                      key={link.title} 
                      to={link.href} 
                      className="block py-2 px-4 rounded-md text-slate-700 hover:bg-slate-50 hover:text-sky-700 transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )
                ))}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;