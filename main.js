function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ['rock 🪨', 'paper 📄', 'scissors ✂️'];
    return choices[getRandomInt(3)];
}

function determineWinner(p, c) { // p !== c
    if (p === "rock 🪨") {
        if (c === "paper 📄") {
            return c;
        } else {
            return p;
        }
    } else if (p === "paper 📄") {
        if (c === "rock 🪨") {
            return p;
        } else {
            return c;
        }
    } else {
        if (c === "paper 📄") {
            return p;
        } else {
            return c;
        }
    }
}

function playerWinOrLose(playerSelection, computerSelection) {
    if (determineWinner(playerSelection, computerSelection) === playerSelection) {
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    // let result;
    // let winningChoice;
    // let losingChoice;
    if (playerSelection === computerSelection) {
        // return `it's a tie! you both chose ${playerSelection}!`
        return "TIED"; // TIE
    } else if (playerWinOrLose(playerSelection, computerSelection)) {
        // result = "win";
        // winningChoice = playerSelection;
        // losingChoice = computerSelection;
        return "WON"; // PLAYER WINS
    } else {
        // result = "lose";
        // winningChoice = computerSelection;
        // losingChoice = playerSelection;
        return "LOST"; // COMPUTER WINS
    }
    // return `you ${result}! ${winningChoice} beats ${losingChoice}!`
}

function game() {
    const rockButton = document.querySelector("#rock-🪨");
    const paperButton = document.querySelector("#paper-📄");
    const scissorsButton = document.querySelector("#scissors-✂️");
    
    let playerScore = 0;
    let computerScore = 0;

    function playRoundHelper(event) {
        computerSelection = getComputerChoice();
        playerSelection = event.target.textContent;
        result = playRound(playerSelection, computerSelection);
        if (result === "TIED") {
            playerScore++;
            computerScore++;
            console.log(`---------------------------------\n${playerSelection} vs. ${computerSelection}. you ${result}!\nYOU ${playerScore} | COMPUTER ${computerScore}`)
        } else if (result === "WON") {
            playerScore++;
            console.log(`---------------------------------\n${playerSelection} vs. ${computerSelection}. you ${result}!\nYOU ${playerScore} | COMPUTER ${computerScore}`)
        } else {
            computerScore++;
            console.log(`---------------------------------\n${playerSelection} vs. ${computerSelection}. you ${result}!\nYOU ${playerScore} | COMPUTER ${computerScore}`)
        }
        var body = document.querySelector('body');
        document.body.removeChild(body.lastChild);
        if (playerScore == 5 && computerScore == 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            let h1 = document.createElement('h1');
            h1.style.cssText = "font-weight: bolder;"
            h1.textContent = "Y-YOU...TIED?🤨";
            document.body.appendChild(h1);
            let rematch = document.createElement('button');
            rematch.textContent = "REMATCH";
            rematch.style.cssText = "margin: 0 auto; display: block; alignfont-size: x-large; padding: 10px 15px; font-weight: bold;";
            rematch.addEventListener('click', function (e) {
                location.reload();
            });
            document.body.append(rematch);
        } else if (computerScore == 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            let h1 = document.createElement('h1');
            h1.style.cssText = "font-weight: bolder;"
            h1.textContent = "YOU LOST LMAO.💩";
            document.body.appendChild(h1);
            let h5 = document.createElement('h5');
            h5.style.cssText = "font-weight: bolder;"
            h5.textContent = `the final score was ${playerScore} to ${computerScore}.`;
            document.body.appendChild(h5);
            let rematch = document.createElement('button');
            rematch.textContent = "REMATCH";
            rematch.style.cssText = "font-size: x-large; padding: 10px 15px; font-weight: bold;";
            rematch.addEventListener('click', function (e) {
                location.reload();
            });
            document.body.append(rematch);
        } else if (playerScore == 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            let h1 = document.createElement('h1');
            h1.style.cssText = "font-weight: bolder; text-decoration: pink wavy underline;"
            h1.textContent = "YOU WON! YIPPEE!";
            document.body.appendChild(h1);
            let h5 = document.createElement('h5');
            h5.style.cssText = "font-weight: bolder;"
            h5.textContent = `the final score was ${playerScore} to ${computerScore}.`;
            document.body.appendChild(h5);
            let playAgainButton = document.createElement('button');
            playAgainButton.textContent = "play again";
            playAgainButton.style.cssText = "font-size: x-large; padding: 10px 15px; font-weight: bold;";
            playAgainButton.addEventListener('click', function (e) {
                location.reload();
            });
            document.body.append(playAgainButton);
        } else {
            let div = document.createElement('div');
            div.innerHTML = `<h3>${playerSelection} vs. ${computerSelection}.</h3>
                            <h3>you ${result} this round!</h3>
                            <h5>YOU: ${playerScore} | COMPUTER: ${computerScore}</h5>`
            div.style.fontWeight = "bolder";
            document.body.appendChild(div);
        }
    }
    rockButton.addEventListener('click', playRoundHelper);
    paperButton.addEventListener('click', playRoundHelper);
    scissorsButton.addEventListener('click', playRoundHelper);
}

game();
