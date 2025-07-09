import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { currentAtom, evenSelector } from "./store/atoms/counter";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
};

function Buttons() {
  const setCount = useSetRecoilState(currentAtom);
  function increment() {
    setCount((cnt) => cnt + 2);
  }
  function decrement() {
    setCount((cnt) => cnt - 1);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(currentAtom);
  return <div>{count}</div>;
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "Even" : "Odd"}</div>;
}

export default App;
