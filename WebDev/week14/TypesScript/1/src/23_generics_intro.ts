// understand what is "type parameter"   =>    <T>
// how typescript infers <T> from your arguments autometically


// what is generics => a generic is a function where the types are "blanks" and you then you fill the types later
//                  => <T> is like a placeholder and the when you later call the function typescript tries to figure out the what this <T> based on the arguments that you are passing


// eg of identity function
function id<T>(x:T):T{     //here we are giving type parameter <T> and then we are going to recieve x which is also of type T and functions return type will also be T 
    return x
}
//infers T
// id(5) => T is a number
//id("string") => T is a string
// we are not going to do this id<number>(5)

const xyzz = id(5)
console.log(xyzz + 1,id("anirudh"),id([1,2,4]))




function firstGen<T>(arr :T[]):T | undefined{   //this function is either going to return value of T or undefined if the array is empty
    return arr[0]
}

console.log(firstGen([1,2,3,4]))



//without generics =>   (x:unknown) => unknown
//with generics => (x:T) => T    //keeps the exact type 
function wrap<T>(value : T) : {value: T}{
    return {value }
}

