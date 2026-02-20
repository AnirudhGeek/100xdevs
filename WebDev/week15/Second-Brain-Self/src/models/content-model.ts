    import mongoose, { Schema } from "mongoose";

    const ContentSchema = new Schema({
        title : {type : String},
        link : {type : String},
        tags : [{type : String, ref : "Tag"}],
        userID : {type : mongoose.Types.ObjectId , ref : "User" , required : true}
    })

    export const ContentModel = mongoose.model("Content", ContentSchema)
