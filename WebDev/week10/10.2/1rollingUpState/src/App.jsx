import React from "react";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <LightBulb />
    </div>
  );
};

function LightBulb() {
  const [bulbOn,setBulbToggle] = useState(true)

  return (
    <>
      <BulbState bulbOn={bulbOn}/>
      <ToggleState setBulbToggle={setBulbToggle} bulbOn={bulbOn}/>
    </>
  );
}

function BulbState({bulbOn}){
  return(
    <>
      {bulbOn ? "Bulb is On" : "Bulb is Off"}
    </>
  )
}

function ToggleState({bulbOn, setBulbToggle}){
  function switchBulb(){
    // setBulbToggle(currentState => !currentState)
    //--------OR----------
    setBulbToggle(!bulbOn)
  }
  return (
    <>
      <button onClick={switchBulb}>Toggle button</button>
    </>
  )
}

export default App;