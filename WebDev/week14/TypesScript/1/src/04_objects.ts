type User = {
  id: number; //required property
  name: string;
  email?: string; //this is an optional property but if it is present then it must a string datatype
  readonly createdAtDate: Date; //this property cannot be reassigned
};

const user1: User = { id: 1, name: "Anirudh", createdAtDate: new Date() };
const user2: User = { id: 2, name: "Anirudh", email : "asdfadf",createdAtDate: new Date() };

// user1.createdAtDate = new Date()      => here we can't reassign it as it is a readonly property


type User2 = {
    email ?: string    // here the field is optional
}

type User3 = {
    email : string | undefined     // here the field is not optional it is either should be string or should be undefined
}




//keys
type Count1 = {
    [k : string] : number
} 


type Count2 = Record<"likes" | "views" | "shares", number>    //only these keys are possible  

const c1 : Count1 = {whatever : 1}
const c2 : Count2 = {likes : 3 ,views : 10, shares : 4}
// const c3 : Count2 = {likes : 3 ,views : 10, shares : 4 , users : 10}    // user key is not allowded here 