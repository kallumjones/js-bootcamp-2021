/*
Team Blue

Rock Paper Scissors

Create the clasic game

You need to accept the user's choice (which for now can be stored in a variable)

The computer choice can be derived frim the 'Math.random()' which returns a number between 0 and 1

*/
//clear text box
const clearTextBox = () => document.getElementById('userChoice').value = '';

let rpsChoices = ['rock', 'paper', 'scissors'];

const onClick = () => {

    let compRand = Math.floor(Math.random() * 3);
    let compChoice = rpsChoices[compRand];
    let userChoice = document.getElementById('userChoice').value;
    let userChoiceLower = userChoice.toLowerCase();
    let resultsDiv = document.getElementById('results');

    let resultsHTML;

    if(rpsChoices.includes(userChoiceLower) === false) {
        resultsHTML = 'Please Enter Valid Option (Rock, Paper, Scissors)'
    } else {
        resultsHTML = `Player Choice: ${userChoiceLower} <br>
        Computer Choice: ${compChoice} <br>`;
    }

    if (userChoiceLower === 'rock') {
        switch (compChoice) {
          case 'rock':
            resultsHTML = resultsHTML + 'Draw! <br> Play again!';
            break;
          case 'paper':
            resultsHTML = resultsHTML + 'Computer has won! <br> Play again!';
            break;
          case 'scissors':
            resultsHTML = resultsHTML + 'User has won! <br> Play again!';
        }
      } else if (userChoiceLower === 'paper') {
        switch (compChoice) {
          case 'rock':
            resultsHTML = resultsHTML + 'User has won! <br> Play again!';
            break;
          case 'paper':
            resultsHTML = resultsHTML + 'Draw! <br> Play again!';
            break;
          case 'scissors':
            resultsHTML = resultsHTML + 'Computer has won! <br> Play again!';
            break;
        }
      } else if (userChoiceLower === 'scissors') {
        switch (compChoice) {
          case 'rock':
            resultsHTML = resultsHTML + 'Computer has won! <br> Play again!';
            break;
          case 'paper':
            resultsHTML = resultsHTML + 'User has won! <br> Play again!';
            break;
          case 'scissors':
            resultsHTML = resultsHTML + 'Draw! <br> Play again!';
        }
      }

      clearTextBox();

      resultsDiv.innerHTML = resultsHTML;

}

















/* ==========Basic, through console========
const choices = ["Rock", "Paper", "Scissor"];

let userChoice = choices[2]; // change number for user input

let compNum = Math.floor(Math.random() * 3); // makes 0, 1, 2
let compChoice = choices[compNum];
console.log("User choice: ", userChoice);
console.log("Computer choice: ", compChoice);

if (userChoice === "Rock") {
  switch (compChoice) {
    case "Rock":
      console.log("Draw!");
      break;
    case "Paper":
      console.log("Computer has won!");
      break;
    case "Scissor":
      console.log("User has won!");
  }
} else if (userChoice === "Paper") {
  switch (compChoice) {
    case "Rock":
      console.log("User has won!");
      break;
    case "Paper":
      console.log("Draw!");
      break;
    case "Scissor":
      console.log("Computer has won!");
      break;
  }
} else if (userChoice === "Scissor") {
  switch (compChoice) {
    case "Rock":
      console.log("Computer has won!");
      break;
    case "Paper":
      console.log("User has won!");
      break;
    case "Scissor":
      console.log("Draw!");
  }
}
*/