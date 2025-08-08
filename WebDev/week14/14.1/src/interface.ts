
//for rn think interfaces as a custom type that you have creted
interface UserType {
    firstName : string,
    lastName : string,
    age : number
}

function greet(user: UserType){
    console.log("hello "+user.firstName+ " " +user.lastName + " your age is "+user.age)
}

let user:UserType={
    firstName: "Anirudh",
    lastName : "Raturi",
    age : 20
}

greet(user)