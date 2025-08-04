'use client';

import { SearchResult } from '@/types/search';

interface ContentCardProps {
  result: SearchResult;
}

export default function ContentCard({ result }: ContentCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors cursor-pointer group">
      <div className="relative">
        {result.artworkUrl100 ? (
          <img
            src={result.artworkUrl100}
            alt={result.trackName}
            className="w-full h-48 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className="w-full h-48 bg-gray-700 flex items-center justify-center"
          style={{ display: result.artworkUrl100 ? 'none' : 'flex' }}
        >
          <span className="text-gray-400 text-4xl">🎵</span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
      </div>
      
      <div className="p-4 flex flex-col h-32">
        <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2 leading-tight">
          {result.trackName}
        </h3>
        
        <div className="flex-1 mb-2">
          {result.artistName && (
            <p className="text-gray-400 text-xs line-clamp-1">
              {result.artistName}
            </p>
          )}
        </div>
        
        <div className="mt-auto">
          {result.primaryGenreName && (
            <span className="inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
              {result.primaryGenreName}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
