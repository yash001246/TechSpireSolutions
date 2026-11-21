import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Cursor from './components/Cursor.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import Services from './pages/Services.jsx';
import Product from './pages/Product.jsx';
import Process from './pages/Process.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Feedback from './pages/Feedback.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const { pathname } = useLocation();
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        {/* The key restarts the page-in animation on every route change. */}
        <div key={pathname} className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Product />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
