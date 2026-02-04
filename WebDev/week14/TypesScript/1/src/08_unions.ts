// what is union
// union is simple if you are having any value then it can be either this OR that

//primitive union
function printId(id: string | number) {
  //when you are having an union then you have to first check its type and then you can apply logics according to that
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id.toFixed(2);
  }
}

//object union
type Admin1 = { role: "Admin"; permission: string[] };
type Customer1 = { role: "Customer"; loyaltyPoints: number };

function describeUser(u: Admin1 | Customer1) {
  if (u.role === "Admin") {
    console.log(u.permission);
  } else {
    console.log(u.loyaltyPoints);
  }
}

//doing same thing but with "in" operatore
function describeUserUsingInOperator(u: Admin1 | Customer1) {
  if ("permission" in u) {
    console.log("Its admin");
    console.log(u.role);
  } else {
    console.log("Its a customer");
    console.log(u.role);
  }
}

//array of unions and unions of array
const arrayOfUnions: (string | number)[] = ["a", 1, "b", 2];
const unionOfArrays: string[] | number[] = Math.random() > 0.5 ? ["a", "b", "c"] : [1, 2, 3, 4, 5];    //here its either be the array of string or either be the array of numbers
// unionOfArrays.push("z")   we cannot do this because we dont know is this is the array of number or array of string 