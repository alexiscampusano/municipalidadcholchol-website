import { useState, useEffect } from 'react';
import { getNews, getNewsArticle } from '@/services';
import type { NewsArticle, ApiResponse } from '@/types';

// Hook to get all news articles
export const useNews = (limit?: number): ApiResponse<NewsArticle[]> => {
  const [state, setState] = useState<ApiResponse<NewsArticle[]>>({
    data: [],
    status: 0,
    message: '',
    loading: true,
  });

  useEffect(() => {
    const fetchNews = async () => {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data, error } = await getNews(limit);
      
      if (error) {
        setState({
          data: [],
          status: 500,
          message: 'Error loading news',
          loading: false,
          error,
        });
      } else {
        setState({
          data: data || [],
          status: 200,
          message: 'News loaded successfully',
          loading: false,
        });
      }
    };

    fetchNews();
  }, [limit]);

  return state;
};

// Hook to get a specific news article by ID
export const useNewsArticle = (id: string | number): ApiResponse<NewsArticle | null> => {
  const [state, setState] = useState<ApiResponse<NewsArticle | null>>({
    data: null,
    status: 0,
    message: '',
    loading: true,
  });

  useEffect(() => {
    const fetchArticle = async () => {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data, error } = await getNewsArticle(id);
      
      if (error) {
        // If it's a "not found" error
        if (error.includes('no encontrado')) {
          setState({
            data: null,
            status: 404,
            message: 'Article not found',
            loading: false,
            error,
          });
        } else {
          setState({
            data: null,
            status: 500,
            message: 'Error loading article',
            loading: false,
            error,
          });
        }
      } else {
        setState({
          data,
          status: 200,
          message: 'Article loaded successfully',
          loading: false,
        });
      }
    };

    fetchArticle();
  }, [id]);

  return state;
}; 