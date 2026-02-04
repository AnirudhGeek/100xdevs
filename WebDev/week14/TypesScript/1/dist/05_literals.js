"use strict";
function move(d) {
    console.log(d);
}
const d1 = "left";
move(d1); //here it will not throw any error because it is stored in a const that means its value will not change further and when it is compared to Type Direction it fullfills it
let d2 = "right";
// move(d2)    //here it will throw error as its value can be changed later which cannot be equals to the type Direction 
let d3 = "left";
d3 = "right";
move(d3); //here it will not throw any error as we have defined its type at the starting only
