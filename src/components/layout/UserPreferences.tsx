import React, { useState, useEffect } from 'react';
import { Heart, Filter, Settings, X, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SavedFilter {
  id: string;
  name: string;
  filters: {
    ageGroups?: string[];
    categories?: string[];
    installationType?: string;
    searchQuery?: string;
  };
  createdAt: Date;
}

interface FavoriteProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  path: string;
  addedAt: Date;
}

interface UserPreferencesProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserPreferences: React.FC<UserPreferencesProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'favorites' | 'filters'>('favorites');
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);
  const [savedFilters, setSavedFilters] = useState<SavedFilter[]>([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadedFavorites = localStorage.getItem('favoriteProducts');
    const loadedFilters = localStorage.getItem('savedFilters');
    
    if (loadedFavorites) {
      setFavorites(JSON.parse(loadedFavorites));
    }
    
    if (loadedFilters) {
      setSavedFilters(JSON.parse(loadedFilters));
    }
  }, [isOpen]);

  // Save favorites to localStorage
  const saveFavorites = (newFavorites: FavoriteProduct[]) => {
    setFavorites(newFavorites);
    localStorage.setItem('favoriteProducts', JSON.stringify(newFavorites));
  };

  // Save filters to localStorage
  const saveFilters = (newFilters: SavedFilter[]) => {
    setSavedFilters(newFilters);
    localStorage.setItem('savedFilters', JSON.stringify(newFilters));
  };

  // Remove favorite product
  const removeFavorite = (productId: string) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== productId);
    saveFavorites(updatedFavorites);
  };

  // Remove saved filter
  const removeSavedFilter = (filterId: string) => {
    const updatedFilters = savedFilters.filter(filter => filter.id !== filterId);
    saveFilters(updatedFilters);
  };

  // Apply saved filter
  const applySavedFilter = (filter: SavedFilter) => {
    const params = new URLSearchParams();
    
    if (filter.filters.ageGroups?.length) {
      params.set('age', filter.filters.ageGroups.join(','));
    }
    if (filter.filters.categories?.length) {
      params.set('category', filter.filters.categories.join(','));
    }
    if (filter.filters.installationType && filter.filters.installationType !== 'all') {
      params.set('installation', filter.filters.installationType);
    }
    if (filter.filters.searchQuery) {
      params.set('search', filter.filters.searchQuery);
    }
    
    window.location.href = `/products?${params.toString()}`;
    onClose();
  };

  // Clear all favorites
  const clearAllFavorites = () => {
    if (window.confirm('Are you sure you want to remove all favorite products?')) {
      saveFavorites([]);
    }
  };

  // Clear all saved filters
  const clearAllFilters = () => {
    if (window.confirm('Are you sure you want to remove all saved filters?')) {
      saveFilters([]);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Preferences Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            My Preferences
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'favorites'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Favorites ({favorites.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('filters')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'filters'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Filters ({savedFilters.length})</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'favorites' && (
            <div className="p-4">
              {favorites.length > 0 ? (
                <>
                  {/* Clear All Button */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium text-gray-900">Favorite Products</h3>
                    <button
                      onClick={clearAllFavorites}
                      className="text-xs text-red-600 hover:text-red-700 flex items-center space-x-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  </div>

                  {/* Favorites List */}
                  <div className="space-y-3">
                    {favorites.map((favorite) => (
                      <div
                        key={favorite.id}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={favorite.image}
                          alt={favorite.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {favorite.name}
                          </h4>
                          <p className="text-xs text-gray-600">{favorite.category}</p>
                          <p className="text-xs text-gray-500">
                            Added {new Date(favorite.addedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-1">
                          <Link
                            to={favorite.path}
                            onClick={onClose}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                            title="View Product"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => removeFavorite(favorite.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            title="Remove from Favorites"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-sm font-medium text-gray-900 mb-2">No Favorites Yet</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Save products you're interested in to easily find them later.
                  </p>
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'filters' && (
            <div className="p-4">
              {savedFilters.length > 0 ? (
                <>
                  {/* Clear All Button */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium text-gray-900">Saved Filters</h3>
                    <button
                      onClick={clearAllFilters}
                      className="text-xs text-red-600 hover:text-red-700 flex items-center space-x-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  </div>

                  {/* Filters List */}
                  <div className="space-y-3">
                    {savedFilters.map((filter) => (
                      <div
                        key={filter.id}
                        className="p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-medium text-gray-900">
                            {filter.name}
                          </h4>
                          <button
                            onClick={() => removeSavedFilter(filter.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Filter Details */}
                        <div className="space-y-1 mb-3">
                          {filter.filters.ageGroups?.length && (
                            <p className="text-xs text-gray-600">
                              Ages: {filter.filters.ageGroups.join(', ')}
                            </p>
                          )}
                          {filter.filters.categories?.length && (
                            <p className="text-xs text-gray-600">
                              Categories: {filter.filters.categories.join(', ')}
                            </p>
                          )}
                          {filter.filters.installationType && filter.filters.installationType !== 'all' && (
                            <p className="text-xs text-gray-600">
                              Installation: {filter.filters.installationType}
                            </p>
                          )}
                          {filter.filters.searchQuery && (
                            <p className="text-xs text-gray-600">
                              Search: "{filter.filters.searchQuery}"
                            </p>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500">
                            Saved {new Date(filter.createdAt).toLocaleDateString()}
                          </p>
                          <button
                            onClick={() => applySavedFilter(filter)}
                            className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
                          >
                            Apply Filter
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-sm font-medium text-gray-900 mb-2">No Saved Filters</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Save your favorite search filters to quickly find products that match your needs.
                  </p>
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Utility functions for managing user preferences
export const addToFavorites = (product: Omit<FavoriteProduct, 'addedAt'>) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');
  const isAlreadyFavorite = favorites.some((fav: FavoriteProduct) => fav.id === product.id);
  
  if (!isAlreadyFavorite) {
    const newFavorite = { ...product, addedAt: new Date() };
    const updatedFavorites = [newFavorite, ...favorites];
    localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
    return true;
  }
  return false;
};

export const removeFromFavorites = (productId: string) => {
  const favorites = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');
  const updatedFavorites = favorites.filter((fav: FavoriteProduct) => fav.id !== productId);
  localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
};

export const isFavorite = (productId: string): boolean => {
  const favorites = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');
  return favorites.some((fav: FavoriteProduct) => fav.id === productId);
};

export const saveFilter = (name: string, filters: SavedFilter['filters']) => {
  const savedFilters = JSON.parse(localStorage.getItem('savedFilters') || '[]');
  const newFilter: SavedFilter = {
    id: Date.now().toString(),
    name,
    filters,
    createdAt: new Date()
  };
  const updatedFilters = [newFilter, ...savedFilters];
  localStorage.setItem('savedFilters', JSON.stringify(updatedFilters));
};

export default UserPreferences;