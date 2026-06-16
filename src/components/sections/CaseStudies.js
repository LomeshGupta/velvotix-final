import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CASES } from '../../data';

export default function CaseStudies() {
  return (
    <section className="sec">
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:14, marginBottom:40 }}>
          <div>
            <span className="badge badge-b" style={{ marginBottom:12, display:'inline-flex' }}>Case Studies</span>
            <h2 className="sh f-display">Real Results, <span className="g-blue">Real Impact</span></h2>
          </div>
          <Link to="/case-studies" className="btn btn-out" style={{ padding:'9px 18px', fontSize:13 }}>All case studies →</Link>
        </motion.div>

        <div className="g-auto-lg">
          {CASES.map((c, i) => (
            <motion.div key={c.id}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*.1 }}
              className="card" style={{ overflow:'hidden' }}>
              <div style={{ height:4, background:`linear-gradient(90deg,${c.color},${c.color}44)` }} />
              <div style={{ padding:22 }}>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                  <div style={{ width:42, height:42, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:18, background:`${c.color}14`, flexShrink:0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:11.5, color:'var(--text3)' }}>{c.industry}</div>
                    <div style={{ fontSize:14, fontWeight:600, color:'var(--text)' }}>{c.client}</div>
                  </div>
                </div>
                <h3 className="f-display" style={{ fontSize:15, fontWeight:600, color:'var(--text)', marginBottom:10, lineHeight:1.45 }}>{c.title}</h3>
                <p style={{ fontSize:13, lineHeight:1.68, color:'var(--text2)', marginBottom:18 }}>{c.body}</p>
                <div style={{ display:'flex', flexDirection:'column', gap:7, marginBottom:18 }}>
                  {c.results.slice(0,3).map(r => (
                    <div key={r} style={{ display:'flex', alignItems:'flex-start', gap:8 }}>
                      <span style={{ color:c.color, fontSize:13, flexShrink:0, marginTop:1 }}>✓</span>
                      <span style={{ fontSize:12.5, color:'var(--text2)' }}>{r}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                  {c.tags.map(t => (
                    <span key={t} style={{ fontSize:11, padding:'3px 10px', borderRadius:8,
                      background:`${c.color}0e`, color:`${c.color}cc`, border:`1px solid ${c.color}1e` }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
