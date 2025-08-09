// IMP => what is the difference between abstract classand interface
//     => thry look almost similar but here you can give default implementation

abstract class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract greet(): string;
  hello() {
    console.log("hi there");
  }
}

class Employee extends User {
  name: string;
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  greet() {
    return "hi " + this.name;
  }
}