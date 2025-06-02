const express = require("express");
const app = express();

const PORT = 3000;

//sum route
app.get("/sum", (req, res) => {
  const sum = parseInt(req.query.a) + parseInt(req.query.b);
  res.send("sum is : " + sum);
});

//difference route
app.get("/difference", (req, res) => {
  const difference = parseInt(req.query.a) - parseInt(req.query.b);
  res.send("difference is : " + difference);
});

//multiply route
app.get("/multiply", (req, res) => {
  const multiply = parseInt(req.query.a) * parseInt(req.query.b);
  res.send("multiply is : " + multiply);
});

//division route
app.get("/division", (req, res) => {
  const division = parseInt(req.query.a) / parseInt(req.query.b);
  res.send("division is : " + division);
});

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
