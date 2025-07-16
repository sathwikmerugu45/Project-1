import { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const languages = [
    { code: 'EN', label: 'English', flag: '🇺🇸' },
    { code: 'VN', label: 'Tiếng Việt', flag: '🇻🇳' }
  ];

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'EN' ? 'VN' : 'EN');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-200"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {languages.find(lang => lang.code === currentLanguage)?.flag} {currentLanguage}
      </span>
    </button>
  );
};

export default LanguageToggle;