// <T>   =>   constraint T so that only certain shapes are allowed
// <T extends X>
// key constraints   => <K extends keyof T>   -> k must be a key of T 

// .length 
function lenN4<T extends {length : number}>(x : T) : number{
    return x.length
} 

console.log(lenN4("hello"))
console.log(lenN4([1,2,3,4]))
console.log(lenN4({length : 10,tag :"ok"}))
// console.log(lenN4(123))   this will not work as this is of type number and .length function doesn't works on type number



//key
type UserN6 = {id : number ; name : string ; age?: number}

function userN6Extract<T,K extends keyof T>(arrN6 : T[],keyN6:K) : Array<T[K]>{
    return arrN6.map(item=>item[keyN6])
}

const userN6 : UserN6[] = [
    {
        id : 1,
        name : "Anirudh",
        age : 21
    },{
        id : 2,
        name : "Abhinav",
    }
]

console.log(userN6Extract(userN6,"id"))     //   => [ 1, 2 ]
console.log(userN6Extract(userN6,"name"))   //   => [ 'Anirudh', 'Abhinav' ]
console.log(userN6Extract(userN6,"age"))    //   => [ 21, undefined ]