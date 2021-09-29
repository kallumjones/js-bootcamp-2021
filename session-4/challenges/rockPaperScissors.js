/*
Team Blue

Rock Paper Scissors

Create the clasic game

You need to accept the user's choice (which for now can be stored in a variable)

The computer choice can be derived frim the 'Math.random()' which returns a number between 0 and 1

*/


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
