const choice = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
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
    let i = 5
    computerScore = 0
    playerScore = 0
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
    }
}


playGame()