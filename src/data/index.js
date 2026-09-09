export const NAV = [
  { label: "Solutions", path: "/solutions" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "About", path: "/about" },
];

export const REGIONS = [
  { flag: "🇮🇳", name: "India", note: "Headquarters & Dev Hub" },
  { flag: "🇦🇪", name: "UAE", note: "Middle East Operations" },
  { flag: "🇬🇧", name: "UK", note: "Europe Delivery" },
  { flag: "🇸🇬", name: "Singapore", note: "Southeast Asia" },
  { flag: "🇺🇸", name: "USA", note: "North America" },
  { flag: "🇨🇦", name: "Canada", note: "North America" },
];

export const MARQUEE_NAMES = [
  "Consumer Goods Co.",
  "Manufacturing Co.",
  "Distribution Ltd",
  "Trading Corp",
  "Service Org",
  "Supply Chain Co.",
  "Smart Factory",
  "Global Trader",
  "ERP Partner",
  "Tech Enterprise",
];

export const SERVICES = [
  {
    id: "consulting",
    icon: "🧠",
    color: "#0099FF",
    sub: "Strategic Implementation",
    title: "ERP Consulting",
    desc: "Full-lifecycle Business Central implementations — from requirements and process mapping to configuration, data migration, and go-live. Delivered to enterprises across five continents.",
    tags: [
      "BC Implementation",
      "Functional Consulting",
      "Solution Architecture",
      "Digital Roadmap",
    ],
  },
  {
    id: "development",
    icon: "⚙️",
    color: "#00C2FF",
    sub: "AL Extensions & Web Apps",
    title: "Custom Development",
    desc: "AL extensions, custom pages, codeunits, API connectors, React.js and Next.js enterprise portals — all built to production standards and optimised for performance at scale.",
    tags: [
      "AL Development",
      "API Integrations",
      "React Apps",
      "Next.js Portals",
    ],
  },
  {
    id: "support",
    icon: "🛡️",
    color: "#FF7A00",
    sub: "Always On, Always Yours",
    title: "Dedicated Support",
    desc: "Dedicated functional and technical Business Central resources with defined SLAs. Proactive maintenance, monthly updates, user training — your extended ERP team globally.",
    tags: [
      "Functional Support",
      "Technical Help",
      "Dedicated Resources",
      "Maintenance",
    ],
  },
  {
    id: "integration",
    icon: "⚡",
    color: "#00D9FF",
    sub: "Connect Your Ecosystem",
    title: "ERP Integrations",
    desc: "Azure Logic Apps, Power Automate, REST/SOAP APIs, e-commerce connectors, and payment gateways — Business Central as the hub of your entire digital stack.",
    tags: ["Azure Integration", "API Connectors", "ERP Sync", "Data Pipelines"],
  },
  {
    id: "modernisation",
    icon: "🚀",
    color: "#FF5500",
    sub: "Legacy to Cloud-Native",
    title: "ERP Modernisation",
    desc: "Migrate from legacy NAV or ageing ERP to modern Business Central cloud. Preserve your business logic, re-engineer processes, run parallel testing, cut over cleanly.",
    tags: [
      "Legacy Migration",
      "Cloud Transformation",
      "PWA Development",
      "Portal Design",
    ],
  },
  {
    id: "apps",
    icon: "📱",
    color: "#0099FF",
    sub: "Web, Mobile & Portals",
    title: "Enterprise Apps",
    desc: "Progressive Web Apps, mobile ERP interfaces, customer and vendor portals — bringing the full power of Business Central to every device and every user, anywhere.",
    tags: [
      "PWA Development",
      "Mobile ERP",
      "Enterprise Portals",
      "Responsive Design",
    ],
  },
];

