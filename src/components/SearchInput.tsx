'use client';

import { useState, useEffect, useRef, memo } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchInputProps {
  onSearch: (term: string) => void;
  isLoading: boolean;
}

function SearchInput({ onSearch, isLoading }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  
  // Auto-search when debounced term changes
  useEffect(() => {
    if (debouncedSearchTerm.trim().length > 0) {
      onSearch(debouncedSearchTerm.trim());
    }
  }, [debouncedSearchTerm, onSearch]);
  
  // Simple input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // Restore focus when loading completes
  useEffect(() => {
    if (!isLoading && inputRef.current && document.activeElement !== inputRef.current) {
      // Small delay to ensure DOM has updated
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isLoading]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        ref={inputRef}
        key="search-input"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for podcasts, movies, music..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={isLoading}
        autoComplete="off"
      />
      {isLoading && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
}

export default memo(SearchInput);
