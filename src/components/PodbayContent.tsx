'use client';

import { GroupedSearchResponse } from '@/types/search';
import Section from './Section';

interface PodbayContentProps {
  results: GroupedSearchResponse | null;
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
  searchTerm: string;
}

export default function PodbayContent({ 
  results, 
  isLoading, 
  error, 
  hasSearched,
  searchTerm 
}: PodbayContentProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900 border border-red-700 rounded-lg p-6 text-center max-w-md mx-auto mt-20">
        <h3 className="text-red-200 font-medium mb-2">Search Error</h3>
        <p className="text-red-300 text-sm">{error}</p>
      </div>
    );
  }

  if (!hasSearched) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">🎵</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Discover Amazing Content
          </h2>
          <p className="text-gray-400 text-lg">
            Search for podcasts, music, movies, and more from iTunes
          </p>
        </div>
      </div>
    );
  }

  if (!results || results.totalResults === 0) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-gray-400 text-2xl">🔍</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-4">
            No Results Found
          </h2>
          <p className="text-gray-400">
            Try searching with different keywords or check your spelling
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Content Sections */}
      <Section
        title={`Top podcasts for ${searchTerm} (${results.podcasts.length})`}
        results={results.podcasts}
        icon="🎙️"
      />

      <Section
        title={`Top Movies & TV Shows for ${searchTerm} (${results.movies.length})`}
        results={results.movies}
        icon="🎬"
      />

      <Section
        title={`Others for ${searchTerm} (${results.others.length})`}
        results={results.others}
        icon="📦"
      />
    </div>
  );
}
