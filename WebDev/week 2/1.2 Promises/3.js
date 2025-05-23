//Promisified version of setTimeout
function waitFor() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("From Promise");
      resolve();
    }, 3000);
  });
}

waitFor().then(function () {
  console.log("From callback");
});


//Promisified version of fs.readFile
const fs = require("fs");
function readF() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) return console.log("Error");
      resolve(data);
    });
  });
}

readF()
  .then(function (data) {
    console.log("Data => " + data);
    console.log("Read file from a.txt");
  })
  .catch(function (err) {
    console.log("Error => " + err);
  });
