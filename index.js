function getComputerChoice () {
    let rand = Math.floor(Math.random() * 10);

    if(rand > 7) {
        return 'rock'
    } else if(rand > 3 & rand < 7) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt('Enter a number:'));

    if(isNaN(humanChoice)) {
        return getHumanChoice();
    }
    else {
        return humanChoice;
    }
}

const Weakness = Object.freeze({
    'rock': 'paper',
    'paper': 'scissor',
    'scissor': 'rock'
})

let playerScore = 0;
let cpuScore = 0;
let gameRound = 0;

function playRound (event) {
    humanChoice = event.target.id;
    let cpuChoice = getComputerChoice();
    if(gameRound < 5) {
        if(cpuChoice == humanChoice) {
            displayResults(humanChoice, cpuChoice);
        } else if(Weakness[cpuChoice] == humanChoice) {
            playerScore++;
            displayResults(humanChoice, cpuChoice);

        } else {
            displayResults(humanChoice, cpuChoice);
            cpuScore++
        }

    } else {
        endGame();
    }

 }

 function displayResults(humanChoice, cpuChoice) {
    gameRound++;

    document.getElementById('cpuChoice').innerHTML = cpuChoice;
    document.getElementById('humanChoice').innerHTML = humanChoice

    document.getElementById('round').innerHTML = gameRound;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('cpuScore').innerHTML = cpuScore;

 }

 function endGame() {
    document.getElementsByClassName('choice-container')[0].classList.add('end-game');
    document.querySelectorAll('.choice-container button').forEach((el) => {
        el.setAttribute('disabled', true)
        document.getElementById('reset').classList.add('show');
    })
    let resultDOM = document.getElementById('result');
    if(playerScore > cpuScore) {
        resultDOM.innerHTML = 'PLAYER WINS';
    } else if (playerScore < cpuScore) {
        resultDOM.innerHTML = 'CPU WINS';
    } else {
        resultDOM.innerHTML = `IT'S A TIE`;
    }
 }

 function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    gameRound = 0;

    document.querySelectorAll('.choice-container button').forEach((el) => {
        el.setAttribute('disabled', false)
        document.getElementById('reset').classList.remove('show');
    });

    document.getElementById('cpuChoice').innerHTML = '';
    document.getElementById('humanChoice').innerHTML = ''

    document.getElementById('round').innerHTML = '';
    document.getElementById('playerScore').innerHTML = '';
    document.getElementById('cpuScore').innerHTML = '';
    document.getElementById('result').innerHTML = '';
 }