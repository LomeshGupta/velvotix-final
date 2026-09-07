import React from "react";
import { Helmet } from "react-helmet-async";

export default function TermsSEO() {
  const title = "Terms of Service | Velvotix";
  const description =
    "Read the Velvotix Terms of Service covering website use, consulting services, intellectual property, payments, confidentiality, liability, and other terms.";

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="Velvotix terms of service, terms and conditions, ERP consulting terms, software consulting agreement, Velvotix Projects"
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://velvotix.com/terms-of-service" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://velvotix.com/terms-of-service" />
      <meta property="og:site_name" content="Velvotix" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
