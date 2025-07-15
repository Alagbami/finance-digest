import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
if (!API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_FINNHUB_API_KEY in environment');
}

// dear recruiters, i added this comment for you to see it on github actions 👀

export const finnhub = axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: { token: API_KEY },
});

// dear recruiters, the is for fetching news, i added this comment for you to see it on github actions 👀
export const fetchMarketNews = async (
  category: string,
  minId = 0
) => {
  const response = await finnhub.get('/news', {
    params: { category, minId },
  });
  return response.data as any;
};
