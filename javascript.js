const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

let computerChoice = console.log('The computer chose ' + getComputerChoice());

function round (playerSelection, computerSelection) {
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