import { mockNewsArticles } from '@/data/mockNews';
import type { NewsArticle } from '@/types';
import { fetchWithErrorHandling } from './api';

class NewsService {
  /**
   * Gets all news articles
   * @param limit Optional limit of news to return
   */
  async getAll(limit?: number): Promise<NewsArticle[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // If a limit is specified, return only that number of news
    if (limit) {
      return mockNewsArticles.slice(0, limit);
    }
    
    return mockNewsArticles;
  }

  /**
   * Gets a specific news article by its ID
   * @param id ID of the news article to find
   */
  async getById(id: string | number): Promise<NewsArticle> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Find the article by ID
    const article = mockNewsArticles.find(
      article => article.id.toString() === id.toString()
    );
    
    // If not found, throw error to simulate 404 response
    if (!article) {
      throw new Error('Article not found');
    }
    
    return article;
  }

  /**
   * Gets news by category
   * @param category News category to search for
   */
  async getByCategory(category: string): Promise<NewsArticle[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 700));
    
    return mockNewsArticles.filter(
      article => article.category?.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * Searches for news containing a specific term
   * @param term Search term
   */
  async search(term: string): Promise<NewsArticle[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 900));
    
    const searchTermLower = term.toLowerCase();
    
    return mockNewsArticles.filter(article => 
      article.title.toLowerCase().includes(searchTermLower) || 
      article.summary.toLowerCase().includes(searchTermLower) ||
      (article.content && article.content.toLowerCase().includes(searchTermLower))
    );
  }
}

// Export a single instance of the service (singleton pattern)
export const newsService = new NewsService();

// Helpers to use with error handling
export const getNews = (limit?: number) => 
  fetchWithErrorHandling(() => newsService.getAll(limit));

export const getNewsArticle = (id: string | number) => 
  fetchWithErrorHandling(() => newsService.getById(id));

export const getNewsByCategory = (category: string) => 
  fetchWithErrorHandling(() => newsService.getByCategory(category));

export const searchNews = (term: string) => 
  fetchWithErrorHandling(() => newsService.search(term)); 