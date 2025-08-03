'use client';

import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PodbayContent from '@/components/PodbayContent';
import { searchItunes, ApiError } from '@/lib/api';
import { GroupedSearchResponse } from '@/types/search';

export default function Home() {
  const [results, setResults] = useState<GroupedSearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = useCallback(async (term: string) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setSearchTerm(term);
    
    try {
      const searchResults = await searchItunes(term);
      setResults(searchResults);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
      setResults(null);
    } finally {
      setIsLoading(false);
    }
  }, []); // Empty dependency array since function doesn't depend on any props/state

  return (
    <div className="h-screen bg-gray-900 flex overflow-hidden">
      <Sidebar />
      
      {/* Right Side Content */}
      <div className="flex-1 flex flex-col">
        <Header key="main-header" onSearch={handleSearch} isLoading={isLoading} />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <PodbayContent
            results={results}
            isLoading={isLoading}
            error={error}
            hasSearched={hasSearched}
            searchTerm={searchTerm}
          />
        </main>
      </div>
    </div>
  );
}
