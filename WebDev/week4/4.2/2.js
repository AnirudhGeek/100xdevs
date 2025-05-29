const express = require("express");
const app = express();

const PORT = 4000;

const todos = [];

//middleware
app.use(express.json());

//post
app.post("/", (req, res) => {
  todos.push(req.query.n);
  res.status(200).json({
    success: true,
  });
});

//get
app.get("/", (req, res) => {
  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});
