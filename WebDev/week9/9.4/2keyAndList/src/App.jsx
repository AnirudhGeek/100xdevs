import React from "react";

const App = () => {
  const items = [
    {
      id: 1,
      todo: "go to gym",
      isDone: false,
    },
    {
      id: 2,
      todo: "go to swimming",
      isDone: true
    },
    {
      id: 3,
      todo: "go to study",
      isDone: false,
    },
  ];
  return (
    <div>
      <Todo items={items} />
    </div>
  );
};

function Todo({ items }) {
  return (
    <div>
      {items.map((td) => {
        return (
          <div>
            {td.todo}
            <br />
            {td.isDone.toString()}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
