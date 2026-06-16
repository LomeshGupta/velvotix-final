import React from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { REGIONS } from "../../data";

const COLS = [
  {
    title: "Solutions",
    links: [
      { label: "Business Central", path: "/solutions" },
      { label: "Custom Development", path: "/solutions" },
      { label: "ERP Integrations", path: "/solutions" },
      { label: "ERP Modernisation", path: "/solutions" },
      { label: "Enterprise Apps", path: "/solutions" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Sales App", path: "/products" },
      { label: "SRM Platform", path: "/products" },
      { label: "Production Mgmt", path: "/products" },
      { label: "Vendor Portal", path: "/products" },
      { label: "Executive Dashboard", path: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

/* ─── Footer — pure inline CSS responsive grid via <style> tag ─── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
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
        style={{ maxWidth: 1240, margin: "0 auto", padding: "52px 20px 36px" }}
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
              Transforming ERP into intelligent digital experiences. Business
              Central consulting, development and support for enterprises
              worldwide.
            </p>

            {/* Region pills */}
            <p
              style={{ color: "var(--text3)", fontSize: 12, marginBottom: 10 }}
            >
              🌍 Serving clients in
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
                    color: "#0099FF",
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
                href="mailto:projects@velvotix.com"
                style={{
                  color: "var(--text2)",
                  fontSize: 13.5,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>📧</span> projects@velvotix.com
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
              © {year} Velvotix Projects. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["Privacy Policy", "Terms of Service"].map((t) => (
                <Link
                  key={t}
                  to="/"
                  style={{
                    color: "var(--text3)",
                    fontSize: 12.5,
                    textDecoration: "none",
                    transition: "color .2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--text2)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text3)")}
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
