import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Settings } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import MegaMenu from './layout/MegaMenu';
import SearchBar from './layout/SearchBar';
import MobileNavigation from './layout/MobileNavigation';
import UserPreferences from './layout/UserPreferences';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasMegaMenu: true },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Company', path: '/company' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleProductsHover = () => {
    setShowMegaMenu(true);
  };

  const handleProductsLeave = () => {
    setShowMegaMenu(false);
  };

  const toggleSearch = () => {
    setShowSearchBar(!showSearchBar);
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  const closeMegaMenu = () => {
    setShowMegaMenu(false);
  };

  const closeSearch = () => {
    setShowSearchBar(false);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-red-600">SATHWIK</span>
                <div className="ml-2 flex flex-col">
                  <span className="text-xs text-blue-600 font-semibold tracking-wider">PLAYGROUNDS</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-1 bg-blue-600 rounded"></div>
                    <div className="w-4 h-1 bg-blue-400 rounded"></div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={item.hasMegaMenu ? handleProductsHover : undefined}
                  onMouseLeave={item.hasMegaMenu ? handleProductsLeave : undefined}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                    {item.hasMegaMenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageToggle />
              
              {/* Search Button */}
              <button 
                onClick={toggleSearch}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* User Preferences Button */}
              <button 
                onClick={togglePreferences}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative"
                title="My Preferences"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenu 
          isOpen={showMegaMenu} 
          onClose={closeMegaMenu}
        />

        {/* Search Bar Overlay */}
        {showSearchBar && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <SearchBar 
                placeholder="Search products, categories, certifications..."
                autoFocus
                onSearch={closeSearch}
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* User Preferences Panel */}
      <UserPreferences 
        isOpen={showPreferences} 
        onClose={closePreferences} 
      />

      {/* Click outside handlers */}
      {(showSearchBar || showMegaMenu) && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => {
            closeSearch();
            closeMegaMenu();
          }}
        />
      )}
    </>
  );
};

export default Header;