export const PRODUCTS = [
  {
    id: "sales",
    icon: "📈",
    color: "#0099FF",
    badge: "Most Popular",
    name: "Sales Intelligence App",
    tagline: "BC-Integrated Sales Platform",
    desc: "Real-time inventory, pricing, customer history, and order management — fully synced with Business Central. Built for sales teams who need speed and accuracy.",
    features: [
      "Real-time BC Sync",
      "Customer Intelligence",
      "Order Management",
      "Pipeline Analytics",
    ],
  },
  {
    id: "srm",
    icon: "🤝",
    color: "#00C2FF",
    badge: "Enterprise",
    name: "Supplier Relationship Management",
    tagline: "End-to-End Supplier Control",
    desc: "PO automation, delivery tracking, vendor performance scoring, and a self-service supplier portal — all connected to Business Central in real time.",
    features: [
      "Vendor Portal",
      "PO Automation",
      "Performance Tracking",
      "BC Integration",
    ],
  },
  {
    id: "production",
    icon: "🏭",
    color: "#FF7A00",
    badge: "Manufacturing",
    name: "Production Management",
    tagline: "Smart Manufacturing Control",
    desc: "Work orders, shop floor control, capacity planning, quality tracking — integrated with BC manufacturing modules for total production visibility.",
    features: [
      "Work Order Management",
      "Shop Floor Control",
      "Capacity Planning",
      "Quality Tracking",
    ],
  },
  {
    id: "supply",
    icon: "🔗",
    color: "#00D9FF",
    badge: null,
    name: "Supply Chain Suite",
    tagline: "End-to-End Visibility",
    desc: "Multi-warehouse inventory, logistics management, supplier network oversight, and demand forecasting — all surfaced from live Business Central data.",
    features: [
      "Inventory Tracking",
      "Logistics Management",
      "Supplier Network",
      "Demand Forecasting",
    ],
  },
  {
    id: "vendor",
    icon: "🏢",
    color: "#FF5500",
    badge: null,
    name: "Vendor Portal",
    tagline: "Self-Service Supplier Hub",
    desc: "Branded portal where vendors submit invoices, check PO status, upload documents, and communicate — synced bidirectionally with Business Central.",
    features: [
      "Invoice Submission",
      "PO Tracking",
      "Document Upload",
      "BC Sync",
    ],
  },
  {
    id: "dashboard",
    icon: "📊",
    color: "#0099FF",
    badge: "New",
    name: "Executive Dashboard Suite",
    tagline: "BI Command Centre",
    desc: "Live KPIs, financial metrics, operational insights, and predictive analytics — pulled directly from Business Central and accessible from anywhere in the world.",
    features: [
      "Live BC Data",
      "Custom KPIs",
      "Predictive Analytics",
      "Mobile Ready",
    ],
  },
];

export const METRICS = [
  {
    val: 50,
    suf: "+",
    label: "Projects Delivered",
    sub: "Global implementations",
  },
  {
    val: 100,
    suf: "+",
    label: "Integrations Built",
    sub: "API & Azure connections",
  },
  { val: 10000, suf: "+", label: "Support Hours", sub: "Dedicated BC support" },
  { val: 15, suf: "+", label: "ERP Experts", sub: "Certified consultants" },
  { val: 98, suf: "%", label: "Satisfaction Rate", sub: "Client retention" },
];

