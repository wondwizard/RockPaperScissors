const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

const computerChoice = getComputerChoice();
console.log('The computer chose ' + computerChoice);

function round (playerSelection, computerSelection) {
    console.log('You chose ' + playerSelection);
    if (playerSelection == computerSelection) {
        return ('It is a tie! You and the computer both chose ' + computerChoice);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return ('You won! The computer chose ' + computerChoice);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return ('You won! The computer chose ' + computerChoice);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return ('You won! The computer chose ' + computerChoice);
    } else {
        return ('You loose! The computer chose ' + computerChoice);
    }

}

const playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();

console.log(round(playerChoice, computerChoice));