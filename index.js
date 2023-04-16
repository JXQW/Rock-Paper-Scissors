let playerInput;
let cpuInput;
let numGen;
let playerScore = 0;
let computerScore = 0;
let min = 1;
let max = 3;

function RPS () {

    numGen = Math.floor(Math.random() * (max - min + 1) + min);
    cpuInput = numGen; /* 1 = rock | 2 = paper | 3 = scissors */

    playerInput = prompt("Please enter rock, paper, or scissors.");
    switch (playerInput) {

        case 0:
            playerInput = "ROCK";
                if (cpuInput = 3) {
                return "player wins!";
                playerScore++;
                } else if (cpuInput = 2) {
                    return "Computer Wins!"
                    computerScore++
                } else {
                    return "Tie! No points added";
                }
        break;
        
        case 1:
            playerInput = "PAPER";
            if (cpuInput = 1) {
                return "player wins!";
                playerScore++;
                } else if (cpuInput = 3) {
                    return "Computer Wins!"
                    computerScore++
                } else {
                    return "Tie! No points added";
                }
        break;

        case 2:
            playerInput = "SCISSORS";
            if (cpuInput = 2) {
                return "player wins!";
                playerScore++;
                } else if (cpuInput = 1) {
                    return "Computer Wins!"
                    computerScore++
                } else {
                    return "Tie! No points added";
                }
        break;
    }
}

RPS;
