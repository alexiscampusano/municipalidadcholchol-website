import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import NewsSection from '@/components/sections/NewsSection';
import { PageTitle, FadeInSection } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useSearchNews } from '@/hooks/useSearchNews';

// News categories
const newsCategories = [
  { id: 'all', name: 'Todas', color: 'bg-slate-100 hover:bg-slate-200 text-slate-800' },
  { id: 'municipal', name: 'Municipal', color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
  { id: 'cultura', name: 'Cultura', color: 'bg-amber-100 hover:bg-amber-200 text-amber-800' },
  { id: 'deportes', name: 'Deportes', color: 'bg-green-100 hover:bg-green-200 text-green-800' },
  { id: 'social', name: 'Social', color: 'bg-purple-100 hover:bg-purple-200 text-purple-800' },
  { id: 'educacion', name: 'Educación', color: 'bg-red-100 hover:bg-red-200 text-red-800' }
];

const NoticiasPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data: news, loading, error } = useSearchNews(searchTerm);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already triggered in useSearchNews when searchTerm changes
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <FadeInSection direction="down">
              <PageTitle 
                title="Noticias y Comunicados"
                subtitle="Mantente informado sobre las últimas novedades, eventos y anuncios importantes de la Municipalidad de Cholchol."
                align="left"
                subtitleAlign="left"
              />
            </FadeInSection>
          </div>
        </div>

        <div className="container mx-auto px-4 mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main column */}
            <div className="w-full lg:w-3/4">
              {/* Search bar */}
              <FadeInSection delay={100}>
                <Card className="mb-8 border-none shadow-md">
                  <CardContent className="p-6">
                    <form onSubmit={handleSearch} className="flex gap-2">
                      <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                        <Input 
                          type="search" 
                          placeholder="Buscar noticias..." 
                          className="pl-10 bg-slate-50 border-slate-200 focus:ring-indigo-500 focus:border-indigo-500"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <Button type="submit" variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                        Buscar
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Category filters */}
              <FadeInSection delay={200}>
                <div className="mb-8 flex flex-wrap gap-2">
                  {newsCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant="outline"
                      className={`${category.color} border-none ${activeCategory === category.id ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </FadeInSection>

              {/* Search results or category news */}
              <FadeInSection delay={300}>
                {searchTerm ? (
                  // Display search results
                  <>
                    <h2 className="text-2xl font-bold mb-6 text-left">Resultados para "{searchTerm}"</h2>
                    {loading ? (
                      <div className="flex justify-center my-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                      </div>
                    ) : error ? (
                      <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                        Error al cargar las noticias. Por favor, intenta nuevamente.
                      </div>
                    ) : news.length === 0 ? (
                      <div className="bg-slate-50 p-8 rounded-lg">
                        <p className="text-slate-600 mb-4 text-left">No se encontraron resultados para "{searchTerm}"</p>
                        <div className="flex justify-center">
                          <Button variant="outline" onClick={() => setSearchTerm('')}>
                            Ver todas las noticias
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <NewsSection title="Resultados de búsqueda" maxArticles={news.length} />
                    )}
                  </>
                ) : (
                  // Display news by category
                  <NewsSection 
                    title={activeCategory === 'all' ? "Todas las Noticias" : `Noticias de ${newsCategories.find(c => c.id === activeCategory)?.name}`}
                  />
                )}
              </FadeInSection>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <FadeInSection delay={400} direction="left">
                {/* Featured news */}
                <Card className="mb-8 border-none shadow-md overflow-hidden">
                  <div className="bg-indigo-600 px-6 py-4">
                    <h3 className="text-lg font-semibold text-white">Noticias Destacadas</h3>
                  </div>
                  <CardContent className="p-0">
                    <ul className="divide-y divide-slate-100">
                      <li className="p-4 hover:bg-slate-50 transition-colors">
                        <a href="/noticias/1" className="block">
                          <span className="block font-medium text-slate-800 mb-1 text-left">Nueva plaza inaugurada en el centro</span>
                          <span className="text-sm text-slate-500 block text-left">Hace 2 días</span>
                        </a>
                      </li>
                      <li className="p-4 hover:bg-slate-50 transition-colors">
                        <a href="/noticias/2" className="block">
                          <span className="block font-medium text-slate-800 mb-1 text-left">Programa de becas municipales</span>
                          <span className="text-sm text-slate-500 block text-left">Hace 5 días</span>
                        </a>
                      </li>
                      <li className="p-4 hover:bg-slate-50 transition-colors">
                        <a href="/noticias/3" className="block">
                          <span className="block font-medium text-slate-800 mb-1 text-left">Festival cultural de primavera</span>
                          <span className="text-sm text-slate-500 block text-left">Hace 1 semana</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Event calendar */}
                <Card className="mb-8 border-none shadow-md overflow-hidden">
                  <div className="bg-amber-600 px-6 py-4">
                    <h3 className="text-lg font-semibold text-white">Próximos Eventos</h3>
                  </div>
                  <CardContent className="p-4">
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg min-w-14 h-14 flex flex-col items-center justify-center">
                          <span className="text-sm font-medium">NOV</span>
                          <span className="text-xl font-bold">15</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">Reunión de Consejo Municipal</h4>
                          <p className="text-sm text-slate-500">10:00 AM - Salón Municipal</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="bg-amber-100 text-amber-800 rounded-lg min-w-14 h-14 flex flex-col items-center justify-center">
                          <span className="text-sm font-medium">NOV</span>
                          <span className="text-xl font-bold">22</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">Feria Artesanal</h4>
                          <p className="text-sm text-slate-500">9:00 AM - Plaza Central</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Newsletter subscription */}
                <Card className="border-none shadow-md bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-left">Suscríbete a nuestro boletín</h3>
                    <p className="text-sm text-white/80 mb-4 text-left">
                      Recibe las últimas noticias y eventos directamente en tu correo electrónico.
                    </p>
                    <div className="space-y-3">
                      <Input 
                        type="email" 
                        placeholder="Tu correo electrónico" 
                        className="bg-white/20 border-white/30 placeholder-white/60 text-white" 
                      />
                      <Button className="w-full bg-white hover:bg-white/90 text-indigo-700">
                        Suscribirse
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NoticiasPage;