let name = "Roy";
let age = 31;

console.log("My name is " + name + " and I am " + age + " years old.");

// Comment
/**
 * This is a multi-line comment
 */


// object dialga
let dialga = {
  name: "Dialga",
  type: "Steel/Dragon",
  level: 100,
  moves: ["Roar of Time", "Dragon Breath", "Iron Head", "Flash Cannon"]
};

console.log(dialga.name + " is a " + dialga.type + " type pokemon.");

function greet(name) {
  return "Hello, " + name + "!";
}

let result = greet("Roy");
console.log(result);

const greetArrow = (name) => {
  return "Hello, " + name + "!";
};

// parameters => single line body
const greetArrowShort = name => "Hello, " + name + "!";
const printArrowShort = name => "Printing: " + name + "!";

console.log(greetArrow("Roy"));
console.log(greetArrowShort("Roy"));

// example of function accepting a function as parameter
function processUserInput(callback) {
  let name = "Roy";
  console.log(callback(name));
}

processUserInput(greet);
processUserInput(greetArrow);
processUserInput(printArrowShort);

let add = (a, b) => a + b;

// regular vs triple equality
// usually you want triple eq
let nr5 = 5;
let word5 = "5";

let same5 = nr5 === word5; // true for ==
console.log(same5);

// if statements
let trafficLight = "green";

if (trafficLight === "green") {
  console.log("Go!");
} else if (trafficLight === "yellow") {
  console.log("Slow down!");
} else if (trafficLight === "red") {
  console.log("Stop!");
} else {
  console.log("Invalid traffic light color.");
}

// loops
// regular for
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// while
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// for in
// list of pokemon
let pokemon = ["Dialga", "Charmander", "Bulbasaur", "Squirtle"];

// print index
for(let p in pokemon) {
    console.log(p + " - " + pokemon[p]);
}

// for of - prints values
for(let p of pokemon) {
    console.log(p);
}

