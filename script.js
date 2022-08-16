
function getComputerChoice() { //generates random resoult for computer 
    let random = Math.floor(Math.random() * 3) + 1;
    
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (playerChoice = prompt("rock, paper, scissors?"), computer = getComputerChoice()) {
    
    lowercaseRes = playerChoice.toLowerCase();

    console.log("You play: " + lowercaseRes);
    console.log("computer plays: " + computer);

    if (lowercaseRes === computer) {
        return "It's a tie";
    } else if (lowercaseRes === "rock" && computer === "scissors") {
        return "you won!";
    } else if (lowercaseRes === "paper" && computer === "rock") {
        return "you won!";
    } else if (lowercaseRes === "scissors" && computer === "paper") {
        return "you won!";
    } else {
        return "you loose!"
    }

}

