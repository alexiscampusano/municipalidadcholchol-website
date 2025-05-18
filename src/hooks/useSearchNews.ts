import { useState, useEffect } from 'react';
import { searchNews } from '@/services';
import type { NewsArticle, ApiResponse } from '@/types';

/**
 * Hook to search for news with a specific term
 * @param searchTerm Search term
 */
export const useSearchNews = (searchTerm: string): ApiResponse<NewsArticle[]> => {
  const [state, setState] = useState<ApiResponse<NewsArticle[]>>({
    data: [],
    status: 0,
    message: '',
    loading: false, // Initially not loading
  });

  useEffect(() => {
    // Don't search if term is too short
    if (searchTerm.length < 3) {
      setState({
        data: [],
        status: 400,
        message: 'Search term must be at least 3 characters',
        loading: false,
      });
      return;
    }

    const fetchResults = async () => {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data, error } = await searchNews(searchTerm);
      
      if (error) {
        setState({
          data: [],
          status: 500,
          message: 'Error while searching',
          loading: false,
          error,
        });
      } else {
        setState({
          data: data || [],
          status: 200,
          message: `Found ${data?.length || 0} results`,
          loading: false,
        });
      }
    };

    // Use a small delay to avoid too many searches while typing
    const timeoutId = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return state;
}; 