import React from 'react';
import { motion } from 'framer-motion';
import { METRICS } from '../../data';
import { useCounter } from '../../lib/useCounter';

function MetricCard({ m, i }) {
  const { count, ref } = useCounter(m.val);
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ delay:i*.07 }}
      className="card" style={{ padding:'22px 16px', textAlign:'center' }}>
      <div className="f-display g-blue" style={{ fontSize:'clamp(1.8rem,4vw,2.2rem)', fontWeight:700, marginBottom:4 }}>
        {count.toLocaleString()}{m.suf}
      </div>
      <div style={{ fontSize:13.5, fontWeight:600, color:'var(--text)', marginBottom:3 }}>{m.label}</div>
      <div style={{ fontSize:11.5, color:'var(--text3)' }}>{m.sub}</div>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section className="sec" style={{
      background:'linear-gradient(135deg,rgba(0,153,255,.04) 0%,transparent 50%,rgba(255,122,0,.03) 100%)',
      borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)',
    }}>
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:40 }}>
          <h2 className="sh f-display" style={{ marginBottom:10 }}>
            Why <span className="g-blue">Velvotix</span>
          </h2>
          <p className="sp">Numbers that reflect real enterprise commitment and delivered results — across the globe.</p>
        </motion.div>
        <div className="g-auto-xs">
          {METRICS.map((m, i) => <MetricCard key={m.label} m={m} i={i} />)}
        </div>
      </div>
    </section>
  );
}
