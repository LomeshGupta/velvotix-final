import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import CTASection from '../components/sections/CTASection';
import { SERVICES } from '../data';

const DETAIL = {
  consulting:    { items:['Complete BC environment setup & configuration','Chart of accounts and financial structure','Dimension setup and reporting configuration','Master data migration and validation','User roles and permission matrix','Training programs and documentation','Hypercare support and post-go-live optimisation'], industries:['Manufacturing','Trading','Distribution','Services','Retail'] },
  development:   { items:['AL extension development for Business Central','Custom pages, reports and codeunits','React.js enterprise applications','Next.js portal development','Progressive Web App (PWA) development','API development and documentation','Code reviews and technical audits'], industries:['All Industries'] },
  support:       { items:['Dedicated functional consultant hours','Technical developer on-demand','Monthly BC updates and regression testing','Issue resolution SLAs','User training and onboarding','Proactive health checks','Quarterly optimisation reviews'], industries:['All Industries'] },
  integration:   { items:['Azure Logic Apps and Power Automate flows','REST and SOAP API integrations','Third-party SaaS connector development','EDI and B2B integration setup','E-commerce platform integrations','Payment gateway integrations','Integration monitoring and alerting'], industries:['E-commerce','Manufacturing','Distribution','Finance'] },
  modernisation: { items:['Legacy NAV to BC upgrade planning','On-premise to cloud migration','Data migration and cleansing','Custom code conversion to AL','Process re-engineering and optimisation','Parallel running and cutover planning','Performance tuning and optimisation'], industries:['All Industries'] },
  apps:          { items:['Custom PWA development','Mobile-first ERP interfaces','Customer & vendor portals','Offline-capable applications','Push notification systems','Cross-platform deployment','Performance optimisation'], industries:['Retail','Distribution','Field Services'] },
};

export default function SolutionsPage() {
  const [activeId, setActiveId] = useState('consulting');
  const active = SERVICES.find(s => s.id === activeId);
  const detail = DETAIL[activeId];

  return (
    <Layout>
      {/* Hero */}
      <section style={{ paddingTop:100, paddingBottom:48, background:'radial-gradient(ellipse 80% 50% at 50% 0%,rgba(0,153,255,.1) 0%,transparent 60%)' }}>
        <div className="wrap" style={{ textAlign:'center' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
            <span className="badge badge-b" style={{ marginBottom:16, display:'inline-flex' }}>Solutions</span>
            <h1 className="sh f-display" style={{ fontSize:'clamp(1.9rem,4.5vw,3.2rem)', marginBottom:14 }}>
              Complete Business Central <span className="g-blue">Solutions</span>
            </h1>
            <p className="sp" style={{ maxWidth:580, margin:'0 auto' }}>
              From implementation to ongoing support — everything your enterprise needs to run Business Central at its best, delivered globally.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop:0 }}>
        <div className="wrap">
          <div className="g-solutions">
            {/* Sidebar — horizontal scroll on mobile */}
            <div style={{ position:'sticky', top:80, alignSelf:'start' }}>
              <div style={{ display:'flex', gap:6, overflowX:'auto', paddingBottom:4, WebkitOverflowScrolling:'touch', scrollbarWidth:'none' }}
                   className="lg:flex-col lg:overflow-visible">
                {SERVICES.map(s => {
                  const isA = activeId === s.id;
                  return (
                    <button key={s.id} onClick={() => setActiveId(s.id)} style={{
                      display:'flex', alignItems:'center', gap:10, padding:'11px 14px', borderRadius:12,
                      cursor:'pointer', flexShrink:0, whiteSpace:'nowrap',
                      border:`1px solid ${isA ? s.color+'40' : 'transparent'}`,
                      background: isA ? `${s.color}10` : 'transparent',
                      WebkitTapHighlightColor:'transparent',
                    }}>
                      <span style={{ fontSize:18 }}>{s.icon}</span>
                      <span style={{ fontSize:13.5, fontWeight:500, color: isA ? 'var(--text)' : 'var(--text2)' }}>
                        {s.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail */}
            <motion.div key={activeId} initial={{ opacity:0, x:16 }} animate={{ opacity:1, x:0 }} transition={{ duration:.32 }}>
              {active && detail && (
                <div style={{ borderRadius:20, padding:'clamp(22px,4vw,40px)',
                  border:`1px solid ${active.color}25`, background:`linear-gradient(135deg,${active.color}08,transparent 55%)` }}>
                  <div style={{ display:'flex', alignItems:'flex-start', gap:16, marginBottom:22 }}>
                    <div style={{ width:54, height:54, borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center',
                      fontSize:24, background:`${active.color}18`, flexShrink:0 }}>{active.icon}</div>
                    <div>
                      <div style={{ fontSize:12.5, fontWeight:600, color:active.color, marginBottom:4 }}>{active.sub}</div>
                      <h2 className="f-display" style={{ fontSize:'clamp(1.2rem,2.6vw,1.7rem)', fontWeight:700, color:'var(--text)' }}>{active.title}</h2>
                    </div>
                  </div>

                  <p style={{ fontSize:14.5, lineHeight:1.75, color:'var(--text2)', marginBottom:26 }}>{active.desc}</p>

                  <h3 style={{ fontSize:13, fontWeight:600, color:'var(--text)', marginBottom:14 }}>What's included:</h3>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:10, marginBottom:26 }} className="sm:grid-cols-2">
                    {detail.items.map(d => (
                      <div key={d} style={{ display:'flex', alignItems:'flex-start', gap:9 }}>
                        <span style={{ color:active.color, fontSize:14, flexShrink:0, marginTop:1 }}>✓</span>
                        <span style={{ fontSize:13.5, color:'var(--text2)' }}>{d}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom:26 }}>
                    <div style={{ fontSize:11, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--text3)', marginBottom:10 }}>Industries</div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                      {detail.industries.map(ind => (
                        <span key={ind} style={{ padding:'5px 14px', borderRadius:10, fontSize:12.5, fontWeight:500,
                          background:`${active.color}10`, color:active.color, border:`1px solid ${active.color}22` }}>
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop:'1px solid var(--border)', paddingTop:22 }}>
                    <Link to="/contact" className="btn btn-blue"
                      style={{ background:`linear-gradient(135deg,${active.color},${active.color}cc)`, boxShadow:`0 4px 18px ${active.color}35` }}>
                      Get Started →
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
