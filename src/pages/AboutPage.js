import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import CTASection from '../components/sections/CTASection';
import { REGIONS } from '../data';

const VALUES = [
  { icon:'🎯', color:'#0099FF', title:'Client-First',      desc:'Every decision we make is measured against the value it creates for your enterprise.' },
  { icon:'⚡', color:'#FF7A00', title:'Delivery Speed',    desc:'We operate with urgency. Your ERP downtime is our downtime.' },
  { icon:'💻', color:'#00D9FF', title:'Technical Depth',   desc:'No shortcuts. We write production-grade code and build systems that scale.' },
  { icon:'❤️', color:'#FF5500', title:'Long Partnerships', desc:'We measure success in years, not projects. Most clients have been with us since day one.' },
];

const TEAM = [
  { icon:'👔', color:'#0099FF', title:'Functional Consultants',
    desc:'Domain experts in manufacturing, trading, distribution and services — certified and deployable globally.',
    items:['BC Functional Setup','Process Mapping','User Training','Change Management'] },
  { icon:'💻', color:'#FF7A00', title:'Technical Consultants',
    desc:'AL developers, integration architects, and full-stack engineers building production-grade BC extensions and enterprise apps.',
    items:['AL Development','API Architecture','React / Next.js','Azure Services'] },
  { icon:'👥', color:'#00D9FF', title:'Dedicated Teams',
    desc:'Full embedded teams or individual augmentation — flexible models that scale with your needs across time zones.',
    items:['Full Project Teams','Resource Augmentation','Sprint Teams','Long-term Partners'] },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section style={{ paddingTop:100, paddingBottom:48, background:'radial-gradient(ellipse 80% 50% at 50% 0%,rgba(0,153,255,.1) 0%,transparent 60%)' }}>
        <div className="wrap" style={{ textAlign:'center' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            <span className="badge badge-b" style={{ marginBottom:16, display:'inline-flex' }}>About Velvotix</span>
            <h1 className="sh f-display" style={{ fontSize:'clamp(1.9rem,4.5vw,3.2rem)', marginBottom:18 }}>
              A Global ERP Partner <span className="g-blue">Built for Enterprises</span>
            </h1>
            <p className="sp" style={{ maxWidth:760, margin:'0 auto' }}>
              Velvotix is a specialised Business Central consultancy and development studio. We deliver ERP implementations,
              custom applications, and integrations for enterprises across five continents — with the precision of a
              boutique firm and the capability of a global partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="sec-sm">
        <div className="wrap" style={{ maxWidth:840 }}>
          <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <div style={{ borderRadius:22, textAlign:'center', padding:'clamp(28px,6vw,52px)',
              background:'linear-gradient(135deg,rgba(0,153,255,.07),rgba(255,122,0,.05))', border:'1px solid var(--border)' }}>
              <p className="f-display" style={{ fontSize:'clamp(1.05rem,2.4vw,1.45rem)', fontWeight:600, lineHeight:1.65, color:'var(--text)' }}>
                "We believe every enterprise deserves an ERP that works{' '}
                <span className="g-blue">as intelligently as its people</span>{' '}
                — regardless of geography or industry."
              </p>
              <p style={{ marginTop:14, fontSize:13, color:'var(--text2)' }}>— The Velvotix Team</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global presence */}
      <section className="sec-sm">
        <div className="wrap">
          <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:28 }}>
            <span className="badge badge-b" style={{ marginBottom:12, display:'inline-flex' }}>🌍 Global Presence</span>
            <h2 className="f-display" style={{ fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:700, color:'var(--text)', marginBottom:8 }}>
              Remote-First, Globally Available
            </h2>
            <p style={{ color:'var(--text2)', maxWidth:580, fontSize:14, lineHeight:1.72 }}>
              Our team is distributed across time zones so we're always present when you need us —
              whether you're closing a quarter in London or opening a warehouse in Singapore.
            </p>
          </motion.div>
          <div className="g-auto-xs">
            {REGIONS.map((r, i) => (
              <motion.div key={r.name}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i * .06 }}
                className="card" style={{ padding:20, textAlign:'center' }}>
                <div style={{ fontSize:30, marginBottom:8 }}>{r.flag}</div>
                <div style={{ fontSize:14, fontWeight:600, color:'var(--text)', marginBottom:4 }}>{r.name}</div>
                <div style={{ fontSize:11.5, color:'var(--text3)' }}>{r.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec-sm">
        <div className="wrap">
          <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:28 }}>
            <h2 className="f-display" style={{ fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:700, color:'var(--text)' }}>
              What We Stand For
            </h2>
          </motion.div>
          <div className="g-auto-sm">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i * .08 }}
                className="card" style={{ padding:22 }}>
                <div style={{ width:42, height:42, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:20, marginBottom:14, background:`${v.color}14` }}>{v.icon}</div>
                <h3 style={{ fontSize:15.5, fontWeight:700, color:'var(--text)', marginBottom:8 }}>{v.title}</h3>
                <p style={{ fontSize:13.5, lineHeight:1.68, color:'var(--text2)' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="sec-sm">
        <div className="wrap">
          <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:28 }}>
            <h2 className="f-display" style={{ fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:700, color:'var(--text)', marginBottom:8 }}>
              Our People
            </h2>
            <p style={{ color:'var(--text2)', fontSize:14 }}>
              Certified consultants, seasoned developers, and dedicated support specialists.
            </p>
          </motion.div>
          <div className="g-auto-md">
            {TEAM.map((r, i) => (
              <motion.div key={r.title}
                initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i * .1 }}
                className="card" style={{ padding:26, background:`linear-gradient(135deg,${r.color}08,transparent)`, borderColor:`${r.color}22` }}>
                <div style={{ width:50, height:50, borderRadius:15, display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:23, marginBottom:16, background:`${r.color}14` }}>{r.icon}</div>
                <h3 className="f-display" style={{ fontSize:17, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{r.title}</h3>
                <p style={{ fontSize:13.5, lineHeight:1.72, color:'var(--text2)', marginBottom:16 }}>{r.desc}</p>
                <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
                  {r.items.map(c => (
                    <div key={c} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13.5, color:'var(--text2)' }}>
                      <span style={{ color:r.color }}>✓</span>{c}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
