
const xss = [1,2,3434]   //mutable array 


//readOnly array of numbers can be represented as follows :-
const ys : readonly number[] = [1,2,3]
const yss  : ReadonlyArray<number> = [8,9,10]

xss[0] = 9
// yss.push(10)   push pop splice are not allowed in readOnly array 

const abc = yss.map((s)=>s*5)
console.log(abc)
console.log(yss)


function sum(nums : readonly number[]) :number{
    let s = 0
    for(const n of nums) s+=n
    return s
}

console.log(sum(xss))   //passing mutable array in readonly param is allowed