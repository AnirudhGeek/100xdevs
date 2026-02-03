
//strictNullChecks -> if its false then it will not through any error
let title :string  = 'intro'
// title = undefined



let subtitle : string | undefined = "Anirudh"


//when we are writing a function and that function is not returning any value then what should we do 
      //  => DON'T use the return type any for callbacks whose value will be ignored 
      //  => we will use return type void when function doen't return any useful value
function log(msg: string) :void{
    console.log(msg)
}

      //  => when function never returns any value then we will user the retur type never
      function fail(msg : string) : never{
        throw new Error(msg)
      }

 