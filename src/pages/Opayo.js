import React, { useEffect } from "react";

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
    <div>
      <h2>Payment Successful</h2>
    </div>
  );
};

export default PaymentSuccessful;
