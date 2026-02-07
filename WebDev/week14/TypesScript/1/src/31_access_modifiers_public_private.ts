


// public => is default means it is accessible from everywhere
// private => blocks access outside from the class 

class BankAccount{
    public owner : string

    private balance = 0

    #otp= 123456   // this one will also considered to be as private as it is starting from #

    constructor(owner : string){
        this.owner = owner
    }

    deposit(amt:number){
        if(amt<=0) throw new Error("Amout must be positive!")
            this.balance+= amt
    }

    getBalance(){
        return this.balance
    }

    verifyOtp(code: number){
        return this.#otp === code     //this is only accessible inside the class
    }
}


const acc = new BankAccount("Anirudh")
acc.deposit(5000)
console.log(acc.getBalance())

// acc.balance    // here we are going to get the error as we are accessing private from outside the class 
// acc.#otp       // same as above


