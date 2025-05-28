const express = require('express')
const app = express()

const todos = []

const PORT = 3000

//middleware
app.use(express.json());

//post route
app.post('/',(req,res)=>{
    const tasks = req.body
    todos.push(tasks)
    res.status(200).json({
        "success" : true
    })
})

//get route
app.get('/',(req,res)=>{
    res.status(200).send(todos)
})

app.listen(PORT,()=>{
    console.log(`Server is runnning on port ${3000}`)
})