export const NAV = [
  { label: 'Solutions',    path: '/solutions'    },
  { label: 'Products',     path: '/products'     },
  { label: 'Services',     path: '/services'     },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About',        path: '/about'        },
];

export const REGIONS = [
  { flag: '🇮🇳', name: 'India',     note: 'Headquarters & Dev Hub' },
  { flag: '🇦🇪', name: 'UAE',       note: 'Middle East Operations'  },
  { flag: '🇬🇧', name: 'UK',        note: 'Europe Delivery'         },
  { flag: '🇸🇬', name: 'Singapore', note: 'Southeast Asia'          },
  { flag: '🇺🇸', name: 'USA',       note: 'North America'           },
  { flag: '🇨🇦', name: 'Canada',    note: 'North America'           },
];

export const MARQUEE_NAMES = [
  'Singer India', 'Manufacturing Co.', 'Distribution Ltd', 'Trading Corp',
  'Service Org', 'Supply Chain Co.', 'Smart Factory', 'Global Trader',
  'ERP Partner', 'Tech Enterprise',
];

export const SERVICES = [
  {
    id: 'consulting', icon: '🧠', color: '#0099FF', sub: 'Strategic Implementation',
    title: 'ERP Consulting',
    desc: 'Full-lifecycle Business Central implementations — from requirements and process mapping to configuration, data migration, and go-live. Delivered to enterprises across five continents.',
    tags: ['BC Implementation', 'Functional Consulting', 'Solution Architecture', 'Digital Roadmap'],
  },
  {
    id: 'development', icon: '⚙️', color: '#00C2FF', sub: 'AL Extensions & Web Apps',
    title: 'Custom Development',
    desc: 'AL extensions, custom pages, codeunits, API connectors, React.js and Next.js enterprise portals — all built to production standards and optimised for performance at scale.',
    tags: ['AL Development', 'API Integrations', 'React Apps', 'Next.js Portals'],
  },
  {
    id: 'support', icon: '🛡️', color: '#FF7A00', sub: 'Always On, Always Yours',
    title: 'Dedicated Support',
    desc: 'Dedicated functional and technical Business Central resources with defined SLAs. Proactive maintenance, monthly updates, user training — your extended ERP team globally.',
    tags: ['Functional Support', 'Technical Help', 'Dedicated Resources', 'Maintenance'],
  },
  {
    id: 'integration', icon: '⚡', color: '#00D9FF', sub: 'Connect Your Ecosystem',
    title: 'ERP Integrations',
    desc: 'Azure Logic Apps, Power Automate, REST/SOAP APIs, e-commerce connectors, and payment gateways — Business Central as the hub of your entire digital stack.',
    tags: ['Azure Integration', 'API Connectors', 'ERP Sync', 'Data Pipelines'],
  },
  {
    id: 'modernisation', icon: '🚀', color: '#FF5500', sub: 'Legacy to Cloud-Native',
    title: 'ERP Modernisation',
    desc: 'Migrate from legacy NAV or ageing ERP to modern Business Central cloud. Preserve your business logic, re-engineer processes, run parallel testing, cut over cleanly.',
    tags: ['Legacy Migration', 'Cloud Transformation', 'PWA Development', 'Portal Design'],
  },
  {
    id: 'apps', icon: '📱', color: '#0099FF', sub: 'Web, Mobile & Portals',
    title: 'Enterprise Apps',
    desc: 'Progressive Web Apps, mobile ERP interfaces, customer and vendor portals — bringing the full power of Business Central to every device and every user, anywhere.',
    tags: ['PWA Development', 'Mobile ERP', 'Enterprise Portals', 'Responsive Design'],
  },
];

export const PRODUCTS = [
  {
    id: 'sales', icon: '📈', color: '#0099FF', badge: 'Most Popular',
    name: 'Sales Intelligence App', tagline: 'BC-Integrated Sales Platform',
    desc: 'Real-time inventory, pricing, customer history, and order management — fully synced with Business Central. Built for sales teams who need speed and accuracy.',
    features: ['Real-time BC Sync', 'Customer Intelligence', 'Order Management', 'Pipeline Analytics'],
  },
  {
    id: 'srm', icon: '🤝', color: '#00C2FF', badge: 'Enterprise',
    name: 'Supplier Relationship Management', tagline: 'End-to-End Supplier Control',
    desc: 'PO automation, delivery tracking, vendor performance scoring, and a self-service supplier portal — all connected to Business Central in real time.',
    features: ['Vendor Portal', 'PO Automation', 'Performance Tracking', 'BC Integration'],
  },
  {
    id: 'production', icon: '🏭', color: '#FF7A00', badge: 'Manufacturing',
    name: 'Production Management', tagline: 'Smart Manufacturing Control',
    desc: 'Work orders, shop floor control, capacity planning, quality tracking — integrated with BC manufacturing modules for total production visibility.',
    features: ['Work Order Management', 'Shop Floor Control', 'Capacity Planning', 'Quality Tracking'],
  },
  {
    id: 'supply', icon: '🔗', color: '#00D9FF', badge: null,
    name: 'Supply Chain Suite', tagline: 'End-to-End Visibility',
    desc: 'Multi-warehouse inventory, logistics management, supplier network oversight, and demand forecasting — all surfaced from live Business Central data.',
    features: ['Inventory Tracking', 'Logistics Management', 'Supplier Network', 'Demand Forecasting'],
  },
  {
    id: 'vendor', icon: '🏢', color: '#FF5500', badge: null,
    name: 'Vendor Portal', tagline: 'Self-Service Supplier Hub',
    desc: 'Branded portal where vendors submit invoices, check PO status, upload documents, and communicate — synced bidirectionally with Business Central.',
    features: ['Invoice Submission', 'PO Tracking', 'Document Upload', 'BC Sync'],
  },
  {
    id: 'dashboard', icon: '📊', color: '#0099FF', badge: 'New',
    name: 'Executive Dashboard Suite', tagline: 'BI Command Centre',
    desc: 'Live KPIs, financial metrics, operational insights, and predictive analytics — pulled directly from Business Central and accessible from anywhere in the world.',
    features: ['Live BC Data', 'Custom KPIs', 'Predictive Analytics', 'Mobile Ready'],
  },
];

