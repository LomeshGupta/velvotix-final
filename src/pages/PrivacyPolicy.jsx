import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import PrivacySEO from "../meta/privacy";
import { PRIVACY_POLICY } from "../data";

export default function PrivacyPolicyPage() {
  const policy = PRIVACY_POLICY;

  return (
    <Layout>
      <PrivacySEO />

      <section
        style={{
          paddingTop: 100,
          paddingBottom: 70,
          background:
            "radial-gradient(ellipse 80% 45% at 50% 0%,rgba(0,153,255,.1) 0%,transparent 60%)",
        }}
      >
        <div className="wrap">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto 52px",
            }}
          >
            <span
              className="badge badge-b"
              style={{
                marginBottom: 16,
                display: "inline-flex",
              }}
            >
              🔐 Privacy & Security
            </span>

            <h1
              className="sh f-display"
              style={{
                fontSize: "clamp(2rem,4.8vw,3.4rem)",
                marginBottom: 14,
              }}
            >
              Privacy <span className="g-blue">Policy</span>
            </h1>

            <p
              className="sp"
              style={{
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Your privacy matters to us. This policy explains what information
              Velvotix collects, how we use it, and the choices available to
              you.
            </p>

            <div
              style={{
                marginTop: 18,
                fontSize: 12.5,
                color: "var(--text3)",
              }}
            >
              Effective date: {policy.effectiveDate}
            </div>
          </motion.div>

          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
              style={{
                padding: "clamp(22px,4vw,32px)",
                background:
                  "linear-gradient(135deg,rgba(0,153,255,.07),rgba(255,122,0,.035))",
                borderColor: "rgba(0,153,255,.16)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 19,
                    background: "rgba(0,153,255,.12)",
                    flexShrink: 0,
                  }}
                >
                  🛡️
                </div>

                <div>
                  <h2
                    className="f-display"
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: 7,
                      color: "var(--text)",
                    }}
                  >
                    {policy.intro.title}
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      fontSize: 13.5,
                      lineHeight: 1.75,
                      color: "var(--text2)",
                    }}
                  >
                    {policy.intro.text}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sections */}
            {policy.sections.map((section, index) => (
              <motion.article
                key={section.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: Math.min(index * 0.025, 0.15),
                }}
                className="card"
                style={{
                  padding: "clamp(22px,4vw,32px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 18,
                  }}
                >
                  <div
                    style={{
                      minWidth: 38,
                      height: 38,
                      borderRadius: 11,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#0099FF",
                      background: "rgba(0,153,255,.09)",
                      border: "1px solid rgba(0,153,255,.14)",
                    }}
                  >
                    {section.number}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h2
                      className="f-display"
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 14,
                      }}
                    >
                      {section.title}
                    </h2>

                    <div
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.8,
                        color: "var(--text2)",
                      }}
                    >
                      {section.paragraphs.map((paragraph, i) => (
                        <p
                          key={i}
                          style={{
                            margin:
                              i === section.paragraphs.length - 1
                                ? 0
                                : "0 0 12px",
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
              style={{
                marginTop: 4,
                padding: "clamp(24px,4vw,34px)",
                textAlign: "center",
                background:
                  "linear-gradient(135deg,rgba(0,153,255,.08),rgba(255,122,0,.05))",
                borderColor: "rgba(0,153,255,.18)",
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  marginBottom: 10,
                }}
              >
                📧
              </div>

              <h2
                className="f-display"
                style={{
                  fontSize: "1.25rem",
                  color: "var(--text)",
                  marginBottom: 8,
                }}
              >
                {policy.contact.title}
              </h2>

              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--text2)",
                  lineHeight: 1.7,
                  marginBottom: 14,
                }}
              >
                {policy.contact.description}
              </p>

              <a
                href={`mailto:${policy.contact.email}`}
                style={{
                  color: "#0099FF",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {policy.contact.email}
              </a>
            </motion.div>

            <div
              style={{
                textAlign: "center",
                paddingTop: 14,
                fontSize: 11.5,
                color: "var(--text3)",
              }}
            >
              © {new Date().getFullYear()} Velvotix. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
