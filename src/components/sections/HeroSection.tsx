import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { SectionTitle } from '@/components/shared';
import { cn } from '@/lib/utils';

// Direct imports of banner images
import banner1 from '@/assets/images/banners/PLAZAYFRONTISMUNICIPALIDAD1.jpg';
import banner2 from '@/assets/images/banners/RIQUEZANATURAL.jpg';
import banner3 from '@/assets/images/banners/RUKAANCESTRAL.jpg';

// Interface for component props
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

// Carousel slides data
const carouselSlides = [
  {
    id: 1,
    imageUrl: banner1,
    alt: "Plaza de Cholchol",
    caption: "Plaza principal de nuestra hermosa comuna"
  },
  {
    id: 2,
    imageUrl: banner2,
    alt: "Paisaje natural de Cholchol",
    caption: "Riqueza natural que nos rodea"
  },
  {
    id: 3,
    imageUrl: banner3,
    alt: "Actividades culturales y patrimonio",
    caption: "Preservando nuestra cultura ancestral"
  }
];

// Stats data
const stats = [
  { id: 1, value: "12.000+", label: "Habitantes" },
  { id: 2, value: "120", label: "Km²" },
  { id: 3, value: "1898", label: "Año fundación" },
  { id: 4, value: "15+", label: "Servicios" }
];

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Bienvenido a la Ilustre Municipalidad de Cholchol",
  subtitle = "Trabajando juntos por el progreso y bienestar de nuestra comuna.",
  ctaText = "Descubre Más",
  ctaLink = "/servicios",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <section className="relative text-white overflow-hidden w-full">
      {/* Background carousel */}
      <div className="absolute inset-0 w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img 
              src={slide.imageUrl} 
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-sky-900/70"></div>
          </div>
        ))}

        {/* Carousel controls */}
        <div className="absolute bottom-5 right-5 flex space-x-2 z-20">
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-white/20 hover:bg-white/40 text-white rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-white/20 hover:bg-white/40 text-white rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-5 left-0 right-0 z-20">
          <div className="flex justify-center space-x-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors duration-200",
                  index === currentSlide ? "bg-white" : "bg-white/50"
                )}
                onClick={() => setCurrentSlide(index)}
                aria-label={`View slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              {subtitle}
            </p>
            
            {ctaText && ctaLink && (
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to={ctaLink}>
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold text-lg px-8 py-4 transition-colors duration-200 w-full sm:w-auto"
                  >
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/la-comuna">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 font-semibold text-lg px-8 py-4 transition-colors duration-200 w-full sm:w-auto bg-white/10"
                  >
                    Conoce Cholchol
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-center">Cholchol en números</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(stat => (
                <div key={stat.id} className="text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                  <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Current image caption */}
        <div className="absolute bottom-10 left-4 md:left-6 max-w-xs bg-black/40 backdrop-blur-sm p-2 rounded z-10">
          <p className="text-sm text-white/90">{carouselSlides[currentSlide].caption}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;