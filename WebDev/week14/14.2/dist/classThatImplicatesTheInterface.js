"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    //firstly define what all premitives does your class have here it is name, age
    name;
    age;
    number;
    //so now name and age is attached to the manager . so now you can do this.name this.age whenever you have created an object of a class
    //what is a constructor => whenever you create a new instance of a class then the constructor gets called to create/initialise/construct the object
    constructor(name, age) {
        //here name and age are inputs to the constuctor
        this.name = name;
        this.age = age;
        this.number = "6568468348"; // you can add extra attribute to it but must fullfill the name and age attribute as it is mentioned in the People interface
        //so now whoever is making an object of Manager class (eg.  let rect = new Rectangle())  needs to pass a name and age (eg.  let rect = new Rectangle("Anirudh",21)) then only it will construct
        //so now whatever the name and age user sended, it will set the attached name and age to be that  => line 9
    }
}
//creating an object of manager class
let user = new Manager("Anirudh", 21);
console.log("The manager name is " + user.name + " and his age is " + user.age);
//# sourceMappingURL=classThatImplicatesTheInterface.js.map