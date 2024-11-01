import "../CSS/App.css";
import React, { useState, useEffect } from "react";
import styles from "./CSS/GoogleAppsheet.module.css";

import { ClimbingBoxLoader, PuffLoader } from "react-spinners";

import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Testimonials from "../components/Testimonials";
import ContactForm from "./ContactUs";
import HomeDescription from "../components/HomeDescription";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Home() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#1B1818");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="home-container">
      <>
        {" "}
        {loading ? (
          <PuffLoader cssOverride={override} />
        ) : (
          <>
            <HeroSection />
            <Cards />
            <HomeDescription />
            <Testimonials />
            <div className={styles.callToAction}>
              <h1>Contact Us</h1>
              <p>
                Have questions or need assistance? Our team is here to
                help—please reach out to us using the form below, and we'll get
                back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default Home;
