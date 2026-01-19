const crypto = require("crypto")

function startsWithPrefix(prefix){
    let num = 0
    while(true){
        const hash = crypto.createHash("sha256").update(`100xdevs${num.toString()}`).digest("hex")
        if(hash.startsWith(prefix)){
            return {
                input : num,
                hash : hash
            }
        }
        num++
    }
}

const result = startsWithPrefix("00000")
console.log(`Input string : ${result.input}`)
console.log(`Hash : ${result.hash}`)