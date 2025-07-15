// utils/api.ts
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
if (!API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_FINNHUB_API_KEY in environment');
}

export const finnhub = axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: { token: API_KEY },
});

export const fetchMarketNews = async (
  category: string,
  minId = 0
) => {
  const response = await finnhub.get('/news', {
    params: { category, minId },
  });
  return response.data as any;
};
