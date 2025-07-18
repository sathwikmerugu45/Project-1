import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Monitor } from 'lucide-react';
import { usePWA } from '../../utils/pwa';
import { useResponsive } from '../../hooks/useResponsive';
import TouchFriendlyButton from './TouchFriendlyButton';

const PWAInstallPrompt: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { canInstall, isInstalled, installApp } = usePWA();
  const { isMobile } = useResponsive();

  useEffect(() => {
    // Check if user has previously dismissed the prompt
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      
      // Show again after 7 days
      if (daysSinceDismissed < 7) {
        setIsDismissed(true);
        return;
      }
    }

    // Show prompt if app can be installed and user hasn't dismissed it
    if (canInstall && !isInstalled && !isDismissed) {
      // Delay showing the prompt to avoid interrupting user flow
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [canInstall, isInstalled, isDismissed]);

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      setIsVisible(false);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (!isVisible || isInstalled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 animate-slide-up">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {isMobile ? (
              <Smartphone className="w-5 h-5 text-primary-600" />
            ) : (
              <Monitor className="w-5 h-5 text-primary-600" />
            )}
            <h3 className="font-semibold text-gray-900">Install App</h3>
          </div>
          <TouchFriendlyButton
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 -mt-1 -mr-1"
            variant="ghost"
            size="sm"
            ripple={false}
          >
            <X className="w-4 h-4" />
          </TouchFriendlyButton>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">
            Install Playground Pro for a better experience:
          </p>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• Faster loading and offline access</li>
            <li>• Native app-like experience</li>
            <li>• Quick access from home screen</li>
            {isMobile && <li>• Works without browser tabs</li>}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <TouchFriendlyButton
            onClick={handleInstall}
            className="flex-1 flex items-center justify-center gap-2"
            variant="primary"
            size="sm"
          >
            <Download className="w-4 h-4" />
            Install
          </TouchFriendlyButton>
          <TouchFriendlyButton
            onClick={handleDismiss}
            variant="ghost"
            size="sm"
            className="text-gray-600"
          >
            Not now
          </TouchFriendlyButton>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;