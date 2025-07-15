// app/utils/hooks.test.tsx
import '@testing-library/jest-dom';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock the API helper before importing the hook
jest.mock('./api', () => ({
  fetchMarketNews: jest.fn().mockResolvedValue([
    {
      id: 1,
      image: 'https://foo.com/img.jpg',
      source: 'TestSource',
      datetime: 1600000000,
      headline: 'Test Headline',
      url: 'https://example.com',
    },
  ]),
}));

import { useMarketNews } from './hooks';

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test('useMarketNews fetches and returns data', async () => {
  const { result } = renderHook(() => useMarketNews('general'), {
    wrapper: createWrapper(),
  });

  // Initially loading
  expect(result.current.isLoading).toBe(true);

  // Wait for the mock data to load
  await waitFor(() => {
    expect(result.current.data).toHaveLength(1);
  });

  expect(result.current.data![0].headline).toBe('Test Headline');
});
