import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Services from '../components/sections/Services';
import Metrics from '../components/sections/Metrics';
import Products from '../components/sections/Products';
import CaseStudies from '../components/sections/CaseStudies';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
      <Services />
      <Metrics />
      <Products />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CTASection />
    </Layout>
  );
}