export const CASES = [
  {
    id: "manufacturing-business-central",
    icon: "🏭",
    color: "#0099FF",
    industry: "Manufacturing",
    client: "Global Manufacturing Enterprise",
    title:
      "Business Central implementation and production process modernization",
    body: "A manufacturing organization needed to modernize finance, inventory, purchasing, production and operational reporting while moving toward a more standardized Business Central environment.",
    results: [
      "Business Central environment configuration aligned with core manufacturing processes",
      "Financial dimensions and reporting structures configured for management visibility",
      "Master data migration and validation across customers, vendors, items and operational records",
      "Production, purchasing and inventory workflows mapped and optimized",
      "User roles and permissions structured around operational responsibilities",
      "User training and documentation prepared for business teams",
      "Post-go-live hypercare and optimization support provided",
    ],
    tags: [
      "Microsoft Dynamics 365 Business Central",
      "Manufacturing",
      "Implementation",
      "Finance",
      "Inventory",
      "Production",
      "Data Migration",
    ],
  },

  {
    id: "distribution-erp-modernization",
    icon: "📦",
    color: "#FF7A00",
    industry: "Distribution",
    client: "Distribution & Wholesale Business",
    title:
      "ERP modernization for purchasing, inventory and distribution operations",
    body: "A growing distribution business required a more connected ERP foundation for purchasing, inventory management, sales operations and financial reporting across a growing operational footprint.",
    results: [
      "Business Central processes mapped against existing operational workflows",
      "Purchasing and inventory processes standardized across teams",
      "Item, customer and vendor master data prepared for migration",
      "Warehouse and inventory processes reviewed for improved operational consistency",
      "Financial reporting and dimensions aligned with management requirements",
      "Business users supported through training and adoption activities",
      "Ongoing functional and technical support established after implementation",
    ],
    tags: [
      "Business Central",
      "Distribution",
      "Inventory Management",
      "Purchasing",
      "Warehouse",
      "ERP Modernization",
    ],
  },

  {
    id: "ecommerce-business-central-integration",
    icon: "🛒",
    color: "#00D9FF",
    industry: "E-commerce",
    client: "Multi-Channel Commerce Business",
    title: "E-commerce and Business Central integration",
    body: "An online commerce operation needed reliable synchronization between its digital sales environment and Business Central so orders, customers, products and operational data could move between systems without repetitive manual processing.",
    results: [
      "Business Central APIs used as the ERP integration foundation",
      "Order and customer synchronization workflows designed around business requirements",
      "Product and inventory data integration established between systems",
      "Integration flows designed to reduce duplicate manual data entry",
      "Error handling and monitoring requirements incorporated into the integration architecture",
      "Business and technical teams supported through integration testing",
      "Documentation provided for ongoing maintenance and troubleshooting",
    ],
    tags: [
      "Business Central",
      "E-commerce",
      "API Integration",
      "REST API",
      "Automation",
      "Data Synchronization",
    ],
  },

  {
    id: "legacy-nav-to-business-central",
    icon: "🔄",
    color: "#0099FF",
    industry: "ERP Modernization",
    client: "Legacy ERP Environment",
    title: "Legacy NAV modernization and transition to Business Central",
    body: "A business operating on a legacy Dynamics NAV environment required a structured path toward modern Business Central architecture while protecting important business processes and historical data.",
    results: [
      "Legacy ERP environment assessed before modernization planning",
      "Existing customizations reviewed and mapped against Business Central capabilities",
      "Custom functionality identified for conversion, redesign or retirement",
      "Data migration and cleansing requirements defined",
      "Legacy development patterns assessed for AL-based modernization",
      "Cutover and validation activities planned around business continuity",
      "Post-migration optimization and technical support provided",
    ],
    tags: [
      "Dynamics NAV",
      "Business Central",
      "ERP Migration",
      "AL Development",
      "Data Migration",
      "Cloud",
      "Modernization",
    ],
  },

  {
    id: "business-central-al-development",
    icon: "💻",
    color: "#FF7A00",
    industry: "Enterprise Applications",
    client: "Enterprise Business Application",
    title: "Custom Business Central extensions and AL development",
    body: "An enterprise required functionality beyond standard Business Central capabilities. The engagement focused on designing maintainable extensions and custom workflows while keeping the solution aligned with the Business Central extension model.",
    results: [
      "Business requirements translated into technical extension specifications",
      "Custom AL extensions developed for required business processes",
      "Custom pages, reports and codeunits developed where required",
      "Business Central events and extension architecture used to reduce invasive customization",
      "Technical code reviews performed during development",
      "Testing and validation performed against business scenarios",
      "Technical documentation prepared for future maintenance",
    ],
    tags: [
      "Business Central",
      "AL Development",
      "Extensions",
      "Custom Development",
      "Reports",
      "Codeunits",
      "Technical Consulting",
    ],
  },

  {
    id: "azure-business-central-integration",
    icon: "☁️",
    color: "#00D9FF",
    industry: "Enterprise Integration",
    client: "Connected Enterprise Environment",
    title: "Azure-powered integration architecture for Business Central",
    body: "A business needed Business Central to communicate reliably with external applications and services. The solution focused on creating a scalable integration architecture using Microsoft cloud technologies.",
    results: [
      "Integration requirements documented across ERP and external systems",
      "Business Central APIs incorporated into the integration architecture",
      "Azure integration services evaluated and configured around workflow requirements",
      "Automated data flows designed between connected applications",
      "Integration monitoring and error handling considered as part of the architecture",
      "Technical documentation created for operational support",
      "Architecture designed to support future integrations and system growth",
    ],
    tags: [
      "Business Central",
      "Azure",
      "Integration",
      "APIs",
      "Logic Apps",
      "Power Automate",
      "Enterprise Architecture",
    ],
  },

  {
    id: "business-central-support",
    icon: "🛠️",
    color: "#FF5500",
    industry: "Business Central Support",
    client: "Growing Business Central Customer",
    title: "Ongoing functional and technical Business Central support",
    body: "A Business Central customer needed ongoing access to functional and technical expertise after go-live, including issue resolution, updates, testing, user assistance and continuous optimization.",
    results: [
      "Functional and technical support provided according to business priorities",
      "Business Central updates reviewed and regression testing supported",
      "User issues investigated and resolved across functional areas",
      "Technical development support provided when standard functionality required extension",
      "User onboarding and training assistance provided",
      "Recurring health checks used to identify improvement opportunities",
      "Optimization recommendations reviewed with business stakeholders",
    ],
    tags: [
      "Business Central Support",
      "Functional Support",
      "Technical Support",
      "AL Development",
      "Testing",
      "Training",
      "Optimization",
    ],
  },

  {
    id: "business-central-customer-vendor-portal",
    icon: "🌐",
    color: "#0099FF",
    industry: "Digital Transformation",
    client: "Enterprise Customer & Vendor Operations",
    title: "Modern web portal connected to Business Central",
    body: "An enterprise required a modern digital interface for external stakeholders while maintaining Business Central as the operational system of record.",
    results: [
      "Business requirements translated into a responsive web application",
      "Business Central integration architecture designed around required data flows",
      "Customer and vendor-facing workflows modeled around ERP processes",
      "API-based communication established between the application and Business Central",
      "Responsive experience designed for desktop and mobile users",
      "Authentication and access requirements incorporated into the application design",
      "Architecture prepared for future portal functionality and expansion",
    ],
    tags: [
      "Business Central",
      "React",
      "Next.js",
      "Web Portal",
      "APIs",
      "Digital Transformation",
      "Enterprise Applications",
    ],
  },

  {
    id: "business-central-training-change",
    icon: "🎓",
    color: "#00D9FF",
    industry: "ERP Adoption",
    client: "Business Central Implementation Team",
    title: "Business Central training and change enablement",
    body: "Successful ERP adoption requires more than configuration. The engagement focused on helping business users understand new processes, roles and workflows while supporting the transition into the Business Central environment.",
    results: [
      "Business processes documented for key user groups",
      "Training requirements identified by functional area",
      "User training sessions structured around practical business scenarios",
      "Process documentation prepared for recurring operational activities",
      "User questions and adoption issues addressed during transition",
      "Feedback captured for post-go-live optimization",
      "Knowledge transfer supported across business and technical teams",
    ],
    tags: [
      "Business Central",
      "Training",
      "Change Management",
      "User Adoption",
      "Documentation",
      "ERP Implementation",
    ],
  },
];

