import React from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import heroimg from "./assets/hero-ui-v5.webp";

const App = () => {
  return (
    <div className="layout">
      <div>
        <Container>
          <div className="left-line" />
          <div className="right-line" />
          <Navbar />
          <Hero />
        </Container>
          <div className="hero-top-line" />
        <div className="hero-img-container">
          <img className="hero-img" src={heroimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
