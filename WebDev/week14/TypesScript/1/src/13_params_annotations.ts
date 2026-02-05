


function func1(a : number , b: number) : number{
    return a + b
}

const nums12 = [1,2,3]

const doubled = nums12.map(n=>n*2)    //automatically infers the typeof n
console.log(doubled)   

const times2 = (n : number)=> n *2    //always prefer to give annotations




type Point1 = {x : number , y : number}

function distanceFromOrigin(p : Point1){
    return Math.hypot(p.x , p.y) 
}

console.log(distanceFromOrigin({x:4,y:8}))