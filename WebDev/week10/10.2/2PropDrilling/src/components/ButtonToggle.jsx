import React from "react";

const ButtonToggle = ({ setBulbOnOff, bulbOnOff }) => {
  function toggle() {
    setBulbOnOff(!bulbOnOff);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle Bulb</button>
    </div>
  );
};

export default ButtonToggle;
