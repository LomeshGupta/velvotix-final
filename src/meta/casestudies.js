import React from "react";
import { Helmet } from "react-helmet-async";

const SITE = "https://velvotix.com";

export default function CaseStudiesSEO() {
  const title = "ERP Solution Examples & Delivery Approach | Velvotix";
  const description = "Explore illustrative Business Central implementation, ERP modernisation, integration and custom application scenarios. Examples show delivery patterns, not audited client results.";
  const pageUrl = `${SITE}/case-studies`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      name: title,
      description,
      url: pageUrl,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Solution examples", item: pageUrl },
      ],
    },
  ];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Velvotix Solutions LLP" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${SITE}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}/og-image.png`} />
      {schema.map((entry, index) => (
        <script key={`case-study-schema-${index}`} type="application/ld+json">{JSON.stringify(entry)}</script>
      ))}
    </Helmet>
  );
}
