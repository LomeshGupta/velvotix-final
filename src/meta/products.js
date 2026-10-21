import React from "react";
import SEOHead from "../components/SEOHead";

export default function ProductsSEO() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://velvotix.com/products/#collection",
    url: "https://velvotix.com/products",
    name: "Business Central-connected Sales, Warehouse and Shop-floor Apps",
    description: "Explore Velvotix application interfaces for sales workflows, warehouse execution and shop-floor operations connected with Microsoft Dynamics 365 Business Central.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Velvotix Sales App", url: "https://velvotix.com/products#sales-app" },
        { "@type": "ListItem", position: 2, name: "Warehouse Management App", url: "https://velvotix.com/products#wms-app" },
        { "@type": "ListItem", position: 3, name: "Shop-floor Management App", url: "https://velvotix.com/products#shop-floor-app" },
      ],
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://velvotix.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://velvotix.com/products" },
    ],
  };

  return <SEOHead
    title="Business Central Sales, WMS & Shop-floor Apps | Velvotix"
    description="View Velvotix Sales App, warehouse management and shop-floor application screens. Each app is designed around direct Business Central connectivity, clear workflows and agreed performance requirements."
    path="/products"
    type="CollectionPage"
    schema={[collectionSchema, breadcrumbSchema]}
  />;
}
