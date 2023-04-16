let playerInput;
let cpuInput;
let numGen;
let playerScore = 0;
let computerScore = 0;


function RPS() 
{
        numGen = Math.floor(Math.random() * 2);
        cpuInput = numGen; /* 0 = rock | 1 = paper | 2 = scissors */
        playerInput = prompt("Please enter rock, paper, or scissors.").toUpperCase();
        console.log(cpuInput);
        console.log(playerInput);

        switch (playerInput) 
        {

        case "ROCK":
            playerInput = "ROCK";
            if (cpuInput === 2) {
            playerScore++;
            return "player wins!";
            } else if (cpuInput === 1) {
            computerScore++
            return "Computer wins!";
            } else {
            return "Tie! No points added";
            }
            break;

        case "PAPER":
            playerInput = "PAPER";
            if (cpuInput === 0) {
            playerScore++;
            return "player wins!";
            } else if (cpuInput === 2) {
            computerScore++
            return "Computer wins!";
            } else {
            return "Tie! No points added";
            }
            break;

        case "SCISSORS":
            playerInput = "SCISSORS";
            if (cpuInput === 1) {
            playerScore++;
            return "player wins!";
            } else if (cpuInput === 0) {
            computerScore++
            return "Computer wins!";
            } else {
            return "Tie! No points added";
            
            }
            break;
            
            default:
                return "I am very tired";
            break;
            
        }
}

while (playerScore < 3) {
    RPS();
    console.log("Player points " + playerScore + " CPU Points " + computerScore);
    if (computerScore === 3) {
        break;
    }
}
