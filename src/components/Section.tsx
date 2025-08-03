'use client';

import { useState } from 'react';
import { SearchResult } from '@/types/search';
import LayoutSwitcher, { LayoutType } from './LayoutSwitcher';
import ContentCard from './ContentCard';

interface SectionProps {
  title: string;
  results: SearchResult[];
  icon: string;
}

export default function Section({ title, results, icon }: SectionProps) {
  const [layout, setLayout] = useState<LayoutType>('list');

  if (results.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span>{icon}</span>
            {title}
          </h2>
          <LayoutSwitcher currentLayout={layout} onLayoutChange={setLayout} />
        </div>
        <p className="text-gray-400">No results found in this category.</p>
      </div>
    );
  }

  const renderResults = () => {
    switch (layout) {
      case 'list':
        return (
          <div className="space-y-2">
            {results.map((result, index) => (
              <div key={`${title}-${result.trackId}-${index}`} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <img
                  src={result.artworkUrl100 || ''}
                  alt={result.trackName}
                  className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hidden flex-shrink-0">
                  🎵
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">{result.trackName}</h3>
                  <p className="text-gray-400 text-sm truncate">{result.artistName}</p>
                  {result.primaryGenreName && (
                    <p className="text-gray-500 text-xs truncate">{result.primaryGenreName}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      case 'grid':
      default:
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {results.map((result, index) => (
              <ContentCard key={`${title}-${result.trackId}-${index}`} result={result} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <span>{icon}</span>
          {title}
        </h2>
        <LayoutSwitcher currentLayout={layout} onLayoutChange={setLayout} />
      </div>
      {renderResults()}
    </div>
  );
}
