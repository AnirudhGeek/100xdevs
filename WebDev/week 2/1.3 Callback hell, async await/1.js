// function onTime(x) {
//   return new Promise(function (resolve, rejects) {
//     setTimeout(() => {
//       console.log("Logged after 2 sec");
//       resolve();
//     }, x);
//   });
// }

// onTime(3000).then(function () {
//   console.log("Logged after Promise");
// });

//call back hell eg
//1 logs hi after 1 sec
//2 logs hello 3seconds after step1
//3 logs hello there 5seconds after step2

//call back hell version
setTimeout(() => {
  console.log("hi");
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);

//promisified version
function promisified(x) {
  return new Promise(function (resolve, rejects) {
    setTimeout(() => {
      resolve();
    }, x);
  });
}

promisified(1000).then(function () {
  console.log("hi");
  promisified(3000).then(function () {
    console.log("hello");
    promisified(5000).then(function () {
      console.log("hello there");
    });
  });
});

//promise chaining
promisified(1000)
  .then(function () {
    console.log("hi");
    return promisified(3000);
  })
  .then(function () {
    console.log("hello");
    return promisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });
