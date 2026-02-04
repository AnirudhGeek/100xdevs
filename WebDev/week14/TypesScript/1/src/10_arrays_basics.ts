
//arrays can be written as :-
const a11 : number[] = [1,2,3]   ///T[]
const a12 : Array<number> = [1,2,3,4]    //Array<T>


const scores1 = [1,2,24]
// scores1.push("54")   not allowed as by inference scores is of type array of numbers

const scores2 = [1,"22",4325]
scores2.push("dfasdfa") //here it is allowed as by inference it is array of unions
