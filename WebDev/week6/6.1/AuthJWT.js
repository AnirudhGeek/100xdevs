const express = require("express");
const jwt = require('jsonwebtoken')
const JWT_SECRET = "heyAnirudh"
const app = express();

const PORT = 3000;

const users = [];


app.use(express.json());

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "Your are successfully signed up",
  });
  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({
        username : username
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
app.get('/me',(req,res)=>{
    const token = req.headers.token
    const decodeInfo = jwt.verify(token,JWT_SECRET)
    const username = decodeInfo.username
    const user = users.find(u=>u.username === username)
    if(user){
        res.json({
            username : user.username,
            password : user.password
        })
    }else{
        res.status(404).json({
            msg : "User not found"
        })
    }
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
