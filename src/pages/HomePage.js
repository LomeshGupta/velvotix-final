import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import Metrics from "../components/sections/Metrics";
import Products from "../components/sections/Products";
import CaseStudies from "../components/sections/CaseStudies";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";
import HomeSEO from "../meta/home";
import ProductGallery from "../components/ProductGallery";
import DeliveryApproach from "../components/sections/DeliveryApproach";
import ContactPopupModal from "../components/ContactPopupModal";

/**
 * Keep the existing section-based homepage design intact. New content is added
 * as sections using the existing spacing, typography and card conventions.
 */
export default function HomePage() {
  return (
    <>
      <HomeSEO />
      <Layout>
        <Hero />
        <TrustedBy />
        <Services />
        <DeliveryApproach />
        <Metrics />
        <Products />
        <ProductGallery compact />
        <CaseStudies />
        <Process />
        <Testimonials />
        <CTASection />
        <ContactPopupModal />
      </Layout>
    </>
  );
}
