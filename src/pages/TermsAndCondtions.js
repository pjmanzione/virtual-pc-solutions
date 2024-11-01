import React from "react";
import "./CSS/TermsAndConditions.css";
import TodayDate from "../components/CurrentDate";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Last Updated: <TodayDate />
      </p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Virtual PC Solutions, a provider of virtual PC solutions.
          These Terms and Conditions govern your use of our website and
          services. By accessing or using our services, you agree to be bound by
          these terms. If you do not agree with any part of the terms, you may
          not use our services.
        </p>
      </section>

      <section>
        <h2>2. Use of Services</h2>
        <p>
          Our virtual PC solutions are provided for business and personal use,
          subject to the following conditions:
        </p>
        <ul>
          <li>
            You must be at least 18 years old or have parental consent to use
            our services.
          </li>
          <li>
            You agree not to use our services for any unlawful or prohibited
            activities.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account and password.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Account Registration</h2>
        <p>
          To use certain features of our service, you may be required to create
          an account. You agree to provide accurate and complete information and
          update it as necessary. We reserve the right to suspend or terminate
          your account if any information is inaccurate or violates these terms.
        </p>
      </section>

      <section>
        <h2>4. Payment and Subscription</h2>
        <p>
          Our services may require payment of fees. You agree to pay all
          applicable fees in accordance with the selected plan. All fees are
          non-refundable unless otherwise specified. We may modify pricing at
          our discretion with prior notice.
        </p>
      </section>

      <section>
        <h2>5. Service Availability and Maintenance</h2>
        <p>
          We strive to keep our services available 24/7; however, we do not
          guarantee uninterrupted or error-free service. We may perform
          maintenance, upgrades, or emergency repairs that may temporarily
          affect service availability.
        </p>
      </section>

      <section>
        <h2>6. Data Security and Privacy</h2>
        <p>
          We take the security of your data seriously. Please refer to our
          Privacy Policy for details on how we collect, use, and protect your
          information. By using our services, you consent to our data practices
          as described in our Privacy Policy.
        </p>
      </section>

      <section>
        <h2>7. Acceptable Use Policy</h2>
        <p>You agree not to use our services to:</p>
        <ul>
          <li>Engage in illegal activities or distribute harmful content.</li>
          <li>
            Interfere with or disrupt the integrity of our servers or networks.
          </li>
          <li>
            Use our services to infringe on the rights of others, including
            intellectual property rights.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by Florida law, Virtual PC Solutions
          and its affiliates shall not be liable for any indirect, incidental,
          special, or consequential damages resulting from your use of our
          services. Our total liability shall not exceed the fees paid by you in
          the preceding 12 months.
        </p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of the State of Florida. Any disputes arising from these
          terms shall be resolved in the courts of Lee County, Florida.
        </p>
      </section>

      <section>
        <h2>10. Termination</h2>
        <p>
          We may terminate or suspend your access to our services at our sole
          discretion, without prior notice, for conduct that we believe violates
          these terms or is harmful to other users or us.
        </p>
      </section>

      <section>
        <h2>11. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms and Conditions at
          any time. We will notify you of any changes by posting the new terms
          on our website. Your continued use of the services after changes
          indicates your acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at info@virtualpcsolutions.com.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
