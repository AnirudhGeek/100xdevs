import React, { useEffect, useState } from "react";

const App = () => {
  return (
    <div>
      <b>Hi there</b>
      <Counter1 />
      <Counter2 />  
      <Counter3></Counter3>
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
  useEffect(function () {
    setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);
    console.log(
      "mounted => ie it will only run for 1time that is when the component renders for the first time"
    );
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

//conditional rendering every 5 seconds the counter will be visible and then its not 
function Counter3() {
  const [counterVisible , setCounterVisible] = useState(true);
  useEffect(function(){
    //runs on mount
    const clock = setInterval(() => {
      setCounterVisible(cv=>!cv)
    }, 5000);

    //runs on unmount
    return function(){
      console.log('on unmount')
      clearInterval(clock)
    }
  },[])
  return <div>
    {counterVisible ? <Counter2/> : null}

  </div>;
}
export default App;
