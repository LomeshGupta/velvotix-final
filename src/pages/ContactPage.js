import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";

const INTERESTS = [
  "BC Implementation",
  "ERP Consulting",
  "Custom Development",
  "API Integrations",
  "ERP Modernisation",
  "Support Retainer",
  "Sales App",
  "SRM Platform",
  "Executive Dashboard",
];
const TIMEZONES = [
  "IST (India)",
  "GST (UAE)",
  "GMT (UK)",
  "SGT (Singapore)",
  "EST (USA)",
  "Other",
];

const INFO = [
  {
    icon: "📧",
    label: "Email",
    value: "projects@velvotix.com",
    color: "#0099FF",
  },
  {
    icon: "🌍",
    label: "Regions",
    value: "India · UAE · UK · SG · USA",
    color: "#FF7A00",
  },
  {
    icon: "⏱",
    label: "Response",
    value: "Within 24 hours guaranteed",
    color: "#00D9FF",
  },
  {
    icon: "📍",
    label: "Based in",
    value: "India, remote-first globally",
    color: "#FF5500",
  },
];

export default function ContactPage() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    region: "",
    timezone: "",
    interest: [],
    message: "",
  });

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfKzgUXAir2F1W_TtwqxltdG0pagKpaJgu2_FlAIWnmDZJgjw/formResponse";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("entry.106724502", form.name);
    formData.append("entry.69398333", form.email);
    formData.append("entry.1387778455", form.company);
    formData.append("entry.1314042137", form.region);
    formData.append("entry.1490868022", form.timezone);
    formData.append("entry.1803165878", form.interest.join(", "));
    formData.append("entry.1111388990", form.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      ```
setDone(true);

setForm({
  name: "",
  email: "",
  company: "",
  region: "",
  timezone: "",
  interest: [],
  message: "",
});
```;
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const toggle = (item) =>
    setForm((f) => ({
      ...f,
      interest: f.interest.includes(item)
        ? f.interest.filter((x) => x !== item)
        : [...f.interest, item],
    }));

  const lbl = {
    display: "block",
    fontSize: 12.5,
    fontWeight: 600,
    color: "var(--text2)",
    marginBottom: 7,
  };

  return (
    <Layout>
      <section
        style={{
          paddingTop: 100,
          paddingBottom: 56,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%,rgba(0,153,255,.1) 0%,transparent 60%)",
        }}
      >
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: "center", marginBottom: 44 }}
          >
            <span
              className="badge badge-b"
              style={{ marginBottom: 16, display: "inline-flex" }}
            >
              🌍 Global Consultation
            </span>
            <h1
              className="sh f-display"
              style={{
                fontSize: "clamp(1.9rem,4.5vw,3.2rem)",
                marginBottom: 12,
              }}
            >
              Let's Talk <span className="g-blue">Transformation</span>
            </h1>
            <p className="sp" style={{ maxWidth: 480, margin: "0 auto" }}>
              Tell us about your ERP challenges. Our consultants will respond
              within 24 hours — in your time zone.
            </p>
          </motion.div>

          <div className="g-contact">
            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              {INFO.map((item) => (
                <div
                  key={item.label}
                  className="card"
                  style={{
                    padding: 18,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      background: `${item.color}14`,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "var(--text3)",
                        marginBottom: 3,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 13.5,
                        fontWeight: 500,
                        color: "var(--text)",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="card"
                style={{
                  padding: 18,
                  background:
                    "linear-gradient(135deg,rgba(0,153,255,.08),rgba(255,122,0,.05))",
                  borderColor: "rgba(0,153,255,.18)",
                }}
              >
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "#0099FF",
                    marginBottom: 8,
                  }}
                >
                  🌏 Working Internationally
                </div>
                <p
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.7,
                    color: "var(--text2)",
                  }}
                >
                  We've delivered projects across South Asia, the Middle East,
                  Southeast Asia, Europe, and North America. Tell us your region
                  and we'll set a call at a time that works for you.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {done ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card"
                  style={{ padding: "52px 24px", textAlign: "center" }}
                >
                  <div style={{ fontSize: 44, marginBottom: 14 }}>✅</div>
                  <h3
                    className="f-display"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 8,
                    }}
                  >
                    Message Received
                  </h3>
                  <p style={{ color: "var(--text2)", fontSize: 14 }}>
                    Our team will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="card"
                  style={{
                    padding: "clamp(18px,4vw,30px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: 16,
                    }}
                    className="sm:grid-cols-2"
                  >
                    {[
                      {
                        name: "name",
                        label: "Full Name",
                        placeholder: "Jane Smith",
                        type: "text",
                      },
                      {
                        name: "email",
                        label: "Work Email",
                        placeholder: "jane@company.com",
                        type: "email",
                      },
                      {
                        name: "company",
                        label: "Company",
                        placeholder: "Acme Corporation",
                        type: "text",
                      },
                      {
                        name: "region",
                        label: "Your Country",
                        placeholder: "e.g. UAE, UK, India…",
                        type: "text",
                      },
                    ].map((f) => (
                      <div key={f.name}>
                        <label style={lbl}>{f.label}</label>
                        <input
                          className="inp"
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          value={form[f.name]}
                          onChange={(e) =>
                            setForm((s) => ({ ...s, [f.name]: e.target.value }))
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={lbl}>Your Timezone</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {TIMEZONES.map((tz) => (
                        <button
                          type="button"
                          key={tz}
                          onClick={() =>
                            setForm((f) => ({ ...f, timezone: tz }))
                          }
                          style={{
                            padding: "7px 14px",
                            borderRadius: 10,
                            fontSize: 13,
                            fontWeight: 500,
                            cursor: "pointer",
                            background:
                              form.timezone === tz
                                ? "rgba(0,153,255,.15)"
                                : "var(--bg)",
                            border: `1px solid ${form.timezone === tz ? "rgba(0,153,255,.5)" : "var(--border)"}`,
                            color:
                              form.timezone === tz ? "#0099FF" : "var(--text2)",
                            WebkitTapHighlightColor: "transparent",
                          }}
                        >
                          {tz}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={lbl}>
                      I'm interested in (select all that apply)
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {INTERESTS.map((item) => {
                        const sel = form.interest.includes(item);
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => toggle(item)}
                            style={{
                              padding: "7px 14px",
                              borderRadius: 10,
                              fontSize: 12.5,
                              fontWeight: 500,
                              cursor: "pointer",
                              background: sel
                                ? "rgba(255,122,0,.12)"
                                : "var(--bg)",
                              border: `1px solid ${sel ? "rgba(255,122,0,.42)" : "var(--border)"}`,
                              color: sel ? "#FF7A00" : "var(--text2)",
                              WebkitTapHighlightColor: "transparent",
                            }}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label style={lbl}>Tell us about your challenge</label>
                    <textarea
                      className="inp"
                      rows={4}
                      placeholder="Describe your current ERP setup, what's not working, or what you'd like to achieve…"
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-blue btn-lg"
                    style={{ width: "100%" }}
                  >
                    Send Message
                  </button>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--text3)",
                      textAlign: "center",
                    }}
                  >
                    We respect your privacy. Your details are never shared.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
