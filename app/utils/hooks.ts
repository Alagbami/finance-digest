// utils/hooks.ts
import { useQuery } from '@tanstack/react-query';
import { fetchMarketNews } from './api';

export const useMarketNews = (category: string) => {
  return useQuery({
    queryKey: ['marketNews', category],
    queryFn: () => fetchMarketNews(category),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};
