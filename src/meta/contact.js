import React from "react";
import SEOHead from "../components/SEOHead";

export default function ContactSEO() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://velvotix.com/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://velvotix.com/contact" },
    ],
  };
  return <SEOHead
    title="Contact Velvotix | ERP & Business Central Project Discussion"
    description="Discuss your ERP implementation, Business Central enhancement, integration, custom software, warehouse or shop-floor application requirements with Velvotix Solutions."
    path="/contact"
    type="ContactPage"
    schema={[breadcrumbSchema]}
  />;
}
