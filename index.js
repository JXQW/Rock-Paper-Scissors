let playerInput;
let cpuInput;
let numGen;
let playerScore = 0;
let computerScore = 0;
let min = 1;
let max = 3;


numGen = Math.floor(Math.random() * (max - min + 1) + min);
cpuInput = numGen;

function RPS () {

    playerInput = prompt("Please enter rock, paper, or scissors.");
    switch (playerInput) {
        case 0:
            playerInput = "ROCK";
                if ((playerInput.toUpperCase()= "ROCK") && (cpuInput = "PAPER")) {
                return "player wins!";
                playerScore++;
        break;
        }

    }
}

RPS;
