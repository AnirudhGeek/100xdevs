//tuples => fixed length and fixed size and indexing also matters
//       => this is not equivalent to (string | number)[]


const userEntry : [string,number] = ["Anirudh",21]
// const userEntry2 : [string,number] = ["Anirudh",21 , "Rahul"]            //this is not allowed in tuples
// const userEntry2 : [string,number] = [21 , "Anirudh"]                    //this is not allowed in tuples


//opotional tuples
type responseRow  = [status :number , message ?: string]
const r11 : responseRow = [200]


//readonly tuples
const corners : readonly [number, string] = [0,"asdfadf"]