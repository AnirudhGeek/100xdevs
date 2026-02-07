

// get
// set


class Temperature{
    #c = 0


    constructor(celsius : number){
        this.celsius = celsius
    }

    get celsius() : number{
        return this.#c
    }
    
    
    set celsius(value : number){
        if(Number.isNaN(value))  throw new Error("Not a number! Please check input")
            this.#c =value
    }


    get fahrenheit() :number{
        return ( this.#c *9)/5 + 32
    }   

    set fahrenheit(f:number){
        this.celsius = ((f-32)*5)/9
    }
}


const t = new Temperature(25)
t.fahrenheit = 212