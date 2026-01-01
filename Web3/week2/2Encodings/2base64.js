// 1 character = 6 bits
// It uses 64 different characters (A-Z, a-z, 0-9, +, /).
// It is commonly used in data transfer, encoding images, and storing complex data as text.

const uint8Arr = new Uint8Array([72,101,108,108,111])
const base64Str = Buffer.from(uint8Arr).toString("base64")
console.log(base64Str)