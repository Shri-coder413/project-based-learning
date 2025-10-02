let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgBox = document.querySelector(".winMsg");
let msg = document.querySelector(".msg");

let playerX = true;

let winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  playerX = true;
  enabledPlayGround();
  msg.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (playerX) {
      //player no : 1
      box.textContent = "X";
      playerX = false;
    } else {
      //player no : 2
      box.textContent = "O";
      playerX = true;
    }
    // console.log(box.disabled = true);
    box.disabled = true;

    isWinner();
  });
});

const disabledPlayGround = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledPlayGround = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.textContent = "";
  }
};

const showWinner = (winner) => {
  msg.textContent = `Congratualation, winner is ${winner} `;
  msg.classList.remove("hide");
  disabledPlayGround();
};

const isWinner = () => {
  for (let check of winner) {
    let pos1 = boxes[check[0]].textContent;
    let pos2 = boxes[check[1]].textContent;
    let pos3 = boxes[check[2]].textContent;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
