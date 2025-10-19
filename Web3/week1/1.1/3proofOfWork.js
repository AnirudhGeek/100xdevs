const crypto = require('crypto')

//function 
function findHashWithPrefix(prefix){
    let input = 0;
    while(true){
        const inputStr = input.toString()
        const hash = crypto.createHash('sha256').update(inputStr).digest("hex")
        if(hash.startsWith(prefix)){
            return {
                input : input,
                hash : hash
            }
        }else{
            input++
        }
    }
}

//find and print
const result = findHashWithPrefix("00000")
console.log(`Input : ${result.input}`)
console.log(`Hash : ${result.hash}`)
