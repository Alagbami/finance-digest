// components/NewsItem.tsx
'use client';

import { format } from 'date-fns';
import Image from 'next/image';

type Props = {
  id: number;
  image: string | null;
  source: string;
  datetime: number;
  headline: string;
  url: string;
};

export function NewsItem({ image, source, datetime, headline, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex flex-row
        md:flex-col
        bg-[#0E0D13]
        rounded-xl
        shadow-md
        p-3
        md:p-4
        space-x-3
        md:space-x-0
        hover:bg-[#2A283E]
        hover:shadow-lg
        hover:-translate-y-1
        transition-transform
      "
    >
      {/* Thumbnail or placeholder */}
      <div
        className={`
          flex-shrink-0
          w-[105px] min-h-fit
          md:w-full md:h-[179px]
          rounded-md
          overflow-hidden
          bg-gray-800
        `}
      >
        {image ? (
          <img
            src={image}
            alt={headline}
            className="w-full h-full object-fill"
          />
        ) : (
          // dear recruiters, i added simple placeholder for no image
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-600 text-sm px-4">Hi Recruiter, No Image from Api</span>
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-between flex-1 pt-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[#FFFFFFB2] uppercase">
            {source}
          </span>
          <span className="text-xs text-[#FFFFFFB2]">
            {format(new Date(datetime * 1000), 'd MMM yyyy')}
          </span>
        </div>
        <h3 className="text-[20px] font-[500] text-[#FFFFFF] leading-snug">
          {headline}
        </h3>
      </div>
    </a>
  );
}
