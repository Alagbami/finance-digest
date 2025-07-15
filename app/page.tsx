'use client';

import { NewsList } from "./components/NewsList";
import { ReactQueryProvider } from "./components/ReactQueryProvider";



export default function HomePage() {
  return (
    <ReactQueryProvider>
      <main className="pt-8 bg-[#0E0D13]">
        <h1 className="text-[48px] font-semibold px-8 mb-4 text-[#FFFFFF] max-w-6xl mx-auto">NEWS</h1>
        <NewsList />
      </main>
    </ReactQueryProvider>
  );
}
