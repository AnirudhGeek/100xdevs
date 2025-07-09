//React says=>
  //Anytime a component re-renders then all its children re-renders

//but if=>
  // you wrap a component inside a memo only if the props/state in that child has changed only then will it re-render

import React from "react";
import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    setInterval(() => {
      setCount(cnt=>cnt+1)
    }, 3000);
  },[])
  return (
    <div>
      <CurrentCounter />
      <Increase />
      <Decrease />
    </div>
  );
};

const CurrentCounter = memo(()=>{
  return (
    <div>
      1
    </div>
  )
})

const Increase = memo(()=>{
  return (
    <div>
      <button>Increase</button>
    </div>
  )
})

const Decrease = memo(() =>{
  return(
    <div>
      <button>Decrement</button>
    </div>
  )
})

export default App;
