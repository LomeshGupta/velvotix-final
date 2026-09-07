import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacySEO() {
  const title = "Privacy Policy | Velvotix";
  const description =
    "Read the Velvotix Privacy Policy to understand how we collect, use, protect, and manage your personal information.";

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="Velvotix privacy policy, data privacy, personal information, data protection, ERP consulting"
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href="https://velvotix.com/privacy-policy" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://velvotix.com/privacy-policy" />
      <meta property="og:site_name" content="Velvotix" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
