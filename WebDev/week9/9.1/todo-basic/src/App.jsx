import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([
    {
      title: "Go to gym",
      description: "Go to gym regularly",
      isDone: "false",
    },
  ]);
  function addTodo() {
    let newArr = [];
    for (let i = 0; i < todo.length; i++) {
      newArr.push(todo[i]);
    }
    newArr.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      isDone: document.getElementById("isDone").value,
    });
    setTodo(newArr);
  }
  return (
    <div>
      <input id="title" type="text" placeholder="title" />
      <br />
      <input
        id="description"
        type="text"
        placeholder="enter your description"
      />
      <br />
      <input id="isDone" type="text" placeholder="is done?" />
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      <br />
      {todo.map((td) => (
        <Todo
          title={td.title}
          description={td.description}
          isDone={td.isDone}
        />
      ))}
    </div>
  );
};

export default App;
