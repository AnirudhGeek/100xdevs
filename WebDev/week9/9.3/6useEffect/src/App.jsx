import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState("");
  const [loader, setLoader] = useState(true);
  const [count,setCount] = useState(1)
  const [showTimer,setShowTimer] = useState(true)
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
  //     async (res) => {
  //       const json = await res.json();
  //       setTabData(json);
  //     }
  //   );
  // }, [currentTab]);
  useEffect(() => {
    setLoader(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then((res) => {
        setTabData(res.data);
        setLoader(false);
      });
  }, [currentTab]);

  useEffect(()=>{
    setInterval(() => {
      setShowTimer(!showTimer)
    }, 5000);
  },[])

  useEffect(()=>{
    const clock = setInterval(() => {
      setCount(count=>count+1)
    }, 1000);

    return ()=>{
      clearInterval(clock)
    }
  },[])
  return (
    <div>
      <div>
        <button
          onClick={() => setCurrentTab(1)}
          style={{ color: currentTab === 1 && "red" }}
        >
          Todo #1
        </button>
        <button
          onClick={() => setCurrentTab(2)}
          style={{ color: currentTab === 2 && "red" }}
        >
          Todo #2
        </button>
        <button
          onClick={() => setCurrentTab(3)}
          style={{ color: currentTab === 3 && "red" }}
        >
          Todo #3
        </button>
        <button
          onClick={() => setCurrentTab(4)}
          style={{ color: currentTab === 4 && "red" }}
        >
          Todo #4
        </button>
        <br />
        {/* {tabData.title} */}
        {loader ? "Loading..." : tabData.title}
      </div>
      <div>
        {showTimer && <Timer/>}
      </div>
    </div>
  );
};

function Timer(){
  const [count,setCount] = useState(1)
  useEffect(()=>{
    setInterval(() => {
      setCount(count=>count+1)
    }, 1000);
  },[])
  return(
    <div>
      {count} seconds passed
    </div>
  )
}

export default App;
