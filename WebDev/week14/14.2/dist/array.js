"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMax(num) {
    if (num.length === 0) {
        throw new Error("Array is empty");
    }
    let maxVal = -10000000;
    for (let i = 0; i < num.length; i++) {
        const v = num[i];
        if (v !== undefined && v > maxVal) {
            maxVal = v;
        }
    }
    return maxVal;
}
getMax([1, 2, 3, 5]);
const user = {
    name: "Anirudh",
    age: 20,
    address: []
};
//# sourceMappingURL=array.js.map