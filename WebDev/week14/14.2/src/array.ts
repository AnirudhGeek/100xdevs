function getMax(num:number[]){
    if(num.length===0){
        throw new Error("Array is empty")
    }
    let maxVal= -10000000
    for (let i:number = 0; i < num.length; i++) {
        const v = num[i]
        if(v!==undefined&&v>maxVal){
            maxVal = v
        }
    }
    return maxVal
}

getMax([1,2,3,5])   


interface Address{
    city : string,
    pincode : number 
}

interface User {
    name : string 
    age : number 
    address : Address[]
}

const user: User = {
    name : "Anirudh",
    age : 20 ,
    address : []
     
}
