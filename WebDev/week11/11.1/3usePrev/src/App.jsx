import React from "react";
import { useState } from "react";
import { usePrev } from "./hooks/usePrev";

const App = () => {
  const [state, setState] = useState(0);
  function increase() {
    setState((state) => state + 1);
  }
  const prev = usePrev(state);
  return (
    <div>
      <div>{state}</div>
      <div>
        <button onClick={increase}>increment</button>
      </div>
      <div>the previous state is {prev}</div>
    </div>
  );
};

export default App;