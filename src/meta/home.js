import React from "react";
import SEOHead from "../components/SEOHead";

export default function HomeSEO() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://velvotix.com/#professionalservice",
    name: "Velvotix Solutions LLP",
    url: "https://velvotix.com/",
    description: "ERP implementation, Microsoft Dynamics 365 Business Central consulting and development, integrations, and connected business applications.",
    provider: { "@id": "https://velvotix.com/#organization" },
    serviceType: [
      "ERP implementation",
      "Microsoft Dynamics 365 Business Central implementation",
      "Business Central AL development",
      "Business Central API integration",
      "Custom ERP software",
      "Warehouse management applications",
      "Shop-floor management applications",
    ],
    areaServed: ["India", "United Arab Emirates", "United Kingdom"].map((name) => ({ "@type": "Country", name })),
  };

  return <SEOHead
    title="ERP Implementation Partner & Business Central Services | Velvotix"
    description="Velvotix helps businesses implement Microsoft Dynamics 365 Business Central, assess ERP feasibility transparently, develop AL extensions, connect APIs and build sales, warehouse and shop-floor applications."
    path="/"
    type="WebPage"
    schema={[serviceSchema]}
  />;
}
