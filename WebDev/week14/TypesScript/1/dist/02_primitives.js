"use strict";
let username = "Anirudh";
let age = 21;
let isLearner = true;
const big = 2n ** 63n - 1n;
// const mixed = big + age      => we cant add type number and type bigint
const TOKEN = Symbol("TOKEN");
function yearsToDay(years) {
    return years * 365;
}
