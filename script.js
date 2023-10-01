const laro = document.querySelector('.game')
const comScore = document.querySelector('.comScore')
const comChoice = document.querySelector('.comChoice')
const urScore = document.querySelector('.urScore')
const urChoice = document.querySelector('.urChoice')
const winner = document.querySelector('.announcement')
const playGame = document.querySelector('.play')

laro.style.visibility = 'hidden'

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return ("Scissors")
    } else if (choice === 2) {
        return ("Rock")
    } else {
        return("Paper")
    }
}

let uScore = 0;
let cScore = 0;

const reset = function() {
    urScore.textContent = '0';
    comScore.textContent = '0';
    uScore = 0;
    cScore = 0;
}

const game = function () {
    if (uScore == 5) {
        alert('You win');
        reset();
        laro.style.visibility = 'hidden';
        playGame.style.visibility = 'visible'
    } else if (cScore == 5) {
        alert('You Lose');
        reset();
        laro.style.visibility = 'hidden';
        playGame.style.visibility = 'visible'
    }
}



function playRound(playerSelect = prompt("Rock Paper Scissors?")){

    game();
    
    const computerSelection = getComputerChoice();

    if(playerSelect === computerSelection){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent = "Draw";
    } else if (playerSelect === "Paper" && computerSelection === "Scissors"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent =`You lose ${computerSelection} beats ${playerSelect}`;
        comScore.textContent = Number(comScore.textContent) + 1;
        cScore +=1;
    } else if ( playerSelect === "Paper" && computerSelection === "Rock"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent =`You win ${playerSelect} beats ${computerSelection}`;
        urScore.textContent = Number(urScore.textContent) + 1;
        uScore +=1;
    }  else if ( playerSelect === "Scissors" && computerSelection === "Paper"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent =`You win ${playerSelect} beats ${computerSelection}`;
        urScore.textContent = Number(urScore.textContent) + 1;
        uScore +=1;
    } else if ( playerSelect === "Scissors" && computerSelection === "Rock"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent = `You lose ${computerSelection} beats ${playerSelect}`;
        comScore.textContent = Number(comScore.textContent) + 1;
        cScore +=1;
    } else if ( playerSelect === "Rock" && computerSelection === "Paper"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent = `You lose ${computerSelection} beats ${playerSelect}`;
        comScore.textContent =Number(comScore.textContent) + 1;
        cScore +=1;
    } else if ( playerSelect === "Rock" && computerSelection === "Scissors"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent =`You win ${playerSelect} beats ${computerSelection}`;
        urScore.textContent = Number(urScore.textContent) + 1;
        uScore +=1;
}



}

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

rock.addEventListener('click', () => {
    urChoice.textContent = "Rock"
  playRound("Rock")
});
paper.addEventListener('click', () => {
    urChoice.textContent = "Paper"
  playRound("Paper")
});
scissors.addEventListener('click', () => {
    urChoice.textContent = "Scissors"
  playRound("Scissors")
});
playGame.addEventListener('click', () => {
    laro.style.visibility = 'visible'
    playGame.style.visibility = 'hidden'
});








