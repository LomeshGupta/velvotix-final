import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/SEOHead";
import { INSIGHTS } from "../data/insights";

const SITE = "https://velvotix.com";

export default function InsightsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/insights#webpage`,
    name: "ERP, Business Central and Digital Transformation Insights",
    url: `${SITE}/insights`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: INSIGHTS.map((article, index) => ({
        "@type": "ListItem", position: index + 1,
        url: `${SITE}${article.slug}`, name: article.title,
      })),
    },
  };

  return <Layout>
    <SEOHead title="ERP & Business Central Insights | Velvotix" description="Practical guides to Business Central implementation, NAV migration, ERP selection, custom software, integrations and digital transformation planning." path="/insights" type="CollectionPage" schema={[collectionSchema]} />
    <main className="vtx-page">
      <section className="vtx-page-hero vtx-insights-hero"><div className="wrap">
        <nav aria-label="Breadcrumb" className="vtx-breadcrumbs"><Link to="/">Home</Link><span>/</span><span aria-current="page">Insights</span></nav>
        <p className="vtx-kicker"><span className="vtx-kicker-dot" /> RESEARCH, CHECKLISTS & PRACTICAL GUIDANCE</p>
        <h1>Make better ERP and digital decisions before the project starts.</h1>
        <p className="vtx-lead">Straightforward guidance for teams planning Business Central implementation, modernising legacy NAV, comparing ERP options or connecting custom applications. Each guide focuses on decisions, risks and practical next steps.</p>
      </div></section>
      <section className="vtx-section wrap">
        <div className="vtx-article-list-grid">{INSIGHTS.map((article, index) => <article className="vtx-article-card" key={article.slug}>
          <div className="vtx-article-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
          <div className="vtx-article-card-index">0{index + 1}</div>
          <h2><Link to={article.slug}>{article.title}</Link></h2>
          <p>{article.summary}</p>
          <Link className="vtx-text-link" to={article.slug}>Read the guide <span className="vtx-arrow" aria-hidden="true">↗</span></Link>
        </article>)}</div>
      </section>
      <section className="vtx-related-section"><div className="wrap vtx-insights-bottom"><div><p className="vtx-kicker">PUT THE GUIDANCE INTO PRACTICE</p><h2>Need help turning an idea into a plan?</h2><p>Bring your process map, ERP questions or integration challenge to a first conversation.</p></div><Link className="vtx-button vtx-button-primary" to="/contact">Discuss your requirements <span className="vtx-arrow" aria-hidden="true">↗</span></Link></div></section>
    </main>
  </Layout>;
}
