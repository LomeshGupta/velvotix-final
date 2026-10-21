import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '../../data';
import { useTheme } from '../../lib/ThemeContext';
import { themedAccent } from '../../lib/themeAccent';

export default function Process() {
  const [active, setActive] = useState(0);
  const { theme } = useTheme();
  return (
    <section className="sec" style={{ position:'relative', overflow:'hidden' }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,153,255,.04) 0%, transparent 70%)',
      }} />
      <div className="wrap" style={{ position:'relative' }}>
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:44 }}>
          <span className="badge badge-b" style={{ marginBottom:12, display:'inline-flex' }}>Our Process</span>
          <h2 className="sh f-display" style={{ marginBottom:10 }}>
            How We <span className="g-blue">Work With You</span>
          </h2>
          <p className="sp" style={{ maxWidth:540, margin:'0 auto' }}>
            A practical delivery sequence that surfaces assumptions early, keeps decisions visible and validates the agreed outcomes.
          </p>
        </motion.div>

        <div className="g-auto-sm">
          {PROCESS.map((step, i) => {
            const isA = active === i;
            const accent = themedAccent(step.color, theme);
            return (
              <motion.div key={step.n}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*.07 }}
                onClick={() => setActive(i)}
                className="card" style={{
                  padding:20, cursor:'pointer',
                  borderColor: isA ? `${accent}40` : 'var(--border)',
                  background: isA ? `linear-gradient(135deg,${accent}12,${accent}06)` : 'var(--card)',
                  boxShadow: isA ? `0 0 26px ${accent}14` : 'none',
                  transform: isA ? 'translateY(-2px)' : 'none',
                }}>
                <div className="f-mono" style={{ fontSize:11, color:`${accent}90`, marginBottom:10 }}>{step.n}</div>
                <div style={{ width:44, height:44, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:20, marginBottom:12, background: isA ? `${accent}1a` : 'var(--icon-surface)' }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize:14.5, fontWeight:600, color:'var(--text)', marginBottom:8 }}>{step.title}</h3>
                <p style={{ fontSize:12.5, lineHeight:1.65, color:'var(--text2)' }}>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
