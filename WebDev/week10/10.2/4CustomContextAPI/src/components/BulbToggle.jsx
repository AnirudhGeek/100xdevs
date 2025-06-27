import React, { useContext } from "react";
import { BulbContext } from "../App";

const BulbToggle = () => {
  // STEP 3 : Consume the context over here
  const { bulbOnOff, setBulbOnOff } = useContext(BulbContext);
  function toggle() {
    setBulbOnOff(!bulbOnOff);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle Bulb</button>
    </div>
  );
};

export default BulbToggle;
