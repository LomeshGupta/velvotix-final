/**
 * Search-focused service and industry landing pages.
 * Keep these pages genuinely useful and specific; do not add keyword lists or unsupported claims.
 */
import { EXTRA_SEO_PAGES } from "./seoPagesExtra";

const CORE_SEO_PAGES = {
  "/erp-implementation-partner": {
    slug: "/erp-implementation-partner",
    breadcrumb: "ERP Implementation Partner",
    category: "ERP consulting & delivery",
    title: "ERP Implementation Partner for Growing Businesses | Velvotix",
    description: "Choose an ERP implementation partner for process discovery, solution design, data migration, integrations, training and a controlled go-live.",
    h1: "An ERP implementation partner focused on how your business works",
    intro: "ERP should make day-to-day work clearer, not force every team into a process that does not fit. Velvotix helps businesses assess requirements, select a practical delivery path, implement Microsoft Dynamics 365 Business Central and connect the applications their teams rely on.",
    directAnswer: "An ERP implementation partner helps a business translate operational requirements into a configured system, migrate and validate data, connect surrounding applications, prepare users and manage the transition into live operations. The right scope depends on business processes, existing systems, reporting needs and the change the organisation is ready to make.",
    valueProps: ["Business-first discovery", "A documented delivery plan", "Integration and data ownership"],
    sections: [
      { heading: "What an ERP implementation engagement should cover", body: "A reliable implementation starts before configuration. We work through the decisions that affect adoption, risk and cost, then agree a delivery plan with clear owners and acceptance criteria.", bullets: ["Process discovery and fit-gap analysis across finance, sales, purchasing, inventory, warehousing and operations", "Solution architecture, role design, approval flows, dimensions, reporting and integration requirements", "Data migration planning, mapping, cleansing, trial loads and reconciliation", "Test scenarios, user acceptance testing, training, cutover and post-go-live support"] },
      { heading: "Implementation is more than installing software", body: "ERP projects often struggle when data quality, process ownership, integrations or user readiness are treated as late-stage tasks. We bring these workstreams into the plan early, so the project team can make trade-offs while changes are still manageable.", bullets: ["Agree what standard functionality can cover before customising", "Prioritise custom extensions by business value and maintainability", "Define how master data and opening balances will be reconciled", "Measure readiness through tested scenarios, trained users and sign-offs"] },
      { heading: "A practical delivery model", body: "The delivery model can be project-based, phased or a focused implementation workstream alongside an internal team. The scope should reflect system complexity, resource availability and the time users can dedicate to discovery and testing.", bullets: ["Discovery and roadmap before detailed build commitments", "Short configuration and development cycles with review points", "A decision log, issue register and named process owners", "A post-launch backlog separated from go-live-critical work"] }
    ],
    faqs: [
      { q: "How do we choose an ERP implementation partner?", a: "Ask how the partner runs discovery, documents fit-gap decisions, manages data migration, tests integrations, trains users and handles cutover. Request relevant, verifiable project examples and agree deliverables, responsibilities, assumptions and acceptance criteria before work begins." },
      { q: "How long does an ERP implementation take?", a: "There is no dependable single timeline. Scope, legal entities, data quality, integrations, customisations, reporting and user availability all affect duration. A discovery phase should produce a milestone plan, dependencies and an explicit list of assumptions." },
      { q: "Can we implement ERP in phases?", a: "Yes. A phased approach can prioritise core finance and operational processes, then introduce additional sites, integrations or applications in later releases. The phase boundaries must preserve end-to-end controls and avoid temporary processes becoming permanent by accident." },
      { q: "Does Velvotix only work with Business Central?", a: "Velvotix specialises in Microsoft Dynamics 365 Business Central and related enterprise applications, integrations and custom software. During discovery, we help clarify whether Business Central, extensions or a connected application is the appropriate fit for each requirement." }
    ],
    related: ["/business-central-implementation", "/custom-erp-software", "/digital-transformation", "/insights/business-central-implementation-checklist"]
  },
  "/business-central-implementation": {
    slug: "/business-central-implementation",
    breadcrumb: "Business Central Implementation",
    category: "Microsoft Dynamics 365 Business Central",
    title: "Business Central Implementation Services | Velvotix",
    description: "Implement Microsoft Dynamics 365 Business Central with fit-gap analysis, finance and operations configuration, migration, integrations, testing and user enablement.",
    h1: "Microsoft Dynamics 365 Business Central implementation, planned around your processes",
    intro: "Move to a better-connected operating model with a Business Central implementation that accounts for the way your finance, sales, purchasing, inventory and operations teams actually work. Velvotix supports discovery, functional setup, extension planning, data readiness, integrations, testing and go-live preparation.",
    directAnswer: "Microsoft Dynamics 365 Business Central implementation typically includes requirements discovery, process mapping, fit-gap analysis, environment and company setup, finance and operations configuration, migration of agreed data, integration development, testing, training and cutover support. The final scope depends on the organisation's processes, countries, entities and existing systems.",
    valueProps: ["Fit-gap before custom build", "Validated migration and reconciliation", "Tested integration and cutover plans"],
    sections: [
      { heading: "Business Central implementation scope", body: "We shape the implementation around agreed business outcomes and process ownership rather than assuming every organisation needs the same module list.", bullets: ["General ledger, chart of accounts, posting groups, dimensions and financial reporting", "Sales, purchasing, inventory, item tracking, locations and warehouse processes", "Approvals, permissions, workflows and role-centred user experience", "Data migration, API integrations, reports, extensions and operational dashboards"] },
      { heading: "Configuration first; customisation where it earns its place", body: "Business Central includes broad standard capabilities. The implementation should establish which requirements can be handled by configuration, where an extension is justified and which needs are better served by an integrated app. This keeps the solution easier to test, update and support.", bullets: ["Maintain a fit-gap register with business rationale and priority", "Document extension ownership, dependencies and upgrade considerations", "Separate launch-critical requirements from future enhancements", "Review licensing, security and integration implications before commitment"] },
      { heading: "Migration, testing and go-live readiness", body: "A successful cutover depends on more than loading files. Source records need agreed mapping, reconciliation rules, traceable exceptions and owners who can sign off the converted data.", bullets: ["Inventory source data, code tables, open transactions and historical needs", "Run trial migrations and reconcile agreed control totals", "Test cross-functional scenarios, integrations, permissions and month-end tasks", "Rehearse cutover, issue triage, user support and rollback contingencies"] }
    ],
    faqs: [
      { q: "Can Business Central support finance and operations together?", a: "Business Central is designed to connect financial management with sales, purchasing, inventory, project and other operational processes. The correct setup depends on the business model, required controls, localisation and any connected systems." },
      { q: "Can our existing NAV customisations be reused?", a: "Not all NAV customisations can be carried forward unchanged. Each extension, integration and report should be assessed for current usage, compatibility, standard-feature alternatives and redesign effort before the migration approach is agreed." },
      { q: "Will we need custom development?", a: "Only where a verified requirement cannot be met appropriately through standard configuration or an available extension. The fit-gap process should explain the business case, support impact and upgrade implications for each proposed customisation." },
      { q: "What should we prepare before starting?", a: "Identify process owners, current systems, legal entities, key integrations, reporting needs, data owners and decision-makers. An implementation checklist should also cover security roles, test responsibilities, training and cutover acceptance criteria." }
    ],
    related: ["/business-central-financial-management", "/business-central-development", "/business-central-support", "/industries/manufacturing-erp", "/insights/business-central-implementation-checklist"]
  },
  "/business-central-financial-management": {
    slug: "/business-central-financial-management",
    breadcrumb: "Business Central Financial Management",
    category: "ERP finance systems",
    title: "Business Central Financial System & Management | Velvotix",
    description: "Business Central financial system services for general ledger, receivables, payables, bank reconciliation, dimensions, financial controls and management reporting.",
    h1: "Build a stronger financial management system with Business Central",
    intro: "Finance teams need reliable posting controls, clear dimensions, reconciled balances and reports they can explain. Velvotix helps organisations configure Microsoft Dynamics 365 Business Central financial management and connect finance workflows with sales, purchasing, inventory and external systems.",
    directAnswer: "Microsoft Dynamics 365 Business Central provides an integrated financial management system for general ledger, accounts receivable, accounts payable, bank and cash processes, fixed assets, dimensions, budgeting and reporting. Implementation work configures these capabilities around an organisation's chart of accounts, posting setup, internal controls, tax requirements and reporting structure.",
    valueProps: ["Finance process fit-gap", "Dimension and posting design", "Reconciliation-led migration"],
    sections: [
      { heading: "Core financial management areas", body: "Finance configuration should reflect reporting responsibilities and how transactions originate across the business. The design needs to align the chart of accounts, posting groups, dimensions and approval controls.", bullets: ["General ledger, journal templates, posting setup and financial periods", "Customer and vendor balances, receivables, payables and payment terms", "Bank reconciliation, cash visibility and payment file or gateway integrations", "Fixed assets, budgets, recurring journals, dimensions and management reports"] },
      { heading: "Design dimensions and reporting deliberately", body: "Dimensions can support analysis by department, branch, business unit, cost centre or other agreed management views. Define allowed values, defaulting, mandatory rules and reporting conventions before migrating balances; otherwise the same transaction may be categorised differently by different teams.", bullets: ["Map existing analytical codes to a governed dimension model", "Identify where defaults or mandatory dimensions should apply", "Test posting controls with representative end-to-end scenarios", "Validate financial statements and management reports against signed-off totals"] },
      { heading: "Plan control, compliance and reconciliation", body: "Financial configuration must be reviewed against the organisation's jurisdiction and accounting policies. Tax, e-invoicing, bank interfaces and statutory reporting can involve local requirements or third-party services, so scope and responsibilities should be documented explicitly.", bullets: ["Define authorisation, segregation-of-duties and audit-trail expectations", "Reconcile opening balances, open items and agreed historical data", "Test tax and invoice flows with the relevant local requirements", "Document month-end, year-end and exception-handling procedures"] }
    ],
    faqs: [
      { q: "Is Business Central a financial management system or a full ERP?", a: "It is an ERP platform with financial management at its core and capabilities that connect finance to sales, purchasing, inventory, projects and other operational processes. The modules and integrations enabled depend on the organisation's licensed scope and implementation design." },
      { q: "Can reporting be organised by department or business unit?", a: "Yes. Dimensions and reporting configuration can support analysis across agreed management categories. The dimension design should be governed and tested against the chart of accounts, posting rules and report requirements." },
      { q: "Can Business Central integrate with banks and tax services?", a: "Business Central can be connected to suitable bank, tax, e-invoicing and third-party services, subject to the relevant country support, provider API, licensing and security requirements. Each interface needs its own validation and exception-handling plan." },
      { q: "How do we migrate financial balances safely?", a: "Agree the cut-off date, opening balance approach, open-item treatment, mapping and control totals first. Use trial loads, reconciliation reports and finance-owner sign-off before the production cutover." }
    ],
    related: ["/business-central-implementation", "/business-central-development", "/erp-implementation-partner", "/insights/business-central-implementation-checklist"]
  },
  "/custom-erp-software": {
    slug: "/custom-erp-software",
    breadcrumb: "Custom ERP Software",
    category: "Custom ERP software development",
    title: "Custom ERP Software Development & Integration | Velvotix",
    description: "Plan custom ERP software around distinct workflows, with a clear build-versus-buy assessment, maintainable architecture, APIs and integration options.",
    h1: "Custom ERP software for workflows standard systems do not fully cover",
    intro: "Not every business process should become a custom ERP. We help you separate core financial and operational needs from genuinely distinctive workflows, then design maintainable extensions, connected applications or purpose-built software where the business case supports it.",
    directAnswer: "Custom ERP software development is the design and delivery of business software tailored to an organisation's processes, data, roles and integrations. It is most appropriate when standard ERP configuration and established extensions cannot meet a high-value requirement economically or safely. A build-versus-buy assessment should compare process fit, lifetime cost, integration needs, ownership and upgrade responsibilities.",
    valueProps: ["Build-versus-buy decisions", "API-first integration design", "Maintainability and ownership"],
    sections: [
      { heading: "Decide what should be standard and what should be custom", body: "Custom code is not automatically a better fit. Standard ERP capabilities often provide stronger long-term support for finance, inventory and purchasing. Custom applications can be valuable around distinctive workflows, specialist user journeys or external portals when the requirement is difficult to satisfy with configuration alone.", bullets: ["Map the process and quantify the problem before selecting a technology", "Compare ERP configuration, marketplace extensions, low-code and custom build", "Estimate operating, support, hosting, security and upgrade costs", "Define what remains the system of record and who owns the data"] },
      { heading: "Architecture that can be supported", body: "A robust solution needs clear boundaries between business rules, user interfaces, data stores and integrations. For Business Central-connected applications, API design, authentication, permissions, throttling, monitoring and failure recovery should be part of the design—not later fixes.", bullets: ["Business process specification and role-based journeys", "Versioned APIs, integration contracts and validation rules", "Responsive web or mobile interfaces where they improve the workflow", "Logging, access control, test coverage, deployment and support documentation"] },
      { heading: "From prototype to maintainable product", body: "Build in increments that can be reviewed by process owners and actual users. A proof of concept can validate a high-risk assumption, but production readiness also requires security review, error handling, data protection, monitoring, backup and a named support owner.", bullets: ["Acceptance criteria and a realistic delivery backlog", "Demonstrable increments and business-user review", "Load, permission, integration and recovery testing", "Deployment runbook, source control and knowledge transfer"] }
    ],
    faqs: [
      { q: "Should we build a custom ERP or buy an existing one?", a: "Start with the processes that must be controlled and supported for years. Prefer standard ERP for common finance and operational capabilities unless there is a clear gap. Customise only when the expected business value outweighs implementation, security, maintenance and upgrade costs." },
      { q: "Can custom software connect to Business Central?", a: "Yes. Custom web apps, portals and workflow services can integrate through supported Business Central APIs and other approved integration mechanisms. Design should cover authentication, permissions, API limits, idempotency, retries, monitoring and data ownership." },
      { q: "What should a custom software specification include?", a: "Include user roles, business rules, workflows, data definitions, integrations, security and privacy requirements, acceptance criteria, operational reporting, performance expectations, deployment approach and support ownership." },
      { q: "Do you support existing custom ERP applications?", a: "The first step is a technical and functional assessment covering architecture, source code and deployment access, integrations, data quality, security, defects and business priorities. That assessment determines whether to stabilise, enhance, integrate or replace parts of the application." }
    ],
    related: ["/erp-implementation-partner", "/business-central-development", "/digital-transformation", "/insights/custom-erp-software-vs-off-the-shelf"]
  },
  "/digital-transformation": {
    slug: "/digital-transformation",
    breadcrumb: "Digital Transformation",
    category: "Digital transformation consulting",
    title: "Digital Transformation Consulting for ERP & Business Apps | Velvotix",
    description: "Turn digital transformation goals into a delivery roadmap across ERP processes, integrations, data, employee tools and customer or supplier applications.",
    h1: "Digital transformation that improves the work behind the screen",
    intro: "Digital transformation is not a software shopping list. Velvotix helps teams identify process friction, establish a realistic target architecture and sequence ERP, integration, data and application changes around business priorities.",
    directAnswer: "Digital transformation combines changes to business processes, technology, data and ways of working to improve how an organisation operates and serves customers. For ERP-led programmes, a practical roadmap commonly includes current-state assessment, prioritised use cases, target architecture, data and integration design, delivery milestones, adoption measures and ongoing optimisation.",
    valueProps: ["Outcome-led roadmap", "Connected systems and data", "Change enablement built in"],
    sections: [
      { heading: "Start with friction and outcomes", body: "A useful roadmap explains the business problem, the evidence that it matters and the expected improvement. It avoids promising transformation through technology alone, and establishes how users will validate whether the change helped.", bullets: ["Map bottlenecks across finance, sales, purchasing, warehouse and customer service", "Identify duplicate entry, spreadsheet dependencies and weak hand-offs", "Prioritise use cases by impact, effort, risk and readiness", "Define baseline measures and a business owner for each outcome"] },
      { heading: "Connect ERP, applications and data", body: "Modernisation often means connecting the ERP to e-commerce, CRM, warehouse tools, banks, supplier portals, reporting and purpose-built applications. The integration architecture should make data ownership and exception handling clear so automation does not simply move manual work to a different team.", bullets: ["Document source-of-truth systems and critical data flows", "Choose APIs or integration services based on reliability and operating constraints", "Plan monitoring, retries, reconciliation and support ownership", "Improve reporting through governed definitions, not disconnected copies of data"] },
      { heading: "Build adoption into delivery", body: "Teams need time to test the new process, learn their responsibilities and raise practical issues. A technically complete release can still fail if access, training, communication and operational ownership are not ready.", bullets: ["Create role-specific communications and training", "Pilot high-change workflows with actual users", "Track adoption, process exceptions and support themes after release", "Review the roadmap as evidence and priorities change"] }
    ],
    faqs: [
      { q: "Where should a digital transformation programme start?", a: "Start with a current-state assessment of business goals, process friction, data quality, system constraints and user needs. Use that evidence to prioritise a small set of outcomes and define how each will be measured." },
      { q: "Is ERP implementation the same as digital transformation?", a: "ERP implementation is often a major part of digital transformation, but transformation can also include process redesign, integration, data governance, automation, customer portals, employee tools and changes to operating practices." },
      { q: "How do we prioritise transformation projects?", a: "Compare expected business impact, implementation effort, dependencies, risk, compliance needs and organisational readiness. Sequence work so foundational data, security and integration capabilities are in place before dependent automation is expanded." },
      { q: "How can we measure success?", a: "Choose measures tied to the original problem—for example, time to complete a process, error or rework rates, reconciliation effort, visibility of inventory, close-cycle duration or user adoption. Establish a baseline and agree how each measure will be collected." }
    ],
    related: ["/erp-implementation-partner", "/custom-erp-software", "/business-central-implementation", "/insights/custom-erp-software-vs-off-the-shelf"]
  },
  "/business-central-support": {
    slug: "/business-central-support",
    breadcrumb: "Business Central Support",
    category: "Application support & optimisation",
    title: "Microsoft Dynamics 365 Business Central Support | Velvotix",
    description: "Business Central functional and technical support for issue resolution, AL extensions, integrations, release testing, optimisation and user enablement.",
    h1: "Business Central support that keeps business processes moving",
    intro: "When Business Central issues affect order processing, finance, warehouse or integrations, teams need a clear route from incident to resolution. Velvotix provides functional and technical support options for triage, root-cause analysis, AL fixes, integration troubleshooting, release preparation and continuous improvement.",
    directAnswer: "Business Central support can include functional assistance, AL development, extension maintenance, integration monitoring, performance investigation, release and regression testing, user training and process optimisation. A support arrangement should define business hours, severity levels, response targets, escalation routes, access controls and the boundary between included support and project work.",
    valueProps: ["Functional and technical triage", "Defined support responsibilities", "Release-aware change management"],
    sections: [
      { heading: "Functional and technical support", body: "A useful support model combines business-process context with technical investigation. The goal is to restore service safely, explain the cause where possible and prevent recurring incidents when a lasting fix is justified.", bullets: ["Investigate posting, setup, permissions and workflow issues", "Review AL extensions, reports, APIs and integration failures", "Assess recurring performance symptoms and error patterns", "Provide user guidance and document reusable resolutions"] },
      { heading: "Protect change and release quality", body: "Business Central updates and extension changes need a planned test path. Support should evaluate critical business scenarios, coordinate test environments, document expected results and confirm that changes remain compatible with dependent applications.", bullets: ["Review release notes and identify impacted customisations", "Maintain regression scenarios for critical finance and operations flows", "Test integration contracts, authentication and failure recovery", "Use controlled deployment, rollback plans and change records"] },
      { heading: "Set expectations before the first incident", body: "Response time depends on severity, impact, agreed coverage and access to the right people and environments. Document these terms rather than using an undefined promise of 24/7 support or guaranteed resolution times.", bullets: ["Define priority levels and response targets", "Agree contact, escalation and approval routes", "Manage credentials with least privilege and approved access methods", "Review incident patterns and improvement actions at agreed intervals"] }
    ],
    faqs: [
      { q: "What should a Business Central support SLA define?", a: "Define covered environments, business hours, severity levels, response targets, escalation contacts, access procedures, reporting cadence and any exclusions. Response targets should be distinguished from time-to-resolution commitments." },
      { q: "Can you support custom AL extensions and integrations?", a: "Support can include review and troubleshooting of AL extensions, APIs, reports and external integrations, subject to source-code, environment and access availability. A technical assessment helps establish dependencies and risks before changes are made." },
      { q: "Can support include monthly updates and regression testing?", a: "Yes, an ongoing support scope can include release reviews, impact assessment, regression tests and deployment coordination. The plan should identify critical workflows and the people responsible for business acceptance." },
      { q: "Can we start with a support health check?", a: "A health check can review open incidents, extensions, integration flows, security roles, performance symptoms, update readiness and documentation. Findings can be prioritised into immediate fixes and a longer-term improvement backlog." }
    ],
    related: ["/business-central-development", "/business-central-implementation", "/erp-implementation-partner", "/insights/dynamics-nav-to-business-central-migration"]
  },
  "/business-central-development": {
    slug: "/business-central-development",
    breadcrumb: "Business Central Development",
    category: "AL development & integrations",
    title: "Business Central AL Development & API Integration | Velvotix",
    description: "Build maintainable Business Central AL extensions, reports, workflow changes, API endpoints and external integrations with clear testing and upgrade plans.",
    h1: "Business Central development built for maintainability",
    intro: "Extend Microsoft Dynamics 365 Business Central when standard functionality does not cover a verified business requirement. Velvotix supports AL extensions, APIs, reports, workflow automation, connected applications and performance-focused technical changes with testing and support considerations included.",
    directAnswer: "Business Central development commonly involves AL extensions, tables and pages, codeunits, reports, API pages, event subscribers, workflows and integrations with external systems. Good development practice keeps customisation scoped, uses supported extension patterns, validates permissions and data, tests error paths and plans for Business Central updates.",
    valueProps: ["Extension-first architecture", "Documented API contracts", "Tests and upgrade awareness"],
    sections: [
      { heading: "AL extension and application development", body: "Custom functionality should solve a documented problem and remain as isolated as practical from standard application objects. The solution design should explain object ownership, dependencies, permission requirements and how future releases will be validated.", bullets: ["New tables, pages, codeunits, reports and document layouts", "Event subscribers and supported extensibility patterns", "Role-centred workflows, validations and business rules", "Automated tests and reproducible deployment packages"] },
      { heading: "API and integration work", body: "APIs need clear contracts for request shape, response shape, authentication, errors and version changes. Production integrations also need protection from duplicate requests, expired credentials, transient failures and concurrency limits.", bullets: ["API pages and service procedures aligned with business use cases", "OAuth and permission design following least-privilege principles", "Idempotency, bounded retries, pagination and throttling controls", "Monitoring, reconciliation, dead-letter handling and operational runbooks"] },
      { heading: "Performance and upgrade readiness", body: "Optimisation should begin with evidence: request patterns, SQL and AL hotspots, lock contention, data volume and external dependencies. The result should be measured against an agreed baseline and covered by tests for critical business paths.", bullets: ["Review query shapes, record access and repeated API calls", "Reduce unnecessary round trips and avoid unbounded data retrieval", "Test extension compatibility in an appropriate sandbox", "Document performance assumptions and support procedures"] }
    ],
    faqs: [
      { q: "What is AL development in Business Central?", a: "AL is the application language used to build extensions for Dynamics 365 Business Central. Developers use it to add tables, pages, codeunits, reports, events, APIs and business rules while following the supported extension model." },
      { q: "Can you expose custom business processes through an API?", a: "Yes, where the process can be safely exposed through supported Business Central API mechanisms. The design should validate caller permissions, request content, transaction boundaries, error reporting, duplicate handling and API limits." },
      { q: "How do you prepare extensions for Business Central updates?", a: "Use supported extension patterns, manage app dependencies, compile against the target version, test critical flows in a sandbox and review release changes. The exact strategy depends on the current version and third-party dependencies." },
      { q: "Can you improve slow Business Central integrations?", a: "A performance review can examine call volume, payload sizes, concurrency, pagination, repeated lookups, throttling responses and retry behaviour. Changes should be validated against reliability and data-integrity requirements, not speed alone." }
    ],
    related: ["/business-central-support", "/business-central-implementation", "/custom-erp-software", "/business-central-financial-management"]
  },
  "/industries/manufacturing-erp": {
    slug: "/industries/manufacturing-erp",
    breadcrumb: "Manufacturing ERP",
    category: "Industry solutions · Manufacturing",
    title: "Manufacturing ERP & Business Central Solutions | Velvotix",
    description: "Connect manufacturing finance, BOMs, routings, production orders, inventory, quality checkpoints and reporting with an ERP approach designed around shop-floor realities.",
    h1: "Manufacturing ERP that connects planning, materials and finance",
    intro: "Manufacturers need dependable links between demand, bills of material, routings, production orders, inventory, purchasing, quality checks and cost visibility. Velvotix helps assess how Microsoft Dynamics 365 Business Central and carefully scoped extensions can support that flow.",
    directAnswer: "A manufacturing ERP connects planning and execution with inventory, purchasing, production, costing and financial records. The implementation should model the manufacturer's production approach, bills of material, routings, capacity and material availability, traceability needs, quality controls and reporting responsibilities before configuration and customisation are selected.",
    valueProps: ["Production process fit-gap", "Material and inventory visibility", "Traceability and cost control"],
    sections: [
      { heading: "Model the real production process", body: "Discrete, assemble-to-order and other production models have different planning and execution requirements. A discovery phase should trace a representative item from demand through materials, operations, completion and financial posting.", bullets: ["BOM structures, versions, routings and work or machine centres where applicable", "Production orders, consumption, output and scrap treatment", "Material replenishment, locations, bins and item tracking", "Capacity planning assumptions and production reporting needs"] },
      { heading: "Inventory, quality and traceability", body: "Operational controls depend on accurate item, lot or serial data and clear rules for hold, inspection and release. Some quality-management requirements need specific extensions or connected quality tools, so they should be recorded as fit-gap items rather than presumed to be fully standard.", bullets: ["Lot and serial tracking requirements across receipt, production and shipment", "Inspection checkpoints, non-conformance and corrective-action processes", "Material availability, substitutions and exception visibility", "Warehouse handling and traceability reports"] },
      { heading: "Connect operations to financial reporting", body: "Manufacturing decisions need consistent item costing, expected-versus-actual visibility and reconciliation between operations and the general ledger. The design should specify cost components, dimensions, posting setup and the reports managers use to investigate variances.", bullets: ["Item costing method and costing-policy review", "Production variance and consumption/output analysis", "Dimension and financial report structure", "Migration and reconciliation of open production and inventory records"] }
    ],
    faqs: [
      { q: "Can Business Central support BOMs, routings and production orders?", a: "Business Central includes manufacturing functionality for bills of material, routings and production orders. Fit depends on the production model, planning complexity, capacity requirements, add-ons and the operational detail needed at the shop floor." },
      { q: "Do we need a separate quality-management application?", a: "That depends on inspection depth, sampling rules, non-conformance workflow, audit needs and traceability. Map requirements first, then compare standard capability, an established extension, a connected quality system or custom development." },
      { q: "How should manufacturing data be migrated?", a: "Plan item and BOM masters, routings, inventory, tracking data, open production orders and agreed financial balances. Trial loads and reconciliations should prove quantities and values before cutover." },
      { q: "Can shop-floor devices or custom apps connect to Business Central?", a: "Yes, a purpose-built interface can connect through supported APIs or integration services when the workflow requires a different user experience. Network reliability, offline needs, device support, permissions and duplicate transaction prevention must be included in the design." }
    ],
    related: ["/business-central-implementation", "/business-central-development", "/business-central-financial-management", "/industries/distribution-erp"]
  },
  "/industries/distribution-erp": {
    slug: "/industries/distribution-erp",
    breadcrumb: "Distribution ERP",
    category: "Industry solutions · Distribution & wholesale",
    title: "Distribution ERP for Wholesale & Inventory Operations | Velvotix",
    description: "Plan a distribution ERP around inventory accuracy, purchasing, replenishment, pricing, order fulfilment, warehouse execution and financial visibility.",
    h1: "Distribution ERP designed for accurate stock and reliable fulfilment",
    intro: "Distributors and wholesalers need sales, purchasing, inventory, warehousing, pricing and finance to work from consistent data. Velvotix helps define a Business Central solution that fits locations, order volumes, fulfilment constraints and the integrations required across the sales channel.",
    directAnswer: "A distribution ERP coordinates purchasing, inventory, sales orders, pricing, warehouse activity, shipment and financial posting. A sound implementation defines item and location data, replenishment rules, order commitments, warehouse processes, customer pricing, integrations and reconciliation controls based on how the distributor actually fulfils orders.",
    valueProps: ["Reliable stock and order visibility", "Connected warehouse workflows", "Pricing and integration controls"],
    sections: [
      { heading: "Inventory and replenishment visibility", body: "Accurate availability depends on trustworthy item, location, unit-of-measure, reservation and inbound supply data. The design should separate on-hand inventory from quantity available to promise and show the operational events that affect each number.", bullets: ["Item, variant, unit-of-measure and location structures", "Reorder policies, lead times, vendor data and purchase planning", "Reservations, transfers, receipts, picks and shipment status", "Cycle counting, adjustments and inventory reconciliation"] },
      { heading: "Order-to-cash and warehouse execution", body: "A distributor's customer promise is only reliable when sales, inventory and warehouse teams share the same order state. Map exceptions such as partial shipments, back orders, substitutions, returns, damaged stock and credit holds before implementing the workflow.", bullets: ["Sales order entry, price and discount controls, and credit checks", "Pick, pack, shipment, transfer and returns workflows", "Barcode scanning or warehouse-app requirements, where applicable", "Customer, e-commerce, carrier and payment integrations"] },
      { heading: "Commercial controls and reporting", body: "Commercial performance requires consistent cost, price, discount and margin data. Reports should be tied to agreed definitions so that sales and finance teams are not reconciling conflicting versions of the same metric.", bullets: ["Customer price groups, discount rules and approval controls", "Purchasing, landed-cost and margin reporting needs", "Order fulfilment, back-order and stockout measures", "Financial dimensions and operational dashboards"] }
    ],
    faqs: [
      { q: "Can Business Central support multi-location distribution?", a: "Business Central includes inventory and location capabilities, with warehouse features that can be configured according to the required handling complexity. Bin-directed processes, scanning and specialised WMS workflows should be assessed in detail before deciding the fit." },
      { q: "Can an ERP connect to e-commerce and shipping systems?", a: "Yes. Integration scope can cover product, price, customer, order, inventory, shipment and tracking data. Each connection needs clear ownership, synchronisation frequency, failure visibility and rules for conflict resolution." },
      { q: "How should stock accuracy be improved during implementation?", a: "Start with master-data standards and a defined stock cut-off. Validate units of measure, locations, item tracking and open warehouse transactions, then reconcile trial counts and ensure users understand adjustment and cycle-count procedures." },
      { q: "Can a mobile warehouse app be added?", a: "A mobile or web warehouse application can be considered when the standard user experience does not fit the floor workflow. Define required scans, offline behaviour, user permissions, transaction confirmation and integration failure handling before development begins." }
    ],
    related: ["/business-central-implementation", "/business-central-development", "/custom-erp-software", "/industries/manufacturing-erp"]
  }
};

export const SEO_PAGES = { ...CORE_SEO_PAGES, ...EXTRA_SEO_PAGES };
