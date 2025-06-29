import React, { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  function AddPost() {
    return (
      <div>
        <button onClick={add}>Add post</button>
      </div>
    );
  }
  function add() {
    setPosts([
      ...posts,
      {
        image:
          "https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",

        namee: "Anirudh Raturi",
        followers: "143,246",
        time: "12min",
        description: "hey we will learn how to win a bounty of $6000",
      },
    ]);
  }
  return (
    <div>
      <ToggleMessage />
      <AddPost />
      {posts.map((post) => (
        <PostComponent
          image={post.image}
          namee={post.namee}
          followers={post.followers}
          time={post.time}
          description={post.description}
        />
      ))}
    </div>
  );
};

function PostComponent({ image, name, followers, time, description }) {
  return (
    <div
      style={{
        width: 250,
        backgroundColor: "#dfe6e9",
        color: "#2C3A47",
        padding: 10,
        borderRadius: 10,
        marginLeft: "40%",
        marginTop: 20,
      }}
    >
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <img
          style={{ width: 60, borderRadius: 50 }}
          src={image}
          alt="100xdevs logo"
        />
        <div style={{ fontSize: 15 }}>
          <div>
            <b>{name}</b>
          </div>
          <div>{followers}</div>
          <div>{time}</div>
        </div>
      </div>
      {description}
    </div>
  );
}

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);
  function handleToggle() {
    setIsVisible(!isVisible);
  }
  return (
    <div style={{ height: "30vh" }}>
      <button onClick={handleToggle}>Toggle message</button>
      <div>{isVisible === true && "Message conditionally rendered"}</div>
    </div>
  );
}

export default App;