import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners"; // Import PuffLoader
import "../CSS/CloudSupport.css";

import {
  FaCloud,
  FaDesktop,
  FaFileAlt,
  FaGlobe,
  FaHeadphones,
} from "react-icons/fa";
import CloudPricingPlans from "./CloudPricingPlans";
import OptCloudPricingPlans from "./OptCloudPricingPlans";
import CloudSalesContact from "./CloudSalesContact";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function CloudSupport() {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading duration (2 seconds)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <PuffLoader
          cssOverride={override}
            color="#1F98F4"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <section className="cloud-content-section">
          <div className="cloud-content-container">
            <h2>Cloud Services</h2>
            <p>
              Our Cloud-Based Remote Support provides{" "}
              <span className="cloud-highlight">secure</span>,{" "}
              <span className="cloud-highlight">fast</span>, and{" "}
              <span className="cloud-highlight">scalable</span> solutions for
              all your technical support needs. Hosted on our reliable cloud
              infrastructure, our software ensures you can provide remote
              assistance from anywhere, anytime, with no need for on-premise
              hardware.
            </p>

            <div className="cloud-features-section">
              <h3>Key Features</h3>
              <div className="cloud-features">
                <div className="cloud-feature">
                  <FaCloud className="cloud-feature-icon" />
                  <h4>Cloud Hosting</h4>
                  <p>
                    Leverage the power of the cloud to host your remote support
                    software, ensuring high availability, automatic updates, and
                    effortless scalability.
                  </p>
                </div>
                <div className="cloud-feature">
                  <FaDesktop className="cloud-feature-icon" />
                  <h4>Real-time Remote Access</h4>
                  <p>
                    Access and control devices securely from any location with
                    just a few clicks, all through our cloud-based platform.
                  </p>
                </div>
                <div className="cloud-feature">
                  <FaFileAlt className="cloud-feature-icon" />
                  <h4>Secure File Transfer</h4>
                  <p>
                    Transfer files safely between devices with top-level
                    encryption, managed entirely in the cloud.
                  </p>
                </div>
                <div className="cloud-feature">
                  <FaGlobe className="cloud-feature-icon" />
                  <h4>Cross-platform Compatibility</h4>
                  <p>
                    Our cloud-hosted solution works seamlessly across Windows,
                    macOS, Linux, and mobile platforms, ensuring no device is
                    left unsupported.
                  </p>
                </div>
                <div className="cloud-feature">
                  <FaHeadphones className="cloud-feature-icon" />
                  <h4>24/7 Cloud Support and Assistance</h4>
                  <p>
                    Receive round-the-clock support from our dedicated team of
                    cloud experts, ensuring your remote support operations run
                    smoothly at all times.
                  </p>
                </div>
              </div>

              <div className="cloud-feature-image">
                <h1>Cloud-Based Remote Support</h1>
                <img src="/images/cloud_support.png" alt="Dashboard Screenshot" />
              </div>
            </div>
            <div className="cloud-compute-container">
              <div className="cloud-compute">
                <h1>Cloud Compute Shared CPU</h1>
              </div>
            </div>
            <CloudPricingPlans />
            <div className="cloud-compute-container">
              <div className="cloud-compute">
                <h1>Cloud Compute Dedicated CPU</h1>
              </div>
            </div>
            <OptCloudPricingPlans />
          </div>
          <div className="cloud-contact-form">
            <h1>Get Started Today!</h1>
            <p>
              Interested in our services? Reach out to our sales team for
              detailed information and personalized assistance. Fill out the
              form below, and we’ll get back to you as soon as possible.
            </p>
            <CloudSalesContact />
          </div>
        </section>
      )}
    </>
  );
}

export default CloudSupport;
