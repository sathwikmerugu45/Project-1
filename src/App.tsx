import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopActionBar from './components/TopActionBar';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import Home from './pages/Home';
import Products from './pages/Products';
import Projects from './pages/Projects';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TopActionBar />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyFooter />
      </div>
    </Router>
  );
}

export default App;