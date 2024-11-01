// src/components/PricingPlans.js
import React from "react";
import PlanCard from "../../components/PlanCard";
import "../CSS/PricingPlans.css";

const PricingPlans = () => {
  const plans = [
    {
      id: "bundle-card",
      title: "Standard",
      price: "$320",
      price_bundle: "$250",
      per: "Per Session",
      machines: "1000",
      description: "Perfect for individuals and small teams",
      features: [
        "Remote Support ",
        "Unattended Remote Access",
        "​Presentations",
        "Live Monitoring",
        "Mobile Access",
        "In Session Toolbox",
      ],
      url: "/sales-form",
      select: "Contact Sales",
    },
    {
      title: "Business",
      price: "$400",
      per: "Per Session",
      price_bundle: "$360",
      machines: "Unlimited",
      description: "Ideal for growing teams",
      features: [
        "Remote Support ",
        "Unattended Remote Access",
        "​Presentations",
        "Live Monitoring",
        "Mobile Access",
        "Standard and Custom Alerts ",
        "Scheduled Tool Runs",
        "Service Provider Apps",
        "Mass Toolbox",
        "​Mass Deployment",
        "Mass Notification",
        "App Tunnels",
        "3rd Party Access and Reselling",
      ],
      popular: true,
      url: "/sales-form",
      select: "Contact Sales",
    },
    {
      id: "bundle-card",
      title: "Enterprise",
      price: "$420",
      per: "/year",
      url: "/sales-form",
      select: "Contact Sales",
      machines: "Unlimited",
      description: "For large organizations",
      features: [
        "Remote Support ",
        "Unattended Remote Access",
        "​Presentations",
        "Live Monitoring",
        "Mobile Access",
        "Standard and Custom Alerts ",
        "Scheduled Tool Runs",
        "Service Provider Apps",
        "Mass Toolbox",
        "​Mass Deployment",
        "Mass Notification",
        "App Tunnels",
        "3rd Party Access and Reselling",
        "​RADIUS Authentication ",
        "High Availability Failover",
        "Remote Access Clustering",
        "Licensing Server",
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
