// IMP => what is the difference between types and interfaces
//     => you can implement an interface in a class but you cannot do it with type
//     => type lets you do unions and intersection

//intersection => should have all the values of both the types
type Employee = {
  name: string;
  startData: string;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

let e: Employee = {
  name: "Anirudh",
  startData: "09-08-2025",
};

let m: Manager = {
  name: "xyz",
  department: "cs",
};

let tl: TeamLead = {
  name: "abc",
  startData: "01-01-2025",
  department: "cs",
};

//union => should have either or all the values of two types
type GoodUser = {
  name: string;
  gift: string;
};

type BadUser = {
  name: string;
  ip: number;
};

type User = GoodUser | BadUser;

let user1: User = {
  name: "Anirudh",
  gift: "toy",
};

let user2 : User = {
    name : "Abc",
    gift : "xyz",
    ip : 123456789
}
