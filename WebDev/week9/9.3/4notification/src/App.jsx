import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount(cnt => cnt+1);
  }

  useEffect(function(){
    setInterval(addCount,1000)
  },[])

  return (
    <div >
      <div style={{ display: "flex" }}>
        <img
          src="https://imgs.search.brave.com/F4r6VZmbjExHhcNj8lvlX-e0fdi--_-LIDuYHnKE0u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbWFs/bGltZy5wbmdrZXku/Y29tL3BuZy9zbWFs/bC8yNjMtMjYzMTg3/NF9waWN0dXJlLXJv/eWFsdHktZnJlZS1s/aWJyYXJ5LXBuZy1p/Y29uLWZyZWUtZG93/bmxvYWQucG5n"
          alt="notification icon"
          style={{ width: 50, marginTop: 30, marginLeft: 50 ,cursor: "pointer"}}
        />
        <div
          style={{
            width: 30,
            backgroundColor: "red",
            height: 30,
            fontSize: 25,
            color: "#dadada",
            padding: 7,
            borderRadius: 50,
            marginRight: 15,
          }}
        >
          {count}
        </div>
      </div>
      <br />
        {/* <button style={{marginLeft:20}} onClick={addCount}>Add notification</button> */}

    </div>
  );
}

export default App;
