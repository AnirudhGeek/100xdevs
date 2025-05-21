//find  the sum of 2 numbers
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));
console.log(sum("20", 30)); // they will concatinate => 2030

//find sum from 1 to that number
function add(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(add(5));

//reading a file sync.
const fs = require("fs");
const content = fs.readFileSync("a.txt", "utf-8");
console.log(content)