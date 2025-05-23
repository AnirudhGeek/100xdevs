//now we are going to use promise class
//promise class gives you a promise that I will return you something in the future

// we can you callback based approach
// or either we can use promise based approach as it is a cleaner way to write it

//as defining a class is difficult but using it easy
//similarly defining a promise is a bit difficult but using it is easy

//callback :-   setTimeout(callback,3000);
//promisified version :- setTimeoutPromisified((3000).then(callback));

//whatever is passed as the first argument of the first function in Promise, then only whatever we have passed in .then is get called

//function inside a function()=> resolve inside a function => random() => inside Promise class

function random(resolve) {
  setTimeout(resolve, 3000);
}
let p = new Promise(random);
console.log(p);

//using the eventual value returned by the promise
function callback() {
  console.log("Hey there!");
  console.log(p);
}
p.then(callback);

//read the contents of the file remove the extra spaces from front and back and writes back to the file
const fs = require("fs");

function readTheFile(sendTheFinalValueHere){
    fs.readFile("a.txt","utf-8",function(err,data){
        sendTheFinalValueHere(data)
    })
}

function readFile(filename){
  //read the file and return its value
  return new Promise(readTheFile)
}

const pro = readFile()  

function callback(content){
    console.log(content)
}

pro.then(callback)