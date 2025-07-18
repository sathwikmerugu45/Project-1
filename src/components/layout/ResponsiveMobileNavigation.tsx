import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronRight, Search, Heart, ShoppingCart, User, Settings } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';
import TouchFriendlyButton from '../common/TouchFriendlyButton';

interface ResponsiveMobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResponsiveMobileNavigation: React.FC<ResponsiveMobileNavigationProps> = ({
  isOpen,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  const { isMobile, height } = useResponsive();

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navigation = [
    { 
      name: 'Home', 
      path: '/',
      icon: '🏠'
    },
    { 
      name: 'Products', 
      path: '/products',
      icon: '🎪',
      hasSubmenu: true,
      submenu: [
        { name: 'All Products', path: '/products' },
        { name: 'Age 2-5 Years', path: '/products?age=2-5' },
        { name: 'Age 5-12 Years', path: '/products?age=5-12' },
        { name: 'Age 13+ Years', path: '/products?age=13+' },
        { name: 'Outdoor Equipment', path: '/products?type=outdoor' },
        { name: 'Indoor Equipment', path: '/products?type=indoor' },
      ]
    },
    { 
      name: 'Projects', 
      path: '/projects',
      icon: '🏗️',
      hasSubmenu: true,
      submenu: [
        { name: 'All Projects', path: '/projects' },
        { name: 'Schools', path: '/projects?type=school' },
        { name: 'Parks', path: '/projects?type=park' },
        { name: 'Communities', path: '/projects?type=community' },
      ]
    },
    { 
      name: 'Solutions', 
      path: '/solutions',
      icon: '💡'
    },
    { 
      name: 'Company', 
      path: '/company',
      icon: '🏢'
    },
    { 
      name: 'Resources', 
      path: '/resources',
      icon: '📚'
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: '📞'
    },
  ];

  const quickActions = [
    { name: 'Search', icon: Search, action: () => setExpandedSection('search') },
    { name: 'Favorites', icon: Heart, path: '/favorites' },
    { name: 'Quote Cart', icon: ShoppingCart, path: '/quote-cart' },
    { name: 'Account', icon: User, path: '/account' },
  ];

  const handleSubmenuToggle = (sectionName: string) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out"
        style={{ maxHeight: height }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 safe-area-inset-top">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-red-600">SATHWIK</span>
            <div className="flex flex-col">
              <span className="text-xs text-blue-600 font-semibold">PLAYGROUNDS</span>
            </div>
          </div>
          <TouchFriendlyButton
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            variant="ghost"
            size="sm"
          >
            <X className="w-6 h-6" />
          </TouchFriendlyButton>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto safe-area-inset-bottom">
          {/* Search Section */}
          {expandedSection === 'search' ? (
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <TouchFriendlyButton
                  onClick={() => setExpandedSection(null)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500"
                >
                  ←
                </TouchFriendlyButton>
                <h3 className="font-semibold text-gray-900">Search</h3>
              </div>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <TouchFriendlyButton
                  type="submit"
                  className="w-full mt-3"
                  variant="primary"
                  disabled={!searchQuery.trim()}
                >
                  Search Products
                </TouchFriendlyButton>
              </form>
            </div>
          ) : (
            <>
              {/* Quick Actions */}
              <div className="p-4 border-b border-gray-200">
                <div className="grid grid-cols-4 gap-3">
                  {quickActions.map((action) => (
                    <TouchFriendlyButton
                      key={action.name}
                      onClick={action.path ? undefined : action.action}
                      className="flex flex-col items-center gap-2 p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                      variant="ghost"
                    >
                      {action.path ? (
                        <Link to={action.path} className="flex flex-col items-center gap-2">
                          <action.icon className="w-5 h-5" />
                          <span className="text-xs font-medium">{action.name}</span>
                        </Link>
                      ) : (
                        <>
                          <action.icon className="w-5 h-5" />
                          <span className="text-xs font-medium">{action.name}</span>
                        </>
                      )}
                    </TouchFriendlyButton>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <nav className="p-4">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasSubmenu ? (
                        <TouchFriendlyButton
                          onClick={() => handleSubmenuToggle(item.name)}
                          className="w-full flex items-center justify-between p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
                          variant="ghost"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <ChevronRight 
                            className={`w-5 h-5 transition-transform ${
                              expandedSection === item.name ? 'rotate-90' : ''
                            }`} 
                          />
                        </TouchFriendlyButton>
                      ) : (
                        <Link
                          to={item.path}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            location.pathname === item.path
                              ? 'bg-primary-50 text-primary-700 font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      )}

                      {/* Submenu */}
                      {item.hasSubmenu && expandedSection === item.name && (
                        <div className="ml-6 mt-2 space-y-1">
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block p-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </>
          )}

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 mt-auto">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Need help?</p>
              <TouchFriendlyButton
                onClick={() => window.location.href = 'tel:+1234567890'}
                variant="outline"
                size="sm"
                className="w-full"
              >
                Call (123) 456-7890
              </TouchFriendlyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMobileNavigation;