"use strict";
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