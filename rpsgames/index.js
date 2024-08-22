// Read all the user interactions
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const papper = document.querySelector(".papper");

// Get choices from HTML in layout two
const player_choice = document.querySelector("#playerChoice");
const computer_choice = document.querySelector("#computerChioce");
const round_winner = document.querySelector("#roundWinner");

// Getting count for both players from the HTML
const player_count = document.querySelector("#playerCount");
const computer_count = document.querySelector("#computerCount");

// Initialize player and computer count values
let _computer_count = 0;
let _player_count = 0;

// Add event handling (click) to the options
rock.addEventListener("click", function () {
  handlePlay("rock");
});
scissors.addEventListener("click", function () {
  handlePlay("scissors");
});
papper.addEventListener("click", function () {
  handlePlay("papper");
});

// Handle the gameplay
function handlePlay(_player_choice) {
  player_choice.textContent = _player_choice.toUpperCase();

  const _computer_choice = computerPlay();
  computer_choice.textContent = _computer_choice.toUpperCase();

  const _winner = winner(_computer_choice, _player_choice);
  console.log(_winner);

  if (_winner == "player") {
    // Player won
    round_winner.textContent = "Human Won";
    // Increment player count
    _player_count++;
  } else if (_winner == "computer") {
    // Computer won
    round_winner.textContent = "Computer Won";
    // Increment computer count
    _computer_count++;
  } else {
    round_winner.textContent = "This Round is a Tie";
  }
z
  // Send player count to HTML******
  player_count.textContent = _player_count;
  computer_count.textContent = _computer_count;

  // Check if the game is over (best of five)****
  if (_player_count === 5) {
    alert("Human Wins the Game!");
    resetGame();
  } else if (_computer_count === 5) {
    alert("Computer Wins the Game!");
    resetGame();
  }
}

// Get computer choice at random
function computerPlay() {
  const options = ["rock", "scissors", "papper"];
  const genRandom = Math.floor(Math.random() * options.length);
  return options[genRandom];
}

// Get winner of the round
function winner(computer_choice, player_choice) {
  // Compare if both choices are the same
  if (player_choice === computer_choice) {
    return null;
  } else if (player_choice == "papper" && computer_choice == "rock") {
    return "player";
  } else if (player_choice == "scissors" && computer_choice == "papper") {
    return "player";
  } else if (player_choice == "rock" && computer_choice == "scissors") {
    return "player";
  } else {
    return "computer";
  }
}

// Reset the game from 0****
function resetGame() {
  _computer_count = 0;
  _player_count = 0;
  player_count.textContent = _player_count;
  computer_count.textContent = _computer_count;
  round_winner.textContent = "";                   
  player_choice.textContent = "";
  computer_choice.textContent = "";
}