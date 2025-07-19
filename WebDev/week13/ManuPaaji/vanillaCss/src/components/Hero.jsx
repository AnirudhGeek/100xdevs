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
      <div className="hero-subtitle">
        Automated bookkeeping, effortless tax filing, real-time insights. Set up
        in 10 mins. Back to building by 12:45am.
      </div>
      <div className="bottom-btn">
        <button className="btn-right">Start free trial</button>
        <span className="pricing-btn">
          <p>Pricing</p>
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
        </span>
      </div>
      <div className="hero-btm">Currently for US-based Delaware C-Corps.</div>
    </div>
  );
}

export default Hero;
