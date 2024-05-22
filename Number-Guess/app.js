// Number Guess Game

const userInput = document.querySelector("input");
const submitButton = document.querySelector(".button");
const remainingGuesses = document.querySelector(".guesses");
const guessesSlot = document.querySelector(".list");
const message = document.querySelector(".hiorLow");
const startOver = document.querySelector(".resultpara");

let randomNumber = parseInt(Math.random() * 100 + 1);
// let remainingGuess = 10;
let previousGuesses = [];
let guessesNumber = 1;
let playGame = true;

// let p = document.createElement("p");

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let guesses = parseInt(userInput.value);
    validateGuess(guesses);
  });
}

function validateGuess(guesses) {
  if (isNaN(guesses)) {
    alert("Please enter a valid number");
  } else if (guesses < 1) {
    alert("Please enter a number greater than 1");
  } else if (guesses > 100) {
    alert("Please enter a number less than 100");
  } else {
    previousGuesses.push(guesses);
    if (guessesNumber === 11) {
      // display guess
      displayGuess(guesses);
      displayMessage(
        `Game Over! The number was ${randomNumber}. You guessed: ${previousGuesses}`
      );
      endGame();
    } else {
      // display guess
      displayGuess(guesses);
      checkGuess(guesses);
    }
  }
}

function checkGuess(guesses) {
  if (guesses === randomNumber) {
    displayMessage(
      `Congratulations! You guessed the correct number in ${guessesNumber} guesses`
    );
    endGame();
  } else if (guesses < randomNumber) {
    displayMessage("Your guess is too low. Try again");
  } else if (guesses > randomNumber) {
    displayMessage("Your guess is too high. Try again");
  }
}

function displayMessage(guess) {
  message.innerHTML = `<h2>${guess}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  const p = document.createElement("p");
  p.classList.add("button");
  p.innerHTML = "<h4 id='newGame'>Start New Game</h4>";
  startOver.appendChild(p);
  playGame = false;
  document.querySelector("#newGame").addEventListener("click", newGame);
}

function newGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  previousGuesses = [];
  guessesNumber = 1;
  message.innerHTML = "";
  userInput.removeAttribute("disabled");
  startOver.innerHTML = "";
  playGame = true;
  guessesSlot.innerHTML = "Previous Guesses: ";
  remainingGuesses.innerHTML = `${11 - guessesNumber}`;
}

function displayGuess(guesses) {
  userInput.value = "";
  guessesSlot.innerHTML += `${guesses}, `;
  guessesNumber++;
  remainingGuesses.innerHTML = `${11 - guessesNumber}`;
}
