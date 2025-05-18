import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageTitle, FadeInSection, LazyMap } from '@/components/shared';
import { Card, CardContent } from '@/components/ui/card';
import { History, MapPin, UserCheck, Landmark, Image } from 'lucide-react';

// Tourism data
const turisticPlaces = [
  {
    id: 1,
    name: "Río Cholchol",
    description: "Hermoso río que atraviesa la comuna, ideal para la pesca deportiva y paseos en bote.",
    image: "https://images.unsplash.com/photo-1540942549876-1faf2f942b91?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Museo Mapuche",
    description: "Exposición permanente de artefactos y artesanías tradicionales de la cultura mapuche.",
    image: "https://images.unsplash.com/photo-1593202524723-2d72b35f60e6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Cerro Ñielol",
    description: "Mirador natural con senderos ecológicos y vistas panorámicas de la región.",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=600"
  }
];

// Authorities
const mayor = {
  name: "Juan Pérez",
  position: "Alcalde",
  period: "2021-2024",
  description: "Comprometido con el desarrollo sostenible de la comuna y el bienestar de todos sus habitantes.",
  email: "alcaldia@municholchol.cl",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
};

const councilMembers = [
  { id: 1, name: "María González", period: "2021-2024", role: "Desarrollo Social" },
  { id: 2, name: "Carlos Martínez", period: "2021-2024", role: "Medio Ambiente" },
  { id: 3, name: "Ana López", period: "2021-2024", role: "Cultura" },
  { id: 4, name: "Roberto Sánchez", period: "2021-2024", role: "Deporte" },
  { id: 5, name: "Luisa Fernández", period: "2021-2024", role: "Educación" },
  { id: 6, name: "Diego Morales", period: "2021-2024", role: "Infraestructura" }
];

const ComunaPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-green-50 to-white">
        <div className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <FadeInSection direction="down">
              <PageTitle 
                title="Cholchol"
                subtitle="Descubre la riqueza cultural, histórica y natural de nuestra hermosa comuna ubicada en la Región de La Araucanía."
              />
            </FadeInSection>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-16">
          <FadeInSection>
            <Tabs defaultValue="historia" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white shadow-md rounded-lg p-1">
                <TabsTrigger value="historia" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  <span>Historia</span>
                </TabsTrigger>
                <TabsTrigger value="turismo" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Turismo</span>
                </TabsTrigger>
                <TabsTrigger value="cultura" className="flex items-center gap-2">
                  <Landmark className="h-4 w-4" />
                  <span>Cultura</span>
                </TabsTrigger>
                <TabsTrigger value="autoridades" className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4" />
                  <span>Autoridades</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="historia" className="px-2">
                <FadeInSection direction="left">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-slate-800">Historia de Cholchol</h2>
                      <p className="text-slate-600 mb-4">
                        Cholchol es una comuna con profundas raíces mapuches. Su nombre proviene del mapudungun "chol-chol" 
                        que significa "cardal" o lugar donde abundan los cardos.
                      </p>
                      <p className="text-slate-600 mb-4">
                        Fundada oficialmente como villa en el siglo XX, la zona ha sido habitada por el pueblo mapuche 
                        desde tiempos ancestrales, siendo un importante centro cultural y espiritual.
                      </p>
                      <p className="text-slate-600">
                        En 2004, Cholchol fue elevada a la categoría de comuna independiente, separándose 
                        administrativamente de Nueva Imperial.
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1598484047962-2a708497271e?auto=format&fit=crop&q=80&w=800" 
                        alt="Imagen histórica representativa de Cholchol" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-10 bg-green-50 p-6 rounded-lg border border-green-100">
                    <h3 className="text-xl font-semibold mb-3 text-green-800">Línea de Tiempo</h3>
                    <div className="relative">
                      <div className="absolute left-0 md:left-1/2 h-full w-1 bg-green-200 transform md:translate-x-[-50%]"></div>
                      
                      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:text-right md:pr-8">
                          <div className="flex items-center md:justify-end mb-2">
                            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">1800s</span>
                          </div>
                          <h4 className="font-semibold">Asentamiento Mapuche</h4>
                          <p className="text-slate-600 text-sm">Territorio de comunidades mapuches con fuerte tradición cultural.</p>
                        </div>
                        <div className="md:pl-8 md:col-start-2">
                          <div className="hidden md:block"></div>
                        </div>
                        
                        <div className="md:text-right md:pr-8 md:col-start-1 md:row-start-2">
                          <div className="hidden md:block"></div>
                        </div>
                        <div className="md:pl-8 md:col-start-2 md:row-start-2">
                          <div className="flex items-center mb-2">
                            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">1907</span>
                          </div>
                          <h4 className="font-semibold">Fundación de Villa</h4>
                          <p className="text-slate-600 text-sm">Establecimiento oficial como villa dentro de la comuna de Nueva Imperial.</p>
                        </div>
                        
                        <div className="md:text-right md:pr-8 md:col-start-1 md:row-start-3">
                          <div className="flex items-center md:justify-end mb-2">
                            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">1981</span>
                          </div>
                          <h4 className="font-semibold">Reorganización Territorial</h4>
                          <p className="text-slate-600 text-sm">Cambios administrativos en la región durante las reformas nacionales.</p>
                        </div>
                        <div className="md:pl-8 md:col-start-2 md:row-start-3">
                          <div className="hidden md:block"></div>
                        </div>
                        
                        <div className="md:text-right md:pr-8 md:col-start-1 md:row-start-4">
                          <div className="hidden md:block"></div>
                        </div>
                        <div className="md:pl-8 md:col-start-2 md:row-start-4">
                          <div className="flex items-center mb-2">
                            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">2004</span>
                          </div>
                          <h4 className="font-semibold">Comuna Independiente</h4>
                          <p className="text-slate-600 text-sm">Cholchol se establece como comuna autónoma, separándose de Nueva Imperial.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              </TabsContent>
              
              <TabsContent value="turismo" className="px-2">
                <FadeInSection direction="up" delay={100}>
                  <h2 className="text-2xl font-bold mb-4 text-slate-800">Atractivos Turísticos</h2>
                  <p className="text-slate-600 mb-8 max-w-3xl">
                    Cholchol ofrece una variedad de atractivos turísticos que combinan naturaleza, cultura e historia, 
                    brindando una experiencia única a todos los visitantes.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {turisticPlaces.map((place, index) => (
                      <FadeInSection key={place.id} delay={150 * index} direction="up">
                        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={place.image} 
                              alt={place.name} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                            <p className="text-slate-600">{place.description}</p>
                          </CardContent>
                        </Card>
                      </FadeInSection>
                    ))}
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-bold mb-4 text-slate-800">Mapa Turístico</h3>
                    <LazyMap 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.607160059732!2d-72.85235235893017!3d-38.60203583092101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3b2af5f1e91%3A0x81f3f1bfcd08d69e!2sMunicipalidad%20de%20Cholchol!5e0!3m2!1ses!2scl!4v1626908765432!5m2!1ses!2scl" 
                      title="Mapa turístico de Cholchol"
                      height={350}
                      className="shadow-md rounded-lg"
                    />
                  </div>
                </FadeInSection>
              </TabsContent>
              
              <TabsContent value="cultura" className="px-2">
                <FadeInSection direction="right" delay={100}>
                  <h2 className="text-2xl font-bold mb-4 text-slate-800">Patrimonio Cultural</h2>
                  <p className="text-slate-600 mb-6">
                    Cholchol es reconocida por su fuerte presencia de la cultura mapuche, manteniendo vivas 
                    tradiciones ancestrales, gastronomía típica y artesanías.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="shadow-md overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1604405808320-96d7c17d2c6b?auto=format&fit=crop&q=80&w=700" 
                          alt="Celebraciones tradicionales" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Celebraciones y Tradiciones</h3>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2">•</span>
                            <span><strong>Wetripantu (Año Nuevo Mapuche)</strong> - Celebrado en junio, marca el inicio del nuevo ciclo de la naturaleza</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2">•</span>
                            <span><strong>Fiesta de la Chicha</strong> - Festival que celebra esta bebida tradicional en febrero</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2">•</span>
                            <span><strong>Festival Costumbrista</strong> - Evento anual en enero que muestra la cultura local</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2">•</span>
                            <span><strong>Nguillatún</strong> - Ceremonia religiosa mapuche de gran importancia espiritual</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-md overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1612290689623-5c1dd5bcbe6f?auto=format&fit=crop&q=80&w=700" 
                          alt="Artesanía local" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-3">Artesanía Local</h3>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2">•</span>
                            <span><strong>Tejidos en lana</strong> - Elaborados con tintes naturales y técnicas ancestrales</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2">•</span>
                            <span><strong>Cerámica tradicional</strong> - Piezas únicas con diseños tradicionales mapuche</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2">•</span>
                            <span><strong>Platería mapuche</strong> - Joyas tradicionales con gran valor cultural y artístico</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-amber-100 text-amber-600 p-1 rounded-full mr-2">•</span>
                            <span><strong>Cestería</strong> - Trabajos en fibras vegetales siguiendo técnicas ancestrales</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </FadeInSection>
              </TabsContent>
              
              <TabsContent value="autoridades" className="px-2">
                <FadeInSection direction="up" delay={100}>
                  <h2 className="text-2xl font-bold mb-6 text-slate-800">Autoridades Comunales</h2>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mb-10">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="rounded-lg overflow-hidden shadow-md h-80 md:h-full">
                          <img 
                            src={mayor.image} 
                            alt={mayor.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold mb-2">{mayor.name}</h3>
                        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                          {mayor.position}
                        </div>
                        
                        <p className="text-slate-600 mb-6">
                          {mayor.description}
                        </p>
                        
                        <div className="space-y-3 text-slate-700">
                          <div className="flex items-center">
                            <span className="font-medium w-24">Período:</span>
                            <span>{mayor.period}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium w-24">Contacto:</span>
                            <a href={`mailto:${mayor.email}`} className="text-blue-600 hover:underline">
                              {mayor.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">Concejo Municipal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {councilMembers.map((member, index) => (
                      <FadeInSection key={member.id} delay={100 * index} direction="up">
                        <Card className="hover:shadow-md transition-shadow duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-4">
                              <div className="bg-slate-200 h-16 w-16 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <Image className="h-8 w-8 text-slate-400" />
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-900">{member.name}</h4>
                                <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                                <p className="text-xs text-slate-500 mt-1">{member.period}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </FadeInSection>
                    ))}
                  </div>
                </FadeInSection>
              </TabsContent>
            </Tabs>
          </FadeInSection>
        </div>
      </div>
    </Layout>
  );
};

export default ComunaPage; 