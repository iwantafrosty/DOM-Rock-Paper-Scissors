let wins = 0;
let ties = 0;
let losses = 0;

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    ties++;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    wins++;
  } else {
    losses++;
  }
  updateScore();
}

function updateScore() {
  document.getElementById('wins').textContent = wins;
  document.getElementById('ties').textContent = ties;
  document.getElementById('losses').textContent = losses;
}

document.getElementById('rock').addEventListener('click', () => {
  playRound('rock', computerPlay());
});

document.getElementById('paper').addEventListener('click', () => {
  playRound('paper', computerPlay());
});

document.getElementById('scissors').addEventListener('click', () => {
  playRound('scissors', computerPlay());
});
