let computerScore = 0;
let playerScore = 0;
let computerSelection;
const p1 = document.getElementById("p1");
const btn = document.getElementById("btn");
const pScore = document.getElementById("playerscore");
const cScore = document.getElementById("computerscore");
pScore.textContent = `Player score: ${playerScore}`;
cScore.textContent = `Computer score: ${computerScore}`;

btn.style.display = "none";
btn.addEventListener("click", () => {
    window.location.reload();
})

function computerPlay () {
    computerChoice = Math.floor(Math.random() * 3);
    return  computerChoice === 0 ? "rock" 
          : computerChoice === 1 ? "paper" 
          : "scissors";
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    compare(playerSelection, computerSelection);
    p1.textContent = result;
    pScore.textContent = `Player score: ${playerScore}`;
    cScore.textContent = `Computer score: ${computerScore}`;
}

//for each img, play round with imgs id as choice 
const imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        img.addEventListener("click", e => {   
            playerSelection = e.target.id;
            playRound(playerSelection, computerSelection);
            if(playerScore === 5 || computerScore === 5) {
                btn.style.display = "block";
                if (playerScore > computerScore) {
                    p1.textContent = "You win! Congratulations are in order";
                }
                else if (playerScore < computerScore) {
                    p1.textContent = "You lose! Better luck next time";
                }
            }
        });   
    })

function compare(playerSelection, computerSelection ) {
    while(playerScore < 5 && computerScore < 5) {
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
}

