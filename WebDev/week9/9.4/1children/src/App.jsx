import React from "react";

const App = () => {
  return (
    <div>
      <Card>
        <div>
          <h1>This is card 1</h1>
        </div>
        <h4>I live in raiwala cantt</h4>
      </Card>
      <Card>
        <div>
          <h1>This is card 2</h1>
          <h4>I study in COER University</h4>
        </div>
      </Card>
    </div>
  );
};

const Card = ({children}) => {
  return (
    <div style={{
      backgroundColor : "#a29bfe",
      color: "#dfe6e9",
      padding : 10,
      marginBottom:10,
      borderRadius : 10,
      boxShadow : '2px 2px 5px #2d3436'
    }}>
      {children}
    </div>
  )
};

export default App;
