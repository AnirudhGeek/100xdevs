"use strict";
// IMP => what is the difference between interfaces and types 
//     => they do similar things one of the key difference is you can impliment interfaces as classes but you can't do it with types
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Anirudh",
    age: 20,
    address: {
        city: "Rishikesh",
        country: "India",
        pincode: 249205,
    },
};
const user2 = {
    name: "Abc",
    age: 23,
};
function isLegal(user) {
    if (user.age >= 18)
        return true;
    else
        return false;
}
const ans = isLegal(user);
if (ans)
    console.log("Yes legal");
else
    console.log("No illegal");
//# sourceMappingURL=userInterface.js.map