"use strict";
//risky way
const raw = '{"id" : 1, "name" : "A"}';
const riskyUser = JSON.parse(raw);
console.log(riskyUser);
function isUser(v) {
    return (typeof v === "object" && v !== null && "id" in v &&
        typeof v.id === "number" && "name" in v &&
        typeof v.name === "string");
}
const maybe1 = JSON.parse(raw);
if (isUser(maybe1)) {
    console.log(maybe1.name);
}
