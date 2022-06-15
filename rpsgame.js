
function computerPlay() {
    //randomly return rock, paper or scissor
    ranNum = Math.floor(Math.random() * 4);

    if (ranNum <= 1) {
        return "rock";
    } else if (ranNum <= 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    //needs to take 2 parameters: playerSelection & computerSelection
    //then return a string that declares winner of the round

    //make playerSelection case insensitive
    playerInput = playerSelection.toLowerCase();

    if (playerInput === "rock") {
        if (computerSelection === "rock") {
            return "draw";
        }
        else if (computerSelection === "scissor") {
            return "Rock beats scissor. You win!";
        }
        else if (computerSelection === "paper") {
            return "Paper beats rock. You lose!"
        }
    }
    else if (playerInput === "scissor") {
        if (computerSelection === "rock") {
            return "Rock beats scissor. You lose!";
        }
        else if (computerSelection === "scissor") {
            return "Draw!";
        }
        else if (computerSelection === "paper") {
            return "Scissor beats paper. You win!"
        }
    }
    else if (playerInput === "paper") {
        if (computerSelection === "rock") {
            return "Paper beats rock. You win!";
        }
        else if (computerSelection === "scissor") {
            return "Scissor beats paper. You lose!";
        }
        else if (computerSelection === "paper") {
            return "Draw!"
        }
    }
    else {
        return "invalid input"
    }

}

/* const playerSelection = "ScissoR";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */
const computerSelection = computerPlay();
let playerSelection = prompt("What do you choose?", "Rock, paper or scissor?");
console.log(playRound(playerSelection, computerSelection));



function game() {
  
    //call playRound()
    //play 5 rounds 
    //for loop
    //console.log result of each round
    //track score
    //report a winner or loser at the end


    for (let i = 0; i < 5; i++) {
        
        // your code here!
     }

}

