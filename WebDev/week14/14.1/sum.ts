function sum(a: number, b: number): number {
  return a + b;
}

let ans = sum(3, 5);
console.log(ans);

//check user age if 18+
function checkAge(age: number) {
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

console.log(checkAge(19))
