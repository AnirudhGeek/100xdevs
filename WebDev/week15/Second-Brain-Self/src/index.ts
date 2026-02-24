import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { connectDB } from "./database/db.js"
import userRouter from "./routes/user-routes.js" 
import cors from "cors"

const app = express()
let PORT : number

if(typeof process.env.PORT === "undefined"){
    PORT = 3000
}else{
    PORT = Number(process.env.PORT)
}


//database connection
connectDB()

//middlewares
app.use(express.json())
app.use(cors())


//routes
app.use("/api/v1",userRouter)


//running server
app.listen(PORT,()=>{
    console.log(`Server is running on the port : ${PORT}`)
})
