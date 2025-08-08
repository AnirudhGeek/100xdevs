interface Address{
    city : string,
    country : string,
    pincode : number
}

interface User {
  name: string;
  age: number;
  address?:Address
}

interface Office {
    address:Address
}


const user: User = {
  name: "Anirudh",
  age: 20,
  address: {
    city: "Rishikesh",
    country: "India",
    pincode: 249205,
  },
};

const user2: User = {
    name : "Abc",
    age : 23,
}

function isLegal(user: User): boolean {
  if (user.age >= 18) return true;
  else return false;
}

const ans = isLegal(user);
if (ans) console.log("Yes legal");
else console.log("No illegal");
