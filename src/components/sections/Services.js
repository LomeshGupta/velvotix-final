import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../../data';

export default function Services() {
  return (
    <section className="sec">
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:52 }}>
          <span className="badge badge-b" style={{ marginBottom:14, display:'inline-flex' }}>What We Do</span>
          <h2 className="sh f-display" style={{ marginBottom:12 }}>
            End-to-End <span className="g-blue">ERP Excellence</span>
          </h2>
          <p className="sp" style={{ maxWidth:560, margin:'0 auto' }}>
            From strategic consulting to custom development and ongoing support — we cover the full Business Central lifecycle for enterprises on every continent.
          </p>
        </motion.div>

        <div className="g-auto-md">
          {SERVICES.map((s, i) => (
            <motion.div key={s.id}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: i * .06, duration:.5 }}
              className="card" style={{ padding: 24 }}>
              <div style={{
                width:48, height:48, borderRadius:14, display:'flex', alignItems:'center',
                justifyContent:'center', fontSize:22, marginBottom:16,
                background:`${s.color}16`,
              }}>
                {s.icon}
              </div>
              <div style={{ fontSize:10.5, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:`${s.color}cc`, marginBottom:6 }}>
                {s.sub}
              </div>
              <h3 className="f-display" style={{ fontSize:17, fontWeight:600, color:'var(--text)', marginBottom:10 }}>{s.title}</h3>
              <p style={{ fontSize:13.5, lineHeight:1.68, color:'var(--text2)', marginBottom:18 }}>{s.desc}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {s.tags.map(t => (
                  <span key={t} style={{ display:'flex', alignItems:'center', gap:5, fontSize:12, color:'var(--text2)' }}>
                    <span style={{ width:4, height:4, borderRadius:'50%', background:s.color, display:'inline-block' }} />{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:40 }}>
          <Link to="/solutions" className="btn btn-out">View all solutions →</Link>
        </div>
      </div>
    </section>
  );
}
