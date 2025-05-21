//functional arguments
//it is passing a function to another function as an argument
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function doSomething(a, b, op) {
    return op(a,b)
}

console.log(doSomething(6,4,add))
