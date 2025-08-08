//creating interfaces with functions  => here the problem is that greet function cannot use the name 
interface People {
  name: string;
  age: number;
  greet: () => string;
}

//creating an object called person of People type
const person: People = {
  name: "Anirudh",
  age: 21,
  greet: () => {
    return "hey";   
  },
};



const greeting = person.greet();
console.log(greeting);
