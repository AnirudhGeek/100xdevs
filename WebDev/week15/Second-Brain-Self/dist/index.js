import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { connectDB } from "./database/db.js";
const app = express();
let PORT;
if (typeof process.env.PORT === "undefined") {
    PORT = 3000;
}
else {
    PORT = Number(process.env.PORT);
}
//database connection
connectDB();
//running server
app.listen(PORT, () => {
    console.log(`Server is running on the port : ${PORT}`);
});
//# sourceMappingURL=index.js.map