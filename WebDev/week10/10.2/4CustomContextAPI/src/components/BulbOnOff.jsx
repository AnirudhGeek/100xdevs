import React, { useContext } from "react";
import { BulbContext } from "../App";

const BulbOnOff = () => {
  // STEP 3 : Consume the context over here
  const { bulbOnOff } = useContext(BulbContext);
  return <div>{bulbOnOff ? "Bulb is ON" : "Bulb is OFF"}</div>;
};

export default BulbOnOff;
