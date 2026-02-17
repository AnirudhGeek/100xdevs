import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

export async function connectDB(){
    try {
        let MONGO_URI : string | undefined = process.env.MONGO_URI
        if(typeof MONGO_URI === undefined){
            throw new Error("Incorrect connection string")
        }else if(typeof MONGO_URI === "string"){
            await mongoose.connect(MONGO_URI)
            console.log("Database connected successfully!")
        }
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}