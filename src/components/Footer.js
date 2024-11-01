import React, { useState, useEffect } from "react";
import "./CSS/Footer.css";
import { Link } from "react-router-dom";
import { Events, Link as ScrollLink, scroller, scrollSpy } from "react-scroll";
import Lottie from "lottie-react";
import animationData from "../assets/pc-logo.json";

// import { SignInButton } from "./SignInButton";

function Footer() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();

    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="input-areas"></div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            {/* <h2>Products</h2>
            <ScrollLink
              to="cards"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => handleClick("cards")}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => handleClick("testimonials")}
            >
              Testimonials
            </ScrollLink> */}
            {/* <Link to="/">Careers</Link>
            <Link to="/">Investors</Link> */}
          </div>
          <div class="footer-link-items">
            <a href="/contact-us">
              {" "}
              <h2>Contact Us</h2>
            </a>

            <Link to="/contact-us">Support</Link>
            <Link to="/about">About Us</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          {/* <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div> */}
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">VPCS © 2024</small>
          <a href="mailto:info@virtualpcsolutions">
            <p class="website-rights">info@virtualpcsolutions.com</p>
          </a>

          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
