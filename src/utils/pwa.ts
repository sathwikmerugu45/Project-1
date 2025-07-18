// Progressive Web App utilities
export interface PWAInstallPrompt {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

class PWAManager {
  private deferredPrompt: PWAInstallPrompt | null = null;
  private isInstalled = false;
  private serviceWorkerRegistration: ServiceWorkerRegistration | null = null;

  constructor() {
    this.init();
  }

  private async init() {
    // Check if already installed
    this.checkInstallStatus();
    
    // Register service worker
    await this.registerServiceWorker();
    
    // Listen for install prompt
    this.setupInstallPrompt();
    
    // Listen for app installed event
    this.setupInstalledListener();
    
    // Setup update checking
    this.setupUpdateChecking();
  }

  private checkInstallStatus() {
    // Check if running as PWA
    this.isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                     (window.navigator as any).standalone === true ||
                     document.referrer.includes('android-app://');
  }

  private async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });
        
        this.serviceWorkerRegistration = registration;
        console.log('Service Worker registered successfully:', registration);
        
        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available
                this.notifyUpdate();
              }
            });
          }
        });
        
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  private setupInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later
      this.deferredPrompt = e as any;
      console.log('PWA install prompt available');
      
      // Dispatch custom event to notify components
      window.dispatchEvent(new CustomEvent('pwa-install-available'));
    });
  }

  private setupInstalledListener() {
    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      this.isInstalled = true;
      this.deferredPrompt = null;
      
      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('pwa-installed'));
    });
  }

  private setupUpdateChecking() {
    // Check for updates every 30 minutes
    setInterval(() => {
      this.checkForUpdates();
    }, 30 * 60 * 1000);
  }

  private notifyUpdate() {
    // Show update notification
    const event = new CustomEvent('pwa-update-available', {
      detail: {
        registration: this.serviceWorkerRegistration
      }
    });
    window.dispatchEvent(event);
  }

  // Public methods
  async installApp(): Promise<boolean> {
    if (!this.deferredPrompt) {
      console.log('No install prompt available');
      return false;
    }

    try {
      // Show the install prompt
      await this.deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await this.deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        this.deferredPrompt = null;
        return true;
      } else {
        console.log('User dismissed the install prompt');
        return false;
      }
    } catch (error) {
      console.error('Error during app installation:', error);
      return false;
    }
  }

  canInstall(): boolean {
    return this.deferredPrompt !== null && !this.isInstalled;
  }

  isAppInstalled(): boolean {
    return this.isInstalled;
  }

  async checkForUpdates(): Promise<void> {
    if (this.serviceWorkerRegistration) {
      try {
        await this.serviceWorkerRegistration.update();
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    }
  }

  async skipWaiting(): Promise<void> {
    if (this.serviceWorkerRegistration?.waiting) {
      this.serviceWorkerRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }

  async clearCache(): Promise<void> {
    if (this.serviceWorkerRegistration) {
      this.serviceWorkerRegistration.active?.postMessage({ type: 'CLEAR_CACHE' });
    }
  }

  // Offline functionality
  async saveForOffline(data: any, key: string): Promise<void> {
    try {
      localStorage.setItem(`offline_${key}`, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.error('Error saving offline data:', error);
    }
  }

  getOfflineData(key: string): any | null {
    try {
      const stored = localStorage.getItem(`offline_${key}`);
      if (stored) {
        const { data, timestamp } = JSON.parse(stored);
        // Return data if it's less than 24 hours old
        if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
          return data;
        }
      }
    } catch (error) {
      console.error('Error retrieving offline data:', error);
    }
    return null;
  }

  // Performance monitoring
  reportPerformanceMetric(name: string, value: number): void {
    if (this.serviceWorkerRegistration?.active) {
      this.serviceWorkerRegistration.active.postMessage({
        type: 'PERFORMANCE_METRIC',
        name,
        value,
        timestamp: Date.now()
      });
    }
  }

  // Background sync
  // async requestBackgroundSync(tag: string): Promise<void> {
    // if (this.serviceWorkerRegistration?.sync) {
      // try {
      //   // await this.serviceWorkerRegistration.sync.register(tag);
      //   console.log('Background sync registered:', tag);
      // } catch (error) {
      //   console.error('Background sync registration failed:', error);
      // }
    // }
  // }

  // Push notifications
  async requestNotificationPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      return await Notification.requestPermission();
    }
    return 'denied';
  }

  async subscribeToPushNotifications(): Promise<PushSubscription | null> {
    if (this.serviceWorkerRegistration && 'PushManager' in window) {
      try {
        const subscription = await this.serviceWorkerRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array(
            // Replace with your VAPID public key
            'YOUR_VAPID_PUBLIC_KEY'
          )
        });
        return subscription;
      } catch (error) {
        console.error('Push subscription failed:', error);
      }
    }
    return null;
  }

  private urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}

// Singleton instance
export const pwaManager = new PWAManager();

// React hook for PWA functionality
export const usePWA = () => {
  const [canInstall, setCanInstall] = React.useState(pwaManager.canInstall());
  const [isInstalled, setIsInstalled] = React.useState(pwaManager.isAppInstalled());
  const [updateAvailable, setUpdateAvailable] = React.useState(false);

  React.useEffect(() => {
    const handleInstallAvailable = () => setCanInstall(true);
    const handleInstalled = () => {
      setIsInstalled(true);
      setCanInstall(false);
    };
    const handleUpdateAvailable = () => setUpdateAvailable(true);

    window.addEventListener('pwa-install-available', handleInstallAvailable);
    window.addEventListener('pwa-installed', handleInstalled);
    window.addEventListener('pwa-update-available', handleUpdateAvailable);

    return () => {
      window.removeEventListener('pwa-install-available', handleInstallAvailable);
      window.removeEventListener('pwa-installed', handleInstalled);
      window.removeEventListener('pwa-update-available', handleUpdateAvailable);
    };
  }, []);

  return {
    canInstall,
    isInstalled,
    updateAvailable,
    installApp: () => pwaManager.installApp(),
    checkForUpdates: () => pwaManager.checkForUpdates(),
    skipWaiting: () => pwaManager.skipWaiting(),
    clearCache: () => pwaManager.clearCache()
  };
};

// We need to import React for the hook
import React from 'react';