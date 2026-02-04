const ROLES = ["admin" , "user" , "operator"] as const    ///this means whenver we are having type of roles then these are limited/locked to these type of roles only   i.e it become readOnly type of array of these strings 


//derive a union from array
type Role = (typeof ROLES)[number]    // i.e  type Role = "admin" | "user" | "operator"

function setRole(r : Role){
    console.log(r)
}

setRole("admin")
// setRole("operator1")   error
