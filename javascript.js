
function getComputerChoise(){
    let randomNumber = Math.floor (Math.random() * 9);
    if (randomNumber === 0 || randomNumber === 1 || randomNumber === 2){
        return "rock";
    } else if ( randomNumber === 3 || randomNumber === 4 || randomNumber === 5 ){
        return "paper";
    } else if ( randomNumber === 6 || randomNumber === 7 || randomNumber === 8 ){
        return "scissors";
 }
}



function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    if ( playerSelection === computerSelection ){
        return "ничья!"; 
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "Ты проиграл! Т.к ножницы бьют бумагу. ";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "Ты проиграл! Т.к камень бьет ножницы. ";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "Ты проиграл! Т.к бумага бьет камень. ";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "Ты выиграл! Т.к ножницы  бьют бумагу. ";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "Ты выиграл! Т.к бумага бьет камень. ";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "Ты выиграл! Т.к камень бьет ножницы. ";
    }
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i < 5 ; i++){
        let playerSelection=prompt("rock , paper, or scissors? ");
        let computerSelection=getComputerChoise();
        let result=playRound(playerSelection,computerSelection);
        console.log(result);
        if (result.includes("выиграл") ){
            playerScore++ ;
        } else if (result.includes("проиграл") ){
            computerScore++ ;
        } 
    }
    if (playerScore > computerScore){
        console.log("Ты выиграл игру!");
    } else if ( playerScore < computerScore){
        console.log("Ты проиграл игру!");
    } else {
        console.log("Ничья!");
    }
}
game()