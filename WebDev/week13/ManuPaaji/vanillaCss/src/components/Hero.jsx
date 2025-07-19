import React from "react";

const Hero = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

function Button() {
  return (
    <div className="hero-root">
      <div className="hero-button">
        <h5>Thinking about incorporating?</h5>
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </div>
      <div className="hero-title">
        <h1>Magically simplify accounting and taxes</h1>
      </div>
    </div>
  );
}

export default Hero;
