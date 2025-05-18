export interface NewsArticle {
  id: string | number;
  title: string;
  summary: string;
  content?: string;  // Full article content
  imageUrl?: string;
  date: string;
  category?: string;
  link: string;
  author?: string;  // Optional author
  readTime?: string; // Estimated reading time
}

// Type for simulated API responses
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  loading?: boolean;
  error?: string;
}