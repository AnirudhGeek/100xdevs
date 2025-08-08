//returning nothing
function delayedCall(fn: () => void) {
  setTimeout(fn, 5000);
}

delayedCall(function () {
  console.log("hey");
});

//returning type int
function delayedCallInt(fn: () => number) {
  setTimeout(fn, 2000);
}

delayedCallInt(function () {
  return 3;
});

//returning type string
function delayedCallString(fn: () => string) {}
delayedCallString(function () {
  return "Anirudh";
});

function delayedGreet(fn: (a: string) => void) {
  setTimeout(fn, 2000);
}

function greet(a : string) {
  console.log("hey from greet ", a);
}

delayedGreet(greet);
