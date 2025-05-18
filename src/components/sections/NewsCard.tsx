import React from 'react';
import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight, Clock } from 'lucide-react';
import type { NewsArticle } from '@/types';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
      {article.imageUrl && (
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <img
              src={article.imageUrl}
              alt={`Imagen de la noticia: ${article.title}`}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      )}
      <CardHeader className="pb-2 pt-4">
        {article.category && (
            <Badge variant="outline" className="mb-2 w-fit">{article.category}</Badge>
        )}
        <CardTitle className="text-xl line-clamp-2 leading-tight h-[3rem] text-left">{article.title}</CardTitle>
        <div className="flex items-center justify-between text-sm text-muted-foreground pt-1">
          <div className="flex items-center">
            <CalendarDays className="mr-2 h-4 w-4" />
            {article.date}
          </div>
          {article.readTime && (
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <p className="text-sm text-muted-foreground line-clamp-3 h-[4.5rem] text-left">
          {article.summary}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        <Button asChild variant="link" className="p-0 h-auto text-sky-600 hover:text-sky-700">
          <Link to={article.link}>
            Read more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        {article.author && (
          <span className="text-xs text-muted-foreground">
            Por: {article.author}
          </span>
        )}
      </CardFooter>
    </Card>
  );
};

export default NewsCard;