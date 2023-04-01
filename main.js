function getComputerChoice() {
    const result = Math.floor(Math.random()*3);
    switch (result) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
         return resultDiv.textContent = "It's a tie."
    }
    else if ((computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection ==="Paper" && playerSelection === "Rock") ||
        (computerSelection ==="Scissors" && playerSelection == 'Paper')) {
        return resultDiv.textContent = `You lose. ${computerSelection} beats ${playerSelection}.`;
    } 
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection ==="Paper" && computerSelection === "Rock") ||
        (playerSelection ==="Scissors" && computerSelection == 'Paper')) {
        return resultDiv.textContent = `You win. ${playerSelection} beats ${computerSelection}.`;
    }
}

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('#result')
const scoreDiv = document.querySelector('#score')
const endDiv = document.querySelector('#end')
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            const playerSelection = button.id;
            let play = playRound(playerSelection, getComputerChoice());
            
            if (play.includes('win')){
                playerScore += 1
         }
         
            else if (play.includes('lose')){
                computerScore +=1
         }

            scoreDiv.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}.`
        
            if (playerScore === 5) {
                endDiv.textContent += " You win the game!";
            } else if (computerScore === 5) {
                endDiv.textContent += " The computer wins the game!";
            }
        }
    })
});
