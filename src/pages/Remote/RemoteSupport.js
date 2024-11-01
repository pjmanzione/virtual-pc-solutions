import React, { useState, useEffect } from "react";
import "../CSS/RemoteSupport.css";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners"; // Import PuffLoader
import {
  FaDesktop,
  FaFileAlt,
  FaGlobe,
  FaVideo,
  FaHeadphones,
} from "react-icons/fa";
import RemotePricingPlans from "./RemotePricingPlans";
import RemoteSalesContact from "./SalesContact";
import RemoteFAQ from "./RemoteFaq";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function RemoteSupport() {
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading time in milliseconds
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/cloud-support");
  };

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
        <section className="remote-content-section">
          <div className="remote-content-container">
            <h2>Remote Support Software</h2>
            <p>
              Our Remote Support Software provides{" "}
              <span className="remote-highlight">secure</span>,{" "}
              <span className="remote-highlight">fast</span>, and{" "}
              <span className="remote-highlight">reliable</span> solutions for
              all your technical support needs. Whether you're troubleshooting
              software, configuring hardware, or offering guidance, our software
              is designed to make remote support easy and efficient.
            </p>

            <div className="remote-features-section">
              <h3>Key Features</h3>
              <div className="remote-features">
                <div className="remote-feature">
                  <FaDesktop className="remote-feature-icon" />
                  <h4>Real-time Remote Access</h4>
                  <p>
                    Control devices securely from anywhere in the world with
                    just a few clicks.
                  </p>
                </div>
                <div className="remote-feature">
                  <FaFileAlt className="remote-feature-icon" />
                  <h4>Secure File Transfer</h4>
                  <p>
                    Transfer files safely between devices with top-level
                    encryption.
                  </p>
                </div>
                <div className="remote-feature">
                  <FaGlobe className="remote-feature-icon" />
                  <h4>Cross-platform Compatibility</h4>
                  <p>
                    Works seamlessly on Windows, macOS, Linux, and mobile
                    platforms.
                  </p>
                </div>
                <div className="remote-feature">
                  <FaHeadphones className="remote-feature-icon" />
                  <h4>24/7 Support and Assistance</h4>
                  <p>
                    Get round-the-clock support from our dedicated team of
                    experts.
                  </p>
                </div>
              </div>

              <div className="remote-feature-image">
                <h1>Remote Support Software</h1>
                <h5>**Dashboard Screenshot**</h5>
                <img src="/images/img-9.png" alt="Dashboard Screenshot" />
              </div>
            </div>
            <div className="remote-cloud-container">
              <div className="remote-cloud-remote">
                <h1>
                  A Cloud Subscription is <span>Required</span>
                </h1>
                <button onClick={handleClick}>Learn More</button>
              </div>
            </div>
            <RemotePricingPlans />

            <div className="remote-faq">
              <RemoteFAQ />
            </div>
            <div className="remote-contact-form">
              <h1>Get Started Today!</h1>
              <p>
                Interested in our services? Reach out to our sales team for
                detailed information and personalized assistance. Fill out the
                form below, and we’ll get back to you as soon as possible.
              </p>
              <RemoteSalesContact />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default RemoteSupport;
