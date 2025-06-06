const express = require("express");
const jwt = require('jsonwebtoken')
const JWT_SECRET = "heyAnirudh"
const app = express();

const PORT = 3000;

const users = [];

app.use(express.json());

//auth middleware
function authMiddleware(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.username) {
    req.username = decodedData.username;  //it changes the request object so that username is available to other functions
    next();
  } else {
    res.status(400).json({
      msg: "You are not logged in",
    });
  }
}

//hosting both backend and frontend on localhost:3000
app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/public/index.html")
})

app.post("/signup", (req, res) => {
  const username = req.body.username;
  if (users.find((u) => u.username === username)) {
    res.status(404).json({
      msg: "User already exist",
    });
  } else {
    const password = req.body.password;
    users.push({
      username: username,
      password: password,
    });
    res.status(200).json({
      msg: "signed up successfully",
    });
    console.log(users);
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({
        username : user.username
    },JWT_SECRET)
    user.token = token;
    res.json({
      msg: "You are successfully signed in",
      token : token
    });
  } else {
    res.status(400).json({
      msg: "User doesn't exist",
    });
  }
  console.log(users);
});

//creating an authenticated endpoint
app.get("/me", authMiddleware, (req, res) => {
  const user = users.find((u) => u.username === req.username);
  res.json({
    username: user.username,
    password: user.password
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});