"use strict";
// create two types called User and Admin 
// Create a funtion that either takes user as an input or admin as an input , and returns a string says "Welcome, [name]"
Object.defineProperty(exports, "__esModule", { value: true });
function greet(user) {
    console.log("Hey, " + user.name); // we can only access user.name because it is the intersection between the both . so we can't use user.age or user.permission
}
//# sourceMappingURL=assignment.js.map