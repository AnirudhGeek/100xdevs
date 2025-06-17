import React from "react";

const App = () => {
  return (
    <div>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

const CardComponent = () => {
  return (
    <div style={{width: 300, backgroundColor:"#dfe6e9", borderRadius:20, marginLeft:"38%", marginTop:"1%", padding:15} }>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: 70, borderRadius: 50, marginRight: 15,marginBottom:10 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGME8O7EkM5OcsUkC0bi2v23b_hOjjXTxKtg&s"
          alt="myImage"
        />
        <div>
          <div style={{marginTop: 6}}>
            <b>Anirudh Raturi</b>
          </div>
          <div>432,975 followers</div>
          <div>12min</div>
        </div>
      </div>
      <div>
        Want to know how to big win? Check out how this folks won 5600 in bounties
      </div>
    </div>
  );
};

export default App;