export const PROCESS = [
  {
    n: "01",
    icon: "🔍",
    color: "#0099FF",
    title: "Discover & Consult",
    desc: "Deep-dive into your business processes, pain points, and goals. We map your ERP landscape and design a transformation roadmap.",
  },
  {
    n: "02",
    icon: "✏️",
    color: "#00C2FF",
    title: "Architect & Design",
    desc: "Solution architecture, technical design, and UX prototyping. Every component is planned before a single line of code is written.",
  },
  {
    n: "03",
    icon: "💻",
    color: "#00D9FF",
    title: "Develop & Extend",
    desc: "Agile sprints, regular demos, and iterative refinement. Your team is involved throughout — no black-box development.",
  },
  {
    n: "04",
    icon: "🔗",
    color: "#FF7A00",
    title: "Integrate & Test",
    desc: "Rigorous integration testing, performance validation, and UAT across all connected systems and time zones.",
  },
  {
    n: "05",
    icon: "🚀",
    color: "#FF5500",
    title: "Deploy & Support",
    desc: "Smooth go-live with dedicated hypercare, training, and a long-term partnership that evolves with your business.",
  },
];

export const TESTIMONIALS = [
  {
    role: "Operations Director",
    company: "Consumer Goods Co.",
    stars: 5,
    quote:
      "Velvotix transformed how we manage our dealer network. The custom sales application connected to Business Central has been a game changer for our entire operations team across India.",
  },
  {
    role: "Head of IT",
    company: "Manufacturing Enterprise",
    stars: 5,
    quote:
      "The technical expertise Velvotix brings to Business Central is exceptional. They understood our manufacturing processes better than any vendor we evaluated.",
  },
  {
    role: "Chief Financial Officer",
    company: "Distribution Business",
    stars: 5,
    quote:
      "The executive dashboard suite gives us real-time supply chain visibility we never had before. ROI was clear within the first quarter of go-live.",
  },
];

