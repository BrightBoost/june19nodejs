// run `npm install prompt-sync` in the terminal to install the prompt-sync package
const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log("Hello, " + name + "!");