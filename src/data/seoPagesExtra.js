export const EXTRA_SEO_PAGES = {
  "/business-central-integration-services": {
    slug: "/business-central-integration-services",
    breadcrumb: "Business Central Integration Services",
    category: "Business Central · APIs & integrations",
    title: "Business Central Integration Services & API Development | Velvotix",
    description: "Connect Microsoft Dynamics 365 Business Central with e-commerce, warehouse, banking, shipping and custom applications using documented, supportable integrations.",
    h1: "Business Central integrations built for reliable business workflows",
    intro: "When ERP data needs to reach a sales team, warehouse, storefront or third-party service, the integration design matters as much as the endpoint. Velvotix helps define data ownership, triggers, error handling, permissions and monitoring behind connected Business Central workflows.",
    directAnswer: "Business Central integration services connect ERP data and transactions to other business systems through supported APIs, web services or integration platforms. A reliable design specifies which system owns each record, how changes are synchronised, how failed messages are recovered, how duplicates are prevented and how the integration is monitored.",
    valueProps: ["Documented data flows", "Resilient failure and retry handling", "Performance-aware API usage"],
    sections: [
      { heading: "Start with the data flow", body: "Identify the business event, system of record and business owner for every interface before selecting technology. This avoids fragile integrations that rely on undocumented assumptions or repeated manual reconciliation.", bullets: ["Customers, vendors, items, prices and inventory", "Sales orders, shipments, invoices and payments", "Field mapping, ownership and conflict-resolution rules", "Authentication, permissions and audit requirements"] },
      { heading: "Design for reliability and capacity", body: "A successful integration must account for throttling, pagination, timeouts, partial failures and duplicate delivery. Request volume and synchronisation frequency should be measured against the workload and limits of each connected system.", bullets: ["Bounded concurrency and back-off for throttling responses", "Idempotency and duplicate-processing controls", "Queueing, retries and actionable error messages", "Monitoring, reconciliation and support runbooks"] },
      { heading: "Connect the applications around ERP", body: "The right design may use direct APIs, a middleware layer or an event-driven workflow. Selection should follow the business need, security model, volume, recoverability and support skills—not a preference for a single technology.", bullets: ["E-commerce, marketplaces and customer portals", "Warehouse and shop-floor applications", "Shipping, payment and banking interfaces", "CRM, reporting and workflow automation"] }
    ],
    faqs: [
      { q: "Can Business Central connect to custom web and mobile apps?", a: "Yes. Custom applications can use supported Business Central APIs and other suitable integration patterns. The implementation must account for authentication, permissions, API limits, error recovery and which system owns each data element." },
      { q: "Can an integration be real time?", a: "Near-real-time behaviour is possible for suitable use cases, but actual latency depends on event design, API behaviour, network, system load and processing requirements. Agree measurable expectations and test under representative concurrency." },
      { q: "How do you handle failed API requests?", a: "A robust integration records a useful error, applies bounded retry and back-off where appropriate, prevents duplicate transactions, and provides a controlled path for investigation and replay." },
      { q: "Do you change standard Business Central endpoints?", a: "The design starts by reviewing available standard and custom endpoints. When existing endpoints must remain unchanged, efficiency can still be improved in client request patterns, batching where supported, caching read-only reference data and controlling concurrency." }
    ],
    related: ["/business-central-development", "/business-central-support", "/custom-erp-software", "/warehouse-management-system"]
  },
  "/warehouse-management-system": {
    slug: "/warehouse-management-system",
    breadcrumb: "Warehouse Management System",
    category: "Warehouse · Mobile workflows",
    title: "Warehouse Management System for Business Central | Velvotix",
    description: "Explore a Business Central-connected warehouse management system for receiving, put-away, movement, picking, packing, stock counts and shipping workflows.",
    h1: "A warehouse management system shaped around your floor operations",
    intro: "Warehouse teams need fast, unambiguous steps for scanning, moving and confirming stock. Velvotix helps assess Business Central warehouse capabilities and design mobile workflows where a dedicated interface is the better fit for your operating model.",
    directAnswer: "A warehouse management system coordinates warehouse tasks such as receiving, put-away, movement, picking, packing, shipment and stock counts. For Business Central-connected applications, the workflow must respect item and location setup, warehouse documents, tracking, user permissions and the recovery of failed or duplicate submissions.",
    valueProps: ["Mobile-first warehouse tasks", "Barcode and camera-scanning options", "Controlled ERP transaction flow"],
    sections: [
      { heading: "Map receiving through dispatch", body: "The best workflow reflects how goods physically move through the facility. Define which documents trigger each task, the scan sequence, validation rules and how discrepancies are handled before building the interface.", bullets: ["Purchase receipt and inbound checks", "Put-away, bin movement and replenishment", "Pick, pack and shipment confirmation", "Returns, adjustments and cycle counts"] },
      { heading: "Make scanning practical", body: "Scanning should reduce manual entry without making the process brittle. Test supported device cameras and scanners, poor network conditions, duplicate reads, invalid barcodes and correction paths with warehouse users.", bullets: ["Camera and hardware scanner compatibility testing", "Item, variant, lot, serial and bin validation", "Clear success, warning and error states", "Permission-aware task access and audit trails"] },
      { heading: "Keep ERP records consistent", body: "A mobile app should not bypass the controls required by the ERP. Design submission boundaries, staging where needed, status feedback, reconciliation and recovery before rollout.", bullets: ["Document status and transaction ownership", "Bounded API concurrency and retry strategy", "Duplicate prevention and reconciliation", "Training, cutover and ongoing support"] }
    ],
    faqs: [
      { q: "Can the WMS use Business Central as its system of record?", a: "Yes, when the architecture and required processes are designed for it. The specific warehouse documents, APIs, permissions and transaction boundaries need to be validated for the target environment." },
      { q: "Can warehouse staff scan barcodes using a phone?", a: "A phone camera can be a viable scanning option if the target devices, browser, lighting, barcode types and workflow are tested. Dedicated hardware scanners may be preferable in some environments." },
      { q: "Will the app work if the network is interrupted?", a: "Offline capability should be an explicit requirement. It introduces conflict, duplicate and delayed-submission considerations, so it should not be assumed without a defined offline design and testing." },
      { q: "Can you adapt the workflow to our warehouse?", a: "Yes. Discovery should document locations, bins, tracking, receiving, picking, shipment, exception and role requirements, then separate standard Business Central capability from custom workflows." }
    ],
    related: ["/business-central-integration-services", "/business-central-implementation", "/business-central-development", "/industries/distribution-erp"]
  },
  "/shop-floor-management-software": {
    slug: "/shop-floor-management-software",
    breadcrumb: "Shop-Floor Management Software",
    category: "Manufacturing · Shop-floor execution",
    title: "Shop-Floor Management Software Connected to Business Central | Velvotix",
    description: "Design shop-floor software for production job visibility, output and scrap reporting, material consumption and operation completion connected to Business Central.",
    h1: "Connect shop-floor actions with manufacturing and ERP records",
    intro: "Operators need a focused interface that reflects the task in front of them. Velvotix helps manufacturers assess how a shop-floor application should relate to production orders, operations, consumption, output, scrap, item tracking and Business Central posting.",
    directAnswer: "Shop-floor management software supports operators and production supervisors with job selection, operation status, material consumption, output, scrap and completion reporting. When it connects to Business Central, its design must align with the configured production process, permissions, item tracking and the handling of partial or corrected entries.",
    valueProps: ["Operator-centred workflows", "Production status and reporting", "Feasibility checked before custom build"],
    sections: [
      { heading: "Design around the operation", body: "Map the production sequence before choosing the screens. Work centres, machines, routings, job sequencing and reporting detail vary by manufacturer, so a generic shop-floor interface may not fit without careful configuration or extension.", bullets: ["Production order and operation selection", "Setup, run, pause and completion requirements", "Output, scrap and remaining quantity", "Supervisor review and exception handling"] },
      { heading: "Connect material and quality events", body: "Production entries can affect inventory, traceability and cost. Define when material is consumed, how lots or serials are captured, what happens when scrap is reported and which inspection steps require a hold or sign-off.", bullets: ["Material consumption and component traceability", "Output and scrap validation", "Inspection, rejection and non-conformance events", "Reconciliation against ERP production entries"] },
      { heading: "Validate adoption and integration", body: "The application needs to be usable on the devices and network available on the shop floor. Test with operators and representative jobs, and define support for late entries, corrections, repeated submissions and outages.", bullets: ["Device, ergonomics and connectivity validation", "Role-based permissions and audit history", "Performance-aware API integration", "Training, pilot rollout and improvement backlog"] }
    ],
    faqs: [
      { q: "Does Business Central support manufacturing processes?", a: "Business Central includes manufacturing capabilities such as BOMs, routings and production orders. Exact fit depends on the production model, planning, quality, capacity and shop-floor reporting requirements." },
      { q: "Can a shop-floor app report output and scrap?", a: "A custom interface can be designed for these events when supported by the agreed Business Central configuration and transaction pattern. Validation, permissions, duplicate prevention and reconciliation should be tested." },
      { q: "Is a separate MES always required?", a: "No. The decision depends on scheduling depth, machine connectivity, real-time control, quality and traceability needs. A feasibility assessment should compare standard ERP capability, an MES, extensions and a focused app." },
      { q: "How do you estimate feasibility and cost?", a: "First map the workflows, systems, data, devices, risks and acceptance criteria. Then separate configuration, integration, custom development and recurring support estimates, with assumptions and exclusions written down." }
    ],
    related: ["/industries/manufacturing-erp", "/business-central-implementation", "/business-central-integration-services", "/custom-erp-software"]
  }
};
