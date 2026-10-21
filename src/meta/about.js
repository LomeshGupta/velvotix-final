import React from "react";
import SEOHead from "../components/SEOHead";

export default function AboutSEO() {
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://velvotix.com/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://velvotix.com/about" },
    ],
  };
  return <SEOHead
    title="About Velvotix | ERP, Business Central & Connected Applications"
    description="Learn about Velvotix Solutions: Business Central functional and technical delivery, ERP feasibility, integration engineering, and business applications for sales, warehouse and shop-floor workflows."
    path="/about"
    type="AboutPage"
    schema={[breadcrumbSchema]}
  />;
}
