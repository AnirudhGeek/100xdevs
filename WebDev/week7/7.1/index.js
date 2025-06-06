const express = require('express')
const {} = require('./db')
const app = express()

const PORT = 3000

app.post('signup',(req,res)=>{

})

app.post('/signin',(req,res)=>{

})

app.post('/login',(req,res)=>{

})

app.post('/todo',(req,res)=>{

})

app.get('/todos',(req,res)=>{

})

app.listen(3000,()=>{
    console.log(`Server started at ${PORT}`)
})