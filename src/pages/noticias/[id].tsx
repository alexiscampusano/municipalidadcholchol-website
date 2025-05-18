import React from 'react';
import { useParams, Link } from 'react-router';
import Layout from '@/components/layout/Layout';
import { useNewsArticle } from '@/hooks';
import { PageTitle } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: article, loading, error } = useNewsArticle(id || '');

  // Component to display skeleton during loading
  const ArticleSkeleton = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Skeleton className="h-60 w-full" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );

  if (error) {
    return (
      <Layout>
        <div className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-red-500 mb-4">
                News article not found
              </h2>
              <p className="mb-6">
                Sorry, the news article you are looking for does not exist or is not available.
              </p>
              <Button asChild>
                <Link to="/noticias" className="inline-flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link 
            to="/noticias" 
            className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>

          {loading ? (
            <ArticleSkeleton />
          ) : article && (
            <article>
              {article.category && (
                <Badge className="mb-4" variant="outline">{article.category}</Badge>
              )}
              
              <PageTitle 
                title={article.title}
                align="left"
                className="mb-2"
              />
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8">
                <div className="flex items-center">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  {article.date}
                </div>
                
                {article.readTime && (
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {article.readTime}
                  </div>
                )}
                
                {article.author && (
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    {article.author}
                  </div>
                )}
              </div>
              
              {article.imageUrl && (
                <div className="mb-8">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-auto max-h-96 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div 
                className="prose max-w-none text-left"
                dangerouslySetInnerHTML={{ __html: article.content || article.summary }}
              />
            </article>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetailPage; 