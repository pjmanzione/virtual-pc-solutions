import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners"; // Import PuffLoader
import styles from "../CSS/GoogleAppsheet.module.css";
import ContactUs from "../ContactUs";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const AppSheetService = () => {
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
        <div className={styles.loaderContainer}>
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
        <div className="google-container">
          <div className={styles.service}>
            {/* Hero Section */}
            <header className={styles.heroSection}>
              <img
                src="/images/appsheet_t.png"
                alt="Google AppSheet Development"
                className={styles.heroImage}
              />
              <h1>Google AppSheet Development</h1>
              <p>
                Transform Your Business Processes with Custom AppSheet Solutions
              </p>
            </header>

            {/* Introduction Section */}
            <section className={styles.introduction}>
              <h2>Introduction</h2>
              <p>
                Google AppSheet is a powerful no-code platform that enables you
                to create custom applications to streamline your business
                operations. Our development team specializes in creating
                tailored AppSheet solutions that meet your unique business
                needs.
              </p>
            </section>

            {/* Services Section */}
            <section className={styles.services}>
              <h2>Our Services</h2>
              <ul>
                <li>
                  <img
                    src="/images/custom_app.png"
                    alt="Custom App Development"
                  />
                  <p>Custom App Development</p>
                </li>
                <li>
                  <img
                    src="/images/appsheet_int.png"
                    alt="AppSheet Integration"
                  />
                  <p>AppSheet Integration</p>
                </li>
                <li>
                  <img src="/images/data.png" alt="Data Management Solutions" />
                  <p>Data Management Solutions</p>
                </li>
                <li>
                  <img src="/images/workflow.png" alt="Workflow Automation" />
                  <p>Workflow Automation</p>
                </li>
                <li>
                  <img
                    src="/images/support.png"
                    alt="Support and Maintenance"
                  />
                  <p>Support and Maintenance</p>
                </li>
              </ul>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
              <h2>Key Features</h2>
              <div className={styles.featuresRight}>
                <ul>
                  <li>
                    <div className={styles.title}>
                      <img
                        src="/images/no_code.png"
                        alt="No-Code Development"
                      />
                      <strong>No-Code Development:</strong>
                    </div>
                    <p>
                      Google AppSheet allows users to create powerful
                      applications without writing a single line of code...
                    </p>
                  </li>
                  {/* ... Other features continue here ... */}
                </ul>
              </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefits}>
              <h2>Benefits</h2>
              <ul>
                <li>Increased Efficiency and Productivity</li>
                <li>Cost-Effective Solutions</li>
                <li>Quick Deployment and Scalability</li>
                <li>Enhanced Data Security</li>
                <li>Improved Collaboration and Communication</li>
              </ul>
            </section>

            {/* Call to Action Section */}
            <section className={styles.callToAction}>
              <h2>Get Started Today!</h2>
              <p>
                Ready to transform your business with custom Google AppSheet
                solutions? Contact us today to get started and see how we can
                help you achieve your business goals.
              </p>
              <ContactUs />
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default AppSheetService;
