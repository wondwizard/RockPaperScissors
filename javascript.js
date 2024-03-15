const choice = ['rock', 'paper', 'scissors'];
let playerChoice = '';
let playerScoreNum = 0;
let computerScoreNum = 0;

function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
}

window.onload = function() {
    const computerScore = document.getElementById('computerScore');
    const playerScore = document.getElementById('playerScore');

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    const compChoice = document.getElementById('computerChoice');

    const winner = document.getElementById('finalResult');
    const message = document.getElementById('message');

    function round (playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            playerScoreNum = playerScoreNum;
            computerScoreNum = computerScoreNum;
            compChoice.textContent = 'The computer chose ' + computerSelection; 
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScoreNum++;
            playerScore.textContent = 'Player Score: ' + playerScoreNum;
            compChoice.textContent = 'The computer chose ' + computerSelection; 
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScoreNum++;
            playerScore.textContent = 'Player Score: ' + playerScoreNum;
            compChoice.textContent = 'The computer chose ' + computerSelection; 
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScoreNum++;
            playerScore.textContent = 'Player Score: ' + playerScoreNum;
            compChoice.textContent = 'The computer chose ' + computerSelection; 
        } else {
            computerScoreNum++;
            computerScore.textContent = 'Computer Score: ' + computerScoreNum;
            compChoice.textContent = 'The computer chose ' + computerSelection; 
        }
    
    }

    function checkScore () {
        if (playerScoreNum === 5 || computerScoreNum === 5) {
            if (playerScoreNum > computerScoreNum) {
                winner.textContent = 'You win!';
                if (computerScoreNum === 1) {
                    message.textContent = 'You had ' + playerScoreNum + ' points, Computer had ' + computerScoreNum + ' point';
                } else {
                    message.textContent = 'You had ' + playerScoreNum + ' points, Computer had ' + computerScoreNum + ' points';
                }
                playerScoreNum = 0;
                computerScoreNum = 0;
                playerScore.textContent = 'Player Score: 0';
                computerScore.textContent = 'Computer Score: 0';
            } else {
                winner.textContent = 'Sorry the computer won :(';
                if (playerScoreNum === 1) {
                    message.textContent = 'You had ' + playerScoreNum + ' point, Computer had ' + computerScoreNum + ' points';
                } else {
                    message.textContent = 'You had ' + playerScoreNum + ' points, Computer had ' + computerScoreNum + ' points';
                }
                playerScoreNum = 0;
                playerScoreNum = 0;
                computerScoreNum = 0;
                playerScore.textContent = 'Player Score: 0';
                computerScore.textContent = 'Computer Score: 0';
            }
        }
    }

    rock.addEventListener('click', () => {
        winner.textContent = '';
        message.textContent = '';
        playerChoice = 'rock';
        let computerChoice = getComputerChoice();
        round(playerChoice, computerChoice);
        checkScore();
    })

    paper.addEventListener('click', () => {
        winner.textContent = '';
        message.textContent = '';
        playerChoice = 'paper';
        let computerChoice = getComputerChoice();
        round(playerChoice, computerChoice);
        checkScore();
    })

    scissors.addEventListener('click', () => {
        winner.textContent = '';
        message.textContent = '';
        playerChoice = 'scissors';
        let computerChoice = getComputerChoice();
        round(playerChoice, computerChoice);
        checkScore();
    })

} 
