
//risky way
const raw = '{"id" : 1, "name" : "A"}'
const riskyUser = JSON.parse(raw) as {id : number; name : string}
console.log(riskyUser)


//correct way
type User22 = {id : number , name : string}
function isUser(v : unknown) : v is User22{
    return (
        typeof v === "object" && v!== null && "id" in v &&
        typeof(v as any).id === "number" && "name" in v && 
        typeof(v as any).name === "string"
    )
}

const maybe1 = JSON.parse(raw) as unknown
if(isUser(maybe1)){
    console.log(maybe1.name)
}