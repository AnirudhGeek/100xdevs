//Base58 is similar to Base64 but uses a different set of characters to avoid visually similar characters (e.g., 0 and O, l and 1) and to make the encoded output more user-friendly.
//upperCase => A-Z (excluding I and O)
//lowerCase => a-z (excluding l)
//numbers => 1-9 (excluding 0)


//encoding 
import bs58 from "bs58"

function uint8ArrToBase58(uint8Arr){
    return bs58.encode(uint8Arr)
}

const uintArr = new Uint8Array([72,101,108,108,111])
const base58Str = uint8ArrToBase58(uintArr) 
console.log(base58Str)