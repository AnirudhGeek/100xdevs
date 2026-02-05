// interface =>   interface are actually based for object shapes that you expect to extend
//           =>  it also supports declaration merging i.e if we had an interface then we can reopen a same interface with the same name


// type => these are more general and can be used where we can use it for unions, intersection ,functions ,etc
//       => cannot be reopened i.e  no merging


interface Box1 {
    width : number
}

//this is called declaration merging
interface Box1{
    height : number 
}

const box1 : Box1 = {width : 43, height : 90}

//but in type we cannot do declaration merging i.e no redeclaration in type
// type Bag1 = {color : string}
// type Bag1 = {size : number}
