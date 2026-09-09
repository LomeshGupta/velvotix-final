import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PopupDemoPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup 3 seconds after page loads
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,153,255,.12) 0%, transparent 60%), var(--bg)",
        color: "var(--text)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span
          className="badge badge-b"
          style={{
            display: "inline-flex",
            marginBottom: 16,
          }}
        >
          🌍 Global Consultation
        </span>

        <h1
          className="f-display"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            marginBottom: 16,
          }}
        >
          Welcome to <span className="g-blue">Velvotix</span>
        </h1>

        <p
          style={{
            maxWidth: 550,
            margin: "0 auto",
            color: "var(--text2)",
            lineHeight: 1.7,
          }}
        >
          ERP consulting, custom development, automation, integrations and
          digital transformation solutions.
        </p>

        {/* Optional manual popup button */}
        <button
          className="btn btn-blue btn-lg"
          style={{ marginTop: 28 }}
          onClick={() => setShowPopup(true)}
        >
          Open Popup
        </button>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowPopup(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0, 0, 0, 0.68)",
              backdropFilter: "blur(7px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
              className="card"
              style={{
                width: "100%",
                maxWidth: 540,
                position: "relative",
                overflow: "hidden",
                padding: "44px 32px 36px",
                textAlign: "center",
                background: "var(--bg)",
                border: "1px solid rgba(0,153,255,.25)",
                boxShadow: "0 30px 100px rgba(0,0,0,.45)",
              }}
            >
              {/* Decorative glow */}
              <div
                style={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "rgba(0,153,255,.12)",
                  filter: "blur(50px)",
                  top: -100,
                  left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "none",
                }}
              />

              {/* Close button */}
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setShowPopup(false)}
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text2)",
                  fontSize: 23,
                  lineHeight: 1,
                  cursor: "pointer",
                  zIndex: 2,
                }}
              >
                ×
              </button>

              {/* Icon */}
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 20,
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  background:
                    "linear-gradient(135deg, rgba(0,153,255,.16), rgba(255,122,0,.12))",
                  border: "1px solid rgba(0,153,255,.2)",
                }}
              >
                🚀
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#0099FF",
                  marginBottom: 10,
                }}
              >
                Let's Build Something Great
              </div>

              <h2
                className="f-display"
                style={{
                  fontSize: "clamp(1.7rem, 5vw, 2.5rem)",
                  lineHeight: 1.15,
                  margin: "0 0 14px",
                }}
              >
                Transform Your Business
                <br />
                <span className="g-blue">With Velvotix</span>
              </h2>

              <p
                style={{
                  color: "var(--text2)",
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  maxWidth: 430,
                  margin: "0 auto 26px",
                }}
              >
                Have an ERP challenge, automation requirement, or digital
                transformation idea? Let's discuss how we can help your business
                move forward.
              </p>

              {/* CTA */}
              <a
                href="/contact"
                className="btn btn-blue btn-lg"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  width: "100%",
                  maxWidth: 300,
                }}
                onClick={() => setShowPopup(false)}
              >
                Start a Conversation →
              </a>

              <button
                type="button"
                onClick={() => setShowPopup(false)}
                style={{
                  display: "block",
                  margin: "16px auto 0",
                  border: 0,
                  background: "transparent",
                  color: "var(--text3)",
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                Maybe later
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
