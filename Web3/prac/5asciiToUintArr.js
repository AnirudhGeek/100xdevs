//ascii to uint8arr

function asciiToUintArr(asciiStr){
    let arr = []
    for (let i = 0; i < asciiStr.length; i++) {
        const char = asciiStr[i];
        arr.push(char.charCodeAt(0))
    }
    return new Uint8Array(arr)
}

const asciiStr = "Hello"
const unint8Arr = asciiToUintArr(asciiStr)
console.log(unint8Arr)