export const PRIVACY_POLICY = {
  effectiveDate: "September 7, 2026",

  intro: {
    title: "Our commitment",
    text: `
      Velvotix is committed to handling personal information responsibly and
      transparently. We collect only the information reasonably required to
      communicate with you, deliver our services, and operate our business.
    `,
  },

  sections: [
    {
      number: "01",
      title: "Information We Collect",
      paragraphs: [
        `When you interact with Velvotix, we may collect information that you voluntarily provide to us, including your name, business email address, company name, country or region, timezone, areas of interest, and any information you include in your message or consultation request.`,

        `We may also automatically collect limited technical information when you visit our website, such as browser type, device information, pages visited, approximate location, and general usage information.`,
      ],
    },

    {
      number: "02",
      title: "How We Use Your Information",
      paragraphs: [
        `We use the information we collect to understand your requirements, respond to enquiries, provide consulting or technology services, schedule discussions, and communicate with you about our services.`,

        `We may also use information to improve our website, services, user experience, security, and internal business operations.`,

        `We do not use your personal information for purposes that are incompatible with the reason it was originally collected without appropriate notice or, where required, your consent.`,
      ],
    },

    {
      number: "03",
      title: "Information Sharing",
      paragraphs: [
        `Velvotix does not sell or rent your personal information.`,

        `We may share information with trusted service providers who help us operate our website, manage enquiries, provide business services, or maintain our technology infrastructure. These providers are expected to handle information appropriately and only for the purposes for which it is provided.`,

        `We may also disclose information where required by applicable law, legal process, regulatory requirements, or where reasonably necessary to protect our rights, users, or business.`,
      ],
    },

    {
      number: "04",
      title: "Google Forms & Third-Party Services",
      paragraphs: [
        `Our website may use third-party services to collect and process information submitted through forms. For example, enquiry forms may transmit submitted information to Google Forms or other service providers used by Velvotix.`,

        `These third-party providers may process information according to their own privacy policies and terms. We encourage you to review their policies when interacting with services provided by third parties.`,
      ],
    },

    {
      number: "05",
      title: "Cookies & Analytics",
      paragraphs: [
        `Our website may use cookies, analytics tools, or similar technologies to understand website traffic, remember preferences, improve performance, and understand how visitors interact with our website.`,

        `You can generally control or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.`,
      ],
    },

    {
      number: "06",
      title: "Data Security",
      paragraphs: [
        `We take reasonable technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure, or destruction.`,

        `However, no method of transmitting or storing information over the internet can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security of information transmitted to or through our website.`,
      ],
    },

    {
      number: "07",
      title: "Data Retention",
      paragraphs: [
        `We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including to respond to enquiries, provide services, maintain business records, comply with legal obligations, resolve disputes, and enforce our agreements.`,

        `Retention periods may vary depending on the type of information and the purpose for which it was collected.`,
      ],
    },

    {
      number: "08",
      title: "Your Privacy Rights",
      paragraphs: [
        `Depending on your location and applicable law, you may have rights relating to your personal information, including the right to request access, correction, deletion, restriction, or other applicable forms of control over your information.`,

        `If you would like to exercise an applicable privacy right or ask a question about how your information is handled, please contact us using the details provided below.`,
      ],
    },

    {
      number: "09",
      title: "International Data Transfers",
      paragraphs: [
        `Velvotix works with clients and service providers across multiple regions. As a result, personal information may be processed or stored in countries other than the country in which you are located.`,

        `Where applicable, we take reasonable steps to ensure that international transfers of personal information are handled in accordance with applicable privacy and data-protection requirements.`,
      ],
    },

    {
      number: "10",
      title: "Children's Privacy",
      paragraphs: [
        `Our website and services are intended for businesses and professionals. We do not knowingly collect personal information from children through our website.`,
      ],
    },

    {
      number: "11",
      title: "Changes to This Policy",
      paragraphs: [
        `We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices.`,

        `Any updated version will be published on this page with a revised effective date. We encourage you to review this page periodically.`,
      ],
    },
  ],

  contact: {
    title: "Questions about your privacy?",
    description:
      "If you have questions, concerns, or requests regarding this Privacy Policy, please contact our team.",
    email: "info@velvotix.com",
  },
};

