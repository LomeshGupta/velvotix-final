import React from "react";
import { Helmet } from "react-helmet-async";

const CaseStudiesSEO = () => {
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
      "Velvotix Solutions LLP is a Microsoft Solutions Partner for Business Applications specializing in Microsoft Dynamics 365 Business Central consulting, implementation, customization, AL development, integration, migration and ERP modernization.",
    sameAs: ["https://www.linkedin.com/company/velvotix-solutions/"],
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://velvotix.com/case-studies/#webpage",
    url: "https://velvotix.com/case-studies/",
    name: "Microsoft Dynamics 365 Business Central Case Studies | Velvotix",
    description:
      "Explore Business Central implementation, development, integration, migration and ERP modernization case studies from Velvotix Solutions LLP across manufacturing, distribution, e-commerce and enterprise applications.",
    headline: "Microsoft Dynamics 365 Business Central Case Studies",
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
    "@type": "ItemList",
    "@id": "https://velvotix.com/case-studies/#expertise",
    name: "Business Central Case Study Areas",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Business Central Implementation",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Implementation",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Business Central Development",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central AL Development",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Business Central Integration",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Integration",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Business Central Migration",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Migration",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Business Central Support",
          provider: {
            "@id": "https://velvotix.com/#organization",
          },
          serviceType: "Microsoft Dynamics 365 Business Central Support",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://velvotix.com/case-studies/#breadcrumb",
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
        name: "Case Studies",
        item: "https://velvotix.com/case-studies/",
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary SEO */}

      <title>
        Microsoft Dynamics 365 Business Central Case Studies | Velvotix
      </title>

      <meta
        name="description"
        content="Explore Microsoft Dynamics 365 Business Central case studies covering ERP implementation, AL development, integrations, migration, modernization and support across manufacturing, distribution, e-commerce and enterprise businesses."
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

      <link rel="canonical" href="https://velvotix.com/case-studies/" />

      {/* Language */}

      <meta httpEquiv="content-language" content="en" />

      <link
        rel="alternate"
        hrefLang="en"
        href="https://velvotix.com/case-studies/"
      />

      {/* Open Graph */}

      <meta
        property="og:title"
        content="Microsoft Dynamics 365 Business Central Case Studies | Velvotix"
      />

      <meta
        property="og:description"
        content="See how Velvotix delivers Business Central implementations, integrations, AL development, migrations and ERP modernization for businesses across multiple industries."
      />

      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://velvotix.com/case-studies/" />

      <meta property="og:site_name" content="Velvotix Solutions LLP" />

      <meta property="og:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        property="og:image:alt"
        content="Velvotix Microsoft Dynamics 365 Business Central Case Studies"
      />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="Microsoft Dynamics 365 Business Central Case Studies | Velvotix"
      />

      <meta
        name="twitter:description"
        content="Business Central implementation, development, integration, migration and ERP modernization case studies from Velvotix."
      />

      <meta name="twitter:image" content="https://velvotix.com/og-image.jpg" />

      <meta
        name="twitter:image:alt"
        content="Velvotix Business Central Case Studies"
      />

      {/* Structured Data */}

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
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

export default CaseStudiesSEO;
