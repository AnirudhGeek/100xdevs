import {config} from "dotenv"
import {PrismaClient} from "@prisma/client"

config()

const prisma = new PrismaClient({
    log : process.env.NODE_ENV === "development" ? ["query","error","warn"] : ["error"]
})

const connectDB = async()=>{
    try {
        await prisma.$connect()
        console.log("db connected via prisma")
    } catch (error) {
        console.log("Database connection error")
        console.log(error)
        process.exit(1)
    }
}

const disconnectDB = async()=>{
    await prisma.$disconnect()
}

export {prisma, connectDB,disconnectDB}