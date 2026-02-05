//where we can use it
//object shapes => similar to interfaces
// union types (A | B)
// intersection types (A & B)

type Person1 = {
  id: string;
  address: string;
  salary: number;
};

const person1: Person1 = {
  id: "1",
  address: "address",
  salary: 1234,
};

// we will use types when union
type Status = "new" | "paid" | "pending";

function nextActionCheck(s: Status): string {
  switch (s) {
    case "new":
      return "new";
    case "paid":
      return "paid";
    case "pending":
      return "pending";

    default:
      return "default";
  }
}


//we will use types while merging
type ToMerge1 = {price : number}
type ToMerge2 = {stock : number}

type MergedProductInfo = Person1 & ToMerge1 & ToMerge2


