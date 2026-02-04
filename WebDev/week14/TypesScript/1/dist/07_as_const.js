"use strict";
const ROLES = ["admin", "user", "operator"]; ///this means whenver we are having type of roles then these are limited/locked to these type of roles only   i.e it become readOnly type of array of these strings 
function setRole(r) {
    console.log(r);
}
setRole("admin");
// setRole("operator1")   error
