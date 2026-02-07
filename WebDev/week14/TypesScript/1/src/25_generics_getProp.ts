//get prop
type UserN7 = {
  name: string;
  id: number;
  email?: string;
};

function getUserPropN7<T,K extends keyof T>(objN7 : T,keyN7 : K) : T[K]{
    return objN7[keyN7]
}

const userN7 = {
    id : 8,
    name : "Anirudh",
}

console.log(getUserPropN7(userN7,"id"))


//set
function setUserPropN7<T, K extends keyof T>(objN7 : T,keyN7 : K,newVal : T[K]) : void{
    objN7[keyN7] = newVal
}

console.log(userN7)    // { id: 8, name: 'Anirudh' }
setUserPropN7(userN7,"name","Abhinav")      //{ id: 8, name: 'Abhinav' }
console.log(userN7)     // { id: 8, name: 'Anirudh' }

//if we want to change the id
setUserPropN7(userN7,"id",10)
console.log(userN7)