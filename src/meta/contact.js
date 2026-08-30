import React from "react";
import { Helmet } from "react-helmet-async";

const ContactSEO = () => {
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
      "Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications specializing in Microsoft Dynamics 365 Business Central consulting, implementation, AL development, customization, integration, migration and ERP modernization.",
    sameAs: ["https://www.linkedin.com/company/velvotix-solutions/"],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://velvotix.com/contact/#webpage",
    url: "https://velvotix.com/contact/",
    name: "Contact Velvotix Solutions LLP | Microsoft Dynamics 365 Business Central",
    description:
      "Contact Velvotix Solutions LLP to discuss Microsoft Dynamics 365 Business Central consulting, implementation, AL development, integrations, migration, support and ERP modernization.",
    headline: "Contact Velvotix Solutions LLP",
    about: {
      "@type": "SoftwareApplication",
      name: "Microsoft Dynamics 365 Business Central",
    },
    publisher: {
      "@id": "https://velvotix.com/#organization",
    },
    inLanguage: "en-US",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://velvotix.com/contact/#service",
    name: "Microsoft Dynamics 365 Business Central Consulting Services",
    description:
      "Business Central consulting, implementation, development, integration, migration, support and ERP modernization services from Velvotix Solutions LLP.",
    provider: {
      "@id": "https://velvotix.com/#organization",
    },
    serviceType: "Microsoft Dynamics 365 Business Central Consulting",
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
    "@id": "https://velvotix.com/contact/#breadcrumb",
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
        name: "Contact",
        item: "https://velvotix.com/contact/",
      },
    ],
  };

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}

      <title>
        Contact Velvotix | Microsoft Dynamics 365 Business Central Partner
      </title>

      <meta
        name="description"
        content="Contact Velvotix Solutions LLP, a Microsoft Solutions Partner for Business Applications, for Dynamics 365 Business Central consulting, implementation, AL development, integration, migration, support and ERP modernization."
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

      <link rel="canonical" href="https://velvotix.com/contact/" />

      {/* =========================
          LANGUAGE
      ========================== */}

      <meta httpEquiv="content-language" content="en" />

      <link
        rel="alternate"
        hrefLang="en"
        href="https://velvotix.com/contact/"
      />

      {/* =========================
          OPEN GRAPH
      ========================== */}

      <meta
        property="og:title"
        content="Contact Velvotix | Microsoft Dynamics 365 Business Central Partner"
      />

      <meta
        property="og:description"
        content="Talk to Velvotix about Microsoft Dynamics 365 Business Central consulting, implementation, development, integration, migration and support."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://velvotix.com/contact/" />

      <meta property="og:site_name" content="Velvotix Solutions LLP" />

      <meta property="og:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        property="og:image:alt"
        content="Contact Velvotix Solutions LLP - Microsoft Dynamics 365 Business Central Partner"
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
        content="Contact Velvotix | Microsoft Dynamics 365 Business Central Partner"
      />

      <meta
        name="twitter:description"
        content="Contact Velvotix Solutions LLP for Business Central consulting, implementation, development, integration, migration and support."
      />

      <meta name="twitter:image" content="https://velvotix.com/og-image.jpg" />

      <meta name="twitter:image:alt" content="Contact Velvotix Solutions LLP" />

      {/* =========================
          STRUCTURED DATA
      ========================== */}

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(contactPageSchema)}
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

export default ContactSEO;
