import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/SEOHead";
import { INSIGHTS } from "../data/insights";

const SITE = "https://velvotix.com";

export default function InsightArticlePage() {
  const { pathname } = useLocation();
  const article = INSIGHTS.find((entry) => entry.slug === pathname.replace(/\/$/, ""));

  if (!article) return <Layout><main className="vtx-not-found wrap"><p className="vtx-kicker">GUIDE NOT FOUND</p><h1>This guide is unavailable.</h1><Link className="vtx-button vtx-button-primary" to="/insights">Back to insights</Link></main></Layout>;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE}${article.slug}#article`,
    headline: article.title,
    description: article.description,
    url: `${SITE}${article.slug}`,
    author: { "@type": "Organization", "@id": `${SITE}/#organization`, name: "Velvotix Solutions LLP" },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${article.slug}#webpage` },
    inLanguage: "en",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE}${article.slug}` },
    ],
  };

  return <Layout>
    <SEOHead title={article.seoTitle} description={article.description} path={article.slug} type="Article" schema={[articleSchema, breadcrumbSchema]} />
    <main className="vtx-page vtx-article-page">
      <article>
        <header className="vtx-article-hero"><div className="wrap vtx-article-narrow">
          <nav aria-label="Breadcrumb" className="vtx-breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/insights">Insights</Link><span>/</span><span aria-current="page">{article.category}</span></nav>
          <p className="vtx-kicker"><span className="vtx-kicker-dot" />{article.category} <span className="vtx-reading-time">· {article.readTime}</span></p>
          <h1>{article.title}</h1><p className="vtx-article-summary">{article.summary}</p>
          <div className="vtx-article-byline"><span className="vtx-byline-mark">V</span><span><strong>Velvotix Solutions</strong><small>ERP, Business Central and application delivery</small></span></div>
        </div></header>
        <div className="wrap vtx-article-body-grid">
          <aside className="vtx-article-toc"><p>IN THIS GUIDE</p><ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading.replace(/^\d+\.\s*/, "")}</a></li>)}</ol><Link className="vtx-text-link" to="/contact">Talk through your project <span aria-hidden="true">↗</span></Link></aside>
          <div className="vtx-article-body">
            <p className="vtx-article-direct-answer">{article.summary}</p>
            {article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>)}
            <aside className="vtx-article-note"><strong>Project-specific note</strong><p>Use this guide to frame discovery questions. A production plan still needs to be validated against your Business Central or NAV version, business processes, data, integrations and applicable local requirements.</p></aside>
            <div className="vtx-article-related"><h2>Related services</h2><div>{article.related.map((path) => <Link className="vtx-related-card" to={path} key={path}><strong>{path.startsWith("/insights/") ? (INSIGHTS.find((i) => i.slug === path)?.title || path) : path === "/business-central-implementation" ? "Business Central implementation" : path === "/business-central-development" ? "Business Central development" : path === "/business-central-support" ? "Business Central support" : path === "/business-central-financial-management" ? "Business Central financial management" : path === "/custom-erp-software" ? "Custom ERP software" : path === "/digital-transformation" ? "Digital transformation" : path === "/erp-implementation-partner" ? "ERP implementation partner" : path === "/industries/manufacturing-erp" ? "Manufacturing ERP" : path === "/industries/distribution-erp" ? "Distribution ERP" : "Explore services"}<span className="vtx-related-arrow">↗</span></strong></Link>)}</div></div>
          </div>
        </div>
      </article>
      <section className="vtx-cta-band"><div className="wrap vtx-cta-inner"><div><p className="vtx-kicker">NEED A SECOND PAIR OF EYES?</p><h2>Turn your checklist into a scoped next step.</h2><p>Discuss the current environment, key dependencies and the outcomes that would make the project worthwhile.</p></div><Link className="vtx-button vtx-button-primary" to="/contact">Contact Velvotix <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  </Layout>;
}
