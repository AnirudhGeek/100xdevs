//this is how rest operatore works
function sumOfAllNumbers(...xs: number[]): number {
  return xs.reduce((s, n) => s + n, 0);
}

console.log(sumOfAllNumbers(1, 2, 3, 4));

//rest tuples
function makeRange(
  ...args: [start: number, end: number, skip?: number]
): number[] {
  const [start, end, skip = 1] = args;
  const out: number[] = [];

  for (let n = start; n < end; n += skip) out.push(n);
  return out;
}

console.log(makeRange(1,5))
console.log(makeRange(2,10,3))



function draw(x : number, y : number){
    console.log(x,y)
}

const points  = [10,20]
// draw(...points)    // this will not work as it is not a fixed tuple [number , number]
const pointsFixed = [10,20] as const
draw(...pointsFixed)    //not this will work as it is a fixed tuple
