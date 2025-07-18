import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchSuggestion {
  id: string;
  text: string;
  type: 'product' | 'category' | 'recent' | 'popular';
  path?: string;
  image?: string;
}

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search products, categories...",
  className = '',
  onSearch,
  autoFocus = false
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Mock data for suggestions
  const mockSuggestions: SearchSuggestion[] = [
    {
      id: '1',
      text: 'Biggo Swings',
      type: 'product',
      path: '/products/biggo-swings',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: '2',
      text: 'Rotating Climbers',
      type: 'product',
      path: '/products/rotating-climbers',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: '3',
      text: 'Nature Play',
      type: 'category',
      path: '/products?category=nature-play'
    },
    {
      id: '4',
      text: 'Ages 2-5',
      type: 'category',
      path: '/products?age=2-5'
    },
    {
      id: '5',
      text: 'Safety Standards',
      type: 'popular',
      path: '/certifications'
    }
  ];

  const popularSearches = ['Swings', 'Climbing Equipment', 'Safety Standards', 'Age 5-12'];

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      // Filter suggestions based on query
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    // Add to recent searches
    const updatedRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(updatedRecent);
    localStorage.setItem('recentSearches', JSON.stringify(updatedRecent));
    
    // Perform search
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
    
    setIsOpen(false);
    setQuery('');
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    if (suggestion.path) {
      navigate(suggestion.path);
    } else {
      handleSearch(suggestion.text);
    }
    setIsOpen(false);
    setQuery('');
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setSuggestions([]);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Content */}
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
            {query && suggestions.length > 0 && (
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Suggestions</h3>
                <div className="space-y-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 text-left"
                    >
                      {suggestion.image ? (
                        <img
                          src={suggestion.image}
                          alt={suggestion.text}
                          className="w-8 h-8 object-cover rounded"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <Search className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1">
                        <span className="text-sm text-gray-900">{suggestion.text}</span>
                        <span className="ml-2 text-xs text-gray-500 capitalize">
                          {suggestion.type}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!query && (
              <>
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-medium text-gray-900 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Recent Searches
                      </h3>
                      <button
                        onClick={clearRecentSearches}
                        className="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="block w-full text-left px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {query && suggestions.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">No suggestions found</p>
                <button
                  onClick={() => handleSearch(query)}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  Search for "{query}"
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;