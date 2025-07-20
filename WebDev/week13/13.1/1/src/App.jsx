import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-5">
      flex
      <div className="flex justify-around">
        <div className="bg-blue-200">hey there from div 1</div>
        <div className="bg-amber-100">hey there from div 2</div>
        <div className="bg-pink-300">hey there from div 3</div>
      </div>
      grid
      <div className="grid grid-cols-12">
        <div className="bg-blue-200 col-span-5">hey there from div 1</div>
        <div className="bg-amber-100 col-span-4">hey there from div 2</div>
        <div className="bg-pink-300 col-span-3">hey there from div 3</div>
      </div>
      <br />
      use case grid + mobile first
      <div className="grid sm:grid-cols-12">
        <div className="bg-green-300 sm:col-span-5">hey there from div 1</div>
        <div className="bg-red-400 sm:col-span-4">hey there from div 2</div>
        <div className="bg-blue-200 sm:col-span-3">hey there from div 3</div>
      </div>
    </div>
  );
}

export default App;
