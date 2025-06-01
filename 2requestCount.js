//we have to make a counter of the number of request that comes into our backend
const express = require("express");
const app = express();

const PORT = 3000;

let requestCount = 0;

app.use(function (req, res, next) {
  requestCount = requestCount + 1;
  next();
});

app.get("/", (req, res) => {
  res.json({
    name: "John",
  });
});

app.post("/", (req, res) => {
  res.json({
    msg: "Done",
  });
});

app.get("/requestCount",(req,res)=>{
    res.json({
        reqCount : `${requestCount}`
    })
})

app.listen(PORT, () => {
  console.log(`Server is listening to the port : ${PORT}`);
});
