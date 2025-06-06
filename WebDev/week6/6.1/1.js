const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "heyBuddy";

const app = express();
const PORT = 3000;

const users = [];

app.use(express.json());

function tokenVerify(req, res, next) {
  const token = req.headers.token;
  const decodeData = jwt.verify(token,JWT_SECRET);
  if (decodeData.username) {
    req.username = decodeData.username;
    next();
  } else {
    res.status(400).json({
      msg: "Invalid token",
    });
  }
}



app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    user.token = token;
    res.json({
      token: token,
    });
    console.log(users);
  } else {
    res.json({
      msg: "Invalid username or password",
    });
  }
});

app.get("/me", tokenVerify, (req, res) => {
  const username = req.username;
  const user = users.find((u) => u.username === username);

  res.status(200).json({
    username: user.username,
    password: user.password,
  });
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
