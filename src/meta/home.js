import React from "react";
import { Helmet } from "react-helmet-async";

const HomeSEO = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://velvotix.com/#organization",
    name: "Velvotix",
    url: "https://velvotix.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://velvotix.com/logo.png",
    },
    description:
      "Velvotix provides Microsoft Dynamics 365 Business Central consulting, implementation, customization, AL development, integration and ERP modernization services.",
    sameAs: [
      // Add only your real profiles here
      "https://www.linkedin.com/company/velvotix-solutions/",
      // "https://www.facebook.com/velvotix/",
      // "https://www.instagram.com/velvotix/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://velvotix.com/#website",
    url: "https://velvotix.com/",
    name: "Velvotix",
    publisher: {
      "@id": "https://velvotix.com/#organization",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://velvotix.com/#professionalservice",
    name: "Velvotix",
    url: "https://velvotix.com/",
    description:
      "Microsoft Dynamics 365 Business Central consulting, implementation, customization, integration and ERP development services.",
    provider: {
      "@id": "https://velvotix.com/#organization",
    },
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
      "Business Central Consulting",
      "Business Central Implementation",
      "Business Central Customization",
      "Business Central AL Development",
      "Business Central Integration",
      "Business Central Migration",
      "ERP Implementation",
      "ERP Modernization",
      "Enterprise Application Development",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        Microsoft Dynamics 365 Business Central Consulting & Implementation |
        Velvotix
      </title>

      <meta
        name="description"
        content="Velvotix provides Microsoft Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration and ERP modernization services."
      />

      <meta
        name="keywords"
        content="Microsoft Dynamics 365 Business Central, Business Central consulting, Business Central implementation, Business Central partner, Business Central customization, Business Central development, Business Central AL development, Business Central integration, Business Central migration, ERP consulting, ERP implementation"
      />

      <meta name="author" content="Velvotix" />

      <meta name="robots" content="index, follow" />

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
        content="Microsoft Dynamics 365 Business Central Consulting & Implementation | Velvotix"
      />

      <meta
        property="og:description"
        content="Business Central consulting, implementation, customization, AL development, integrations and ERP modernization services from Velvotix."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://velvotix.com/" />

      <meta property="og:site_name" content="Velvotix" />

      <meta property="og:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        property="og:image:alt"
        content="Velvotix Microsoft Dynamics 365 Business Central consulting and implementation"
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
        content="Microsoft Dynamics 365 Business Central Consulting | Velvotix"
      />

      <meta
        name="twitter:description"
        content="Business Central consulting, implementation, customization, AL development and integration services from Velvotix."
      />

      <meta name="twitter:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        name="twitter:image:alt"
        content="Velvotix Business Central consulting services"
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
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
