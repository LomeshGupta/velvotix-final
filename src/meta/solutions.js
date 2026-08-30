import React from "react";
import { Helmet } from "react-helmet-async";

const SolutionsSEO = () => {
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
      "Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications specializing in Microsoft Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration, support and ERP modernization.",
    knowsAbout: [
      "Microsoft Dynamics 365 Business Central",
      "Microsoft Business Applications",
      "Business Central Consulting",
      "Business Central Implementation",
      "Business Central Development",
      "Business Central AL Development",
      "Business Central Integration",
      "Business Central Migration",
      "Business Central Support",
      "ERP Modernization",
    ],
    sameAs: ["https://www.linkedin.com/company/velvotix-solutions/"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://velvotix.com/#website",
    url: "https://velvotix.com/",
    name: "Velvotix Solutions LLP",
    publisher: {
      "@id": "https://velvotix.com/#organization",
    },
    inLanguage: "en-US",
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://velvotix.com/solutions/#webpage",
    url: "https://velvotix.com/solutions/",
    name: "Microsoft Dynamics 365 Business Central Solutions | Velvotix",
    description:
      "Explore Microsoft Dynamics 365 Business Central solutions from Velvotix, including consulting, implementation, AL development, integrations, support, migration, modernization and custom enterprise applications.",
    about: {
      "@type": "SoftwareApplication",
      name: "Microsoft Dynamics 365 Business Central",
    },
    publisher: {
      "@id": "https://velvotix.com/#organization",
    },
    isPartOf: {
      "@id": "https://velvotix.com/#website",
    },
    inLanguage: "en-US",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://velvotix.com/solutions/#services",
    name: "Microsoft Dynamics 365 Business Central Solutions",
    description:
      "Business Central services provided by Velvotix Solutions LLP.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Business Central Consulting",
          description:
            "Business Central environment setup, configuration, financial structure, dimensions, master data, user roles, training and post-go-live optimization.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Consulting",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Business Central Development",
          description:
            "AL extension development, custom pages, reports, codeunits, enterprise applications, APIs and technical architecture for Business Central.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Development",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Business Central Support",
          description:
            "Functional and technical Business Central support, updates, regression testing, issue resolution, training and proactive optimization.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Support",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Business Central Integration",
          description:
            "Business Central integrations using APIs, Azure Logic Apps, Power Automate, EDI, SaaS connectors, e-commerce and payment platforms.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Integration",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Business Central Modernization",
          description:
            "Legacy NAV to Business Central upgrades, cloud migration, data migration, AL conversion, process optimization and performance tuning.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Modernization",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Business Central Enterprise Applications",
          description:
            "Custom progressive web applications, ERP interfaces, customer and vendor portals, offline applications and cross-platform solutions.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Business Central Enterprise Application Development",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://velvotix.com/solutions/#breadcrumb",
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
        name: "Solutions",
        item: "https://velvotix.com/solutions/",
      },
    ],
  };

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}

      <title>
        Microsoft Dynamics 365 Business Central Solutions | Velvotix
      </title>

      <meta
        name="description"
        content="Explore Velvotix Microsoft Dynamics 365 Business Central solutions including consulting, implementation, AL development, integration, support, migration, modernization and custom enterprise applications."
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

      <link rel="canonical" href="https://velvotix.com/solutions/" />

      {/* =========================
          LANGUAGE
      ========================== */}

      <meta httpEquiv="content-language" content="en" />

      <link
        rel="alternate"
        hrefLang="en"
        href="https://velvotix.com/solutions/"
      />

      {/* =========================
          OPEN GRAPH
      ========================== */}

      <meta
        property="og:title"
        content="Microsoft Dynamics 365 Business Central Solutions | Velvotix"
      />

      <meta
        property="og:description"
        content="Business Central consulting, implementation, development, integration, support, migration and modernization solutions from Velvotix Solutions LLP."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://velvotix.com/solutions/" />

      <meta property="og:site_name" content="Velvotix Solutions LLP" />

      <meta property="og:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        property="og:image:alt"
        content="Velvotix Microsoft Dynamics 365 Business Central Solutions"
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
        content="Microsoft Dynamics 365 Business Central Solutions | Velvotix"
      />

      <meta
        name="twitter:description"
        content="Business Central consulting, implementation, development, integration, support, migration and modernization solutions from Velvotix."
      />

      <meta name="twitter:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        name="twitter:image:alt"
        content="Velvotix Business Central Solutions"
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
        {JSON.stringify(webpageSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SolutionsSEO;
