import { useState, useEffect } from 'react';
import { getNewsByCategory } from '@/services';
import type { NewsArticle, ApiResponse } from '@/types';

/**
 * Hook para obtener noticias filtradas por categoría
 * @param category Categoría a filtrar
 */
export const useCategoryNews = (category: string): ApiResponse<NewsArticle[]> => {
  const [state, setState] = useState<ApiResponse<NewsArticle[]>>({
    data: [],
    status: 0,
    message: '',
    loading: true,
  });

  useEffect(() => {
    const fetchNewsByCategory = async () => {
      setState(prev => ({ ...prev, loading: true }));
      
      const { data, error } = await getNewsByCategory(category);
      
      if (error) {
        setState({
          data: [],
          status: 500,
          message: `Error al cargar las noticias de la categoría: ${category}`,
          loading: false,
          error,
        });
      } else {
        setState({
          data: data || [],
          status: 200, 
          message: 'Noticias cargadas con éxito',
          loading: false,
        });
      }
    };

    if (category) {
      fetchNewsByCategory();
    } else {
      setState({
        data: [],
        status: 400,
        message: 'Se requiere una categoría válida',
        loading: false,
      });
    }
  }, [category]);

  return state;
}; 