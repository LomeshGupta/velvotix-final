import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import CTASection from '../components/sections/CTASection';

const TEAM = [
  { icon:'👔', title:'Functional Consultants', color:'#0099FF',
    desc:'Business Central consultants with deep domain knowledge across manufacturing, trading, distribution, and services — deployable globally across time zones.',
    items:['BC Functional Setup','Process Mapping','User Training','Change Management'] },
  { icon:'💻', title:'Technical Consultants', color:'#FF7A00',
    desc:'Expert AL developers, integration architects, and web engineers who build production-grade BC extensions, APIs, and enterprise applications.',
    items:['AL Development','API Architecture','React / Next.js','Azure Services'] },
  { icon:'👥', title:'Dedicated Teams', color:'#00D9FF',
    desc:'Full embedded teams or individual resource augmentation — flexible engagement models that scale with your demands, any geography.',
    items:['Full Project Teams','Resource Augmentation','Sprint Teams','Long-term Partners'] },
];

const MODELS = [
  { name:'Project-Based', color:'#0099FF',
    desc:'Defined scope, timeline and deliverables. Perfect for implementations, migrations, and custom development across any geography.',
    items:['Fixed price or T&M','Project manager assigned','Regular sprint demos','Documentation included'] },
  { name:'Retainer Support', color:'#FF7A00',
    desc:'Ongoing monthly hours for functional and technical support. Ideal for post-go-live maintenance covering your local business hours.',
    items:['Monthly hour bundles','Priority response SLA','Dedicated resource','Monthly reporting'] },
  { name:'Dedicated Resource', color:'#00D9FF',
    desc:'A full-time Velvotix consultant embedded in your team — the most seamless extension of your internal capability, available across time zones.',
    items:['Full-time equivalent','Your timezone & hours','Direct team integration','Scalable capacity'] },
];

export default function ServicesPage() {
  return (
    <Layout>
      <section style={{ paddingTop:100, paddingBottom:48, background:'radial-gradient(ellipse 80% 50% at 50% 0%,rgba(0,217,255,.07) 0%,transparent 60%)' }}>
        <div className="wrap" style={{ textAlign:'center' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            <span className="badge badge-b" style={{ marginBottom:16, display:'inline-flex' }}>Services</span>
            <h1 className="sh f-display" style={{ fontSize:'clamp(1.9rem,4.5vw,3.2rem)', marginBottom:14 }}>
              Your Extended <span className="g-blue">ERP Team</span>
            </h1>
            <p className="sp" style={{ maxWidth:600, margin:'0 auto 12px' }}>
              Flexible engagement models that give you expert Business Central capability exactly when and how you need it — wherever your business operates.
            </p>
            <p style={{ fontSize:12, color:'var(--text3)' }}>🌍 Remote-first · Globally available · All time zones covered</p>
          </motion.div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop:0 }}>
        <div className="wrap">
          {/* Team types */}
          <div className="g-auto-md" style={{ marginBottom:64 }}>
            {TEAM.map((r, i) => (
              <motion.div key={r.title}
                initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i * .1 }}
                className="card" style={{ padding:26, background:`linear-gradient(135deg,${r.color}08,transparent)`, borderColor:`${r.color}22` }}>
                <div style={{ width:52, height:52, borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:24, marginBottom:18, background:`${r.color}14` }}>{r.icon}</div>
                <h3 className="f-display" style={{ fontSize:18, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{r.title}</h3>
                <p style={{ fontSize:13.5, lineHeight:1.72, color:'var(--text2)', marginBottom:18 }}>{r.desc}</p>
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

          {/* Engagement models */}
          <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ textAlign:'center', marginBottom:36 }}>
            <h2 className="sh f-display" style={{ marginBottom:8 }}>Engagement Models</h2>
            <p style={{ color:'var(--text2)', fontSize:15 }}>Choose how you want to work with us</p>
          </motion.div>

          <div className="g-auto-md">
            {MODELS.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i * .1 }}
                className="card" style={{ padding:24 }}>
                <div style={{ width:38, height:38, borderRadius:11, display:'flex', alignItems:'center',
                  justifyContent:'center', marginBottom:18, background:`${m.color}14` }}>
                  <span style={{ width:12, height:12, borderRadius:'50%', background:m.color, display:'block' }} />
                </div>
                <h3 style={{ fontSize:17, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{m.name}</h3>
                <p style={{ fontSize:13.5, lineHeight:1.72, color:'var(--text2)', marginBottom:18 }}>{m.desc}</p>
                <div style={{ display:'flex', flexDirection:'column', gap:9, marginBottom:22 }}>
                  {m.items.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'var(--text2)' }}>
                      <span style={{ width:5, height:5, borderRadius:'50%', background:m.color, display:'block', flexShrink:0 }} />{f}
                    </div>
                  ))}
                </div>
                <Link to="/contact" style={{ fontSize:13.5, fontWeight:600, color:m.color }}>Get a quote →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
