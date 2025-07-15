// components/LoadingState.tsx
export function LoadingState() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffffff]"></div>
    </div>
  );
}
