const prompt = require('prompt-sync')();

let guessed = false;
let listOfGuesses = [];

const randomNumber = Math.floor(Math.random() * 100) + 1;
const number = prompt('Guess a number');

while (guessed == false) {
    if (number === randomNumber) {
        console.log('You guessed it in: ' + listOfGuesses.length + 'tries');
        guessed = true;
    } else if (number < randomNumber) {
        console.log('Guess higher!');
        listOfGuesses.push(number);
    } else if (number > randomNumber) {
        console.log('Guess lower!');
        listOfGuesses.push(number);
    } else {
        console.log('Invalid');
    }
}


