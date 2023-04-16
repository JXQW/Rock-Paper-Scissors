let playerInput;
let cpuInput;
let numGen;
let playerScore;
let computerScore;
let min = 1;
let max = 3;


numGen = Math.floor(Math.random() * (max - min + 1) + min);
cpuInput = numGen;

function RPS () {



    playerInput = prompt("PLease enter rock, paper, or scissors.");
    if ((playerInput.toUpperCase()= "ROCK") && (cpuInput = "PAPER")) {
        return "player wins!";
        playerScore++;
    }
}

RPS;
