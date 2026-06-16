import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import CTASection from '../components/sections/CTASection';
import { CASES } from '../data';

export default function CaseStudiesPage() {
  const [open, setOpen] = useState(null);

  return (
    <Layout>
      <section style={{ paddingTop:100, paddingBottom:48, background:'radial-gradient(ellipse 80% 50% at 50% 0%,rgba(0,153,255,.1) 0%,transparent 60%)' }}>
        <div className="wrap" style={{ textAlign:'center' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            <span className="badge badge-b" style={{ marginBottom:16, display:'inline-flex' }}>Case Studies</span>
            <h1 className="sh f-display" style={{ fontSize:'clamp(1.9rem,4.5vw,3.2rem)', marginBottom:14 }}>
              Proven Results Across <span className="g-blue">Every Industry</span>
            </h1>
            <p className="sp" style={{ maxWidth:580, margin:'0 auto 14px' }}>
              Every engagement is a story of transformation — from India to the Middle East and beyond.
            </p>
            <p style={{ fontSize:12, color:'var(--text3)' }}>🌍 Delivered across South Asia · Middle East · Europe · North America</p>
          </motion.div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop:0 }}>
        <div className="wrap" style={{ display:'flex', flexDirection:'column', gap:20 }}>
          {CASES.map((c, i) => {
            const isOpen = open === c.id;
            return (
              <motion.div key={c.id}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i * .09 }}
                className="card" style={{
                  overflow:'hidden',
                  borderColor: isOpen ? `${c.color}40` : 'var(--border)',
                  background: isOpen ? `linear-gradient(135deg,${c.color}0a,transparent)` : 'var(--card)',
                }}>
                <div style={{ height:4, background:`linear-gradient(90deg,${c.color},${c.color}44)` }} />
                <div style={{ padding:'clamp(18px,4vw,28px)' }}>
                  {/* Header row */}
                  <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:16, flexWrap:'wrap' }}>
                    <div style={{ width:46, height:46, borderRadius:13, display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:20, background:`${c.color}14`, flexShrink:0 }}>{c.icon}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:12, color:'var(--text3)' }}>{c.industry}</div>
                      <div style={{ fontSize:15, fontWeight:700, color:'var(--text)' }}>{c.client}</div>
                    </div>
                    <button onClick={() => setOpen(isOpen ? null : c.id)} style={{
                      display:'flex', alignItems:'center', gap:6, fontSize:13, fontWeight:600,
                      padding:'9px 16px', borderRadius:11, cursor:'pointer',
                      background: isOpen ? `${c.color}14` : 'var(--card)',
                      border:`1px solid ${isOpen ? `${c.color}38` : 'var(--border)'}`,
                      color: isOpen ? c.color : 'var(--text2)',
                      flexShrink:0, WebkitTapHighlightColor:'transparent',
                    }}>
                      {isOpen ? 'Hide ↑' : 'View →'}
                    </button>
                  </div>

                  <h3 className="f-display" style={{ fontSize:'clamp(14px,2vw,16px)', fontWeight:700, color:'var(--text)', marginBottom:10, lineHeight:1.45 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize:13.5, lineHeight:1.7, color:'var(--text2)' }}>{c.body}</p>

                  {/* Expandable */}
                  <motion.div initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration:.28 }} style={{ overflow:'hidden' }}>
                    <div style={{ paddingTop:18 }}>
                      <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:9, marginBottom:18 }}
                           className="sm:grid-cols-2">
                        {c.results.map(r => (
                          <div key={r} style={{ display:'flex', alignItems:'flex-start', gap:8 }}>
                            <span style={{ color:c.color, fontSize:13, flexShrink:0, marginTop:1 }}>✓</span>
                            <span style={{ fontSize:13.5, color:'var(--text2)' }}>{r}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
                        {c.tags.map(t => (
                          <span key={t} style={{ fontSize:11.5, padding:'4px 12px', borderRadius:9,
                            background:`${c.color}0e`, color:`${c.color}cc`, border:`1px solid ${c.color}1e` }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
