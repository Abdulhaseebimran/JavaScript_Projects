// Guess the number game

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let previousGuesses = [];

const p = document.createElement("p");

let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number greater than 1!");
    } else if (guess > 100) {
        alert("Please enter a number less than 100!")
    } else {
        previousGuesses.push(guess);
        if (numGuesses === 11) {
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed correctly!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again!`);
    } else if (guess > randomNumber) {
        displayMessage(`Too High! Try again!`);
    }
}

function displayGuesses(guess) {
    userInput.value = " ";
    guessSlot.innerHTML += `${guess},  `;
    numGuesses++;
    remaining.innerHTML = `${10 - numGuesses}  `;
    if (numGuesses > 10) {
        displayMessage(`Game Over! Number was ${randomNumber}`);
        endGame();
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
    userInput.value = " ";
    userInput.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    // p.style.background = "black";
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}
