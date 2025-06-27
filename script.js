let humanScore = 0;
let computerScore = 0;
let answer = "";

// computer choice

function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let choices = ["rock", "paper", "scissors"];
  let numbChoice = getRandomInt(3);
  let choice = choices[numbChoice];

  console.log(choice);
  return choice;
}

// logic and output

function playGame(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    answer = "draw";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    answer = "Human wins + 1";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    answer = "Human wins + 1";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    answer = "Human wins + 1";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    answer = "Computer wins + 1";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    answer = "Computer wins + 1";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    answer = "Computer wins + 1";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.textContent.toLowerCase();

    playGame(humanChoice, getComputerChoice());

    const answerDiv = document.querySelector(".result");
    answerDiv.textContent = answer;

    const humanScoreDiv = document.querySelector(".human-score");
    humanScoreDiv.textContent = "Human Score: " + humanScore;
    const computerScoreDiv = document.querySelector(".computer-score");
    computerScoreDiv.textContent = "Computer Score: " + computerScore;

    if (humanScore == 5) {
      alert("Human won to 5 points!");

      humanScore = 0;
      computerScore = 0;
    } else if (computerScore == 5) {
      alert("Computer won to 5 points!");

      humanScore = 0;
      computerScore = 0;
    }
  })
);
