const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(answer) {
  console.log("Hello " + answer + "!");
  rl.close();
});