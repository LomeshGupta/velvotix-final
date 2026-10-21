import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/SEOHead";
import { SEO_PAGES } from "../data/seoPages";

const SITE = "https://velvotix.com";

function Arrow() {
  return <span aria-hidden="true" className="vtx-arrow">↗</span>;
}

function Breadcrumbs({ current }) {
  return (
    <nav aria-label="Breadcrumb" className="vtx-breadcrumbs">
      <Link to="/">Home</Link><span aria-hidden="true">/</span>
      <Link to="/services">Services</Link><span aria-hidden="true">/</span>
      <span aria-current="page">{current}</span>
    </nav>
  );
}

export default function SEOServicePage() {
  const { pathname } = useLocation();
  const page = SEO_PAGES[pathname.replace(/\/$/, "")];

  if (!page) {
    return (
      <Layout>
        <main className="vtx-not-found wrap">
          <p className="vtx-kicker">PAGE NOT FOUND</p>
          <h1>We couldn't find that page.</h1>
          <p>Explore our ERP and Business Central services or contact the team.</p>
          <Link className="vtx-button vtx-button-primary" to="/services">Explore services <Arrow /></Link>
        </main>
      </Layout>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}${page.slug}#service`,
    name: page.breadcrumb,
    serviceType: page.category,
    description: page.description,
    url: `${SITE}${page.slug}`,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: ["India", "United Arab Emirates", "United Kingdom", "Singapore", "United States", "Canada"].map((name) => ({ "@type": "Country", name })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
      { "@type": "ListItem", position: 3, name: page.breadcrumb, item: `${SITE}${page.slug}` },
    ],
  };

  return (
    <Layout>
      <SEOHead title={page.title} description={page.description} path={page.slug} type="WebPage" schema={[serviceSchema, breadcrumbSchema, faqSchema]} />
      <main className="vtx-page">
        <section className="vtx-page-hero">
          <div className="wrap">
            <Breadcrumbs current={page.breadcrumb} />
            <div className="vtx-hero-grid">
              <div className="vtx-hero-copy">
                <p className="vtx-kicker"><span className="vtx-kicker-dot" />{page.category}</p>
                <h1>{page.h1}</h1>
                <p className="vtx-lead">{page.intro}</p>
                <div className="vtx-actions">
                  <Link className="vtx-button vtx-button-primary" to="/contact">Discuss your project <Arrow /></Link>
                  <Link className="vtx-button vtx-button-quiet" to="/case-studies">Explore engagement examples</Link>
                </div>
                <div className="vtx-value-points" aria-label="Delivery principles">
                  {page.valueProps.map((item) => <span key={item}><span aria-hidden="true">✓</span>{item}</span>)}
                </div>
              </div>
              <aside className="vtx-hero-side" aria-label="Service summary">
                <div className="vtx-side-top"><span className="vtx-status-dot" /> A practical starting point</div>
                <p className="vtx-side-title">Start with a clear business answer.</p>
                <p className="vtx-side-copy">{page.directAnswer}</p>
                <div className="vtx-side-divider" />
                <div className="vtx-side-foot"><span>Discovery</span><span>Design</span><span>Deliver</span></div>
              </aside>
            </div>
            <div className="vtx-trust-strip">
              <span>Business-first discovery</span><span>Documented delivery scope</span><span>Integration-aware architecture</span><span>Knowledge transfer</span>
            </div>
          </div>
        </section>

        <section className="vtx-section wrap" aria-labelledby="scope-heading">
          <div className="vtx-section-heading">
            <p className="vtx-kicker">WHAT THE WORK COVERS</p>
            <h2 id="scope-heading">Turn complex requirements into a plan your team can execute.</h2>
            <p>Scope is shaped around your current environment, process owners and target outcomes—not a one-size-fits-all package.</p>
          </div>
          <div className="vtx-content-grid">
            {page.sections.map((section, index) => (
              <article className="vtx-content-card" key={section.heading}>
                <div className="vtx-card-index">0{index + 1}</div>
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
                <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="vtx-process-section">
          <div className="wrap">
            <div className="vtx-section-heading">
              <p className="vtx-kicker">A CLEAR DELIVERY METHOD</p>
              <h2>Four stages. Clear ownership at every step.</h2>
              <p>The actual milestones and depth of each stage are agreed during discovery based on scope and complexity.</p>
            </div>
            <div className="vtx-process-grid">
              {[
                ["01", "Discover", "Map processes, stakeholders, current systems, constraints and success measures."],
                ["02", "Design", "Agree fit-gap decisions, target architecture, data flows, priorities and acceptance criteria."],
                ["03", "Deliver & validate", "Configure or build in reviewable increments; test data, permissions, integrations and exceptions."],
                ["04", "Adopt & improve", "Prepare users and support, manage cutover, measure outcomes and prioritise improvements."],
              ].map(([n, title, body]) => (
                <div className="vtx-process-step" key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="vtx-section wrap" aria-labelledby="faq-heading">
          <div className="vtx-faq-layout">
            <div className="vtx-section-heading vtx-faq-heading">
              <p className="vtx-kicker">COMMON QUESTIONS</p>
              <h2 id="faq-heading">What buyers usually need to know.</h2>
              <p>Clear answers make it easier to compare approaches and prepare an informed project discussion.</p>
              <Link className="vtx-text-link" to="/contact">Ask us about your situation <Arrow /></Link>
            </div>
            <div className="vtx-faq-list">
              {page.faqs.map((faq) => (
                <details className="vtx-faq" key={faq.q}>
                  <summary>{faq.q}<span aria-hidden="true">+</span></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="vtx-related-section">
          <div className="wrap">
            <div className="vtx-related-heading"><div><p className="vtx-kicker">RELATED SERVICES & GUIDES</p><h2>Make the next decision with context.</h2></div><Link className="vtx-text-link" to="/insights">Browse all insights <Arrow /></Link></div>
            <div className="vtx-related-grid">
              {page.related.map((path) => {
                const related = SEO_PAGES[path];
                const insightLabel = path.startsWith("/insights/") ? "Read practical guidance" : null;
                const insightTitle = {
                  "/insights/business-central-implementation-checklist": "Business Central implementation checklist",
                  "/insights/dynamics-nav-to-business-central-migration": "NAV to Business Central migration guide",
                  "/insights/custom-erp-software-vs-off-the-shelf": "Custom ERP vs off-the-shelf ERP",
                }[path];
                return (
                  <Link className="vtx-related-card" to={path} key={path}>
                    <span className="vtx-related-label">{related ? related.category : insightLabel}</span>
                    <strong>{related ? related.breadcrumb : insightTitle || path}</strong>
                    <span className="vtx-related-arrow"><Arrow /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="vtx-cta-band">
          <div className="wrap vtx-cta-inner">
            <div><p className="vtx-kicker">START WITH A CONVERSATION</p><h2>Bring us the process that needs to work better.</h2><p>Share your systems, key pain points and desired outcomes. We will help define the next useful step.</p></div>
            <Link className="vtx-button vtx-button-primary" to="/contact">Talk to Velvotix <Arrow /></Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
