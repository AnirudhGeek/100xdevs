const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel, TodoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "dfasdfasdf34356";
const app = express();
const { z } = require("zod");

const PORT = 3000;

mongoose.connect(
  ""
);

app.use(express.json());

//auth middleware
function auth(req, res, next) {
  const token = req.headers.token;
  const decodedToken = jwt.verify(token, JWT_SECRET);
  console.log(decodedToken.id);
  if (decodedToken) {
    req.userId = decodedToken.id;
    next();
  } else {
    res.status(403).json({
      msg: "Invalid Token",
    });
  }
}

app.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(5).max(30).email(),
    password: z.string().min(8).max(20),
    name: z.string().min(3).max(50),
  });

  const parseWithSuccess = requiredBody.safeParse(req.body);

  if (!parseWithSuccess.success) {
    res.status(403).json({
      msg: "Invalid credentials",
      error: parseWithSuccess.error,
    });
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  //hashing the password
  const hashedPassword = await bcrypt.hash(password, 5);

  await UserModel.create({
    email: email,
    password: hashedPassword,
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
  });

  if (!user) {
    res.status(403).json({
      msg: "User doesn't exist in our database",
    });
  }

  const hashedPassword = await bcrypt.compare(password, user.password);

  console.log(hashedPassword);

  if (hashedPassword) {
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

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;

  await TodoModel.create({
    userId: userId,
    title: title,
  });

  res.json({
    userId: userId,
    title: title,
  });
});

app.get("/todos", (req, res) => {});

app.listen(3000, () => {
  console.log(`Server started at ${PORT}`);
});
