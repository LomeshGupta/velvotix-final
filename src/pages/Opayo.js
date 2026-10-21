import React, { useEffect } from "react";
import SEOHead from "../components/SEOHead";

const PaymentSuccessful = () => {
  useEffect(() => {
    (function () {
      const params = new URLSearchParams(window.location.search);

      const payload = {
        status: params.get("state"),
        transactionId: params.get("transactionId"),
        registrationId: params.get("registrationId"),
        vendorTxCode: params.get("vendorTxCode"),
      };

      if (window.opener) {
        window.opener.postMessage(payload, "*");
      }

      setTimeout(function () {
        window.close();
      }, 500);
    })();
  }, []);

  return (
    <>
      <SEOHead title="Payment Status | Velvotix" description="Payment response page." path="/opayo-success.html" noIndex />
      <main style={{ padding: 24 }}><h1>Payment Status</h1><p>This window will close automatically.</p></main>
    </>
  );
};

export default PaymentSuccessful;
