
import './globals.css';
import { ReactQueryProvider } from '../app/components/ReactQueryProvider';
import Image from 'next/image';
import Blott from '@/app/assest/BLOTT.svg'
import Link from 'next/link';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0E0D13]">
        {/* HEADER */}
        <header className="bg-[#0E0D13] shadow-md py-4 sm:border-2  sm:border-[#272735] lg:border-none">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
            <Link href="/"><Image src={Blott} alt="Maon Logo" className="h-10" /></Link>
          </div>
        </header>

          {children}

        {/* FOOTER
        <footer className="bg-white border-t mt-12 py-4">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Maon Technology Ltd. All rights reserved.
          </div>
        </footer> */}
      </body>
    </html>
  );
}
