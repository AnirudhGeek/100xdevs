// ReturnType<F>   => this is the return type of the function
// Parameters<F>   => this is the tuple of parameter types of your function F
// InstanceType<Ctor>  => this is for constructor
// ConstructorParameters<C>

//ReturnType<F>
function ExtractUserInfo(id: string, isExtraInfo = false) {
  return {
    id,
    name: "Anirudh",
    log: isExtraInfo ? "details" : (undefined as string | undefined),
  };
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>; // so now the type of GetUserReturnInfo will be the return type of ExtractUserInfo function
type GetUserParamInfo = Parameters<typeof ExtractUserInfo>; ///it will tell what are the parameters we are going to recive

const argsInfo: GetUserParamInfo = ["anirudh", true];
const resultInfo : GetUserReturnInfo = ExtractUserInfo(...argsInfo)


class PersonN1 {
    constructor(public name : string,public age  : number){}

    greet(){
        return `Hi I am this => ${this.name}`
    }
}

type PersonInstanceN1 = InstanceType<typeof PersonN1>
type PersonConstructorArgs = ConstructorParameters<typeof PersonN1>     // here name will be string and age will be a number


const resultInfo1 : PersonConstructorArgs =  ["Anirudh", 21]
const abc11 : PersonInstanceN1 = new PersonN1(...resultInfo1) 

console.log(abc11.greet())