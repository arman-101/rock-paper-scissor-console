let humanScore = 0;
let computerScore = 0;

// computer choice

function compChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let choices = ["rock", "paper", "scissors"];
  let numbChoice = getRandomInt(3);
  let choice = choices[numbChoice];

  console.log(choice);
  return choice;
}

// human choice

function getHumanChoice() {
  const humanChoice = prompt(
    "Choose between 'rock' 'paper' 'scissors': "
  ).toLowerCase();
  console.log(humanChoice);
  return humanChoice;
}

// logic and output

function playGame(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw!");
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    console.log(`Human score is ${humanScore}`)
    console.log(`Computer score is ${computerScore}`)
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Human Wins!");
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    humanScore++;
        console.log(`Human score is ${humanScore}`)
    console.log(`Computer score is ${computerScore}`)
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Human Wins!");
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    humanScore++;
        console.log(`Human score is ${humanScore}`)
    console.log(`Computer score is ${computerScore}`)
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Human Wins!");
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    humanScore++;
        console.log(`Human score is ${humanScore}`)
    console.log(`Computer score is ${computerScore}`)
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer Wins!");
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    computerScore++;
        console.log(`Human score is ${humanScore}`)
    console.log(`Computer score is ${computerScore}`)
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer Wins!");
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    computerScore++;
        console.log(`Human score is ${humanScore}`)
    console.log(`Computer score is ${computerScore}`)
  } else if (computerChoice === "scirros" && humanChoice === "paper") {
    console.log("Computer Wins!");
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    computerScore++;
        console.log(`Human score is ${humanScore}`)
    console.log(`Computer score is ${computerScore}`)
  }
}

// play 5 times

for (let i = 0; i < 5; i++) {
  const humanChoice = getHumanChoice();
  const computerChoice = compChoice();

  playGame(humanChoice, computerChoice);
}