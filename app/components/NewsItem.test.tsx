// app/components/NewsItem.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NewsItem } from './NewsItem';

const props = {
  id: 1,
  image: 'https://foo.com/img.jpg',
  source: 'SourceX',
  datetime: 1600000000,
  headline: 'Hello World',
  url: 'https://example.com',
};

test('renders NewsItem with image and text', () => {
  render(<NewsItem {...props} />);
  expect(screen.getByRole('link')).toHaveAttribute('href', props.url);
  expect(screen.getByAltText(/hello world/i)).toBeInTheDocument();
  expect(screen.getByText(/sourcex/i)).toBeInTheDocument();
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});

test('renders placeholder when no image', () => {
  render(<NewsItem {...props} image={null} />);
  expect(screen.queryByAltText(/hello world/i)).toBeNull();
  expect(screen.getByText(/no image/i)).toBeInTheDocument();
});
