'use client';

import { useMarketNews } from '../utils/hooks';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';
import { NewsItem } from './NewsItem';

export function NewsList() {
  const { data, isLoading, isError, refetch } = useMarketNews('general');

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState onRetry={() => refetch()} />;
  if (!Array.isArray(data)) {
    // Not an array? Show error
    return <ErrorState onRetry={() => refetch()} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 max-w-6xl mx-auto">
      {data.map((item: any) => (
        <NewsItem key={item.id} {...item} />
      ))}
    </div>
  );
}
