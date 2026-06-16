import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const COUNTRIES = ['India','UAE','UK','Singapore','USA','Canada'];

export default function CTASection() {
  return (
    <section className="sec" style={{ position:'relative', overflow:'hidden' }}>
      <div className="wrap" style={{ maxWidth:900 }}>
        <motion.div
          initial={{ opacity:0, scale:.96 }} whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true }} transition={{ duration:.55 }}
          style={{
            position:'relative', borderRadius:26, textAlign:'center', overflow:'hidden',
            padding:'clamp(36px,7vw,72px) clamp(18px,5vw,48px)',
            background:'linear-gradient(135deg,rgba(0,153,255,.1),rgba(0,194,255,.06) 50%,rgba(255,122,0,.07))',
            border:'1px solid rgba(0,153,255,.22)',
          }}
        >
          {/* glow blobs */}
          <div style={{ position:'absolute', top:0, left:'50%', transform:'translate(-50%,-50%)',
            width:280, height:100, background:'rgba(0,153,255,.2)', filter:'blur(56px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:0, right:'25%', transform:'translateY(50%)',
            width:200, height:90, background:'rgba(255,122,0,.16)', filter:'blur(52px)', pointerEvents:'none' }} />

          {/* spinning orbit decoration */}
          <div className="anim-cw" style={{
            position:'absolute', top:20, right:20, width:70, height:70, borderRadius:'50%',
            border:'1px solid rgba(0,153,255,.18)', pointerEvents:'none',
          }}>
            <span style={{ position:'absolute', top:0, left:'50%', transform:'translate(-50%,-50%)',
              width:7, height:7, borderRadius:'50%', background:'#0099FF', display:'block' }} />
          </div>

          <div style={{ position:'relative', zIndex:1 }}>
            <span className="badge badge-b" style={{ marginBottom:16, display:'inline-flex' }}>
              ✨ Free Consultation — Any Time Zone
            </span>

            <h2 className="sh f-display" style={{ marginBottom:14 }}>
              Ready to Transform Your{' '}
              <span className="g-blue">Business Central?</span>
            </h2>

            <p style={{ fontSize:'clamp(14px,2vw,16px)', lineHeight:1.75, color:'var(--text2)',
              maxWidth:540, margin:'0 auto 22px' }}>
              Schedule a free consultation with our Business Central experts. We'll analyse your setup
              and design a transformation roadmap — wherever you are in the world.
            </p>

            <div style={{ display:'flex', justifyContent:'center', gap:8, flexWrap:'wrap', marginBottom:26 }}>
              {COUNTRIES.map(c => (
                <span key={c} className="pill" style={{ fontSize:11.5 }}>{c}</span>
              ))}
            </div>

            <div style={{ display:'flex', justifyContent:'center', gap:14, flexWrap:'wrap' }}>
              <Link to="/contact" className="btn btn-blue btn-lg">📅 Schedule Free Consultation</Link>
              <Link to="/products" className="btn btn-out btn-lg">Explore Products →</Link>
            </div>

            <p style={{ fontSize:12, color:'var(--text3)', marginTop:16 }}>
              No commitment required · Response within 24 hours · Available globally
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
