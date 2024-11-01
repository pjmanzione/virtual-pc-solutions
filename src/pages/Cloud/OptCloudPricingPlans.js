// src/components/PricingPlans.js
import React from "react";
import CloudPlanCard from "./CloudPlanCard";
import "../CSS/CloudPlanCard.css";

const OptPricingPlans = () => {
  const plans = [
    {
      title: "30 GB NVMe",
      price: "$60",
      period: "per month",
      select: "Purchase Plan",
      description:
        "Powerful 30GB NVMe cloud server, dedicated CPU resources, ideal for hosting demanding remote software applications.",
      features: [
        "30 GB Storage",
        "4 GB Memory",
        "4 TB Bandwidth",
        "1 vCPU Core",
        "24/7 Support",
      ],
    },
    {
      title: "50 GB NVMe",
      price: "$100",
      period: "per month",
      select: "Purchase Plan",
      description:
        "High-performance cloud server with 50GB NVMe storage and dedicated CPU for optimal remote software application hosting.",
      features: [
        "50 GB Storage",
        "8 GB Memory",
        "5 TB Bandwidth",
        "2 vCPU Core",
      ],
    },
    {
      title: "80 GB NVMe",
      price: "$200",
      period: "per month",
      select: "Purchase Plan",
      description:
        "Dedicated CPU cloud server featuring 80GB NVMe storage for optimal performance, designed to host demanding remote software applications.",
      features: [
        "80 GB Storage",
        "16 GB Memory",
        "6 TB Bandwidth",
        "4 vCPU Core",
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

export default OptPricingPlans;
