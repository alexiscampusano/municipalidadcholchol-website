/**
 * Generic function to handle errors in API calls
 * Wraps a promise and returns an object with data and error
 */
export const fetchWithErrorHandling = async <T>(
  apiCall: () => Promise<T>
): Promise<{ data: T | null; error: string | null }> => {
  try {
    const data = await apiCall();
    return { data, error: null };
  } catch (error) {
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};