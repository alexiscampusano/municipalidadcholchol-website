import React from 'react';
import NewsCard from './NewsCard';
import { useNews } from '@/hooks';
import { SectionTitle } from '@/components/shared';
import { Skeleton } from '@/components/ui/skeleton';

interface NewsSectionProps {
  title?: string;
  maxArticles?: number; // Optional: limit number of articles to display
}

// Loading skeleton component
const NewsCardSkeleton = () => (
  <div className="flex flex-col h-full rounded-lg shadow-md overflow-hidden">
    <Skeleton className="w-full h-48" />
    <div className="p-4 space-y-3">
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-6 w-4/5" />
      <Skeleton className="h-4 w-3/5" />
      <div className="space-y-2 pt-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  </div>
);

const NewsSection: React.FC<NewsSectionProps> = ({
  title = "Últimas Noticias",
  maxArticles,
}) => {
  const { data: articles, loading, error } = useNews(maxArticles);

  return (
    <section className="py-12 md:py-16 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle 
          title={title}
          titleSize="lg"
          align="left"
        />
        
        {loading ? (
          // Show loading skeletons
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(maxArticles || 3)].map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-sm">
                  <NewsCardSkeleton />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          // Show error message if loading fails
          <div className="text-center py-10">
            <p className="text-red-500">No se pudieron cargar las noticias.</p>
          </div>
        ) : articles.length > 0 ? (
          // Display news when available
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <div key={article.id} className="flex justify-center">
                <div className="w-full max-w-sm">
                  <NewsCard article={article} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Message when no news available
          <p className="text-muted-foreground">
            No hay noticias disponibles en este momento.
          </p>
        )}
        
        {/* Button to view all news if showing limited version */}
        {!loading && articles.length > 0 && maxArticles && articles.length >= maxArticles && (
          <div className="text-center mt-12">
            <a
              href="/noticias"
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Ver todas las Noticias
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;