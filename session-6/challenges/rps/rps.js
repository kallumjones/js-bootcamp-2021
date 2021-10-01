//Selectors

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const battleUser = document.getElementById('battle-user');
const battleComp = document.getElementById('battle-comp');
const resultDiv = document.getElementById("results");

const rockSrc = rock.src;
const paperSrc = paper.src;
const scissorsSrc = scissors.src;

let userWin = 0;
let computerWin = 0;

const updateImageSrc = (player, type) => {
  switch(type){
    case 'Rock':
      player.src = rockSrc;
      break;
    case 'Paper':
      player.src = paperSrc;
      break;
    case 'Scissor':
      player.src = scissorsSrc;
      break;
  }

  player.classList.add('image');

}

function playGame(selection) {
  const choices = ["Rock", "Paper", "Scissor"];

  let userChoice = selection; // change number for user input

  let compNum = Math.floor(Math.random() * 3); // makes 0, 1, 2
  let compChoice = choices[compNum];
  console.log(compChoice)

  updateImageSrc(battleUser,userChoice);
  updateImageSrc(battleComp,compChoice);

  let result = `User choice: ${userChoice} <br>
  Computer choice: ${compChoice} <br>`;

  if (userChoice === "Rock") {
    switch (compChoice) {
      case "Rock":
        result += "Draw!";
        break;
      case "Paper":
        result += "Computer has won!";
        computerWin++;
        break;
      case "Scissor":
        result += "User has won!";
        userWin++;
        break;
    }
  } else if (userChoice === "Paper") {
    switch (compChoice) {
      case "Rock":
        result += "User has won!";
        userWin++;
        break;
      case "Paper":
        result += "Draw!";
        break;
      case "Scissor":
        result += "Computer has won!";
        computerWin++;
        break;
    }
  } else if (userChoice === "Scissor") {
    switch (compChoice) {
      case "Rock":
        result += "Computer has won!";
        computerWin++;
        break;
      case "Paper":
        result += "User has won!";
        userWin++;
        break;
      case "Scissor":
        result += "Draw!";
    }
  }

  result += `<br> Play Again! <br> User Win Count: ${userWin} <br> Computer Win Count: ${computerWin}`;

  resultDiv.innerHTML = result;
}

rock.addEventListener("click", function () {
  playGame("Rock");
});
paper.addEventListener("click", function () {
  playGame("Paper");
});
scissors.addEventListener("click", function () {
  playGame("Scissor");
});
