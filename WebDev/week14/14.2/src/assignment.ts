// create two types called User and Admin 
// Create a funtion that either takes user as an input or admin as an input , and returns a string says "Welcome, [name]"

interface Admin {
    name : string,
    permission : string
}

interface User {
    name : string,
    age : number
}

type UserOrAdmin = Admin | User 

function greet(user:UserOrAdmin){
    console.log("Hey, "+user.name)  // we can only access user.name because it is the intersection between the both . so we can't use user.age or user.permission
}