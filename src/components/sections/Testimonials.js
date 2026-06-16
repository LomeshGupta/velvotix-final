import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data';

export default function Testimonials() {
  return (
    <section className="sec">
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:44 }}>
          <span className="badge badge-o" style={{ marginBottom:14, display:'inline-flex' }}>Client Voices</span>
          <h2 className="sh f-display">What Our Clients <span className="g-blue">Say</span></h2>
        </motion.div>

        <div className="g-auto-md">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i * .1 }}
              className="card" style={{ padding:26 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:18 }}>
                <span style={{ fontSize:28, color:'#0099FF', opacity:.35, lineHeight:1 }}>❝</span>
                <span style={{ color:'#FF7A00', fontSize:13, letterSpacing:2 }}>{'★'.repeat(t.stars)}</span>
              </div>
              <p style={{ fontSize:14, lineHeight:1.78, color:'var(--text2)', fontStyle:'italic', marginBottom:24 }}>
                "{t.quote}"
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{
                  width:38, height:38, borderRadius:'50%', flexShrink:0,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:14, fontWeight:700, color:'#fff',
                  background:'linear-gradient(135deg,#0099FF,#00C2FF)',
                }}>
                  {t.role.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize:14, fontWeight:600, color:'var(--text)' }}>{t.role}</div>
                  <div style={{ fontSize:12, color:'#0099FF', marginTop:2 }}>{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
