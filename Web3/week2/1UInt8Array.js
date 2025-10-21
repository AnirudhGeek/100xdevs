//using UInt8Array in javascript 

//definition => UInt8Array is a typed array in JavaScript that represents an array of 8-bit unsigned integers (bytes).

//advantages => memory efficiency:  Uses less space; each value takes only 1 byte.
//           => constraints : Ensures that values don’t exceed 255, which is the maximum value a byte can hold.

//example 
let bytes = new Uint8Array([5,255,257,89])
console.log(bytes)     //This code creates a UInt8Array with four bytes, ensuring that each value stays within the valid byte range.



//Why use UInt8Array over Native Arrays?
// 1 => Memory efficiency : Native arrays in JavaScript store numbers using 64 bits (8 bytes) per number, regardless of the actual size of the number.
//   => UInt8Array stores each number using only 1 byte, which is sufficient for values between 0 and 255

// 2 => Constraints : UInt8Array enforces that each element doesn’t exceed 255, preventing potential overflow errors.
