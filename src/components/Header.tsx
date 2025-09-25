import React from 'react';
import { Search, ChefHat, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onBackToHome: () => void;
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
  showBack: boolean;
}

export default function Header({ searchTerm, setSearchTerm, onBackToHome, onNavigate, showBack }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {showBack && (
              <button
                onClick={onBackToHome}
                className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="flex items-center space-x-2">
              <img src="../chef-logo3.png" className="w-12 h-12" />
              <h1 className="text-2xl font-bold text-gray-900">FlavorCraft</h1>
            </div>
          </div>
          
          {!showBack && (
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          )}
          
          <div className="hidden sm:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <button 
                onClick={() => onNavigate('home')}
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                Recipes
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}