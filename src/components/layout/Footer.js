import React from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { REGIONS } from "../../data";
import Chatbot from "../ui/AIChatbot";

const COLS = [
  {
    title: "Business Central",
    links: [
      { label: "Implementation", path: "/business-central-implementation" },
      { label: "Financial Management", path: "/business-central-financial-management" },
      { label: "AL Development", path: "/business-central-development" },
      { label: "API & Integration Services", path: "/business-central-integration-services" },
      { label: "Support & Optimisation", path: "/business-central-support" },
      { label: "ERP Implementation Partner", path: "/erp-implementation-partner" },
    ],
  },
  {
    title: "ERP & Digital",
    links: [
      { label: "Custom ERP Software", path: "/custom-erp-software" },
      { label: "Digital Transformation", path: "/digital-transformation" },
      { label: "Manufacturing ERP", path: "/industries/manufacturing-erp" },
      { label: "Distribution ERP", path: "/industries/distribution-erp" },
      { label: "Warehouse Management System", path: "/warehouse-management-system" },
      { label: "Shop-Floor Software", path: "/shop-floor-management-software" },
      { label: "Products", path: "/products" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Insights & Guides", path: "/insights" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "About Velvotix", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

/* ─── Footer — pure inline CSS responsive grid via <style> tag ─── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <Chatbot />
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          background:
            "linear-gradient(to bottom, transparent, rgba(0,153,255,.02))",
          position: "relative",
          zIndex: 1,
        }}
      >
        <style>{`
        .ft-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .ft-link-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (min-width: 640px) {
          .ft-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .ft-brand-col {
            grid-column: 1 / -1;
          }
          .ft-link-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        @media (min-width: 900px) {
          .ft-grid {
            grid-template-columns: 1.5fr 2fr;
            gap: 64px;
          }
          .ft-brand-col {
            grid-column: auto;
          }
          .ft-link-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        .ft-link:hover { color: var(--text) !important; }
        .ft-bottom {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
        }
        @media (min-width: 640px) {
          .ft-bottom {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>

        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "52px 20px 36px",
          }}
        >
          {/* Main grid */}
          <div className="ft-grid" style={{ marginBottom: 44 }}>
            {/* Brand column */}
            <div className="ft-brand-col">
              <Logo size="md" />
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: 13.5,
                  lineHeight: 1.78,
                  marginTop: 16,
                  marginBottom: 18,
                  maxWidth: 300,
                }}
              >
                Business Central consulting, ERP implementation, integration engineering and connected applications, with transparent scope and practical delivery choices.
              </p>

              {/* Region pills */}
              <p
                style={{
                  color: "var(--text3)",
                  fontSize: 12,
                  marginBottom: 10,
                }}
              >
                🌍 Delivery markets
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 20,
                }}
              >
                {REGIONS.map((r) => (
                  <span
                    key={r.name}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "4px 11px",
                      borderRadius: 99,
                      fontSize: 12,
                      fontWeight: 500,
                      background: "rgba(0,153,255,.09)",
                      color: "var(--blue)",
                      border: "1px solid rgba(0,153,255,.2)",
                    }}
                  >
                    {r.flag} {r.name}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a
                  href="mailto:Info@velvotix.com"
                  style={{
                    color: "var(--text2)",
                    fontSize: 13.5,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span>📧</span> Info@velvotix.com
                </a>
                <span
                  style={{
                    color: "var(--text2)",
                    fontSize: 13.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span>📍</span> India · Remote-first, globally available
                </span>
              </div>
            </div>

            {/* Link columns grid */}
            <div className="ft-link-grid">
              {COLS.map((col) => (
                <div key={col.title}>
                  <h5
                    style={{
                      color: "var(--text3)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      marginBottom: 16,
                    }}
                  >
                    {col.title}
                  </h5>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.path}
                          className="ft-link"
                          style={{
                            color: "var(--text2)",
                            fontSize: 14,
                            textDecoration: "none",
                            transition: "color .2s",
                          }}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
            <div className="ft-bottom">
              <p style={{ color: "var(--text3)", fontSize: 12.5, margin: 0 }}>
                © {year} Velvotix Solutions LLP. All rights reserved.
              </p>

              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                <Link
                  to="/privacy-policy"
                  style={{
                    color: "var(--text3)",
                    fontSize: 12.5,
                    textDecoration: "none",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text3)")
                  }
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms-of-service"
                  style={{
                    color: "var(--text3)",
                    fontSize: 12.5,
                    textDecoration: "none",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text3)")
                  }
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
