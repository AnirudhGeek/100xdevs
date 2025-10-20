const crypto = require("crypto")

//function 
function findHashFromPrefix(prefix){
    let input = 0;
    while(true){
        let inputStr = "100xdevs" + input.toString()
        const hash = crypto.createHash("sha256").update(inputStr).digest("hex")
        if(hash.startsWith(prefix)){
            return {
                input : inputStr,
                hash : hash
            }
        }else{
            input++
        }
    }
}

//call and print 
const result = findHashFromPrefix("00000")
console.log(`Input : ${result.input}`)
console.log(`Hash : ${result.hash}`)