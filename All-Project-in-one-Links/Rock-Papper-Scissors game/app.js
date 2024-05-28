// Rock Papper and Scissors Game

let userScore = 0;
let compScore = 0;

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

const choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");

let user_Score = document.getElementById("userScore");
let computer_Score = document.getElementById("computerScore");

const drawGame = () => {
  console.log("It's a tie");
  msg.innerText = "It's a Draw Game! Try Again!";
  msg.style.color = "white";
  msg.style.backgroundColor = "red";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    user_Score.innerText = userScore;
    msg.innerText = `You wins Your ${userChoice} beats ${computerChoice}`;
    msg.style.color = "white";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    computer_Score.innerText = compScore;
    msg.innerText = `You lose ${computerChoice} beats your ${userChoice}`;
    msg.style.color = "white";
    msg.style.backgroundColor = "#081b31";
  }
};

const playGame = (userChoice) => {
  const computerChoice = generateComputerChoice();
  //   console.log("computer choice" + " " + computerChoice);

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "papper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

const generateComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
