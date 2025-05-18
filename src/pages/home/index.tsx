import React from 'react';
import Layout from '@/components/layout/Layout';
import { HeroSection, NewsSection, ServicesSection, SurveyBanner } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { FadeInSection } from '@/components/shared';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Calendar, Sun, Cloud, CloudRain, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      
      <FadeInSection direction="up" delay={100}>
        <section className="py-16 bg-white w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 font-heading">Trámites Rápidos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { 
                  icon: <FileText className="h-10 w-10" />, 
                  title: "Certificado de Residencia", 
                  description: "Obtén tu certificado de residencia en línea", 
                  color: "bg-blue-50 text-blue-600",
                  link: "/servicios/certificado-residencia"
                },
                { 
                  icon: <FileText className="h-10 w-10" />, 
                  title: "Permiso de Circulación", 
                  description: "Renueva tu permiso de circulación", 
                  color: "bg-green-50 text-green-600",
                  link: "https://portalweb.insico.cl/Cholchol/Permisos/",
                  isExternal: true
                },
                { 
                  icon: <FileText className="h-10 w-10" />, 
                  title: "Licencia de Conducir", 
                  description: "Agenda tu hora para licencia de conducir", 
                  color: "bg-purple-50 text-purple-600",
                  link: "/servicios/licencia-conducir"
                },
                { 
                  icon: <FileText className="h-10 w-10" />, 
                  title: "Patente Comercial", 
                  description: "Solicita o renueva tu patente comercial", 
                  color: "bg-amber-50 text-amber-600",
                  link: "/servicios/patente-comercial"
                }
              ].map((tramite, index) => (
                <FadeInSection key={index} delay={150 * index} direction="up">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none shadow-md">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className={`${tramite.color} p-4 rounded-full mb-4`}>
                        {tramite.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 font-heading">{tramite.title}</h3>
                      <p className="text-slate-600 mb-4 font-sans">{tramite.description}</p>
                      {tramite.isExternal ? (
                        <a href={tramite.link} target="_blank" rel="noopener noreferrer" className="mt-auto w-full group">
                          <Button variant="outline" className="w-full group-hover:bg-slate-100 transition-all duration-300">
                            Iniciar Trámite
                          </Button>
                        </a>
                      ) : (
                        <Link to={tramite.link} className="mt-auto w-full group">
                          <Button variant="outline" className="w-full group-hover:bg-slate-100 transition-all duration-300">
                            Iniciar Trámite
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
      
      <FadeInSection direction="up">
        <SurveyBanner />
      </FadeInSection>
      
      <FadeInSection>
        <section className="py-16 bg-slate-50 w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <NewsSection maxArticles={3} />
            </div>
          </div>
        </section>
      </FadeInSection>
      
      <FadeInSection delay={200}>
        <section className="py-16 bg-white w-full">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <ServicesSection showAllServicesLink={true} />
            </div>
          </div>
        </section>
      </FadeInSection>
      
      <section className="py-16 bg-slate-50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <FadeInSection direction="up" delay={100}>
                <Card className="shadow-md border-none overflow-hidden h-full">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-5">
                    <h2 className="text-xl font-bold text-white">Clima en Cholchol</h2>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center">
                      <div className="mr-6">
                        <Sun className="h-12 w-12 text-amber-500" />
                      </div>
                      <div>
                        <div className="flex items-end">
                          <span className="text-3xl font-bold">22°C</span>
                          <span className="text-slate-500 ml-1">/ 14°C</span>
                        </div>
                        <p className="text-slate-600">Parcialmente nublado</p>
                        <p className="text-xs text-slate-500 mt-1">Actualizado: Hoy 12:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        { day: "Mañana", icon: <Cloud className="h-6 w-6 text-slate-400" />, temp: "19°C" },
                        { day: "Miércoles", icon: <Sun className="h-6 w-6 text-amber-500" />, temp: "24°C" },
                        { day: "Jueves", icon: <CloudRain className="h-6 w-6 text-blue-500" />, temp: "16°C" },
                      ].map((day, index) => (
                        <div key={index} className="text-center p-2 bg-slate-50 rounded-lg">
                          <p className="text-xs font-medium">{day.day}</p>
                          <div className="my-1 flex justify-center">{day.icon}</div>
                          <p className="text-sm font-semibold">{day.temp}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
              
              <div className="lg:col-span-2">
                <FadeInSection direction="up" delay={150}>
                  <Card className="h-full border-none shadow-md">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-5">
                      <h2 className="text-xl font-bold text-white">Agenda de Actividades</h2>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer">Todos</Badge>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer">Municipales</Badge>
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 cursor-pointer">Culturales</Badge>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer">Deportivos</Badge>
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer">Educativos</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { 
                            date: { day: "15", month: "NOV" }, 
                            title: "Reunión de Consejo Municipal", 
                            location: "Salón Municipal",
                            time: "10:00 AM",
                            category: "Municipal",
                            color: "bg-blue-100 text-blue-700"
                          },
                          { 
                            date: { day: "22", month: "NOV" }, 
                            title: "Feria Artesanal", 
                            location: "Plaza Central",
                            time: "9:00 AM - 18:00 PM",
                            category: "Cultural",
                            color: "bg-amber-100 text-amber-700"
                          },
                        ].map((evento, index) => (
                          <div key={index} className="flex">
                            <div className={`${evento.color} rounded-lg min-w-16 h-16 flex flex-col items-center justify-center mr-4`}>
                              <span className="text-sm font-medium">{evento.date.month}</span>
                              <span className="text-xl font-bold">{evento.date.day}</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-800">{evento.title}</h3>
                              <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                                <Calendar className="h-3 w-3" /> {evento.time}
                              </p>
                              <p className="text-sm text-slate-500 mt-1">📍 {evento.location}</p>
                              <Badge className={`${evento.color} mt-2`}>{evento.category}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <h3 className="text-lg font-semibold mb-4">Próximo evento destacado</h3>
                        <div className="flex">
                          <div className="bg-green-100 text-green-800 rounded-lg min-w-16 h-16 flex flex-col items-center justify-center mr-4">
                            <span className="text-sm font-medium">NOV</span>
                            <span className="text-xl font-bold">25</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800">Campeonato Deportivo Comunal</h3>
                            <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                              <Calendar className="h-3 w-3" /> 14:00 PM
                            </p>
                            <p className="text-sm text-slate-500 mt-1">📍 Gimnasio Municipal</p>
                            <Badge className="bg-green-100 text-green-700 mt-2">Deportivo</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-right">
                        <Link to="/eventos" className="text-blue-600 text-sm font-medium hover:underline">
                          Ver todos los eventos →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FadeInSection direction="up" delay={300} threshold={0.2}>
        <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 relative overflow-hidden w-full">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-0 right-0 bg-white rounded-full w-64 h-64 -mt-20 -mr-20"></div>
            <div className="absolute bottom-0 left-0 bg-white rounded-full w-80 h-80 -mb-40 -ml-40"></div>
          </div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">
                ¿Necesitas contactarnos?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-sans">
                Estamos aquí para atender tus inquietudes. Completa nuestro formulario de contacto y un representante municipal te responderá a la brevedad.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto" className="group" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-white text-blue-700 group-hover:text-blue-800 group-hover:bg-white/90 text-lg px-8 py-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:translate-y-[-2px]">
                    Contactar ahora
                  </Button>
                </Link>
                <Link to="/servicios" className="group" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline" className="border-white text-white group-hover:bg-white/20 text-lg px-8 py-6 transition-all duration-300 transform group-hover:translate-y-[-2px] bg-white/10">
                    Ver servicios
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-white/90 max-w-xl mx-auto text-sm font-sans">
                <div className="flex items-center">
                  <div className="mr-2 bg-white/20 p-2 rounded-full">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>452 734200</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 bg-white/20 p-2 rounded-full">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>oficinadepartes@municholchol.cl</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 bg-white/20 p-2 rounded-full">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Lunes a Viernes: 8:30 - 14:00</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 bg-white/20 p-2 rounded-full">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>José Joaquín Pérez 449, Cholchol</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </Layout>
  );
};

export default HomePage; 