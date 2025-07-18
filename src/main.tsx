import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { performanceMonitor } from './utils/performance'
import { pwaManager } from './utils/pwa'

// Initialize performance monitoring
performanceMonitor;

// Initialize PWA functionality
pwaManager;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)