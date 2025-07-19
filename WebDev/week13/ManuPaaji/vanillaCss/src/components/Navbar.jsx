import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Finta</div>
      <div className="right-nav">
        <button className="btn-left">Pricing</button>
        <button className="btn-left">Log In</button>
        <button className="btn-left">Guide</button>
        <button className="btn-right">Start free trial</button>
      </div>
    </div>
  );
};

export default Navbar;
