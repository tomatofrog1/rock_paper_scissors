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
        console.log("Draw")
        // console.log(playerSelect);
        // console.log(computerSelection);
        return "draw"
    } else if (playerSelect === "Paper" && computerSelection === "Scissors"){
        console.log("Computer Wins")
        console.log(`You lose ${computerSelection} beats ${playerSelect}`)
        // console.log(playerSelect);
        // console.log(computerSelection);
        return "PlayerWin"
    } else if ( playerSelect === "Paper" && computerSelection === "Rock"){
        console.log("Player Win")
        console.log(`You win ${playerSelect} beats ${computerSelection}`)
        // console.log(playerSelect);
        // console.log(computerSelection);
        return "PlayerWin"
    }  else if ( playerSelect === "Scissors" && computerSelection === "Paper"){
        console.log("Player Win")
        console.log(`You win ${playerSelect} beats ${computerSelection}`)
        // console.log(playerSelect);
        // console.log(computerSelection);
        return "PlayerWin"
    } else if ( playerSelect === "Scissors" && computerSelection === "Rock"){
        console.log("Computer Win")
        console.log(`You lose ${computerSelection} beats ${playerSelect}`)
        // console.log(playerSelect);
        // console.log(computerSelection);
        return "ComputerWin"
    } else if ( playerSelect === "Rock" && computerSelection === "Paper"){
        console.log("Computer Win")
        console.log(`You lose ${computerSelection} beats ${playerSelect}`)
        // console.log(playerSelect);
        // console.log(computerSelection);
        return "ComputerWin"
    } else if ( playerSelect === "Rock" && computerSelection === "Scissors"){
        console.log("Player Win")
        console.log(`You win ${playerSelect} beats ${computerSelection}`)
        // console.log(playerSelect);
        // console.log(computerSelection);
        return "ComputerWin"
}

}


function game() {
    for (i = 0; i < 5; i++) {
        playRound()
        
        let playerScore = 0;
        let computerScore = 0;

        if(playRound === "PlayerWin"){
            playerScore += 1
        } else if (playRound === "ComputerWin"){
            computerScore += 1
        } else if (playRound === "draw"){
            playerScore += 1 
            computerScore += 1
        }
        console.log(playerScore)
    console.log(computerScore)
    }
    


}
        
    





// const computerSelection = "Paper"

// function playRound(playerSelection) {

//     if (playerSelection === "Rock" && computerSelection === "Paper" ){
//         console.log("You lose! Paper beats Rock")
//     }
//   }
   


// //   console.log(playRound(playerSelection, computerSelection));
