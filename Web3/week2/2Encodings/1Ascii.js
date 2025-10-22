//Bytes to Ascii
function bytesToAscii(bytesArr){
    return new TextDecoder().decode(bytesArr)
}

const bytes = new Uint8Array([72,101,108,108,111])    // corresponds to "Hello"
const ascii = bytesToAscii(bytes)
console.log(ascii)



//Ascii to bytes
function asciiToBytes(asciiStr){
    const arr = [];
    for(let i =0;i<asciiStr.length ; i++){
        const char = asciiStr[i]
        arr.push(char.charCodeAt(0))
    }
    return new Uint8Array(arr)
}

const ascii2 = "Hello";
const bytes2 = asciiToBytes(ascii2)
console.log(bytes2)