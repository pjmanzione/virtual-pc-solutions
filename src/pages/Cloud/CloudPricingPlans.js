// src/components/PricingPlans.js
import React from "react";
import CloudPlanCard from "./CloudPlanCard";
import "../CSS/PricingPlans.css";

const PricingPlans = () => {
  const plans = [
    {
      title: "50 GB NVMe",
      price: "$30",
      period: "per month",
      select: "Purchase Plan",
      description:
        "Experience lightning-fast performance with a 50GB NVMe cloud computer, perfect for hosting and running remote software seamlessly.",
      features: [
        "50 GB Storage",
        "2 GB Memory",
        "3 TB Bandwidth",
        "1 vCPU Core",
        "24/7 Support",
      ],
      url: "/sales-form",
    },
    {
      title: "60 GB NVMe",
      price: "$40",
      period: "per month",
      select: "Purchase Plan",
      description:
        "High-performance 60GB NVMe cloud computer designed for seamless hosting of remote software, ensuring speed, reliability, and efficient operation.",
      features: [
        "60 GB Storage",
        "2 GB Memory",
        "4 TB Bandwidth",
        "2 vCPU Core",
        "24/7 Support",
      ],
    },
    {
      title: "100 GB NVMe",
      price: "$50",
      period: "per month",
      select: "Purchase Plan",
      description:
        "Powerful 100GB NVMe cloud server for hosting demanding software applications with lightning-fast performance and ample storage.",
      features: [
        "100 GB Storage",
        "4 GB Memory",
        "5 TB Bandwidth",
        "2 vCPU Core",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="pricing-plans" id="pricing">
      <h2>Pricing Plans</h2>
      <p>Select the perfect plan for your business needs.</p>

      <div className="plans">
        {plans.map((plan, index) => (
          <CloudPlanCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
