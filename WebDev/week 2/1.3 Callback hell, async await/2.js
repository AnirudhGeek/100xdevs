//async await syntax  => it is just syntatic sugar on the top of promises
//                    => it looks very close to synchronous syntax 

function waitFor(x){
    return new Promise(function(resolve,rejects){
        setTimeout(() => {
            resolve()
        }, x);
    })
}

async function solve(){
    await waitFor(1000)
    console.log('hi')
    await waitFor(3000)
    console.log('hello')
    await waitFor(5000)
    console.log('hello there')
}

solve()

//if this is syncrounous then hi hello and hello there will print first and then the belwo one 
// but as this is async await , it is an asynchronous function and below line will get logged first
console.log("After solve")