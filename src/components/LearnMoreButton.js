import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./CSS/Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

export const LearnMoreButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <ScrollLink
      to="cards"
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="btn-mobile"
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={handleClick}
      >
        {children}
      </button>
    </ScrollLink>
  );
};
