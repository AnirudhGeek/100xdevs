// uint8Arr to ascii
//[72,101,108,108,111]

function bytesToAscii(bytesArr){
    return new TextDecoder().decode(bytesArr)
}

const bytes = new Uint8Array([72,101,108,108,111])
const asciiStr = bytesToAscii(bytes)
console.log(asciiStr)