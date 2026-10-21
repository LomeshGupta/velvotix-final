import React from "react";
import SEOHead from "../components/SEOHead";

export default function ServicesSEO() {
  const services = [
    ["ERP implementation partner", "/erp-implementation-partner", "Documented scope, fit-gap decisions and clear delivery ownership."],
    ["Business Central implementation", "/business-central-implementation", "Process discovery, configuration, data migration, testing and cutover."],
    ["Business Central financial management", "/business-central-financial-management", "Finance setup, posting controls, dimensions and reporting."],
    ["Business Central development", "/business-central-development", "AL extensions, APIs, reports and supportable customisations."],
    ["Business Central integration services", "/business-central-integration-services", "ERP connectivity with e-commerce, warehouses, banks, carriers and applications."],
    ["Custom ERP software", "/custom-erp-software", "Purpose-built software for clearly defined operational gaps."],
    ["Warehouse management system", "/warehouse-management-system", "Mobile receiving, inventory, picking and shipping workflows."],
    ["Shop-floor management software", "/shop-floor-management-software", "Production job visibility and operator workflows."],
    ["Business Central support", "/business-central-support", "Functional and technical help, release readiness and optimisation."],
    ["Digital transformation", "/digital-transformation", "A practical roadmap across processes, integrations, data and adoption."],
  ];
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://velvotix.com/services/#service-list",
    name: "Velvotix ERP and Business Central Services",
    itemListElement: services.map(([name, path, description], index) => ({
      "@type": "ListItem", position: index + 1,
      item: { "@type": "Service", name, description, url: `https://velvotix.com${path}`, provider: { "@id": "https://velvotix.com/#organization" } },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://velvotix.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://velvotix.com/services" },
    ],
  };
  return <SEOHead
    title="ERP Implementation, Business Central & Integration Services | Velvotix"
    description="Explore Velvotix services for ERP implementation, Business Central finance, AL development, API integrations, custom ERP software, warehouse and shop-floor apps, digital transformation and ongoing support."
    path="/services"
    type="CollectionPage"
    schema={[itemList, breadcrumbSchema]}
  />;
}
