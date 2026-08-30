import React from "react";
import { Helmet } from "react-helmet-async";

const ServicesSEO = () => {
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
      "Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications providing Dynamics 365 Business Central consulting, implementation, development, integration, support and dedicated ERP teams.",
    knowsAbout: [
      "Microsoft Dynamics 365 Business Central",
      "Microsoft Business Applications",
      "Business Central Consulting",
      "Business Central Implementation",
      "Business Central Development",
      "Business Central AL Development",
      "Business Central Integration",
      "Business Central Support",
      "Business Central Migration",
      "ERP Consulting",
      "ERP Development",
      "ERP Support",
      "Dedicated Development Teams",
      "Resource Augmentation",
    ],
    sameAs: ["https://www.linkedin.com/company/velvotix-solutions/"],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://velvotix.com/services/#webpage",
    url: "https://velvotix.com/services/",
    name: "Microsoft Dynamics 365 Business Central Services | Velvotix",
    description:
      "Explore Velvotix Business Central services including functional consulting, technical consulting, AL development, integration, ERP support, dedicated resources and project-based delivery.",
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

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://velvotix.com/services/#service-list",
    name: "Velvotix Business Central Services",
    description:
      "Professional Microsoft Dynamics 365 Business Central consulting, development, support and resource services.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Business Central Functional Consulting",
          description:
            "Functional Business Central consulting covering environment setup, process mapping, configuration, training and change management.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType:
            "Microsoft Dynamics 365 Business Central Functional Consulting",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Business Central Technical Consulting",
          description:
            "Technical consulting covering AL development, Business Central extensions, APIs, enterprise applications and Azure services.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType:
            "Microsoft Dynamics 365 Business Central Technical Consulting",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Dedicated Business Central Teams",
          description:
            "Dedicated Business Central consultants, developers and technical teams available for long-term projects and resource augmentation.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Dedicated Business Central Development Teams",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Project-Based Business Central Services",
          description:
            "Defined-scope Business Central implementation, migration and custom development projects delivered with project management and regular sprint reviews.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Business Central Project Services",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Business Central Retainer Support",
          description:
            "Ongoing functional and technical Business Central support with dedicated resources, priority response and monthly reporting.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Support",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Dedicated Business Central Resources",
          description:
            "Full-time Business Central consultants and developers embedded into customer teams with flexible capacity and timezone coverage.",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Business Central Resource Augmentation",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://velvotix.com/services/#breadcrumb",
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
        name: "Services",
        item: "https://velvotix.com/services/",
      },
    ],
  };

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}

      <title>Microsoft Dynamics 365 Business Central Services | Velvotix</title>

      <meta
        name="description"
        content="Velvotix provides Microsoft Dynamics 365 Business Central services including functional consulting, technical consulting, AL development, integration, support, dedicated teams and resource augmentation."
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

      <link rel="canonical" href="https://velvotix.com/services/" />

      {/* =========================
          LANGUAGE
      ========================== */}

      <meta httpEquiv="content-language" content="en" />

      <link
        rel="alternate"
        hrefLang="en"
        href="https://velvotix.com/services/"
      />

      {/* =========================
          OPEN GRAPH
      ========================== */}

      <meta
        property="og:title"
        content="Microsoft Dynamics 365 Business Central Services | Velvotix"
      />

      <meta
        property="og:description"
        content="Business Central consulting, development, support, dedicated teams and resource augmentation from Velvotix Solutions LLP."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://velvotix.com/services/" />

      <meta property="og:site_name" content="Velvotix Solutions LLP" />

      <meta property="og:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        property="og:image:alt"
        content="Velvotix Microsoft Dynamics 365 Business Central Services"
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
        content="Microsoft Dynamics 365 Business Central Services | Velvotix"
      />

      <meta
        name="twitter:description"
        content="Business Central consulting, development, integration, support and dedicated ERP services from Velvotix."
      />

      <meta name="twitter:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        name="twitter:image:alt"
        content="Velvotix Business Central Services"
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
        {JSON.stringify(serviceListSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default ServicesSEO;
