import React, { useEffect, useState } from "react";

const App = () => {
  return (
    <div>
      <b>Hi there</b>
      <Counter1 />
      <Counter2 />
    </div>
  );
};

function Counter1() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase count</button>
      <button onClick={handleDecrease}>Decrease count</button>
      <button onClick={handleReset}>Reset count</button>
    </div>
  );
}

function Counter2() {
  const [count, setCount] = useState(0);
  // setInterval(function(){
  //   setCount(count)
  // },1000)
  console.log("counter => it will logged every time the component re-renders");
  useEffect(function(){
    setInterval(function(){
      setCount(count => count + 1)
    },1000)
    console.log("mounted => ie it will only run for 1time that is when the component renders for the first time")
  },[])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
