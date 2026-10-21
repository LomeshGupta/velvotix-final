import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SESSION_KEY = "velvotix-consultation-popup-shown";

/** A light, dismissible first-visit introduction shown on the homepage. */
export default function ContactPopupModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Browsers with restricted storage still get the popup for this page view.
    }
    if (alreadyShown) return undefined;

    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Ignore storage restrictions; the in-memory component state still works.
      }
      setOpen(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(12px, 3vw, 24px)",
            overflowY: "auto",
            background: "rgba(1, 7, 19, .76)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="velvotix-popup-title"
            aria-describedby="velvotix-popup-description"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 520,
              maxHeight: "min(90dvh, 680px)",
              overflowY: "auto",
              padding: "clamp(28px, 5vw, 42px) clamp(20px, 5vw, 36px) 30px",
              borderRadius: 22,
              textAlign: "center",
              color: "var(--text)",
              background: "var(--bg)",
              border: "1px solid rgba(0,153,255,.30)",
              boxShadow: "0 28px 90px rgba(0,0,0,.48)",
            }}
          >
            <button
              type="button"
              aria-label="Close consultation popup"
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--text2)",
                fontSize: 23,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div
              aria-hidden="true"
              style={{
                width: 60,
                height: 60,
                margin: "0 auto 18px",
                display: "grid",
                placeItems: "center",
                borderRadius: 18,
                fontSize: 29,
                background: "linear-gradient(135deg,rgba(0,153,255,.17),rgba(255,122,0,.13))",
                border: "1px solid rgba(0,153,255,.24)",
              }}
            >
              ✦
            </div>
            <p className="badge badge-b" style={{ display: "inline-flex", marginBottom: 14 }}>
              Business Central · ERP · Digital Solutions
            </p>
            <h2 id="velvotix-popup-title" className="f-display" style={{ fontSize: "clamp(1.65rem, 5vw, 2.35rem)", lineHeight: 1.17, marginBottom: 14 }}>
              Where ERP Meets <span className="g-blue">Modern Digital Experience</span>
            </h2>
            <p id="velvotix-popup-description" style={{ maxWidth: 420, margin: "0 auto 24px", color: "var(--text2)", fontSize: 14, lineHeight: 1.75 }}>
              Planning a Business Central implementation, integration or custom application? Let's explore the right solution with clear feasibility, scope and delivery expectations.
            </p>
            <Link to="/contact" className="btn btn-blue btn-lg" onClick={() => setOpen(false)} style={{ width: "100%", maxWidth: 310 }}>
              Schedule a Consultation →
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{ display: "block", margin: "15px auto 0", padding: 8, border: 0, background: "transparent", color: "var(--text3)", fontSize: 12, cursor: "pointer" }}
            >
              Maybe later
            </button>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
