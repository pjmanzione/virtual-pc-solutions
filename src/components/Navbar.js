import React, { useState, useEffect } from "react";
import { Events, Link as ScrollLink, scroller, scrollSpy } from "react-scroll";
import { SignInButton } from "./SignInButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import "./CSS/Navbar.css";
import Lottie from "lottie-react";
import animationData from "../assets/pc-logo.json";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [targetSection, setTargetSection] = useState(null);

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

  useEffect(() => {
    if (location.pathname === "/" && targetSection) {
      scroller.scrollTo(targetSection, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });
      setTargetSection(null);
      setLoading(false); // Hide loading screen after scrolling
    }
  }, [location.pathname, targetSection]);

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      setTargetSection(section);
      setLoading(true); // Show loading screen
      navigate("/");
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    }
    closeMobileMenu();
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            VPCS
            <Lottie animationData={animationData} className="animate" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <ScrollLink
                to="hero"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleNavClick("hero")}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item dropdown">
              <ScrollLink
                to="cards"
                className="nav-links dropdown-toggle"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => handleNavClick("cards")}
              >
                Services
              </ScrollLink>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="/remote-support"
                    className="dropdown-item"
                    id="animateBtn"
                  >
                    Remote Support Software
                  </a>
                  <a href="/cloud-support" className="dropdown-item">
                    Cloud Hosting
                  </a>
                  <a href="/google-appsheet" className="dropdown-item">
                    Google Appsheet Development
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="/contact-us" className="nav-links dropdown-toggle">
                Contact Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/about" className="dropdown-item" id="animateBtn">
                    About Us
                  </a>

                  <ScrollLink
                    to="testimonials"
                    className="dropdown-item"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={() => handleNavClick("testimonials")}
                  >
                    Testimonials
                  </ScrollLink>

                  <a href="/faq" className="dropdown-item">
                    FAQ
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <ScrollLink
                to="pricing"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
                onClick={() => handleNavClick("pricing")}
              >
                Pricing
              </ScrollLink>
            </li> */}

            {/* <li>
              <Link
                to="https://billing.stripe.com/p/login/test_dR67vx7jm9kp5vWdQQ"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li> */}
          </ul>
          {/* {button && (
            <SignInButton buttonStyle="btn--outline">SIGN IN</SignInButton>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
