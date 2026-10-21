import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./lib/ThemeContext";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfServicePage from "./pages/TermofService";
import Opayo from "./pages/Opayo";
import SEOServicePage from "./pages/SEOServicePage";
import InsightsPage from "./pages/InsightsPage";
import InsightArticlePage from "./pages/InsightArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/index.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/opayo-success.html" element={<Opayo />} />
        <Route path="/erp-implementation-partner" element={<SEOServicePage />} />
        <Route path="/business-central-implementation" element={<SEOServicePage />} />
        <Route path="/business-central-financial-management" element={<SEOServicePage />} />
        <Route path="/custom-erp-software" element={<SEOServicePage />} />
        <Route path="/digital-transformation" element={<SEOServicePage />} />
        <Route path="/business-central-support" element={<SEOServicePage />} />
        <Route path="/business-central-development" element={<SEOServicePage />} />
        <Route path="/business-central-integration-services" element={<SEOServicePage />} />
        <Route path="/warehouse-management-system" element={<SEOServicePage />} />
        <Route path="/shop-floor-management-software" element={<SEOServicePage />} />
        <Route path="/industries/manufacturing-erp" element={<SEOServicePage />} />
        <Route path="/industries/distribution-erp" element={<SEOServicePage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:articleSlug" element={<InsightArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
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
