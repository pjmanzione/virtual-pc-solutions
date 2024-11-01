import React from "react";
import "./CSS/About.css";

// Import your images
import missionImage from "../assets/images/mission.png";
import servicesImage from "../assets/images/services.jpg";
import valuesImage from "../assets/images/values.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Empowering Your Virtual PC Experience</p>
      </div>

      <section className="about-section">
        <div className="about-content">
          <img src={missionImage} alt="Our Mission" className="about-image" />
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At Virtual PC Solutions, we strive to provide cutting-edge virtual
              PC solutions that enhance productivity, security, and flexibility
              for individuals and businesses alike. Our mission is to simplify
              remote computing and offer a seamless, powerful experience to our
              users.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content reverse">
          <img
            src={servicesImage}
            alt="What We Offer"
            className="about-image"
          />
          <div className="about-text">
            <h2>What We Offer</h2>
            <ul>
              <li>High-performance virtual machines tailored to your needs.</li>
              <li>Scalable solutions for both personal and enterprise use.</li>
              <li>
                24/7 technical support to ensure your operations run smoothly.
              </li>
              <li>
                Secure and reliable infrastructure with top-tier data
                protection.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <img src={valuesImage} alt="Our Values" className="about-image" />
          <div className="about-text">
            <h2>Our Values</h2>
            <p>
              We believe in innovation, transparency, and a customer-first
              approach. Every solution we build is centered around enhancing
              user experience and driving success for our clients.
            </p>
          </div>
        </div>
      </section>

      <div className="about-footer">
        <p>
          Interested in learning more?{" "}
          <a href="/contact-us">Get in touch with us</a> today!
        </p>
      </div>
    </div>
  );
};

export default About;
