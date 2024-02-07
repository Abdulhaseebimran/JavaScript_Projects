// Tic Tac Toe Game

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turn1 = true;
// player 1 = X, player 2 = O

const winsPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

boxes.forEach((boxes) => {
  boxes.addEventListener("click", (e) => {
    if (turn1) {
      boxes.innerHTML = "X";
      turn1 = false;
    } else {
      boxes.innerHTML = "O";
      turn1 = true;
    }
    boxes.disabled = true;

    checkWinner();
  });
});

const resetGame = () => {
    turn1 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    msg.innerHTML = "";
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! ${winner} is the winner!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const declareDraw = () => {
    msg.innerHTML = `It's a draw!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
  for (let pattern of winsPatterns) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
        if(pos1Value === pos2Value && pos2Value === pos3Value){
            if(pos1Value === "X" || pos1Value === "O"){
                showWinner(pos1Value);
            }
            // showWinner(pos1Value);
        }
    }
  }

  let draw = true;
    for(let box of boxes){
        if(box.innerText === ""){
            draw = false;
            break;
        }
    }
    if(draw){
        declareDraw();
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);