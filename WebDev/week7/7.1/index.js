const express = require("express");
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "dfasdfasdf34356";
const app = express();

const PORT = 3000;

mongoose.connect(
  "mongodb+srv://annigeek:re0f806Mm3iz8q0b@cluster0.8cyirhw.mongodb.net/todo-app-database1"
);

app.use(express.json());

//auth middleware
function auth(req,res,next){
  const token = req.headers.token
  const decodedToken = jwt.verify(token,JWT_SECRET)
  console.log(decodedToken.id)
  if(decodedToken){
    req.userId = decodedToken.id
    next()
  }else{
    res.status(403).json({
      msg : "Invalid Token"
    })
  }
}

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.status(200).json({
    msg: "You are logged in",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    
  } else {
    res.status(403).json({
      msg: "Invalid credentials",
    });
  }
});

app.post("/login", (req, res) => {});

app.post("/todo",auth,async (req, res) => {
  const userId = req.userId
  const title = req.body.title

  await TodoModel.create({
    userId :userId,
    title : title
  })

  res.json({
    userId : userId,
    title : title
  })

});

app.get("/todos", (req, res) => {});

app.listen(3000, () => {
  console.log(`Server started at ${PORT}`);
});
