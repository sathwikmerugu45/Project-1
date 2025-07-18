import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ChevronRight, 
  ChevronDown, 
  Home, 
  Package, 
  Building, 
  FileText, 
  Phone,
  Search
} from 'lucide-react';
import SearchBar from './SearchBar';

interface MobileNavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
  submenu?: {
    name: string;
    path: string;
    description?: string;
  }[];
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const navigationItems: MobileNavItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-5 h-5" />
    },
    {
      name: 'Products',
      path: '/products',
      icon: <Package className="w-5 h-5" />,
      hasSubmenu: true,
      submenu: [
        { name: 'Biggo Swings', path: '/products/biggo-swings', description: 'Premium swing sets' },
        { name: 'Rotating Climbers', path: '/products/rotating-climbers', description: 'Dynamic climbing' },
        { name: 'Frame Nets', path: '/products/frame-nets', description: 'Structured climbing' },
        { name: 'Mast Nets', path: '/products/mast-nets', description: 'Vertical challenges' },
        { name: 'Nature Play', path: '/products/nature-play', description: 'Natural environments' },
        { name: 'Ropes Courses', path: '/products/ropes-courses', description: 'Adventure systems' }
      ]
    },
    {
      name: 'Solutions',
      path: '/solutions',
      icon: <Building className="w-5 h-5" />
    },
    {
      name: 'Company',
      path: '/company',
      icon: <Building className="w-5 h-5" />
    },
    {
      name: 'Insights',
      path: '/insights',
      icon: <FileText className="w-5 h-5" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-5 h-5" />
    }
  ];

  const toggleSubmenu = (itemName: string) => {
    setExpandedMenu(expandedMenu === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedMenu(null);
    setShowSearch(false);
  };

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Section */}
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={handleSearchToggle}
            className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">Search products...</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${showSearch ? 'rotate-180' : ''}`} />
          </button>
          
          {showSearch && (
            <div className="mt-3">
              <SearchBar 
                placeholder="Search products, categories..."
                autoFocus
                onSearch={() => {
                  setShowSearch(false);
                  onClose();
                }}
              />
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {/* Main Navigation Item */}
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`flex-1 flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                  
                  {/* Submenu Toggle */}
                  {item.hasSubmenu && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="p-3 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          expandedMenu === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {item.hasSubmenu && expandedMenu === item.name && item.submenu && (
                  <div className="mt-2 ml-8 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={handleLinkClick}
                        className={`block p-3 rounded-lg transition-colors ${
                          location.pathname === subItem.path
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{subItem.name}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                        {subItem.description && (
                          <p className="text-xs text-gray-500 mt-1">{subItem.description}</p>
                        )}
                      </Link>
                    ))}
                    
                    {/* View All Link */}
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className="block p-3 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View All {item.name} →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          {/* Age Group Quick Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Shop by Age</h3>
            <div className="flex space-x-2">
              <Link
                to="/products?age=2-5"
                onClick={handleLinkClick}
                className="flex-1 text-center py-2 px-3 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                2-5 years
              </Link>
              <Link
                to="/products?age=5-12"
                onClick={handleLinkClick}
                className="flex-1 text-center py-2 px-3 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                5-12 years
              </Link>
              <Link
                to="/products?age=13+"
                onClick={handleLinkClick}
                className="flex-1 text-center py-2 px-3 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                13+ years
              </Link>
            </div>
          </div>

          {/* Quick Contact */}
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="block w-full py-3 px-4 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;