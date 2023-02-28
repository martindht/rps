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

function getPlayerChoice() {
    const result = prompt('Enter your choice: Rock, Paper, or Scissors:')
    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }
    else if ((computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection ==="Paper" && playerSelection === "Rock") ||
        (computerSelection ==="Scissors" && playerSelection == 'Paper')) {
            return `You lose. ${computerSelection} beats ${playerSelection}.`;
    } 
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection ==="Paper" && computerSelection === "Rock") ||
    (playerSelection ==="Scissors" && computerSelection == 'Paper')) {
        return `You win. ${playerSelection} beats ${computerSelection}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        let play = playRound(playerSelection,computerSelection)
        console.log(play);
        if (play.includes('win')){
            playerScore += 1
        }
        else if (play.includes('lose')){
            computerScore +=1
        }
    }
    if (playerScore > computerScore) {
         console.log("You win the entire game.")
    }
    else if (playerScore < computerScore) {
        console.log("You lose the entire game.")
    }
    else {
        console.log("The game is a tie.")
    }
}

game()

