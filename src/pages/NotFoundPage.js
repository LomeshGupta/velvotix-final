import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/SEOHead";

export default function NotFoundPage() {
  return <Layout>
    <SEOHead title="Page Not Found | Velvotix" description="The page you requested could not be found. Explore Velvotix ERP and Business Central services." path="/404" noIndex />
    <main className="vtx-not-found wrap">
      <p className="vtx-kicker">404 · PAGE NOT FOUND</p>
      <h1>This page has moved or doesn't exist.</h1>
      <p>Find the ERP, Business Central or digital transformation information you were looking for.</p>
      <div className="vtx-actions"><Link className="vtx-button vtx-button-primary" to="/">Back to home <span aria-hidden="true">↗</span></Link><Link className="vtx-button vtx-button-quiet" to="/services">View services</Link></div>
    </main>
  </Layout>;
}
