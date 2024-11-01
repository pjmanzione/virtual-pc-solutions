import React, { useState } from "react";
import axios from "axios";

const RedirectToCustomerPortal = () => {
  const [loading, setLoading] = useState(false);

  const handleRedirect = async () => {
    setLoading(true);

    try {
      // Replace with your actual customer ID from Stripe
      const customerId = "cus_testCustomerId";

      const { data } = await axios.post(
        "http://localhost:3001/create-customer-portal-session",
        {
          customerId,
        }
      );

      // Redirect the user to the Stripe Customer Portal
      window.location.href = data.url;
    } catch (error) {
      console.error("Error redirecting to customer portal:", error);
      setLoading(false);
    }
  };

  return (
    <button onClick={handleRedirect} disabled={loading}>
      {loading ? "Redirecting..." : "Manage Billing"}
    </button>
  );
};

export default RedirectToCustomerPortal;
