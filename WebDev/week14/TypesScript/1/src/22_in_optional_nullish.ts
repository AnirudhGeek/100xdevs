// In operator and optional nullish

//what is the use of in operator
//you want to use in operator when you want to narrow unions of object types that is based on properties existance

type InExample1 = { role: "Admin"; permissions: string[] };
type InExample2 = { role: "User"; expiresAt: Date };

type UserExample = InExample1 | InExample2;

function describeUser2(u: UserExample) {
  if ("permissions" in u) {
    return `Admin ${u.permissions.join(",")}`;
  }
  return `User ${u.expiresAt.toISOString()}`;
}

console.log(describeUser2({ role: "Admin", permissions: ["read", "write"] }));

//optional nullish => to avoid runtime crashes
//nullish => represented as ??
// falsy =>  represented as ||
// optional chaining => represented as ?.

type ProfileN3 = {
  name: string;
  contact ?: { email?: string };
};

const P1N3 : ProfileN3 = {
    name : "John"
}
const P2N3 : ProfileN3 = {
    name : "Ben",
    contact :{email : "ben10@gmail.com"}
}

// P1N3.contact.email     => if we will directictly write this, then this can possibly crash

//right way to write
const email1N3 = P1N3.contact?.email
const email2N3 = P2N3.contact?.email




//   ??    => this uses the right hand default only when the left is null or undefined
//   ||    => uses the default when the left  is any falsy value (0,"",null,undefined,NaN) 


const countFromServerN3 : number | null = 0
const labelFromServerN3 : string | undefined = ""

const aN3 = countFromServerN3 ?? 100     //here left one is not null or undefined so it will use its value as 0 only
console.log(aN3)

const bN3 = countFromServerN3 || 200     // here it will consider it as a falsy value so the default value will be considered to be as true i.e 200
console.log(bN3)