const compEle = document.querySelector("#comp-score");
const userEle = document.querySelector("#user-score");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const winMsg = document.querySelector("#msg");

const genRandNum = () => {
  const options = ["rock", "paper", "scissor"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
};

const showWinner = ((userWin, compEle, userEle) => {
  if (userWin) {
    //updating user Score
    userScore += 1;
    userEle.textContent = userScore;
    
    //showing user win message
    winMsg.textContent = "You won ☺️";
    winMsg.style.backgroundColor = "green";
  } 
  else {
    //updating computer score
    compScore += 1;
    compEle.textContent = compScore;
    
    //showing user lost message
    winMsg.textContent = "You lost!😣";
    winMsg.style.backgroundColor = "red";
  }
});

const winPlayer = (userChoice, comChoice) => {
  //rock , scissor
  if (userChoice === comChoice) {
    //update message - game draw
    winMsg.textContent = "Game Draw, play again";
    winMsg.style.backgroundColor = "#201d30";
  } 
  else {
    //track userWin or not
    let userWin = true;
    if (userChoice === "paper") {
      //scissor, rock
      userWin = comChoice === "scissor" ? false : true;
      console.log("userWin =", userWin);
    } else if (userChoice === "scissor") {
      //rock, paper
      userWin = comChoice === "rock" ? false : true;
      console.log("userWin =", userWin);
    } else if (userChoice === "rock") {
      //scissor, paper
      userWin = comChoice === "paper" ? false : true;
      console.log("userWin =", userWin);
    }
    showWinner(userWin, compEle, userEle);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("User choice = ", userChoice);

    //Generate computer choice
    const comChoice = genRandNum();
    console.log("computer = ", comChoice);

    //Select the Winner
    winPlayer(userChoice, comChoice);
  });
});
