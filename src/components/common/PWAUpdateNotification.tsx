import React, { useState, useEffect } from 'react';
import { RefreshCw, X, AlertCircle } from 'lucide-react';
import { usePWA } from '../../utils/pwa';
import TouchFriendlyButton from './TouchFriendlyButton';

const PWAUpdateNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { updateAvailable, skipWaiting } = usePWA();

  useEffect(() => {
    if (updateAvailable) {
      setIsVisible(true);
    }
  }, [updateAvailable]);

  const handleUpdate = async () => {
    await skipWaiting();
    window.location.reload();
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-lg p-4 animate-slide-up">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-blue-900">Update Available</h3>
          </div>
          <TouchFriendlyButton
            onClick={handleDismiss}
            className="text-blue-400 hover:text-blue-600 -mt-1 -mr-1"
            variant="ghost"
            size="sm"
            ripple={false}
          >
            <X className="w-4 h-4" />
          </TouchFriendlyButton>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="text-sm text-blue-800 mb-2">
            A new version of Playground Pro is available with improvements and bug fixes.
          </p>
          <p className="text-xs text-blue-600">
            Update now to get the latest features.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <TouchFriendlyButton
            onClick={handleUpdate}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            variant="primary"
            size="sm"
          >
            <RefreshCw className="w-4 h-4" />
            Update Now
          </TouchFriendlyButton>
          <TouchFriendlyButton
            onClick={handleDismiss}
            variant="ghost"
            size="sm"
            className="text-blue-600"
          >
            Later
          </TouchFriendlyButton>
        </div>
      </div>
    </div>
  );
};

export default PWAUpdateNotification;