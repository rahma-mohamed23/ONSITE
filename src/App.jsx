import { Routes, Route } from 'react-router-dom';
import { Online, Offline } from 'react-detect-offline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Details from './pages/Details';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Navbar />
      
      <Online>
        <div className="container mt-4" style={{ minHeight: '70vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Online>

      <Offline>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
          <div className="alert alert-danger text-center p-4 rounded shadow-sm">
            <h4>⚠️ You are offline</h4>
            <p>Please check your internet connection.</p>
          </div>
        </div>
      </Offline>

      <Footer />
    </>
  );
}