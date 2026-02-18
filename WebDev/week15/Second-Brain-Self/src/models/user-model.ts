import mongoose from "mongoose";
import { Schema} from "mongoose";

//schema 
const userSchema = new Schema({
    username : {type : String, unique : true},
    password : {type : String}
})

export const UserModel = mongoose.model("User",userSchema)