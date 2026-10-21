import React from "react";
import { Helmet } from "react-helmet-async";

const SITE = "https://velvotix.com";

export default function SEOHead({
  title,
  description,
  path = "/",
  type = "WebPage",
  image = `${SITE}/og-image.png`,
  noIndex = false,
  schema = [],
}) {
  const canonical = path === "/" ? `${SITE}/` : `${SITE}${path.replace(/\/$/, "")}`;
  const baseSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Velvotix Solutions LLP",
      alternateName: "Velvotix",
      url: `${SITE}/`,
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
      sameAs: ["https://www.linkedin.com/company/velvotix-solutions/"],
      knowsAbout: [
        "Microsoft Dynamics 365 Business Central",
        "ERP implementation",
        "ERP modernisation",
        "Business Central AL development",
        "Business Central integration",
        "Custom business applications",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "Velvotix Solutions LLP",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": type,
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Velvotix Solutions LLP" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta httpEquiv="content-language" content="en" />
      {[...baseSchema, ...schema].map((entry, index) => (
        <script key={`${entry["@type"] || "schema"}-${index}`} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
