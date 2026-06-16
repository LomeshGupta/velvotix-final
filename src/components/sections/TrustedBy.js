import React from 'react';
import { MARQUEE_NAMES, REGIONS } from '../../data';

export default function TrustedBy() {
  const doubled = [...MARQUEE_NAMES, ...MARQUEE_NAMES];
  return (
    <section style={{ padding: '44px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="wrap" style={{ marginBottom: 22, textAlign: 'center' }}>
        <p style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)', fontWeight: 600, marginBottom: 14 }}>
          🌍 Global Reach
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          {REGIONS.map(r => (
            <span key={r.name} style={{
              padding: '5px 14px', borderRadius: 99, fontSize: 12.5, fontWeight: 500,
              background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text2)',
            }}>
              {r.flag} {r.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to right, var(--bg), transparent)' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to left, var(--bg), transparent)' }} />

        <div style={{ display: 'flex', overflow: 'hidden' }}>
          <div className="anim-marquee" style={{ display: 'flex', gap: 14, flexShrink: 0, width: 'max-content' }}>
            {doubled.map((name, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 9, padding: '10px 20px', borderRadius: 12,
                border: '1px solid var(--border)', background: 'var(--card)', flexShrink: 0, whiteSpace: 'nowrap',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                  background: i % 3 === 0 ? '#0099FF' : i % 3 === 1 ? '#FF7A00' : '#00D9FF' }} />
                <span style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--text2)' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 20, textAlign: 'center' }}>
        <p style={{ fontSize: 12, color: 'var(--text3)' }}>
          Trusted by enterprises across manufacturing, trading, distribution &amp; service industries
        </p>
      </div>
    </section>
  );
}
