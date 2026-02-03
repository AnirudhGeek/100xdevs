let username : string = "Anirudh"
let age : number = 21
let isLearner : boolean = true

const big : bigint = 2n**63n - 1n

// const mixed = big + age      => we cant add type number and type bigint

const TOKEN : unique symbol  = Symbol("TOKEN")

function  yearsToDay(years:number) : number{
    return years*365
}

