'use client';

import { memo } from 'react';
import SearchInput from './SearchInput';

interface HeaderProps {
  onSearch: (term: string) => void;
  isLoading: boolean;
}

function Header({ onSearch, isLoading }: HeaderProps) {

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">iT</span>
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-semibold text-white">iTunes Search</h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchInput 
              onSearch={onSearch} 
              isLoading={isLoading}
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <div className="flex items-center space-x-4">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                Log in
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Wrap with memo to prevent unnecessary re-renders that cause focus loss
export default memo(Header);