export const METRICS = [
  { val: 50,    suf: '+', label: 'Projects Delivered', sub: 'Global implementations'   },
  { val: 100,   suf: '+', label: 'Integrations Built',  sub: 'API & Azure connections'  },
  { val: 10000, suf: '+', label: 'Support Hours',        sub: 'Dedicated BC support'     },
  { val: 15,    suf: '+', label: 'ERP Experts',          sub: 'Certified consultants'    },
  { val: 98,    suf: '%', label: 'Satisfaction Rate',    sub: 'Client retention'         },
];

export const CASES = [
  {
    id: 'singer', icon: '⚡', color: '#0099FF',
    client: 'Singer India', industry: 'Consumer Electronics & Retail',
    title: 'Enterprise BC Implementation with Custom Sales Intelligence Platform',
    body: 'Complete Business Central rollout across a nationwide retail and dealer network. Custom Sales App, dealer portal, and real-time inventory sync — transforming order operations for one of India\'s most recognised consumer brands.',
    results: ['300+ dealer network connected', 'Real-time inventory sync across all locations', 'Custom sales reporting and analytics', '40% reduction in order processing time'],
    tags: ['Business Central', 'Sales App', 'Dealer Portal', 'India'],
  },
  {
    id: 'mfg', icon: '🏭', color: '#FF7A00',
    client: 'Manufacturing Enterprise', industry: 'Heavy Manufacturing',
    title: 'Production Management & Supply Chain Digitisation',
    body: 'End-to-end manufacturing digitisation — custom production management, shop floor control, and supplier integration on Business Central for a multi-site operation running parallel production lines.',
    results: ['100% paperless production floor', 'Real-time work order tracking', 'Supplier portal launched and adopted', '25% inventory cost reduction'],
    tags: ['Production Management', 'Supply Chain', 'BC Extensions', 'Multi-site'],
  },
  {
    id: 'dist', icon: '📦', color: '#00D9FF',
    client: 'Distribution Company', industry: 'Multi-Brand Distribution',
    title: 'Supply Chain Visibility Platform with Vendor Management',
    body: 'Complete supply chain overhaul — vendor portal, multi-warehouse inventory management, executive dashboard suite — for a fast-growing international distribution business.',
    results: ['Multi-warehouse management unified', 'Vendor self-service portal live', 'Real-time executive dashboards deployed', 'Full logistics tracking integrated'],
    tags: ['Distribution', 'SRM', 'Vendor Portal', 'Dashboards'],
  },
];

export const PROCESS = [
  { n: '01', icon: '🔍', color: '#0099FF', title: 'Discover & Consult',
    desc: 'Deep-dive into your business processes, pain points, and goals. We map your ERP landscape and design a transformation roadmap.' },
  { n: '02', icon: '✏️', color: '#00C2FF', title: 'Architect & Design',
    desc: 'Solution architecture, technical design, and UX prototyping. Every component is planned before a single line of code is written.' },
  { n: '03', icon: '💻', color: '#00D9FF', title: 'Develop & Extend',
    desc: 'Agile sprints, regular demos, and iterative refinement. Your team is involved throughout — no black-box development.' },
  { n: '04', icon: '🔗', color: '#FF7A00', title: 'Integrate & Test',
    desc: 'Rigorous integration testing, performance validation, and UAT across all connected systems and time zones.' },
  { n: '05', icon: '🚀', color: '#FF5500', title: 'Deploy & Support',
    desc: 'Smooth go-live with dedicated hypercare, training, and a long-term partnership that evolves with your business.' },
];

export const TESTIMONIALS = [
  {
    role: 'Operations Director', company: 'Singer India', stars: 5,
    quote: 'Velvotix transformed how we manage our dealer network. The custom sales application connected to Business Central has been a game changer for our entire operations team across India.',
  },
  {
    role: 'Head of IT', company: 'Manufacturing Enterprise', stars: 5,
    quote: 'The technical expertise Velvotix brings to Business Central is exceptional. They understood our manufacturing processes better than any vendor we evaluated.',
  },
  {
    role: 'Chief Financial Officer', company: 'Distribution Business', stars: 5,
    quote: 'The executive dashboard suite gives us real-time supply chain visibility we never had before. ROI was clear within the first quarter of go-live.',
  },
];
