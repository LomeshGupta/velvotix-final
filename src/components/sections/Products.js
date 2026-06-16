import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../../data';

export default function Products() {
  const [active, setActive] = useState(PRODUCTS[0].id);
  const ap = PRODUCTS.find(p => p.id === active);

  return (
    <section className="sec" style={{ position:'relative', overflow:'hidden' }}>
      <div style={{
        position:'absolute', top:0, left:'50%', transform:'translateX(-50%)',
        width:'70%', height:1, background:'linear-gradient(90deg,transparent,rgba(0,153,255,.35),transparent)',
      }} />
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:36 }}>
          <span className="badge badge-o" style={{ marginBottom:14, display:'inline-flex' }}>✨ Product Suite</span>
          <h2 className="sh f-display" style={{ marginBottom:10 }}>
            Built on Business Central, <span className="g-orange">Ready to Deploy</span>
          </h2>
          <p className="sp" style={{ maxWidth:580, margin:'0 auto' }}>
            Customisable enterprise modules that extend Business Central with rich web interfaces and intelligent automation — deployable globally.
          </p>
        </motion.div>

        {/* Tab pills — horizontally scrollable on mobile */}
        <div style={{ display:'flex', gap:8, marginBottom:28, overflowX:'auto', paddingBottom:4, WebkitOverflowScrolling:'touch', scrollbarWidth:'none' }}>
          {PRODUCTS.map(p => {
            const isA = active === p.id;
            return (
              <button key={p.id} onClick={() => setActive(p.id)} style={{
                display:'flex', alignItems:'center', gap:6, padding:'9px 16px', borderRadius:12, flexShrink:0,
                fontSize:13, fontWeight:500, cursor:'pointer', whiteSpace:'nowrap',
                background: isA ? `${p.color}18` : 'var(--card)',
                border:`1px solid ${isA ? p.color+'55' : 'var(--border)'}`,
                color: isA ? p.color : 'var(--text2)',
              }}>
                {p.icon} {p.name.split(' ').slice(0, 2).join(' ')}
              </button>
            );
          })}
        </div>

        {/* Active showcase */}
        <AnimatePresence mode="wait">
          {ap && (
            <motion.div key={active}
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
              transition={{ duration:.32 }}
              style={{ borderRadius:22, overflow:'hidden', border:`1px solid ${ap.color}28`,
                background:`linear-gradient(135deg,${ap.color}08 0%,transparent 55%)` }}>
              <div className="g-2col">
                {/* Info */}
                <div style={{ padding:'clamp(24px,5vw,44px)' }}>
                  {ap.badge && (
                    <span style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'4px 12px',
                      borderRadius:99, fontSize:11, fontWeight:600, background:`${ap.color}1a`, color:ap.color, marginBottom:14 }}>
                      <span className="anim-blink" style={{ width:6, height:6, borderRadius:'50%', background:ap.color, display:'inline-block' }} />
                      {ap.badge}
                    </span>
                  )}
                  <h3 className="f-display" style={{ fontSize:'clamp(1.2rem,2.5vw,1.6rem)', fontWeight:700, color:'var(--text)', marginBottom:6 }}>{ap.name}</h3>
                  <p style={{ fontSize:12.5, fontWeight:600, color:ap.color, marginBottom:14 }}>{ap.tagline}</p>
                  <p style={{ fontSize:14, lineHeight:1.72, color:'var(--text2)', marginBottom:22 }}>{ap.desc}</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:24 }}>
                    {ap.features.map(f => (
                      <div key={f} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13 }}>
                        <span style={{ width:14, height:14, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, background:`${ap.color}18` }}>
                          <span style={{ width:5, height:5, borderRadius:'50%', background:ap.color, display:'block' }} />
                        </span>
                        <span style={{ color:'var(--text2)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn btn-blue" style={{ background:`linear-gradient(135deg,${ap.color},${ap.color}cc)`, boxShadow:`0 4px 18px ${ap.color}38` }}>
                    Request Demo →
                  </Link>
                </div>

                {/* Mockup — hidden on very small screens */}
                <div style={{
                  padding:'clamp(24px,5vw,44px)', display:'flex', alignItems:'center', justifyContent:'center',
                  borderTop:'1px solid var(--border)',
                  background:`radial-gradient(ellipse at center,${ap.color}07,transparent 70%)`,
                }} className="hidden sm:flex">
                  <div style={{ width:'100%', maxWidth:300, borderRadius:18, overflow:'hidden', border:`1px solid ${ap.color}28`, background:'rgba(3,11,29,0.72)' }}>
                    <div style={{ padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between',
                      borderBottom:`1px solid ${ap.color}18`, background:`${ap.color}08` }}>
                      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                        <span style={{ fontSize:14 }}>{ap.icon}</span>
                        <span style={{ fontSize:12.5, fontWeight:600, color:'#fff' }}>{ap.name.split(' ')[0]}</span>
                      </div>
                      <span style={{ fontSize:11, color:ap.color, display:'flex', alignItems:'center', gap:4 }}>
                        <span style={{ width:5, height:5, borderRadius:'50%', background:ap.color, display:'inline-block' }} /> Live
                      </span>
                    </div>
                    <div style={{ padding:14, display:'flex', flexDirection:'column', gap:9 }}>
                      {ap.features.map((f,i) => (
                        <div key={f} style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
                          padding:'9px 12px', borderRadius:11, background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ display:'flex', alignItems:'center', gap:7 }}>
                            <span style={{ width:5, height:5, borderRadius:'50%', background:ap.color, opacity:.75+i*.07, display:'inline-block' }} />
                            <span style={{ fontSize:11.5, color:'#B6C2D9' }}>{f}</span>
                          </div>
                          <span style={{ fontSize:10, fontFamily:'monospace', color:`${ap.color}bb` }}>
                            {['Active','Synced','Live','Ready'][i%4]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
