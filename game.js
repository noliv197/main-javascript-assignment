const gameChoices = ['rock','paper','scissors']

function runGame(){
    let computer = {selection:'', score: 0}
    let player = {selection:'', score: 0}
    
    alert(`Welcome to the Rock Paper Scissors game!\nClick on 'OK' or press ENTER to start`)
    
    for(let i = 0; i < 5; i++){
        player.selection = playerPlay(0)
        while (true){
            if (checkUserInput(player.selection))
                break
            else{
                player.selection = playerPlay(1)
            }
        }
        
        computer.selection = computerPLay()
        alert(playRound(player, computer))
    }
    alert(printFinalResult(player.score,computer.score))
}

function computerPLay(){
    let randomIndex = (Math.random() * 2).toFixed(0)
    return gameChoices[randomIndex]
}

function playerPlay(first){
    let userInput
    if (first){
        userInput = prompt("Your input was not valid. Choose between:\nRock or Paper or Scissors")
        return (userInput != null ? userInput.toLowerCase(): 'empty')
    }
    userInput = prompt("Choose your move\nRock Paper Scissors")
    return (userInput != null ? userInput.toLowerCase(): 'empty')
}

function checkUserInput(input){
    if (gameChoices.includes(input)){
        return true
    }
    return false
}

function playRound(player,computer){
    if (player.selection === computer.selection){
        return `It's a Draw!\n${computer.selection} <-> ${player.selection}`
    }
    else if(player.selection === 'rock' && computer.selection === 'paper'){
        computer.score += 1
        return `You Lose!\nPaper beats Rock`
    }
    else if(player.selection === 'rock' && computer.selection === 'scissors'){
        player.score += 1
        return `You Win!\nRock beats Scissors`
    }
    else if(player.selection === 'paper' && computer.selection === 'scissors'){
        computer.score += 1
        return `You Lose!\nScissors beats Paper`
    }
    else if(player.selection === 'paper' && computer.selection === 'rock'){
        player.score += 1
        return `You Win!\nPaper beats Rock`
    }
    else if(player.selection === 'scissors' && computer.selection === 'rock'){
        computer.score += 1
        return `You Lose!\nRock beats Scissors`
    }
    else {
        player.score += 1
        return `You Win!\nScissors beats Paper`
    }
}

function printFinalResult(playerScore,computerScore){
    let result
    if (playerScore > computerScore){
        result = "Congratulations! You won :)"
    }
    else if(playerScore < computerScore){
        result = "Better luck next time! You lose :("
    }
    else{
        result = "No one wins, It's a Draw!"
    }
    return `${result}\nYour Final Score x Computer Final Score\n${playerScore} x ${computerScore}`
}

runGame()

