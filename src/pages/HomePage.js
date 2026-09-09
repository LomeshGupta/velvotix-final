import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import Metrics from "../components/sections/Metrics";
import Products from "../components/sections/Products";
import CaseStudies from "../components/sections/CaseStudies";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";
import { Helmet } from "react-helmet-async";
import HomeSEO from "../meta/home";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown
    // during this browser tab session.
    const popupShown = sessionStorage.getItem("velvotix_home_popup_shown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);

        // Remember that popup was shown
        // during this browser tab session.
        sessionStorage.setItem("velvotix_home_popup_shown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <HomeSEO />

      <Helmet>
        <title>Microsoft Dynamics 365 Business Central | Velvotix</title>

        <meta
          name="description"
          content="Velvotix provides Microsoft Dynamics 365 Business Central consulting, implementation, customization, AL development and integration services."
        />
      </Helmet>

      <Layout>
        <Hero />
        <TrustedBy />
        <Services />
        <Metrics />
        <Products />
        <CaseStudies />
        <Process />
        <Testimonials />
        <CTASection />
      </Layout>

      {/* =================================
          HOME PAGE POPUP
      ================================== */}

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
              zIndex: 99999,
              background: "rgba(0, 0, 0, 0.68)",
              backdropFilter: "blur(7px)",
              WebkitBackdropFilter: "blur(7px)",
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
              style={{
                width: "100%",
                maxWidth: 520,
                position: "relative",
                overflow: "hidden",
                padding: "44px 32px 36px",
                textAlign: "center",
                borderRadius: 24,
                background: "var(--bg)",
                border: "1px solid rgba(0,153,255,.25)",
                boxShadow: "0 30px 100px rgba(0,0,0,.5)",
              }}
            >
              {/* Decorative glow */}
              <div
                style={{
                  position: "absolute",
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: "rgba(0,153,255,.12)",
                  filter: "blur(55px)",
                  top: -120,
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
                  position: "relative",
                  zIndex: 1,
                }}
              >
                🚀
              </div>

              {/* Small heading */}
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#0099FF",
                  marginBottom: 10,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Let's Build Something Great
              </div>

              {/* Main heading */}
              <h2
                className="f-display"
                style={{
                  fontSize: "clamp(1.7rem, 5vw, 2.5rem)",
                  lineHeight: 1.15,
                  margin: "0 0 14px",
                  color: "var(--text)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Transform Your Business
                <br />
                <span className="g-blue">With Velvotix</span>
              </h2>

              {/* Description */}
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  maxWidth: 430,
                  margin: "0 auto 26px",
                  position: "relative",
                  zIndex: 1,
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
                  position: "relative",
                  zIndex: 1,
                }}
                onClick={() => setShowPopup(false)}
              >
                Start a Conversation →
              </a>

              {/* Maybe later */}
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
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Maybe later
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
