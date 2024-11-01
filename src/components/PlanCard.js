import React from "react";

import "./CSS/PlanCard.css";

function PlanCard({ plan }) {
  return (
    <div className={`plan-card ${plan.popular ? "popular" : ""}`}>
      {plan.popular && <div className="badge">Most Popular</div>}
      <h3>{plan.title}</h3>
      <h4>
        {plan.price}&nbsp;
        <span>{plan.per}</span>
      </h4>

      {plan.title !== "Enterprise" && (
        <h4>
          {plan.price_bundle}&nbsp;
          <span>{plan.per}</span>&nbsp;
          <span>(5 Bundle)</span>
        </h4>
      )}

      <h5>
        {plan.machines}&nbsp;
        <span>Machines</span>
      </h5>
      <p>{plan.description}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href={plan.url}>
        <button>{plan.select}</button>
      </a>
    </div>
  );
}

export default PlanCard;