export const TERMS_OF_SERVICE = {
  effectiveDate: "September 7, 2026",
  intro: {
    title: "Agreement to Our Terms",
    text: ` These Terms of Service govern your use of the Velvotix website and the services provided by Velvotix Solutions. By accessing our website or engaging our services, you agree to be bound by these terms. `,
  },
  sections: [
    {
      number: "01",
      title: "About Velvotix",
      paragraphs: [
        `Velvotix Solutions provides ERP consulting, implementation, custom development, system integration, modernisation, support, reporting, and related technology services to businesses and organisations.`,
        `Specific services, deliverables, timelines, fees, and responsibilities may be defined separately in proposals, statements of work, service agreements, purchase orders, or other written agreements.`,
      ],
    },
    {
      number: "02",
      title: "Use of Our Website",
      paragraphs: [
        `You may use our website for lawful business and informational purposes only.`,
        `You agree not to misuse the website, attempt to gain unauthorised access to systems or data, interfere with website operation, introduce malicious software, scrape or collect information through automated means without permission, or use the website for fraudulent or unlawful activities.`,
      ],
    },
    {
      number: "03",
      title: "Consulting & Professional Services",
      paragraphs: [
        `Our consulting and technology services are provided based on the requirements, information, systems, and assumptions agreed with the client.`,
        `Project scope, deliverables, milestones, dependencies, client responsibilities, fees, payment terms, and acceptance criteria may be specified in a separate written agreement.`,
        `Any changes to the agreed scope may require additional time, resources, or fees and may be handled through a written change request or revised statement of work.`,
      ],
    },
    {
      number: "04",
      title: "Client Responsibilities",
      paragraphs: [
        `Clients are responsible for providing accurate and complete information, timely access to relevant systems, appropriate personnel, approvals, decisions, credentials, documentation, and other resources reasonably required to perform the agreed services.`,
        `Delays caused by missing information, unavailable personnel, third-party systems, infrastructure limitations, or other matters outside our reasonable control may affect project timelines and deliverables.`,
      ],
    },
    {
      number: "05",
      title: "Fees & Payments",
      paragraphs: [
        `Fees for our services will be communicated through applicable proposals, quotations, statements of work, invoices, or other written agreements.`,
        `Unless otherwise agreed in writing, invoices are payable according to the payment terms specified on the applicable invoice or agreement.`,
        `Additional work outside the agreed scope may be billed separately following prior communication with the client.`,
      ],
    },
    {
      number: "06",
      title: "Intellectual Property",
      paragraphs: [
        `Each party retains ownership of intellectual property that it owned before the engagement.`,
        `Unless otherwise agreed in writing, Velvotix retains ownership of its pre-existing tools, frameworks, libraries, methodologies, templates, know-how, reusable components, and general technical knowledge used in delivering services.`,
        `Ownership or licensing of project-specific deliverables will be governed by the applicable agreement between Velvotix and the client.`,
      ],
    },
    {
      number: "07",
      title: "Third-Party Services & Systems",
      paragraphs: [
        `Our services may involve third-party software, platforms, APIs, hosting providers, payment providers, cloud services, or other external systems.`,
        `Third-party services are subject to their own terms, availability, pricing, security practices, and policies. Velvotix is not responsible for changes, interruptions, failures, or limitations caused by third-party services outside our reasonable control.`,
        `Where applicable, clients are responsible for maintaining the necessary licences, subscriptions, permissions, and accounts required to use third-party systems.`,
      ],
    },
    {
      number: "08",
      title: "Confidentiality",
      paragraphs: [
        `Both parties may receive confidential business, technical, financial, operational, or other non-public information during an engagement.`,
        `Each party agrees to use reasonable measures to protect confidential information and not disclose it to unauthorised third parties except where required by law or permitted by an applicable agreement.`,
        `Confidentiality obligations may be further defined in a separate non-disclosure agreement or service agreement.`,
      ],
    },
    {
      number: "09",
      title: "Data Protection & Privacy",
      paragraphs: [
        `We may process personal information when providing our services or responding to enquiries. Our handling of personal information is described in our Privacy Policy.`,
        `Where a project involves the processing of personal data on behalf of a client, the parties may enter into additional data-processing terms where required by applicable law.`,
      ],
    },
    {
      number: "10",
      title: "Warranties & Disclaimers",
      paragraphs: [
        `We aim to provide professional services with reasonable care and skill. However, we do not guarantee that our website, services, software integrations, or third-party systems will always be uninterrupted, error-free, or available.`,
        `Business, financial, operational, or technical outcomes may depend on factors outside our control, including client decisions, third-party systems, data quality, infrastructure, and implementation conditions.`,
        `Unless expressly stated in a written agreement, services and website content are provided on an as-available basis and without warranties beyond those that cannot legally be excluded.`,
      ],
    },
    {
      number: "11",
      title: "Limitation of Liability",
      paragraphs: [
        `To the maximum extent permitted by applicable law, Velvotix will not be liable for indirect, incidental, special, consequential, or punitive losses, including loss of profits, revenue, business opportunities, data, or anticipated savings arising from the use of our website or services.`,
        `Any liability arising from a specific client engagement will be subject to the applicable written agreement between the parties and any limitations permitted by applicable law.`,
      ],
    },
    {
      number: "12",
      title: "Indemnification",
      paragraphs: [
        `To the extent permitted by applicable law and any applicable written agreement, each party may be responsible for claims arising from its own unlawful conduct, material breach of its obligations, or infringement of third-party rights.`,
        `Specific indemnification obligations, if applicable, will be governed by the relevant service agreement or statement of work.`,
      ],
    },
    {
      number: "13",
      title: "Suspension & Termination",
      paragraphs: [
        `Either party may terminate a service engagement according to the termination provisions contained in the applicable agreement.`,
        `Velvotix may suspend access to services where reasonably necessary to address security concerns, unlawful activity, non-payment, misuse, or material breaches of applicable terms.`,
        `Termination will not affect rights or obligations that are intended to survive termination, including applicable payment, confidentiality, intellectual property, liability, and dispute-related provisions.`,
      ],
    },
    {
      number: "14",
      title: "Force Majeure",
      paragraphs: [
        `Neither party will be responsible for failure or delay in performing obligations caused by circumstances beyond its reasonable control, including natural disasters, war, civil unrest, government action, major infrastructure failures, widespread internet or telecommunications outages, or other events that could not reasonably have been prevented.`,
      ],
    },
    {
      number: "15",
      title: "Changes to These Terms",
      paragraphs: [
        `We may update these Terms of Service from time to time to reflect changes to our website, services, business practices, or legal requirements.`,
        `Updated terms will be published on this page with a revised effective date. Continued use of our website after an update constitutes acceptance of the revised terms to the extent permitted by applicable law.`,
      ],
    },
    {
      number: "16",
      title: "Governing Law",
      paragraphs: [
        `These Terms of Service will be governed by the applicable laws agreed between Velvotix and the relevant client in the applicable service agreement.`,
        `Where no separate written agreement specifies governing law or jurisdiction, the parties will seek to resolve disputes through good-faith discussion before pursuing other remedies available under applicable law.`,
      ],
    },
    {
      number: "17",
      title: "Contact Us",
      paragraphs: [
        `If you have questions about these Terms of Service or our services, please contact Velvotix Solutions using the contact information below.`,
      ],
    },
  ],
  contact: {
    title: "Questions about our terms?",
    description:
      "If you have questions about these Terms of Service or our services, our team is happy to help.",
    email: "info@velvotix.com",
  },
};
