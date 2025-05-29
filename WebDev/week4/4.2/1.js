const express = require("express");
const app = express();

const todos = []

function sum(number) {
  let num = 0;
  for (let i = 0; i < number; i++) {
    num = num + i;
  }
  return num;
}

const PORT = 5000;

app.use(express.json())

app.post('/todo',(req,res)=>{
    const todo = req.body
    todos.push(todo)
    res.json({
        "success" : true
    })
})

app.get('/todo',(req,res)=>[
    res.send(todos)
])

app.get("/", (req, res) => {
  const number = parseInt(req.query.n);
  console.log(number)
  const add = sum(number);
  res.send("hey your answer is : "+add);
});

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
