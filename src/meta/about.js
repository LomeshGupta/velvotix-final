import React from "react";
import { Helmet } from "react-helmet-async";

const AboutSEO = () => {
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
      "Velvotix Solutions LLP, established in 2026, is a Microsoft Solutions Partner for Business Applications specializing in Microsoft Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration and ERP modernization.",
    knowsAbout: [
      "Microsoft Dynamics 365 Business Central",
      "Microsoft Business Applications",
      "Microsoft Solutions Partner",
      "Business Central Consulting",
      "Business Central Implementation",
      "Business Central Customization",
      "Business Central AL Development",
      "Business Central Integration",
      "Business Central Migration",
      "Business Central Upgrade",
      "Business Central Support",
      "ERP Consulting",
      "ERP Implementation",
      "ERP Modernization",
    ],
    sameAs: ["https://www.linkedin.com/company/velvotix-solutions/"],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://velvotix.com/about/#webpage",
    url: "https://velvotix.com/about/",
    name: "About Velvotix Solutions LLP | Microsoft Dynamics 365 Business Central Partner",
    description:
      "Learn about Velvotix Solutions LLP, a Microsoft Solutions Partner for Business Applications specializing in Dynamics 365 Business Central consulting, implementation, customization, AL development, integrations and ERP modernization.",
    about: {
      "@id": "https://velvotix.com/#organization",
    },
    publisher: {
      "@id": "https://velvotix.com/#organization",
    },
    isPartOf: {
      "@id": "https://velvotix.com/#website",
    },
    inLanguage: "en-US",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://velvotix.com/#professionalservice",
    name: "Velvotix Solutions LLP",
    url: "https://velvotix.com/",
    description:
      "Microsoft Solutions Partner for Business Applications providing Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration, support and ERP modernization services.",
    provider: {
      "@id": "https://velvotix.com/#organization",
    },
    serviceType: [
      "Microsoft Dynamics 365 Business Central Consulting",
      "Business Central Implementation",
      "Business Central Customization",
      "Business Central AL Development",
      "Business Central Integration",
      "Business Central Migration",
      "Business Central Upgrade",
      "Business Central Support",
      "ERP Consulting",
      "ERP Implementation",
      "ERP Modernization",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "Singapore",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://velvotix.com/about/#breadcrumb",
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
        name: "About",
        item: "https://velvotix.com/about/",
      },
    ],
  };

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}

      <title>
        About Velvotix Solutions LLP | Microsoft Dynamics 365 Business Central
        Partner
      </title>

      <meta
        name="description"
        content="Learn about Velvotix Solutions LLP, established in 2026 and a Microsoft Solutions Partner for Business Applications specializing in Dynamics 365 Business Central consulting, implementation, customization, AL development, integration and ERP modernization."
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

      <link rel="canonical" href="https://velvotix.com/about/" />

      {/* =========================
          LANGUAGE
      ========================== */}

      <meta httpEquiv="content-language" content="en" />

      <link rel="alternate" hrefLang="en" href="https://velvotix.com/about/" />

      {/* =========================
          OPEN GRAPH
      ========================== */}

      <meta
        property="og:title"
        content="About Velvotix Solutions LLP | Microsoft Dynamics 365 Business Central Partner"
      />

      <meta
        property="og:description"
        content="Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications specializing in Dynamics 365 Business Central consulting, implementation, customization, AL development, integration and ERP modernization."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://velvotix.com/about/" />

      <meta property="og:site_name" content="Velvotix Solutions LLP" />

      <meta property="og:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        property="og:image:alt"
        content="About Velvotix Solutions LLP - Microsoft Solutions Partner"
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
        content="About Velvotix Solutions LLP | Microsoft Dynamics 365 Business Central Partner"
      />

      <meta
        name="twitter:description"
        content="Discover Velvotix Solutions LLP, a Microsoft Solutions Partner specializing in Dynamics 365 Business Central consulting, implementation, development, integration and ERP modernization."
      />

      <meta name="twitter:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        name="twitter:image:alt"
        content="Velvotix Solutions LLP Microsoft Solutions Partner"
      />

      {/* =========================
          STRUCTURED DATA
      ========================== */}

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(aboutPageSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default AboutSEO;
