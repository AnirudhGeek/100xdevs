import React from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="layout">
      <div>
        <Container>
          <Navbar/>
          <Hero/>
        </Container>
      </div>
    </div>
  );
};

export default App;
