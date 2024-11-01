import React from "react";
import "../CSS/App.css";
import { LearnMoreButton } from "./LearnMoreButton";
import "./CSS/HeroSection.css";
import { SignInButton } from "./SignInButton";

function HeroSection() {
  return (
    <div className="hero-container" id="hero">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Virtual PC Solutions</h1>
      <p></p>
      <div className="hero-btns">
        {/* <SignInButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SIGN IN
        </SignInButton> */}
        <LearnMoreButton
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          LEARN MORE
        </LearnMoreButton>
      </div>
    </div>
  );
}

export default HeroSection;
