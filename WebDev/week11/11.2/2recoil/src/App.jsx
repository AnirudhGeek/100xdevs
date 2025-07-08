// npm install react@18 react-dom@18

import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/atom";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  );
};

function Counter() {
  return (
    <div>
      <CurrentCounter />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCounter(){
  const count = useRecoilValue(counterAtom)
  return(
    <div>
      {count}
    </div>
  )
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom)
  function increment(){
    setCount(cnt=>cnt+1)
  }
  return(
    <div>
      <button onClick={increment}>Increase</button>
    </div>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom)
  function decrement(){
    setCount(cnt=>cnt-1)
  }
  return(
    <div>
      <button onClick={decrement}>Decrease</button>
    </div>
  )
}

export default App;
