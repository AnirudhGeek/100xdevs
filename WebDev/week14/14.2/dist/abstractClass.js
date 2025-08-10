"use strict";
// IMP => what is the difference between abstract classand interface
//     => thry look almost similar but here you can give default implementation
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hi there");
    }
}
class Employee extends User {
    name;
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi " + this.name;
    }
}
//# sourceMappingURL=abstractClass.js.map