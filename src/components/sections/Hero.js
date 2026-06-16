import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ERPOrbit from '../ui/ERPOrbit';
import { REGIONS } from '../../data';

const up = i => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { delay: i * .1, duration: .65, ease: [.22,1,.36,1] } },
});

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 80, paddingBottom: 60, position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(0,153,255,.13) 0%, transparent 60%)',
    }}>
      {/* Scan line */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg,transparent,rgba(0,153,255,.35),transparent)',
          animation: 'scanline 9s linear 3s infinite',
        }} />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="g-hero">

          {/* LEFT */}
          <motion.div initial="hidden" animate="show">
            <motion.div variants={up(0)}>
              <span className="badge badge-b" style={{ marginBottom: 22, display: 'inline-flex' }}>
                ✦ Business Central Specialists
                <span className="anim-blink" style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D9FF', display: 'inline-block', marginLeft: 4 }} />
              </span>
            </motion.div>

            <motion.h1 variants={up(1)} className="f-display" style={{
              fontSize: 'clamp(2rem, 5.5vw, 3.75rem)', fontWeight: 700,
              lineHeight: 1.08, color: 'var(--text)', marginBottom: 18,
            }}>
              Where ERP Meets{' '}
              <span className="g-blue">Modern Digital</span>{' '}
              Experience
            </motion.h1>

            <motion.p variants={up(2)} style={{
              fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.75,
              color: 'var(--text2)', marginBottom: 32,
              maxWidth: 500,
            }}>
              We build intelligent Business Central ecosystems, enterprise applications, integrations, and digital experiences that transform operations — for enterprises worldwide.
            </motion.p>

            <motion.div variants={up(3)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
              <Link to="/contact" className="btn btn-blue btn-lg">Schedule Consultation →</Link>
              <Link to="/solutions" className="btn btn-out btn-lg">Explore Solutions</Link>
            </motion.div>

            <motion.div variants={up(4)} style={{
              borderTop: '1px solid var(--border)', paddingTop: 24,
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8,
            }}>
              <span style={{ fontSize: 12, color: 'var(--text3)' }}>🌍 Clients across</span>
              {REGIONS.slice(0, 5).map(r => (
                <span key={r.name} className="pill">{r.flag} {r.name}</span>
              ))}
            </motion.div>

            <motion.div variants={up(5)} style={{ display: 'flex', gap: 32, marginTop: 24 }}>
              {[['50+','Projects'],['100+','Integrations'],['98%','Satisfaction']].map(([v, l]) => (
                <div key={l}>
                  <div className="f-display g-blue" style={{ fontSize: 22, fontWeight: 700 }}>{v}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text3)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — orbit (hidden on small phones, shown from sm up) */}
          <motion.div
            initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: .3, duration: 1, ease: [.22,1,.36,1] }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
            className="hidden sm:flex"
          >
            <div style={{
              position: 'absolute', width: 380, height: 380, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,153,255,.12) 0%, transparent 70%)',
              filter: 'blur(28px)', pointerEvents: 'none',
            }} />
            <div className="anim-cw" style={{
              position: 'absolute', width: 440, height: 440, borderRadius: '50%',
              border: '1px dashed rgba(0,153,255,.16)', pointerEvents: 'none',
            }} />
            <div className="anim-ccw" style={{
              position: 'absolute', width: 340, height: 340, borderRadius: '50%',
              border: '1px dashed rgba(255,122,0,.13)', pointerEvents: 'none',
            }} />
            <div className="anim-float" style={{ position: 'relative', zIndex: 1 }}>
              <ERPOrbit size={400} />
            </div>
            {/* Float cards */}
            {[
              { style: { top: '6%', right: '-2%' }, title: 'Live BC Sync',   value: 'Real-time', color: '#0099FF' },
              { style: { bottom: '8%', left: '-4%' }, title: 'Global Delivery', value: '5 Regions', color: '#FF7A00' },
            ].map(fc => (
              <div key={fc.title} style={{
                position: 'absolute', ...fc.style,
                background: 'var(--glass)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${fc.color}30`, borderRadius: 14, padding: '10px 14px',
                boxShadow: `0 4px 22px ${fc.color}16`,
              }}>
                <div style={{ fontSize: 11, color: 'var(--text3)' }}>{fc.title}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: fc.color }}>{fc.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 72,
        background: 'linear-gradient(to bottom, transparent, var(--bg))', pointerEvents: 'none',
      }} />
    </section>
  );
}
