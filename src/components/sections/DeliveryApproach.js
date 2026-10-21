import React from "react";
import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    n: "01",
    title: "Feasibility before commitment",
    text: "We separate what Business Central can do as standard from what needs configuration, an extension, an integration or a separate application—before scope is locked in.",
  },
  {
    n: "02",
    title: "Transparent trade-offs",
    text: "Options, dependencies, risks and assumptions are discussed in plain language so your team can make informed decisions about cost, timing and maintainability.",
  },
  {
    n: "03",
    title: "A wider technical lens",
    text: "ERP, APIs, web applications, warehouse workflows and shop-floor processes are considered together when that broader view creates a better-fit solution.",
  },
];

export default function DeliveryApproach() {
  return (
    <section className="sec" aria-labelledby="vtx-approach-heading">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 780, margin: "0 auto 36px", textAlign: "center" }}
        >
          <span className="badge badge-o" style={{ marginBottom: 14, display: "inline-flex" }}>
            How We Work
          </span>
          <h2 id="vtx-approach-heading" className="sh f-display" style={{ marginBottom: 12 }}>
            Better ERP decisions start with <span className="g-blue">clear feasibility.</span>
          </h2>
          <p className="sp">
            Velvotix combines Business Central expertise with application and integration experience, while keeping scope, assumptions and delivery choices visible to the customer.
          </p>
        </motion.div>

        <div className="g-auto-md">
          {PRINCIPLES.map((item, index) => (
            <motion.article
              className="card"
              key={item.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              style={{ padding: 24, height: "100%" }}
            >
              <div className="f-mono g-blue" style={{ fontSize: 12, letterSpacing: ".12em", marginBottom: 18 }}>
                {item.n}
              </div>
              <h3 className="f-display" style={{ fontSize: 20, lineHeight: 1.3, marginBottom: 10 }}>
                {item.title}
              </h3>
              <p style={{ color: "var(--text2)", fontSize: 13.5, lineHeight: 1.75 }}>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
