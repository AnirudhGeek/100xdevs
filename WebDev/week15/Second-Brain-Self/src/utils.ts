

export const random = (len : number) =>{
    let options = "qwertyuiopasdfghjklzxcvbnm1234567890"
    
    let length = options.length
    let ans = ""
    for (let index = 0; index < len; index++) {
        ans += options[Math.floor(Math.random()*length)] 
    }

    return ans
}