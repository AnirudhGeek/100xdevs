// to structure our code better we are going to put all our database logic here
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

//Schema
const User = new Schema({
    email : String,
    password : String,
    name : String
})

const Todo = new Schema({
    title : String,
    done : Boolean,
    userId : ObjectId
})

//now we want something to perform operations when reqest will come => so we use model
const UserModel = mongoose.model('users',User)
const TodoModel = mongoose.model('todos',Todo)

//now we are exporting a object which has key as UserModel and TodoModel so that we can import in index.js
module.exports({
    UserModel : UserModel,
    TodoModel : TodoModel
})