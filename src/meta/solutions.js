import React from "react";
import SEOHead from "../components/SEOHead";

export default function SolutionsSEO() {
  const solutionList = {
    "@context": "https://schema.org", "@type": "ItemList",
    "@id": "https://velvotix.com/solutions/#solutions",
    name: "ERP and Business Application Solutions",
    itemListElement: [
      ["Finance and operations", "/business-central-financial-management"],
      ["Manufacturing ERP", "/industries/manufacturing-erp"],
      ["Distribution ERP", "/industries/distribution-erp"],
      ["Warehouse management", "/warehouse-management-system"],
      ["Shop-floor workflows", "/shop-floor-management-software"],
      ["Connected applications", "/business-central-integration-services"],
    ].map(([name, path], index) => ({ "@type": "ListItem", position: index + 1, name, url: `https://velvotix.com${path}` })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://velvotix.com/" },
      { "@type": "ListItem", position: 2, name: "Solutions", item: "https://velvotix.com/solutions" },
    ],
  };
  return <SEOHead
    title="ERP and Business Central Solutions for Finance & Operations | Velvotix"
    description="Explore industry-aware ERP solutions from Velvotix, including finance, manufacturing, distribution, warehouse operations, shop-floor workflows and connected applications."
    path="/solutions"
    type="CollectionPage"
    schema={[solutionList, breadcrumbSchema]}
  />;
}
