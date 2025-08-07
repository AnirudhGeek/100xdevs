"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//returning nothing
function delayedCall(fn) {
    setTimeout(fn, 5000);
}
delayedCall(function () {
    console.log("hey");
});
//returning type int
function delayedCallInt(fn) {
    setTimeout(fn, 2000);
}
delayedCallInt(function () {
    return 3;
});
//returning type string
function delayedCallString(fn) { }
delayedCallString(function () {
    return "Anirudh";
});
function delayedGreet(fn) {
    setTimeout(fn, 2000);
}
function greet(a) {
    console.log("hey from greet ", a);
}
delayedGreet(greet);
//# sourceMappingURL=functionAsInput.js.map