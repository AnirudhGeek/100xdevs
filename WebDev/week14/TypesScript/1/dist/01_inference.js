"use strict";
//goal -> understand when to let typescript infer types
//ts -> js very well
//when ts will writes the types /u r going to write
let count = 0; //ts sees number
const site = "anirudh"; //ts sees the exact literal "anirudh"
const scors = [10, 20, 30];
//over annotation isn't bad -> just noisy
function add1(a, b) {
    return a + b;
}
console.log(add1(5, 4));
//we should always annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
