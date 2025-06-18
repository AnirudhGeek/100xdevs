import React, { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Anirudh Raturi",
        followers: "435234",
        time: "12min",
        image:
          "https://blog.arnaudknobloch.com/wp-content/uploads/nft_pfp_01.jpg",
        description: "I'm a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi solutions. From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex blockchain concepts into user-friendly experiences.",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addPost}>Add post</button>
      {posts.map((post,index) => (
        <CardComponent 
          key = {index}
          name = {post.name}
          followers = {post.followers}
          time = {post.time}
          image = {post.image}
          description = {post.description}
        />
      ))}
    </div>
  );
};

function CardComponent(props){
  return (
    <div style={{backgroundColor:"#dfe4ea", width:"35%", padding:15, borderRadius:20, marginTop:10, marginLeft:"32%"}}>
      <div style={{display:'flex', padding:5,marginBottom:2}}>
        <img src={props.image} style={{width:50, borderRadius:50 ,  marginRight:15}} alt="profile" />
        <div>
          <div><b>{props.name}</b></div>
          <div>{props.followers}</div>
          <div>{props.time}</div>
        </div>
      </div>
      <div>{props.description}</div>
    </div>
  )
}

export default App;