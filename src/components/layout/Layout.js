import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Particles from '../ui/Particles';

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Particles />
      <Navbar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
