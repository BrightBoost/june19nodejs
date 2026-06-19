let name = "Roy";
let age = 31;

console.log("My name is " + name + " and I am " + age + " years old.");

// Comment
/**
 * This is a multi-line comment
 */

// list of pokemon
let pokemon = ["Dialga", "Charmander", "Bulbasaur", "Squirtle"];

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
