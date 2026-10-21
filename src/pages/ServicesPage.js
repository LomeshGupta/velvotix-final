import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import CTASection from "../components/sections/CTASection";
import ServicesSEO from "../meta/services";
import { useTheme } from "../lib/ThemeContext";
import { themedAccent } from "../lib/themeAccent";

const TEAM = [
  {
    icon: "👔",
    title: "Functional Consultants",
    color: "#0099FF",
    desc: "Business Central consultants with deep domain knowledge across manufacturing, trading, distribution, and services — deployable globally across time zones.",
    items: [
      "BC Functional Setup",
      "Process Mapping",
      "User Training",
      "Change Management",
    ],
  },
  {
    icon: "💻",
    title: "Technical Consultants",
    color: "#FF7A00",
    desc: "Expert AL developers, integration architects, and web engineers who build production-grade BC extensions, APIs, and enterprise applications.",
    items: [
      "AL Development",
      "API Architecture",
      "React / Next.js",
      "Azure Services",
    ],
  },
  {
    icon: "👥",
    title: "Dedicated Teams",
    color: "#00D9FF",
    desc: "Full embedded teams or individual resource augmentation — flexible engagement models that scale with your demands, any geography.",
    items: [
      "Full Project Teams",
      "Resource Augmentation",
      "Sprint Teams",
      "Long-term Partners",
    ],
  },
];

const DETAIL_LINKS = [
  { title: "ERP implementation partner", path: "/erp-implementation-partner", text: "Transparent project governance, practical fit-gap decisions and clear ownership." },
  { title: "Business Central implementation", path: "/business-central-implementation", text: "Process discovery, setup, data migration, testing, training and cutover." },
  { title: "Financial management system", path: "/business-central-financial-management", text: "Finance structure, posting controls, dimensions, reporting and close processes." },
  { title: "Business Central development", path: "/business-central-development", text: "AL extensions, reports, workflows and maintainable application changes." },
  { title: "API & integration services", path: "/business-central-integration-services", text: "Connect ERP data with commerce, warehouse, banking, shipping and custom apps." },
  { title: "Custom ERP software", path: "/custom-erp-software", text: "Purpose-built business applications where standard capability is not the right fit." },
  { title: "Warehouse management system", path: "/warehouse-management-system", text: "Mobile receiving, movement, picking, shipping and inventory workflows." },
  { title: "Shop-floor management software", path: "/shop-floor-management-software", text: "Operator workflows for job status, output, scrap and material reporting." },
  { title: "Business Central support", path: "/business-central-support", text: "Functional and technical support, release readiness and optimisation." },
  { title: "Digital transformation", path: "/digital-transformation", text: "A phased roadmap across processes, integrations, data and user adoption." },
];

const MODELS = [
  {
    name: "Project-Based",
    color: "#0099FF",
    desc: "Defined scope, timeline and deliverables. Perfect for implementations, migrations, and custom development across any geography.",
    items: [
      "Fixed price or T&M",
      "Project manager assigned",
      "Regular sprint demos",
      "Documentation included",
    ],
  },
  {
    name: "Retainer Support",
    color: "#FF7A00",
    desc: "Ongoing monthly hours for functional and technical support. Ideal for post-go-live maintenance covering your local business hours.",
    items: [
      "Monthly hour bundles",
      "Priority response SLA",
      "Dedicated resource",
      "Monthly reporting",
    ],
  },
  {
    name: "Dedicated Resource",
    color: "#00D9FF",
    desc: "A full-time Velvotix consultant embedded in your team — the most seamless extension of your internal capability, available across time zones.",
    items: [
      "Full-time equivalent",
      "Your timezone & hours",
      "Direct team integration",
      "Scalable capacity",
    ],
  },
];

export default function ServicesPage() {
  const { theme } = useTheme();
  return (
    <Layout>
      <ServicesSEO />
      <section
        style={{
          paddingTop: 100,
          paddingBottom: 48,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(0,217,255,.07) 0%,transparent 60%)",
        }}
      >
        <div className="wrap" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="badge badge-b"
              style={{ marginBottom: 16, display: "inline-flex" }}
            >
              Services
            </span>
            <h1
              className="sh f-display"
              style={{
                fontSize: "clamp(1.9rem,4.5vw,3.2rem)",
                marginBottom: 14,
              }}
            >
              Your Extended <span className="g-blue">ERP Team</span>
            </h1>
            <p className="sp" style={{ maxWidth: 600, margin: "0 auto 12px" }}>
              Flexible engagement models for functional, technical and integration work. We agree scope, timezone overlap, responsibilities and support expectations during discovery.
            </p>
            <p style={{ fontSize: 12, color: "var(--text3)" }}>
              🌍 Remote-first · Coverage agreed per project · Defined deliverables
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {/* Team types */}
          <div className="g-auto-md" style={{ marginBottom: 64 }}>
            {TEAM.map((r, i) =>{
              const accent = themedAccent(r.color, theme);
              return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
                style={{
                  padding: 26,
                  background: `linear-gradient(135deg,${accent}08,transparent)`,
                  borderColor: `${accent}22`,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    marginBottom: 18,
                    background: `${accent}14`,
                  }}
                >
                  {r.icon}
                </div>
                <h3
                  className="f-display"
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 10,
                  }}
                >
                  {r.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.72,
                    color: "var(--text2)",
                    marginBottom: 18,
                  }}
                >
                  {r.desc}
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 9 }}
                >
                  {r.items.map((c) => (
                    <div
                      key={c}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13.5,
                        color: "var(--text2)",
                      }}
                    >
                      <span style={{ color: accent }}>✓</span>
                      {c}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
            })}
          </div>

          {/* Engagement models */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 36 }}
          >
            <h2 className="sh f-display" style={{ marginBottom: 8 }}>
              Engagement Models
            </h2>
            <p style={{ color: "var(--text2)", fontSize: 15 }}>
              Choose how you want to work with us
            </p>
          </motion.div>

          <div className="g-auto-md">
            {MODELS.map((m, i) =>{
              const accent = themedAccent(m.color, theme);
              return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
                style={{ padding: 24 }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    background: `${accent}14`,
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: accent,
                      display: "block",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 10,
                  }}
                >
                  {m.name}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.72,
                    color: "var(--text2)",
                    marginBottom: 18,
                  }}
                >
                  {m.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                    marginBottom: 22,
                  }}
                >
                  {m.items.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        color: "var(--text2)",
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: accent,
                          display: "block",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  style={{ fontSize: 13.5, fontWeight: 600, color: accent }}
                >
                  Get a quote →
                </Link>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      <section className="vtx-services-directory">
        <div className="wrap">
          <div className="vtx-section-heading">
            <p className="vtx-kicker">INDIVIDUAL SERVICE AREAS</p>
            <h2>Explore the specific capability you need.</h2>
            <p>Each service page explains typical scope, important fit-gap questions and the decisions to resolve before a project begins.</p>
          </div>
          <div className="vtx-services-directory-grid">
            {DETAIL_LINKS.map((service, i) => (
              <Link className="vtx-services-directory-card" to={service.path} key={service.path}>
                <span>0{(i + 1).toString().slice(-2)}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <strong>Explore service <span aria-hidden="true">↗</span></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
