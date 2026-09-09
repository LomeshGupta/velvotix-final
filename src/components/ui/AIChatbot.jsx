import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/*
  Same Google Form backend used by the Contact Page
*/
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfKzgUXAir2F1W_TtwqxltdG0pagKpaJgu2_FlAIWnmDZJgjw/formResponse";

/*
  Existing Google Form field IDs
*/
const FORM_FIELDS = {
  name: "entry.106724502",
  email: "entry.69398333",
  company: "entry.1387778455",
  region: "entry.1314042137",
  timezone: "entry.1490868022",
  interest: "entry.1803165878",
  message: "entry.1111388990",
};

const SERVICES = {
  "Business Central": {
    label: "Microsoft Dynamics 365 Business Central",
    keywords: [
      "business central",
      "dynamics 365",
      "dynamics",
      "bc implementation",
      "business central implementation",
    ],
  },

  "ERP Consulting": {
    label: "ERP Consulting",
    keywords: [
      "erp consulting",
      "erp consultant",
      "erp advice",
      "erp strategy",
      "consulting",
      "erp",
    ],
  },

  "Custom Development": {
    label: "Custom Development",
    keywords: [
      "custom development",
      "custom software",
      "custom app",
      "custom application",
      "development",
      "software",
    ],
  },

  "API Integrations": {
    label: "API Integrations",
    keywords: [
      "api",
      "integration",
      "integrate",
      "connect",
      "sync",
      "shopify",
      "woocommerce",
      "power bi",
    ],
  },

  "ERP Modernisation": {
    label: "ERP Modernisation",
    keywords: [
      "modernise",
      "modernize",
      "modernisation",
      "modernization",
      "legacy",
      "old erp",
      "upgrade",
      "migration",
      "migrate",
    ],
  },

  "Support Retainer": {
    label: "Support Retainer",
    keywords: ["support", "maintenance", "retainer", "managed support"],
  },

  "Sales App": {
    label: "Sales App",
    keywords: ["sales app", "sales application", "sales team", "field sales"],
  },

  "SRM Platform": {
    label: "SRM Platform",
    keywords: [
      "srm",
      "supplier management",
      "supplier",
      "vendor management",
      "vendor",
    ],
  },

  "Executive Dashboard": {
    label: "Executive Dashboard",
    keywords: [
      "dashboard",
      "executive dashboard",
      "management dashboard",
      "analytics",
      "reporting",
      "kpi",
    ],
  },
};

const QUICK_OPTIONS = [
  "Business Central",
  "ERP Consulting",
  "Integration",
  "Custom Development",
  "ERP Modernisation",
];

const initialLead = {
  name: "",
  email: "",
  company: "",
  phone: "",
  country: "",
  requirement: "",
  service: "",
  currentSystem: "",
  users: "",
  timeline: "",
  score: 0,
};

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text: "Hi 👋 I'm the Velvotix AI Consultant. I can help you with Business Central, ERP, integrations, automation and custom solutions.",
  },
  {
    id: 2,
    sender: "bot",
    text: "What are you looking to improve in your business today?",
  },
];

function normalize(value) {
  return value.toLowerCase().trim();
}

