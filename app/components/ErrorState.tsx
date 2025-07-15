// components/ErrorState.tsx
type Props = { onRetry: () => void };
export function ErrorState({ onRetry }: Props) {
  return (
    <div className="flex flex-col max-w-6xl mx-auto  h-[calc(100vh-64px)] space-y-4">
      <p className="font-bold px-6 md:px-6 mb-6 text-[#FFFFFF] max-w-6xl">Something went wrong. Please try again later.</p>
      <button
        onClick={onRetry}
        className="px-8 ml-8 py-2 bg-[#ffffff] text-[#0E0D13] rounded hover:bg-[#ffffff]/80 hover:text-[#0E0D13] w-[140px]"
      >
        Retry
      </button>
    </div>
  );
}
