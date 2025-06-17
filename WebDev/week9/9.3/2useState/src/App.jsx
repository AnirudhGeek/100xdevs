import React, { useState } from "react";

const App = () => {
  const [posts, setPost] = useState([]);

  function addPost() {
    setPost([
      ...posts,
      {
        name: "Anirudh Raturi",
        followers: 194234,
        time: "12min",
        image:
          "https://i.pinimg.com/736x/26/81/69/268169d3dce6765d7709b4600ae2bfae.jpg",
        description:
          "sdfiohqr difherohi asdadjfoi asdklhiorhdf asdfjklasdnasd f asdfjaslfnksdf asdfjioqrf ",
      },
    ]);
  }

  return (
    <div>
      <ToggleMessage />
      <button onClick={addPost}>Add todo</button>
      
      {/* 🟢 Render list of posts here */}
      {posts.map((post, index) => (
        <CardComponent
          key={index}
          name={post.name}
          followers={post.followers}
          time={post.time}
          image={post.image}
          description={post.description}
        />
      ))}
    </div>
  );
};

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(true);
  function toggle() {
    setIsVisible((isVisible) => !isVisible);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle message</button>
      <br />
      {isVisible ? "Message popped up by conditional rendering" : null}
    </div>
  );
};

const CardComponent = (props) => {
  return (
    <div style={{ backgroundColor: "#dfe6e9", width: "100%", marginBottom: 10 }}>
      <div style={{ backgroundColor: "#ffeaa7", width: "30%", borderRadius: 20 }}>
        <div style={{ display: "flex", padding: 8 }}>
          <img
            src={props.image}
            alt="profile"
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 5,
            }}
          />
          <div>
            <div><b>{props.name}</b></div>
            <div>{props.followers}</div>
            <div>{props.time}</div>
          </div>
        </div>
        <div>{props.description}</div>
      </div>
    </div>
  );
};

export default App;
