import React from "react";
import { Helmet } from "react-helmet-async";

const ProductsSEO = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://velvotix.com/#organization",
    name: "Velvotix Solutions LLP",
    legalName: "Velvotix Solutions LLP",
    alternateName: "Velvotix",
    url: "https://velvotix.com/",
    foundingDate: "2026",
    logo: {
      "@type": "ImageObject",
      url: "https://velvotix.com/logo.png",
    },
    description:
      "Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications specializing in Microsoft Dynamics 365 Business Central solutions, consulting, implementation, customization, development and integrations.",
    sameAs: ["https://www.linkedin.com/company/velvotix-solutions/"],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://velvotix.com/products/#webpage",
    url: "https://velvotix.com/products/",
    name: "Microsoft Dynamics 365 Business Central Products & Solutions | Velvotix",
    description:
      "Explore Velvotix enterprise products and Business Central modules designed to extend Microsoft Dynamics 365 Business Central with integrations, automation, web applications and real-time data synchronization.",
    about: {
      "@type": "Thing",
      name: "Microsoft Dynamics 365 Business Central Products",
    },
    publisher: {
      "@id": "https://velvotix.com/#organization",
    },
    isPartOf: {
      "@id": "https://velvotix.com/#website",
    },
    inLanguage: "en-US",
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://velvotix.com/products/#collection",
    url: "https://velvotix.com/products/",
    name: "Business Central Product Suite",
    description:
      "Enterprise applications and modules built to extend Microsoft Dynamics 365 Business Central with automation, integrations and real-time data capabilities.",
    publisher: {
      "@id": "https://velvotix.com/#organization",
    },
    about: {
      "@type": "SoftwareApplication",
      name: "Microsoft Dynamics 365 Business Central",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://velvotix.com/products/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://velvotix.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://velvotix.com/products/",
      },
    ],
  };

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}

      <title>
        Microsoft Dynamics 365 Business Central Products & Solutions | Velvotix
      </title>

      <meta
        name="description"
        content="Explore Velvotix Business Central products and enterprise modules that extend Microsoft Dynamics 365 Business Central with automation, integrations, web applications and real-time data synchronization."
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta name="author" content="Velvotix Solutions LLP" />

      <meta name="publisher" content="Velvotix Solutions LLP" />

      <link rel="canonical" href="https://velvotix.com/products/" />

      {/* =========================
          LANGUAGE
      ========================== */}

      <meta httpEquiv="content-language" content="en" />

      <link
        rel="alternate"
        hrefLang="en"
        href="https://velvotix.com/products/"
      />

      {/* =========================
          OPEN GRAPH
      ========================== */}

      <meta
        property="og:title"
        content="Microsoft Dynamics 365 Business Central Products & Solutions | Velvotix"
      />

      <meta
        property="og:description"
        content="Enterprise products and Business Central modules from Velvotix, built for automation, integrations, web applications and real-time data synchronization."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://velvotix.com/products/" />

      <meta property="og:site_name" content="Velvotix Solutions LLP" />

      <meta property="og:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        property="og:image:alt"
        content="Velvotix Microsoft Dynamics 365 Business Central Products"
      />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:locale" content="en_US" />

      {/* =========================
          TWITTER / X
      ========================== */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="Microsoft Dynamics 365 Business Central Products | Velvotix"
      />

      <meta
        name="twitter:description"
        content="Explore Velvotix enterprise products and modules built to extend Microsoft Dynamics 365 Business Central with automation, integrations and real-time data."
      />

      <meta name="twitter:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        name="twitter:image:alt"
        content="Velvotix Business Central Product Suite"
      />

      {/* =========================
          STRUCTURED DATA
      ========================== */}

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(webpageSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(collectionSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default ProductsSEO;
