import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import CTASection from "../components/sections/CTASection";
import { SERVICES } from "../data";
import SolutionsSEO from "../meta/solutions";
import { useTheme } from "../lib/ThemeContext";
import { themedAccent } from "../lib/themeAccent";

const DETAIL = {
  consulting: {
    items: [
      "Complete BC environment setup & configuration",
      "Chart of accounts and financial structure",
      "Dimension setup and reporting configuration",
      "Master data migration and validation",
      "User roles and permission matrix",
      "Training programs and documentation",
      "Hypercare support and post-go-live optimisation",
    ],
    industries: [
      "Manufacturing",
      "Trading",
      "Distribution",
      "Services",
      "Retail",
    ],
  },
  development: {
    items: [
      "AL extension development for Business Central",
      "Custom pages, reports and codeunits",
      "React.js enterprise applications",
      "Next.js portal development",
      "Progressive Web App (PWA) development",
      "API development and documentation",
      "Code reviews and technical audits",
    ],
    industries: ["All Industries"],
  },
  support: {
    items: [
      "Dedicated functional consultant hours",
      "Technical developer on-demand",
      "Monthly BC updates and regression testing",
      "Issue resolution SLAs",
      "User training and onboarding",
      "Proactive health checks",
      "Quarterly optimisation reviews",
    ],
    industries: ["All Industries"],
  },
  integration: {
    items: [
      "Azure Logic Apps and Power Automate flows",
      "REST and SOAP API integrations",
      "Third-party SaaS connector development",
      "EDI and B2B integration setup",
      "E-commerce platform integrations",
      "Payment gateway integrations",
      "Integration monitoring and alerting",
    ],
    industries: ["E-commerce", "Manufacturing", "Distribution", "Finance"],
  },
  modernisation: {
    items: [
      "Legacy NAV to BC upgrade planning",
      "On-premise to cloud migration",
      "Data migration and cleansing",
      "Custom code conversion to AL",
      "Process re-engineering and optimisation",
      "Parallel running and cutover planning",
      "Performance tuning and optimisation",
    ],
    industries: ["All Industries"],
  },
  apps: {
    items: [
      "Custom PWA development",
      "Mobile-first ERP interfaces",
      "Customer & vendor portals",
      "Offline-capable applications",
      "Push notification systems",
      "Cross-platform deployment",
      "Performance optimisation",
    ],
    industries: ["Retail", "Distribution", "Field Services"],
  },
};

export default function SolutionsPage() {
  const [activeId, setActiveId] = useState("consulting");
  const { theme } = useTheme();
  const active = SERVICES.find((service) => service.id === activeId);
  const activeColor = active ? themedAccent(active.color, theme) : "var(--blue)";
  const detail = DETAIL[activeId];

  return (
    <Layout>
      <SolutionsSEO />
      <main className="solutions-page">
        <section className="solutions-hero">
          <div className="wrap solutions-hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="badge badge-b solutions-eyebrow">Solutions</span>
              <h1 className="sh f-display solutions-title">
                Complete Business Central <span className="g-blue">Solutions</span>
              </h1>
              <p className="sp solutions-intro">
                From implementation to ongoing support — practical ERP, integration and application services shaped around how your business works.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="solutions-section sec">
          <div className="wrap">
            <div className="solutions-layout">
              <nav className="solutions-nav-shell" aria-label="Solution categories">
                <p className="solutions-nav-label">Explore capabilities</p>
                <div className="solutions-tabs" role="group" aria-label="Solution areas">
                  {SERVICES.map((service) => {
                    const isActive = activeId === service.id;
                    const serviceAccent = themedAccent(service.color, theme);
                    return (
                      <button
                        key={service.id}
                        id={`solution-tab-${service.id}`}
                        type="button"
                        aria-pressed={isActive}
                        aria-controls="solution-panel"
                        onClick={() => setActiveId(service.id)}
                        className={`solutions-tab${isActive ? " is-active" : ""}`}
                        style={{ "--solution-accent": serviceAccent }}
                      >
                        <span className="solutions-tab-icon" aria-hidden="true">{service.icon}</span>
                        <span className="solutions-tab-label">{service.title}</span>
                        <span className="solutions-tab-arrow" aria-hidden="true">→</span>
                      </button>
                    );
                  })}
                </div>
                <p className="solutions-swipe-hint">Swipe to explore <span aria-hidden="true">→</span></p>
              </nav>

              {active && detail && (
                <motion.article
                  key={activeId}
                  id="solution-panel"
                  aria-labelledby={`solution-tab-${activeId}`}
                  aria-live="polite"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24 }}
                  className="solutions-detail-card"
                  style={{ "--solution-accent": activeColor }}
                >
                  <header className="solutions-detail-header">
                    <div className="solutions-detail-icon" aria-hidden="true">{active.icon}</div>
                    <div className="solutions-detail-heading">
                      <p className="solutions-detail-subtitle">{active.sub}</p>
                      <h2 className="f-display">{active.title}</h2>
                    </div>
                  </header>

                  <p className="solutions-detail-description">{active.desc}</p>

                  <section className="solutions-includes" aria-labelledby="solutions-includes-heading">
                    <h3 id="solutions-includes-heading">What’s included</h3>
                    <div className="solutions-includes-grid">
                      {detail.items.map((item) => (
                        <div className="solutions-include-item" key={item}>
                          <span className="solutions-check" aria-hidden="true">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="solutions-industries" aria-labelledby="solutions-industries-heading">
                    <h3 id="solutions-industries-heading">Industries and workflows</h3>
                    <div className="solutions-industry-list">
                      {detail.industries.map((industry) => (
                        <span className="solutions-industry-chip" key={industry}>{industry}</span>
                      ))}
                    </div>
                  </section>

                  <div className="solutions-detail-actions">
                    <Link to="/contact" className="btn btn-blue solutions-cta">
                      Discuss your requirements <span aria-hidden="true">→</span>
                    </Link>
                    <span className="solutions-cta-note">Scope and feasibility discussed before commitment.</span>
                  </div>
                </motion.article>
              )}
            </div>
          </div>
        </section>
      </main>
      <CTASection />
    </Layout>
  );
}
