"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = [
    {
        firstName: "Anirudh",
        lastName: "Raturi",
        age: 20,
    },
    {
        firstName: "Abc",
        lastName: "xyz",
        age: 15,
    },
];
// function minAge(age : User[]):number{
//     let minAge = 1000000
//     for(let i = 0; i<age.length; i++){
//         const v = age[i]?.age
//         if(v!==undefined && v<minAge){
//             minAge = v
//         }
//     }
//     return minAge
// }
// minAge(user)
function filterUser(user) {
    let arr = [];
    for (let i = 0; i < user.length; i++) {
        let v = user[i];
        if (v !== undefined && v.age > 18) {
            arr.push(user[i]);
        }
    }
    return arr;
}
console.log(filterUser(user));
//# sourceMappingURL=arrayUser.js.map