import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../lib/ThemeContext";
import { themedAccent } from "../../lib/themeAccent";

const MODULES = [
  {
    icon: "📈",
    title: "Sales Intelligence",
    description: "Bring sales orders, customer context, activity and performance visibility together around your Business Central data.",
    accent: "#0099FF",
  },
  {
    icon: "🤝",
    title: "Supplier Relationship",
    description: "Support supplier collaboration with clearer vendor information, purchasing workflows, documents and approvals.",
    accent: "#00C2FF",
  },
  {
    icon: "🏭",
    title: "Production Management",
    description: "Connect production jobs, operator activity, output reporting and shop-floor workflows with your ERP processes.",
    accent: "#FF7A00",
  },
  {
    icon: "🔗",
    title: "Supply Chain",
    description: "Extend visibility across inventory, warehouse activity, purchasing, fulfilment and operational movement.",
    accent: "#00B894",
  },
  {
    icon: "🏢",
    title: "Vendor Portal",
    description: "Create controlled external workflows for vendor communication, document exchange and transaction status updates.",
    accent: "#8B7CFF",
  },
  {
    icon: "📊",
    title: "Executive Dashboard",
    description: "Make key finance and operations information easier to review with role-aware dashboards and management KPIs.",
    accent: "#FF9F43",
  },
];

export default function Products() {
  const { theme } = useTheme();
  return (
    <section className="sec" id="business-central-modules" style={{ position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: 1,
          background: "linear-gradient(90deg,transparent,rgba(0,153,255,.35),transparent)",
        }}
      />
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 32 }}
        >
          <span className="badge badge-o" style={{ marginBottom: 14, display: "inline-flex" }}>
            ✨ Product Suite
          </span>
          <h2 className="sh f-display" style={{ marginBottom: 10 }}>
            Built on Business Central, <span className="g-orange">Ready to Deploy</span>
          </h2>
          <p className="sp" style={{ maxWidth: 720, margin: "0 auto" }}>
            Customisable enterprise modules that extend Business Central with focused web experiences and workflow automation. Choose the capabilities that fit your processes; final scope and deployment approach are confirmed through a transparent fit-gap review.
          </p>
        </motion.div>

        <div className="g-auto-sm">
          {MODULES.map((module, index) => {
            const accent = themedAccent(module.accent, theme);
            return (
            <motion.article
              key={module.title}
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              style={{ padding: "clamp(20px, 2.4vw, 26px)", minWidth: 0 }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 44,
                  height: 44,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 13,
                  marginBottom: 18,
                  fontSize: 21,
                  background: `${accent}15`,
                  border: `1px solid ${accent}35`,
                }}
              >
                {module.icon}
              </div>
              <h3 className="f-display" style={{ fontSize: 18, lineHeight: 1.35, marginBottom: 9, color: "var(--text)" }}>
                {module.title}
              </h3>
              <p style={{ color: "var(--text2)", fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>
                {module.description}
              </p>
              <Link to="/contact" style={{ color: accent, fontSize: 12.5, fontWeight: 650, display: "inline-flex", alignItems: "center", gap: 7 }}>
                Discuss this module <span aria-hidden="true">→</span>
              </Link>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
