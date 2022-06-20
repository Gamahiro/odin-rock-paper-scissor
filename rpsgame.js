const results = document.getElementById("results");

const buttons = document.querySelectorAll('button');

const roundResult = document.createElement('p');

const showComputerSelection = document.createElement('p');

const showPlayerSelection = document.createElement('p');

const gameScore = document.createElement('p');

const roundScore = document.createElement('p');

const btnPlay = document.querySelector('#btnPlay');
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissor = document.querySelector('#btnScissor');



let playerScore;
let botScore;








///////////////////////////////////////////////////////////////////////////




function computerPlay() {
    //randomly return rock, paper or scissor
    ranNum = Math.floor(Math.random() * 4);

    if (ranNum <= 1) {
        showComputerSelection.textContent = "Bot chose rock!";
        return "rock";
    } else if (ranNum <= 2) {
        showComputerSelection.textContent = "Bot chose paper!";
        return "paper";
    } else {
        showComputerSelection.textContent = "Bot chose scissor!";
        return "scissor";
    }
}

function disableRPSButtons() {
    btnRock.removeEventListener('click', playRound);
    btnPaper.removeEventListener('click', playRound);
    btnScissor.removeEventListener('click', playRound);
    btnRock.style.display = "none";
    btnPaper.style.display = "none";
    btnScissor.style.display = "none";
}

function gameOver() {
    disableRPSButtons();
    results.appendChild(gameScore);
    if (playerScore > botScore) {
        gameScore.textContent = "YOU WON THE GAME!";
    }
    else if (playerScore < botScore) {
        gameScore.textContent = "YOU LOST THE GAME!";
    }
    btnPlay.addEventListener('click', game);
    btnPlay.style.display = "block";
}




//matches playerSelection to computerSelection and declares a winner
function playRound(playerSelection) {
    playerSelection = this.id;

    computerSelection = computerPlay();

    if (playerSelection === "btnRock") {
        showPlayerSelection.textContent = "You chose rock!";
        console.log(playerScore + " " + botScore);
        if (computerSelection === "rock") {
            roundResult.textContent = "draw";
        }
        else if (computerSelection === "scissor") {
            playerScore++;
            roundResult.textContent = "Rock beats scissor. You win!";
            if (playerScore >= 5) {
                gameOver();
            }
        }
        else if (computerSelection === "paper") {
            botScore++;
            roundResult.textContent = "Paper beats rock. You lose!"
            if (botScore >= 5) {
                gameOver();
            }
        }

    }

    else if (playerSelection === "btnScissor") {
        showPlayerSelection.textContent = "You chose scissor!";
        if (computerSelection === "rock") {
            botScore++;
            roundResult.textContent = "Rock beats scissor. You lose!";
            if (botScore >= 5) {
                gameOver();
            }
        }
        else if (computerSelection === "scissor") {
            roundResult.textContent = "Draw!";
        }
        else if (computerSelection === "paper") {
            playerScore++;
            roundResult.textContent = "Scissor beats paper. You win!"
            if (playerScore >= 5) {
                gameOver();
            }
        }
    }

    else if (playerSelection === "btnPaper") {
        showPlayerSelection.textContent = "You chose paper!";
        if (computerSelection === "rock") {
            playerScore++;
            roundResult.textContent = "Paper beats rock. You win!";
            if (playerScore >= 5) {
                gameOver();
            }
        }
        else if (computerSelection === "scissor") {
            botScore++;
            roundResult.textContent = "Scissor beats paper. You lose!";
            if (botScore >= 5) {
                gameOver();
            }
        }
        else if (computerSelection === "paper") {
            roundResult.textContent = "Draw!"
        }
    }
    roundScore.textContent = "Player " + playerScore + " - " + botScore + " Bot";
}



//enable rps buttons

function game() {
    console.log("game activated");

    btnPlay.removeEventListener('click', game);
    btnPlay.style.display = "none";
    btnRock.style.display = "block";
    btnPaper.style.display = "block";
    btnScissor.style.display = "block";

    playerScore = 0;
    botScore = 0;
    roundScore.textContent = "Player " + playerScore + " - " + botScore + " Bot";
    showPlayerSelection.textContent = "";
    gameScore.textContent = "";
    roundResult.textContent = "";
    showComputerSelection.textContent = "";


    results.appendChild(roundScore);
    results.appendChild(showPlayerSelection);
    results.appendChild(showComputerSelection);
    results.appendChild(roundResult);


    btnRock.addEventListener('click', playRound);
    btnPaper.addEventListener('click', playRound);
    btnScissor.addEventListener('click', playRound);

}


btnPlay.addEventListener('click', game);
btnRock.style.display = "none";
btnPaper.style.display = "none";
btnScissor.style.display = "none";
