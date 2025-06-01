//it should not allow user to send more than 5 request in a second and should provide header as "user-id"

const express = require('express')
const app = express()

const PORT = 3000

let numberOfRequestForUser = 0
setInterval(() => {
    numberOfRequestForUser = {}
}, 1000);

app.use((req,res,next)=>{
    const userId = req.headers["user-id"]
    if(numberOfRequestForUser[userId]){
        numberOfRequestForUser[userId] = numberOfRequestForUser[userId]+1
        if(numberOfRequestForUser[userId>5]){
            res.status(404).send("No entry")
        }else{
            next()
        }
    }else{
        numberOfRequestForUser[userId] = 1
        next()
    }
})



app.listen('/',()=>{
    console.log(`Server started at port : ${PORT}`)
})