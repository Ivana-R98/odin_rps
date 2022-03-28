let computerScore = 0;
let playerScore = 0;

function computerPlay () {
    computerChoice = Math.floor(Math.random() * 3);
    return  computerChoice === 0 ? "rock" 
          : computerChoice === 1 ? "paper" 
          : "scissors";
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    compare(computerSelection, playerSelection);
    console.log(result);
}

function compare(computerSelection, playerSelection) {
    if(computerSelection === "rock" && playerSelection === "paper") {
        result = "You win! Paper beats Rock";
        return playerScore++;
    } 
    else if(computerSelection === "rock" && playerSelection === "scissors") {
        result = "You lose! Rock beats Scissors";
        return computerScore++;
    }
    else if(computerSelection === "paper" && playerSelection === "rock") {
        result = "You Lose! Paper beats Rock";
        return computerScore++;
    }
    else if(computerSelection === "paper" && playerSelection === "scissors") {
        result = "You win! Scissors beat Paper";
        return playerScore++;
    }
    else if(computerSelection === "scissors" && playerSelection === "rock") {
        result = "You win! Rock beats Scissors";
        return playerScore++;
    }
    else if(computerSelection === "scissors" && playerSelection === "paper") {
        result = "You lose! Scissors beat Paper";
        return computerScore++;
    }
    else {
        return result = "Draw!";
    }
}
function game () {
    for(let i = 0; i < 5; i++) {
        playRound();
        console.log("Player score: ", playerScore, 
                "\nComputer score:", computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You win! Congratulations are in order");
    }
    else {
        console.log("You lose! Better luck next time");
    }
}
game();