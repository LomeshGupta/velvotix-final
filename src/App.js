import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './lib/ThemeContext';
import Cursor from './components/ui/Cursor';
import HomePage       from './pages/HomePage';
import SolutionsPage  from './pages/SolutionsPage';
import ProductsPage   from './pages/ProductsPage';
import ServicesPage   from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage      from './pages/AboutPage';
import ContactPage    from './pages/ContactPage';
import './styles/index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/solutions"    element={<SolutionsPage />} />
        <Route path="/products"     element={<ProductsPage />} />
        <Route path="/services"     element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/contact"      element={<ContactPage />} />
        <Route path="*"             element={<HomePage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}
