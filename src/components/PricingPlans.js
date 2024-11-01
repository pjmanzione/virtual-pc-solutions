// src/components/PricingPlans.js
import React from "react";
import PlanCard from "./PlanCard";
import "./CSS/PricingPlans.css";

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic",
      price: "$19",
      description: "Perfect for individuals and small teams",
      features: ["Up to 5 devices", "Basic support", "Community access"],
    },
    {
      title: "Standard",
      price: "$49",
      description: "Ideal for growing teams",
      features: [
        "Up to 20 devices",
        "Priority support",
        "Advanced analytics",
        "Community access",
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "$99",
      description: "For large organizations",
      features: [
        "Unlimited devices",
        "Dedicated support",
        "Custom integrations",
        "Enterprise analytics",
        "Community access",
      ],
    },
  ];

  return (
    <section className="pricing-plans" id="pricing">
      <h2>Pricing Plans</h2>
      <p>Select the perfect plan for your business needs.</p>
      <div className="plans">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
