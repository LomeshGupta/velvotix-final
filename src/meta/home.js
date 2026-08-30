import React from "react";
import { Helmet } from "react-helmet-async";

const HomeSEO = () => {
  /*
   * IMPORTANT:
   * Use the exact Microsoft partner designation shown
   * in your Microsoft Partner Center.
   *
   * This example assumes:
   * "Microsoft Solutions Partner for Business Applications"
   */

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
      "@id": "https://velvotix.com/#logo",
      url: "https://velvotix.com/logo.png",
      contentUrl: "https://velvotix.com/logo.png",
      caption: "Velvotix Solutions LLP",
    },

    description:
      "Velvotix Solutions LLP, established in 2026, is a Microsoft Solutions Partner for Business Applications specializing in Microsoft Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration, support and ERP modernization.",

    knowsAbout: [
      "Microsoft Dynamics 365 Business Central",
      "Microsoft Dynamics 365",
      "Microsoft Business Applications",
      "Microsoft Solutions Partner",
      "Business Central Consulting",
      "Business Central Implementation",
      "Business Central Customization",
      "Business Central AL Development",
      "Business Central Integration",
      "Business Central Migration",
      "Business Central Support",
      "Business Central Upgrade",
      "Business Central Extension Development",
      "Business Central API Integration",
      "ERP Consulting",
      "ERP Implementation",
      "ERP Modernization",
      "Enterprise Application Development",
    ],

    sameAs: ["https://www.linkedin.com/company/velvotix-solutions/"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://velvotix.com/#website",

    url: "https://velvotix.com/",
    name: "Velvotix Solutions LLP",

    description:
      "Velvotix Solutions LLP provides Microsoft Dynamics 365 Business Central consulting, implementation, customization, development, integration, migration and ERP modernization services.",

    publisher: {
      "@id": "https://velvotix.com/#organization",
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
      "Microsoft Solutions Partner for Business Applications providing Microsoft Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration, support and ERP modernization services.",

    provider: {
      "@id": "https://velvotix.com/#organization",
    },

    serviceType: [
      "Microsoft Dynamics 365 Business Central Consulting",
      "Microsoft Dynamics 365 Business Central Implementation",
      "Business Central Customization",
      "Business Central AL Development",
      "Business Central Extension Development",
      "Business Central Integration",
      "Business Central API Integration",
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

    knowsAbout: [
      "Microsoft Dynamics 365 Business Central",
      "Microsoft Business Applications",
      "Business Central Consulting",
      "Business Central Implementation",
      "Business Central Customization",
      "Business Central AL Development",
      "Business Central Integration",
      "Business Central Migration",
      "Business Central Upgrade",
      "Business Central Support",
      "ERP Implementation",
      "ERP Modernization",
    ],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://velvotix.com/#webpage",

    url: "https://velvotix.com/",
    name: "Microsoft Dynamics 365 Business Central Partner & Consulting | Velvotix",

    description:
      "Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications specializing in Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration and ERP modernization.",

    isPartOf: {
      "@id": "https://velvotix.com/#website",
    },

    about: {
      "@id": "https://velvotix.com/#organization",
    },

    publisher: {
      "@id": "https://velvotix.com/#organization",
    },

    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://velvotix.com/#breadcrumb",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://velvotix.com/",
      },
    ],
  };

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}

      <title>
        Microsoft Dynamics 365 Business Central Partner & Consulting | Velvotix
      </title>

      <meta
        name="description"
        content="Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications, specializing in Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration and ERP modernization."
      />

      <meta
        name="keywords"
        content="Microsoft Solutions Partner, Microsoft Business Applications Partner, Microsoft Dynamics 365 Business Central Partner, Dynamics 365 Business Central consulting, Business Central implementation, Business Central customization, Business Central AL development, Business Central integration, Business Central migration, Business Central upgrade, Business Central support, Business Central extension development, ERP consulting, ERP implementation, ERP modernization"
      />

      <meta name="author" content="Velvotix Solutions LLP" />

      <meta name="publisher" content="Velvotix Solutions LLP" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link rel="canonical" href="https://velvotix.com/" />

      {/* =========================
          LANGUAGE
      ========================== */}

      <meta httpEquiv="content-language" content="en" />

      <link rel="alternate" hrefLang="en" href="https://velvotix.com/" />

      {/* =========================
          OPEN GRAPH
      ========================== */}

      <meta
        property="og:title"
        content="Microsoft Dynamics 365 Business Central Partner | Velvotix"
      />

      <meta
        property="og:description"
        content="Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications specializing in Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration and ERP modernization."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://velvotix.com/" />

      <meta property="og:site_name" content="Velvotix Solutions LLP" />

      <meta property="og:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        property="og:image:alt"
        content="Velvotix Solutions LLP - Microsoft Solutions Partner for Dynamics 365 Business Central"
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
        content="Microsoft Dynamics 365 Business Central Partner | Velvotix"
      />

      <meta
        name="twitter:description"
        content="Microsoft Solutions Partner for Business Applications specializing in Dynamics 365 Business Central consulting, implementation, customization, AL development, integration and ERP modernization."
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
        {JSON.stringify(websiteSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(webpageSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
