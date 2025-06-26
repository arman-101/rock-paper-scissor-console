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

const computerChoice = compChoice();

// human choice

const humanChoice = prompt("Choose between 'rock' 'paper' 'scissors': ").toLowerCase();
console.log(humanChoice);

// logic and output

if (humanChoice === computerChoice) {
  console.log("Draw!");
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
}
else if (humanChoice === "rock" && computerChoice === "scissors") {
  console.log("Human Wins!");
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
}
else if (humanChoice === "paper" && computerChoice === "rock") {
  console.log("Human Wins!");
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
}
else if (humanChoice === "scissors" && computerChoice === "paper") {
  console.log("Human Wins!");
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
}
else if (computerChoice === "rock" && humanChoice === "scissors") {
  console.log("Computer Wins!");
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
}
else if (computerChoice === "paper" && humanChoice === "rock") {
  console.log("Computer Wins!");
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
}
else if (computerChoice === "scirros" && humanChoice === "paper") {
  console.log("Computer Wins!");
  console.log(`Human chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
}