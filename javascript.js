const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

const computerChoice = getComputerChoice();
console.log('The computer chose ' + computerChoice);

function round (playerSelection, computerSelection) {
    console.log('You chose ' + playerSelection);
    if (playerSelection == computerSelection) {
        console.log('It is a tie! You and the computer both chose ' + computerChoice);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You won! The computer chose ' + computerChoice);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You won! The computer chose ' + computerChoice);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You won! The computer chose ' + computerChoice);
    } else {
        console.log('You loose! The computer chose ' + computerChoice);
    }

}

const playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();

round(playerChoice, computerChoice);