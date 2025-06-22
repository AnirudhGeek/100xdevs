import React, { useRef } from "react";

//useRef => reference to a value , such that when you change the value , the component DOES NOT RE-RENDERS  

const App = () => {
  //STEP-1 : Create a reference to store the input element
  const inputRef = useRef();

  //STEP-2 : Defining the function to focus on input
  function focusOnInput() {
    // document.getElementById("name").focus();
    //STEP-3 : Access the DOM node and call the focus method
    inputRef.current.focus()
  }

  return (
    <div>
      <h4>Sign up</h4>
      {/*STEP-4 : attach the ref to the input element */}
      <input ref={inputRef} id="name" type="text" />
      <input type="text" />
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
};

export default App;
