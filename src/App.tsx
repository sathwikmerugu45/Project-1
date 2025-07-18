import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopActionBar from './components/TopActionBar';
import Header from './components/Header';
import BreadcrumbNavigation from './components/layout/BreadcrumbNavigation';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import PWAInstallPrompt from './components/common/PWAInstallPrompt';
import PWAUpdateNotification from './components/common/PWAUpdateNotification';
// import PerformanceMonitor from './components/common/PerformanceMonitor';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Company from './pages/Company';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TopActionBar />
        <Header />
        <BreadcrumbNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/company" element={<Company />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            {/* Legacy routes for backward compatibility */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
        <StickyFooter />
        
        {/* PWA Components */}
        <PWAInstallPrompt />
        <PWAUpdateNotification />
        {/* <PerformanceMonitor /> */}
      </div>
    </Router>
  );
}

export default App;