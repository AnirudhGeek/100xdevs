function greet(user:{
    name : string,
    age : number
}){
    console.log('hey',user.name  )
}

greet({
    name : "anirudh",
    age : 20
})