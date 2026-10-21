import React from "react";

const APPS = [
  {
    id: "sales",
    title: "Sales App",
    strapline: "Sales visibility for teams in the field and office",
    description: "A mobile-first sales workspace for customer information, sales orders, invoices, reports and stock visibility, built around Business Central data and permissions.",
    screens: [
      ["sales-app-dashboard.jpg", "Sales App dashboard with revenue, order and customer KPIs"],
      ["sales-app-orders.jpg", "Sales App order list with anonymised demo order records"],
      ["sales-app-customers.jpg", "Sales App customer list using generic demo records"],
      ["sales-app-reports.jpg", "Sales App report screen for customer statements"],
      ["sales-app-invoice-detail.jpg", "Sales App invoice detail using anonymised demo values"],
    ],
    capabilities: ["Sales orders & customer context", "Invoice and statement access", "Responsive phone-first interface"],
  },
  {
    id: "wms",
    title: "Warehouse Management System",
    strapline: "Guided warehouse work on handheld devices",
    description: "A mobile workflow for receiving, put-away, item lookup, picking and shipment activities, designed to exchange transactions with Business Central through supported integration points.",
    screens: [
      ["wms-home.jpg", "Warehouse app task home screen"],
      ["wms-receiving.jpg", "Warehouse app receiving screen with barcode and camera scanning options"],
      ["wms-inventory.jpg", "Warehouse app item and inventory lookup screen"],
      ["wms-picking.jpg", "Warehouse app guided picking workflow"],
      ["wms-shipping.jpg", "Warehouse app shipment dispatch workflow"],
    ],
    capabilities: ["Receiving, put-away & movement", "Barcode-friendly workflows", "Picking, packing & shipment steps"],
  },
  {
    id: "shop-floor",
    title: "Shop-Floor Application",
    strapline: "Production activity with clearer operator workflows",
    description: "A purpose-built shop-floor interface for selecting jobs, reporting output and scrap, consuming materials and completing operations—with the data flow designed around the manufacturing process and Business Central setup.",
    screens: [
      ["shop-floor-home.jpg", "Shop-floor application home with generic demo operator"],
      ["shop-floor-active-jobs.jpg", "Shop-floor application active jobs list with anonymised job references"],
      ["shop-floor-job-detail.jpg", "Shop-floor job screen showing output, scrap and remaining quantity"],
    ],
    capabilities: ["Job and operation visibility", "Output, scrap & material reporting", "Manufacturing workflow fit-gap"],
  },
];

function ScreenCard({ filename, alt, index }) {
  return (
    <figure className="vtx-product-screen" key={filename}>
      <div className="vtx-product-screen-frame">
        <img
          src={`/images/products/${filename}`}
          alt={alt}
          loading="lazy"
          decoding="async"
          width="1179"
          height="2556"
        />
      </div>
      <figcaption><span>SCREEN {String(index + 1).padStart(2, "0")}</span>{alt}</figcaption>
    </figure>
  );
}

export default function ProductGallery({ compact = false }) {
  const apps = compact ? APPS.map((app) => ({ ...app, screens: app.screens.slice(0, 1) })) : APPS;

  return (
    <section className={`vtx-product-gallery ${compact ? "vtx-product-gallery-compact" : ""}`} aria-labelledby={compact ? "connected-apps-heading" : "product-gallery-heading"}>
      <div className="wrap">
        <div className="vtx-section-heading">
          <p className="vtx-kicker">CONNECTED BUSINESS APPLICATIONS</p>
          <h2 id={compact ? "connected-apps-heading" : "product-gallery-heading"}>
            {compact ? "Real workflows. One connected operational core." : "Product interfaces designed around the work people actually do."}
          </h2>
          <p>
            {compact
              ? "Explore examples of the responsive applications Velvotix builds around ERP processes."
              : "These screenshots show application interfaces created by Velvotix, with customer-specific records replaced by demo values. The applications are designed for direct Business Central connectivity; exact data freshness, transaction guarantees and performance depend on the approved architecture, available APIs, permissions and environment capacity."}
          </p>
        </div>
        <div className="vtx-product-apps">
          {apps.map((app) => (
            <article id={app.id === "shop-floor" ? "shop-floor-app" : app.id === "wms" ? "wms-app" : "sales-app"} className="vtx-product-app" key={app.id}>
              <div className="vtx-product-app-heading">
                <p className="vtx-kicker">{app.strapline}</p>
                <h3>{app.title}</h3>
                {!compact && <p>{app.description}</p>}
                <ul>{app.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
              </div>
              <div className="vtx-product-screens" aria-label={`${app.title} screenshots`}>
                {app.screens.map(([filename, alt], index) => <ScreenCard filename={filename} alt={alt} index={index} key={filename} />)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
