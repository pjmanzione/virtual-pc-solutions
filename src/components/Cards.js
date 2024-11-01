import React, { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

import "./CSS/Cards.css";
import CardItem from "./CardItem";
import Lottie from "lottie-react";

function Cards() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="cards" id="cards">
      <h1>SERVICES WE OFFER</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/computer-solid.svg"
              text="Remote Support Software"
              description="Remote support software enables fast, efficient troubleshooting and assistance from anywhere, reducing downtime and increasing productivity."
              label="Software"
              path="/remote-support"
            />

            <CardItem
              src="images/cloud-solid.svg"
              description="Cloud hosting offers scalable resources, enhanced security, and accessibility from anywhere, enabling businesses to efficiently manage their data and applications with minimal infrastructure costs."
              text="Cloud Hosting"
              label="Cloud"
              path="/cloud-support"
            />
            <CardItem
              src="images/google-brands-solid.svg"
              description="Google AppSheet enables users to quickly build custom, no-code applications, streamlining workflows and boosting productivity without the need for complex development."
              text="Google Workspace AppSheet Development"
              label="Google"
              path="/google-appsheet"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
