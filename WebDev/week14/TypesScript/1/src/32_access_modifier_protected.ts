// here we will see how protected keyword actually accessible in the class and if any class has the subclass also it will be available
//protected => class ,subclassses 
//          => but not from outside

class Animal {
    protected energy = 23

    eat(amount : number){
        this.energy = Math.min(100,this.energy + amount)
    }
}


class Dog extends Animal{
    run(){
        this.energy -=10
    }

    status(){
        return this.energy
    }
}


const d = new Dog()
d.eat(10)
d.run()
d.status()


// d.energy    //  we cant access it from outside as it is protected, can be called within the class or subclass that extends Animal subclass
