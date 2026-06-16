import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../lib/ThemeContext';
import { NAV } from '../../data';
import Logo from '../ui/Logo';

/* ─── Navbar — pure inline CSS, zero Tailwind dependency ─── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { theme, toggle }       = useTheme();
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* close drawer on route change */
  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, [loc]);

  const handleMenuToggle = () => {
    setOpen(v => {
      document.body.style.overflow = v ? '' : 'hidden';
      return !v;
    });
  };

  return (
    <>
      {/* ── Bar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        height: 64,
        background: scrolled ? 'var(--nav)' : 'transparent',
        backdropFilter: scrolled ? 'blur(22px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(22px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'background .3s, border-color .3s',
      }}>
        <div style={{
          maxWidth: 1240, margin: '0 auto',
          padding: '0 20px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>

          {/* Logo — always left */}
          <Logo size="md" />

          {/* Desktop center nav — only visible ≥ 768px */}
          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: 2,
            flex: 1,
            justifyContent: 'center',
          }} id="nav-desktop">
            {NAV.map(n => (
              <Link key={n.path} to={n.path} style={{
                padding: '7px 13px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                color: loc.pathname === n.path ? '#0099FF' : 'var(--text2)',
                background: loc.pathname === n.path ? 'rgba(0,153,255,.09)' : 'transparent',
                transition: 'color .2s, background .2s',
                whiteSpace: 'nowrap',
              }}>
                {n.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                width: 36, height: 36, borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--card)', border: '1px solid var(--border)',
                cursor: 'pointer', fontSize: 15, flexShrink: 0,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* CTA — desktop only (hidden on mobile via id="nav-cta") */}
            <Link
              to="/contact"
              id="nav-cta"
              style={{
                display: 'none',          /* shown via <style> below */
                alignItems: 'center',
                gap: 6,
                padding: '9px 16px',
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                color: '#fff',
                background: 'linear-gradient(135deg,#0099FF,#00C2FF)',
                boxShadow: '0 0 18px rgba(0,153,255,.35)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Schedule Consultation
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={handleMenuToggle}
              aria-label={open ? 'Close menu' : 'Open menu'}
              id="nav-burger"
              style={{
                width: 40, height: 40, borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--card)', border: '1px solid var(--border)',
                cursor: 'pointer', fontSize: 20, flexShrink: 0, color: 'var(--text)',
                WebkitTapHighlightColor: 'transparent',
                transition: 'background .2s',
              }}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile fullscreen drawer ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 800,
        background: 'var(--glass)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        display: 'flex', flexDirection: 'column',
        padding: '80px 24px 36px',
        opacity: open ? 1 : 0,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity .28s ease, transform .28s ease',
        overflowY: 'auto',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 32 }}>
          {NAV.map(n => (
            <Link
              key={n.path}
              to={n.path}
              style={{
                display: 'block',
                padding: '15px 18px', borderRadius: 14,
                fontSize: 18, fontWeight: 600, textDecoration: 'none',
                color: loc.pathname === n.path ? '#0099FF' : 'var(--text)',
                background: loc.pathname === n.path ? 'rgba(0,153,255,.09)' : 'transparent',
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: 'auto' }}>
          <Link
            to="/contact"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              width: '100%', padding: '16px', borderRadius: 14,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
              color: '#fff', background: 'linear-gradient(135deg,#0099FF,#00C2FF)',
              boxShadow: '0 0 24px rgba(0,153,255,.4)',
            }}
          >
            📅 Schedule Consultation
          </Link>
        </div>
      </div>

      {/* Responsive show/hide via real <style> — avoids Tailwind purge issues */}
      <style>{`
        @media (min-width: 768px) {
          #nav-desktop { display: flex !important; }
          #nav-cta     { display: flex !important; }
          #nav-burger  { display: none !important; }
        }
        #nav-desktop a:hover { color: var(--text) !important; background: var(--card) !important; }
      `}</style>
    </>
  );
}
