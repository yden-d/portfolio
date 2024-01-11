import React from "react";
import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  const handleButtonClick = () => {
    window.alert("What falls and never needs bandaids?\nRain!\n - Maren Johnson");
}

  return (
    <>
      <div className="header">
        <button
          className="hidden-btn"
          onClick={() => handleButtonClick()}
        ></button>
        <div
          className="initials"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <i>YD</i>
        </div>
        <div className={`text-container ${showText ? "show" : ""}`}>
          <div className="text">
            <i>Software Developer</i>
          </div>
        </div>
      </div>
    </>
  );
};
