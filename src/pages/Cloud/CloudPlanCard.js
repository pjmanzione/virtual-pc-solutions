import React from "react";

import "../CSS/CloudPlanCard.css";

function CloudPlanCard({ plan }) {
  return (
    <div className={`plan-card ${plan.popular ? "popular" : ""}`}>
      {plan.popular && <div className="badge">Most Popular</div>}
      <h3>{plan.title}</h3>
      <h4>
        {plan.price}&nbsp;
        <span>{plan.period}</span>
      </h4>

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

export default CloudPlanCard;
