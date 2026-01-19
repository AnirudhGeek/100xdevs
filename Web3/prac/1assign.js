const crypto = require("crypto")

function findHashThatStartsWith(prefix){
    let num = 0
    while(true){
        const hash = crypto.createHash("sha256").update(num.toString()).digest("hex")
        if(hash.startsWith(prefix)){
            return {
                input : num.toString(),
                hash : hash
            }
        }
        num++
    }
}

const result = findHashThatStartsWith("00000")
console.log(`Input string : ${result.input}`)
console.log(`Hash : ${result.hash}`)