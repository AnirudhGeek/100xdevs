type NumberDist = {[k:string]: number}

const counter : NumberDist = {}
counter["likes"] = 1
counter["comments"] = 2


//atlernative way => record    => tighter and safer
type Matrices = Record<"likes"| "views" | "shares",number>     // tighter and safer
const mm : Matrices = {
    likes : 1,
    views : 10,
    shares : 20
}


//when we have dynamic keys then instead of using Records we will you Map
const priceMap = new Map<string,number>
priceMap.set("likes",1)
priceMap.set("comments",10)


type LooseMap = Record<string,number | undefined>

const lm : LooseMap = {}
lm['x']= undefined
lm['y'] = 10