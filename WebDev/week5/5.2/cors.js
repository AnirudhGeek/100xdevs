const express = require("express")
const cors = require('cors')
const app = express()

const PORT = 5000

app.use(express.json())
app.use(cors({
    domain : ["http://localhost:3000"]
}))

app.post("/sum",(req,res)=>{
    const sum = parseInt(req.body.a) + parseInt(req.body.b)
    res.json({
        answer : sum
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on the port:${PORT}`)
})