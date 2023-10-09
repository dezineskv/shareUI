const readline = require("readline");
const fs = require("fs").promises;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const minNumber = 1;
const maxNumber = 100;

const secretNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  let attempts = 0;

  function isValidGuess(guess) {
    return !isNaN(guess)
    && guess >= minNumber
    && guess <= maxNumber
  }
function playGame() {
    rl.question(
        `Guess a number between ${minNumber} and ${maxNumber}: `,
(guess) => {
    if (isValidGuess(guess)) {
        attempts++;
const guessNumber = parseInt(guess);

    if (guessNumber === secretNumber) {
console.log(`You guessed right in ${attempts} attempts`
);

rl.close();
    }
    else if (guessNumber < secretNumber) {
        console.log("Try higher");
        playGame();
    }
    else {
        console.log("Try lower");
        playGame();
    }
    }
    else {
        console.log("Please enter within range");
        playGame();
}
}
);
}
console.log("Start guessing a number!");
playGame();