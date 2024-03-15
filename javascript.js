const computerChoice = ['rock', 'paper', 'scissors'];
let playerChoice = '';
let computerScore = 0;
let playerScore = 0;

window.onload = function() {
    

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    rock.addEventListener('click', () => {
        playerChoice = 'rock';
        console.log(playerChoice);
    })

    paper.addEventListener('click', () => {
        playerChoice = 'paper';
        console.log(playerChoice);
    })

    scissors.addEventListener('click', () => {
        playerChoice = 'scissors';
        console.log(playerChoice);
    })
} 

function getComputerChoice() {
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}



function round (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ('It is a tie!');
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return ('You won!');
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return ('You won!');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return ('You won!');
    } else {
        return ('You loose!');
    }

}


function playGame () {
    while (document.getElementById('playerScore').value < 5 || document.getElementById('computerScore').value < 5) {

    }
}







/*
while (i > 0) {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    console.log('The computer chose ' + computerChoice);
    console.log('You chose ' + playerChoice);
    console.log(round(playerChoice, computerChoice));
    if (round(playerChoice, computerChoice) === ('You loose!')) {
        computerScore++
    } else if (round(playerChoice, computerChoice) === ('You won!')) {
        playerScore++
    }
    i--;        
}
console.log('You had ' + playerScore + ' points');
console.log('The computer had ' + computerScore + ' points');
if (computerScore > playerScore) {
    console.log('Sorry the computer won :(');
} else if (computerScore < playerScore) {
    console.log('You won!');
} else {
    console.log('It is a tie.');
} */