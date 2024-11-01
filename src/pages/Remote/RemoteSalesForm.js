import React from "react";
import "../CSS/RemoteSupport.css";

import SalesContact from "./SalesContact";

export default function SalesForm() {
  return (
    <div className="remote-content-container">
      <h1>Contact Our Sales Team</h1>
      <p>
        Interested in our services? Reach out to our sales team for detailed
        information and personalized assistance. Fill out the form below, and
        we’ll get back to you as soon as possible.
      </p>

      <SalesContact />
    </div>
  );
}
