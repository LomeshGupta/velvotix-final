import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import CTASection from "../components/sections/CTASection";
import { PRODUCTS } from "../data";
import ProductsSEO from "../meta/products";
import ProductGallery from "../components/ProductGallery";
import { useTheme } from "../lib/ThemeContext";
import { themedAccent } from "../lib/themeAccent";

export default function ProductsPage() {
  const [open, setOpen] = useState(null);
  const { theme } = useTheme();

  return (
    <Layout>
      <ProductsSEO />
      <section
        style={{
          paddingTop: 100,
          paddingBottom: 48,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(255,122,0,.09) 0%,transparent 60%)",
        }}
      >
        <div className="wrap" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="badge badge-o"
              style={{ marginBottom: 16, display: "inline-flex" }}
            >
              ✨ Product Suite
            </span>
            <h1
              className="sh f-display"
              style={{
                fontSize: "clamp(1.9rem,4.5vw,3.2rem)",
                marginBottom: 14,
              }}
            >
              Connected Applications, <span className="g-orange">Built around BC</span>
            </h1>
            <p className="sp" style={{ maxWidth: 620, margin: "0 auto 20px" }}>
              Explore the Sales App, warehouse management and shop-floor interfaces built around Business Central workflows. Connectivity, data freshness, permissions and performance are validated against the target environment and usage pattern.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 12, color: "var(--text3)" }}>
                Application areas
              </span>
              {["Sales workflows", "Warehouse operations", "Shop-floor execution"].map((c) => (
                <span key={c} className="pill" style={{ fontSize: 11.5 }}>
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="g-auto-lg">
            {PRODUCTS.map((p, i) => {
              const isOpen = open === p.id;
              const color = themedAccent(p.color, theme);
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="card"
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    borderColor: isOpen ? `${color}50` : "var(--border)",
                    background: isOpen
                      ? `linear-gradient(135deg,${color}10,${color}05)`
                      : "var(--card)",
                    boxShadow: isOpen ? `0 14px 44px ${color}14` : "none",
                    transform: isOpen ? "translateY(-2px)" : "none",
                  }}
                >
                  {p.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        padding: "4px 10px",
                        borderRadius: 99,
                        fontSize: 11,
                        fontWeight: 600,
                        background: `${color}1a`,
                        color: color,
                        zIndex: 1,
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <div
                    style={{
                      height: 4,
                      background: `linear-gradient(90deg,${color},${color}55)`,
                    }}
                  />
                  <div style={{ padding: "22px 22px 20px" }}>
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 13,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        marginBottom: 16,
                        background: `${color}14`,
                      }}
                    >
                      {p.icon}
                    </div>
                    <h3
                      className="f-display"
                      style={{
                        fontSize: 16.5,
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 4,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: color,
                        marginBottom: 12,
                      }}
                    >
                      {p.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.68,
                        color: "var(--text2)",
                        marginBottom: 18,
                      }}
                    >
                      {p.desc}
                    </p>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{ overflow: "hidden", marginBottom: 14 }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 9,
                              paddingTop: 2,
                            }}
                          >
                            {p.features.map((f) => (
                              <div
                                key={f}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 9,
                                  fontSize: 13.5,
                                }}
                              >
                                <span style={{ color: color, flexShrink: 0 }}>
                                  ✓
                                </span>
                                <span style={{ color: "var(--text2)" }}>
                                  {f}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 10,
                        flexWrap: "wrap",
                      }}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : p.id)}
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: color,
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          padding: 0,
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        {isOpen ? "Less detail ↑" : "View details →"}
                      </button>
                      <Link
                        to="/contact"
                        style={{
                          fontSize: 12,
                          padding: "7px 14px",
                          borderRadius: 10,
                          fontWeight: 500,
                          background: `${color}12`,
                          color: color,
                          border: `1px solid ${color}28`,
                        }}
                      >
                        Request Demo
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{
              marginTop: 44,
              padding: "clamp(24px,5vw,40px)",
              textAlign: "center",
              background:
                "linear-gradient(135deg,rgba(0,153,255,.07),rgba(0,194,255,.04))",
              borderColor: "rgba(0,153,255,.18)",
            }}
          >
            <div
              className="f-display g-blue"
              style={{
                fontSize: "clamp(1.1rem,2.5vw,1.55rem)",
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              Designed for direct Business Central connectivity
            </div>
            <p
              style={{
                maxWidth: 560,
                margin: "0 auto",
                fontSize: 14,
                color: "var(--text2)",
                lineHeight: 1.72,
              }}
            >
              The Sales, warehouse and shop-floor workflows shown here are designed around Business Central data and supported integration patterns. We plan request volume, permissions, status feedback and recovery controls as part of the design. Exact freshness and transaction behaviour are validated against each customer’s environment, APIs and workload.
            </p>
          </motion.div>
        </div>
      </section>

      <ProductGallery />
      <CTASection />
    </Layout>
  );
}
