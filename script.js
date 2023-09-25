const comScore = document.querySelector('.comScore')
const comChoice = document.querySelector('.comChoice')
const urScore = document.querySelector('.urScore')
const urChoice = document.querySelector('.urChoice')
const winner = document.querySelector('.announcement')

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




function playRound(playerSelect = prompt("Rock Paper Scissors?")){

    const computerSelection = getComputerChoice();

    if(playerSelect === computerSelection){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent = "Draw";
        return "draw";
    } else if (playerSelect === "Paper" && computerSelection === "Scissors"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent =`You lose ${computerSelection} beats ${playerSelect}`;
        urScore.textContent = Number(urScore.textContent) + 1;
        return "PlayerWin";
    } else if ( playerSelect === "Paper" && computerSelection === "Rock"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent =`You win ${playerSelect} beats ${computerSelection}`;
        urScore.textContent = Number(urScore.textContent) + 1;
        return "PlayerWin";
    }  else if ( playerSelect === "Scissors" && computerSelection === "Paper"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent =`You win ${playerSelect} beats ${computerSelection}`;
        urScore.textContent = Number(urScore.textContent) + 1;
        return "PlayerWin";
    } else if ( playerSelect === "Scissors" && computerSelection === "Rock"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent = `You lose ${computerSelection} beats ${playerSelect}`;
        comScore.textContent = Number(comScore.textContent) + 1;
        return "ComputerWin";
    } else if ( playerSelect === "Rock" && computerSelection === "Paper"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent = `You lose ${computerSelection} beats ${playerSelect}`;
        comScore.textContent =Number(comScore.textContent) + 1;
        return "ComputerWin";
    } else if ( playerSelect === "Rock" && computerSelection === "Scissors"){
        comChoice.textContent = `${computerSelection}`;
        winner.textContent =`You win ${playerSelect} beats ${computerSelection}`;
        comScore.textContent = Number(comScore.textContent) + 1;
        return "ComputerWin";
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

