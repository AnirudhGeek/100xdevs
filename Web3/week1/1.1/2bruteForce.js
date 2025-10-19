const crypto = require('crypto')
let input = 0

for(i=0;i<=100000000;i++){
    const hash = crypto.createHash('sha256').update(String(input)).digest('hex')
    if(hash.startsWith("00000")){
        console.log(i)
        break
    }else{
        input++
    }
}