function detectService(text) {
  const value = normalize(text);

  let bestService = "";
  let bestScore = 0;

  Object.entries(SERVICES).forEach(([service, data]) => {
    let score = 0;

    data.keywords.forEach((keyword) => {
      if (value.includes(keyword)) {
        score += keyword.length > 7 ? 2 : 1;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestService = service;
    }
  });

  return bestService;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 8;
}

function calculateLeadScore(lead) {
  let score = 20;

  if (lead.name) score += 5;
  if (lead.company) score += 10;
  if (lead.email) score += 15;
  if (lead.phone) score += 5;
  if (lead.country) score += 5;
  if (lead.currentSystem) score += 10;
  if (lead.users) score += 10;
  if (lead.service) score += 10;

  const timeline = normalize(lead.timeline);

  if (
    timeline.includes("immediate") ||
    timeline.includes("now") ||
    timeline.includes("1 month") ||
    timeline.includes("1-3") ||
    timeline.includes("3 month")
  ) {
    score += 15;
  } else if (timeline.includes("6 month") || timeline.includes("6-12")) {
    score += 8;
  }

  return Math.min(score, 100);
}

function getLeadLabel(score) {
  if (score >= 75) return "🔥 HOT LEAD";
  if (score >= 50) return "🟡 WARM LEAD";
  return "🔵 EARLY-STAGE LEAD";
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("requirement");
  const [typing, setTyping] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [lead, setLead] = useState(initialLead);

  const bottomRef = useRef(null);

  /*
    Hide the little prompt after 8 seconds.
    The chatbot bubble remains visible.
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const addMessage = (sender, text) => {
    setMessages((current) => [
      ...current,
      {
        id: Date.now() + Math.random(),
        sender,
        text,
      },
    ]);
  };

  const botReply = (text, nextStep, delay = 650) => {
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      addMessage("bot", text);

      if (nextStep) {
        setStep(nextStep);
      }
    }, delay);
  };

  /*
    Submit qualified lead to the SAME Google Form
    used by the Contact Page.
  */
  const submitLeadToGoogleForm = async (finalLead) => {
    setSubmitting(true);

    const score = calculateLeadScore(finalLead);

    const serviceName =
      SERVICES[finalLead.service]?.label ||
      finalLead.service ||
      "General Enquiry";

    const leadClassification = getLeadLabel(score);

    const message = `
AI CHATBOT LEAD
============================

Lead Classification: ${leadClassification}
Lead Score: ${score}/100
Lead Source: Website AI Chatbot

CONTACT
Name: ${finalLead.name}
Company: ${finalLead.company}
Email: ${finalLead.email}
Phone / WhatsApp: ${finalLead.phone || "Not provided"}
Country / Region: ${finalLead.country}

BUSINESS REQUIREMENT
Service: ${serviceName}
Requirement: ${finalLead.requirement}

CURRENT SYSTEM
${finalLead.currentSystem || "Not provided"}

NUMBER OF USERS
${finalLead.users || "Not provided"}

PROJECT TIMELINE
${finalLead.timeline || "Not provided"}

============================
Submitted automatically by Velvotix AI Consultant.
`.trim();

    const formData = new FormData();

    formData.append(FORM_FIELDS.name, finalLead.name);
    formData.append(FORM_FIELDS.email, finalLead.email);
    formData.append(FORM_FIELDS.company, finalLead.company);
    formData.append(FORM_FIELDS.region, finalLead.country);
    formData.append(FORM_FIELDS.timezone, "AI Chatbot");
    formData.append(FORM_FIELDS.interest, serviceName);
    formData.append(FORM_FIELDS.message, message);

    try {
      /*
        Google Forms accepts the POST.
        no-cors prevents the browser from blocking the request.
      */
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitting(false);

      return true;
    } catch (error) {
      console.error("AI chatbot lead submission error:", error);

      setSubmitting(false);

      return false;
    }
  };

  const finishLead = async (updatedLead) => {
    const score = calculateLeadScore(updatedLead);

    const finalLead = {
      ...updatedLead,
      score,
    };

    setLead(finalLead);

    const success = await submitLeadToGoogleForm(finalLead);

    if (success) {
      botReply(
        `Thank you, ${finalLead.name}! 🎯\n\nI've captured your requirements and passed them to the Velvotix team.\n\nOur consultant can review your requirement and get back to you.`,
        "complete",
      );
    } else {
      botReply(
        `Thanks, ${finalLead.name}. I have your requirements. Please use our Contact page to make sure our team receives your enquiry.`,
        "complete",
      );
    }
  };

  const processMessage = (rawText) => {
    const text = rawText.trim();

    if (!text || typing || submitting) return;

    addMessage("user", text);
    setInput("");

    /*
      STEP 1 — Requirement
    */
    if (step === "requirement") {
      const detectedService = detectService(text);

      const updatedLead = {
        ...lead,
        requirement: text,
        service: detectedService || "ERP Consulting",
      };

      setLead(updatedLead);

      botReply(
        detectedService
          ? `Got it 👍 It sounds like you're interested in ${SERVICES[detectedService].label}.\n\nWhat system are you currently using?`
          : `Thanks. We can help with that.\n\nWhat system are you currently using today — for example Tally, SAP, Excel, another ERP, or a custom system?`,
        "currentSystem",
      );

      return;
    }

    /*
      STEP 2 — Current system
    */
    if (step === "currentSystem") {
      const updatedLead = {
        ...lead,
        currentSystem: text,
      };

      setLead(updatedLead);

      botReply(
        "Understood. Approximately how many users or employees will need to use the solution?",
        "users",
      );

      return;
    }

    /*
      STEP 3 — Users
    */
    if (step === "users") {
      const updatedLead = {
        ...lead,
        users: text,
      };

      setLead(updatedLead);

      botReply(
        "Thanks. When are you looking to start the project?\n\nFor example: immediately, within 3 months, 3–6 months, 6–12 months, or just researching.",
        "timeline",
      );

      return;
    }

    /*
      STEP 4 — Timeline
    */
    if (step === "timeline") {
      const updatedLead = {
        ...lead,
        timeline: text,
      };

      setLead(updatedLead);

      botReply(
        "Great. Which country or region is your business based in?",
        "country",
      );

      return;
    }

    /*
      STEP 5 — Country
    */
    if (step === "country") {
      const updatedLead = {
        ...lead,
        country: text,
      };

      setLead(updatedLead);

      botReply(
        "Thanks. Let's get a consultant to review this with you.\n\nWhat's your name?",
        "name",
      );

      return;
    }

    /*
      STEP 6 — Name
    */
    if (step === "name") {
      const updatedLead = {
        ...lead,
        name: text,
      };

      setLead(updatedLead);

      botReply("Nice to meet you 👋 What's your company name?", "company");

      return;
    }

    /*
      STEP 7 — Company
    */
    if (step === "company") {
      const updatedLead = {
        ...lead,
        company: text,
      };

      setLead(updatedLead);

      botReply(
        "Thanks. What's the best business email for our consultant to contact you?",
        "email",
      );

      return;
    }

    /*
      STEP 8 — Email
    */
    if (step === "email") {
      if (!isValidEmail(text)) {
        botReply(
          "Could you please enter a valid business email, for example name@company.com?",
          "email",
        );

        return;
      }

      const updatedLead = {
        ...lead,
        email: text,
      };

      setLead(updatedLead);

      botReply(
        "Almost done 👍 Would you like to provide a phone or WhatsApp number for faster follow-up?\n\nYou can also type “skip”.",
        "phone",
      );

      return;
    }

    /*
      STEP 9 — Phone
    */
    if (step === "phone") {
      const skipped = normalize(text) === "skip";

      if (!skipped && !isValidPhone(text)) {
        botReply(
          "Please enter a valid phone/WhatsApp number, or type “skip”.",
          "phone",
        );

        return;
      }

      const updatedLead = {
        ...lead,
        phone: skipped ? "" : text,
      };

      setLead(updatedLead);

      finishLead(updatedLead);

      return;
    }

    /*
      After lead submission
    */
    if (step === "complete") {
      const detectedService = detectService(text);

      if (detectedService) {
        botReply(
          `Yes — ${SERVICES[detectedService].label} is one of the areas Velvotix can help with.\n\nIf you'd like, you can start another consultation.`,
          "complete",
        );
      } else {
        botReply(
          "I can help with Business Central, ERP consulting, integrations, custom development, modernisation and other Velvotix services.\n\nWould you like to start a new consultation?",
          "complete",
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processMessage(input);
  };

  const resetChat = () => {
    setMessages(initialMessages);
    setLead(initialLead);
    setStep("requirement");
    setInput("");
  };

  return (
    <>
      {/* =========================================
          PROMPT BUBBLE
      ========================================== */}

      <AnimatePresence>
        {!open && showPrompt && (
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 20,
              scale: 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            onClick={() => {
              setOpen(true);
              setShowPrompt(false);
            }}
            style={{
              position: "fixed",
              right: 92,
              bottom: 30,
              zIndex: 9997,
              maxWidth: 245,
              padding: "12px 16px",
              borderRadius: 16,
              background: "var(--bg)",
              border: "1px solid rgba(0,153,255,.25)",
              boxShadow: "0 12px 35px rgba(0,0,0,.22)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 3,
              }}
            >
              Need help? 👋
            </div>

            <div
              style={{
                fontSize: 11,
                color: "var(--text2)",
                lineHeight: 1.45,
              }}
            >
              Talk to our AI consultant about your ERP or business requirements.
            </div>

            <div
              style={{
                position: "absolute",
                right: -7,
                bottom: 18,
                width: 14,
                height: 14,
                background: "var(--bg)",
                borderTop: "1px solid rgba(0,153,255,.25)",
                borderRight: "1px solid rgba(0,153,255,.25)",
                transform: "rotate(45deg)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          FLOATING AI BUTTON
      ========================================== */}

      {!open && (
        <motion.button
          type="button"
          aria-label="Open Velvotix AI Consultant"
          onClick={() => {
            setOpen(true);
            setShowPrompt(false);
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          style={{
            position: "fixed",
            right: 22,
            bottom: 22,
            zIndex: 9998,
            width: 62,
            height: 62,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,.35)",
            background: "linear-gradient(135deg, #0099FF, #0066FF)",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,102,255,.42)",
            fontSize: 26,
          }}
        >
          {/* Pulsing ring */}
          <motion.span
            animate={{
              scale: [1, 1.55, 1.55],
              opacity: [0.45, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              inset: -3,
              borderRadius: "50%",
              border: "2px solid rgba(0,153,255,.65)",
              pointerEvents: "none",
            }}
          />

          <span
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            ✦
          </span>

          {/* Online indicator */}
          <span
            style={{
              position: "absolute",
              right: 2,
              bottom: 2,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#22c55e",
              border: "3px solid var(--bg)",
              zIndex: 3,
            }}
          />
        </motion.button>
      )}

      {/* =========================================
          CHAT WINDOW
      ========================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.94,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            style={{
              position: "fixed",
              right: 22,
              bottom: 22,
              zIndex: 99999,
              width: "min(420px, calc(100vw - 28px))",
              height: "min(680px, calc(100vh - 44px))",
              borderRadius: 24,
              overflow: "hidden",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              boxShadow: "0 30px 90px rgba(0,0,0,.45)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "17px 18px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                background:
                  "linear-gradient(135deg, rgba(0,153,255,.14), rgba(255,122,0,.06))",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 43,
                  height: 43,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #0099FF, #0066FF)",
                  color: "#fff",
                  fontSize: 21,
                }}
              >
                ✦
                <span
                  style={{
                    position: "absolute",
                    right: -2,
                    bottom: -2,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#22c55e",
                    border: "2px solid var(--bg)",
                  }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  Velvotix AI Consultant
                </div>

                <div
                  style={{
                    fontSize: 10.5,
                    color: "#22c55e",
                    marginTop: 3,
                  }}
                >
                  ● Online · Ready to help
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--text2)",
                  cursor: "pointer",
                  fontSize: 20,
                }}
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 11,
              }}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    display: "flex",
                    justifyContent:
                      message.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "84%",
                      whiteSpace: "pre-line",
                      padding: "11px 13px",
                      borderRadius:
                        message.sender === "user"
                          ? "16px 16px 4px 16px"
                          : "16px 16px 16px 4px",
                      background:
                        message.sender === "user"
                          ? "linear-gradient(135deg, #0099FF, #0066FF)"
                          : "var(--card)",
                      border:
                        message.sender === "user"
                          ? "none"
                          : "1px solid var(--border)",
                      color: message.sender === "user" ? "#fff" : "var(--text)",
                      fontSize: 13,
                      lineHeight: 1.55,
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div
                  style={{
                    alignSelf: "flex-start",
                    padding: "10px 14px",
                    borderRadius: 15,
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--text3)",
                    fontSize: 12,
                  }}
                >
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                  >
                    AI is thinking...
                  </motion.span>
                </div>
              )}

              {step === "requirement" && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 7,
                  }}
                >
                  {QUICK_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => processMessage(option)}
                      style={{
                        padding: "8px 11px",
                        borderRadius: 12,
                        border: "1px solid rgba(0,153,255,.3)",
                        background: "rgba(0,153,255,.07)",
                        color: "#0099FF",
                        fontSize: 11.5,
                        cursor: "pointer",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {step === "complete" && (
                <button
                  type="button"
                  onClick={resetChat}
                  style={{
                    alignSelf: "flex-start",
                    padding: "9px 13px",
                    borderRadius: 11,
                    border: "1px solid rgba(0,153,255,.3)",
                    background: "rgba(0,153,255,.07)",
                    color: "#0099FF",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Start another consultation
                </button>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              style={{
                padding: 12,
                borderTop: "1px solid var(--border)",
                display: "flex",
                gap: 8,
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={typing || submitting}
                placeholder={
                  submitting
                    ? "Submitting your enquiry..."
                    : "Type your message..."
                }
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: 44,
                  padding: "0 13px",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  outline: "none",
                  fontSize: 13,
                }}
              />

              <button
                type="submit"
                disabled={!input.trim() || typing || submitting}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  border: 0,
                  background:
                    input.trim() && !typing && !submitting
                      ? "#0099FF"
                      : "var(--border)",
                  color: "#fff",
                  cursor:
                    input.trim() && !typing && !submitting
                      ? "pointer"
                      : "default",
                  fontSize: 18,
                }}
              >
                →
              </button>
            </form>

            <div
              style={{
                padding: "0 14px 9px",
                textAlign: "center",
                fontSize: 9.5,
                color: "var(--text3)",
              }}
            >
              Velvotix AI Consultant · Your information is used for business
              enquiry follow-up.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
