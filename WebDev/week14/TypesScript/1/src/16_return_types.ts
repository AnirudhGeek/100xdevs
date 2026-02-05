//inference return 
function num1(n : number){

}

//explicit return for exported/public functions
export function toTitle(str : string) : string{
    return "Hello"
}


function booleanToNumber(flag : boolean) : number{
    if(flag){
        return 1
    }else{
        return 0
    }
}

async function loadCountInferred(){
    return 21
}

loadCountInferred().then(n=>console.log(n))
