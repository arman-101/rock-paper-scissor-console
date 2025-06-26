// computer choice

function compChoice() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let choices = ["rock", "paper", "scissors"];
  let numbChoice = getRandomInt(3);
  let choice = choices[numbChoice];

  console.log(choice);
}

compChoice();

// human choice


// logic and output
