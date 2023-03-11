const gameChoices = ['rock','paper','scissors']
const messages = {
    nameInput: "You just entered the Rock Paper Scissor game.\nWhat is your name?",
    moveInput: "Type in your move.\nChoose between: Rock or Paper or Scissors",
    invalidInput: "Your input was not valid.\nChoose between: Rock or Paper or Scissors",
    exitMatch: "Do you want to leave this match?\n\nIf you want to continue type NO\nIf you want to exit, click on the OK or Cancel button",
    exitGame: "See you later!",
    restart: "Do you want to restart the game?\n\nType Yes or press Enter to play again\nType No or click on the Cancel button to exit",
    win: "Congratulations! You won :)",
    lose: "Better luck next time! You lose :(",
    draw: "No one wins, It's a Draw!",
}

function runGame(){
    let rematch = true
    let playerName = prompt(messages.nameInput)
    playerName = checkNameInput(playerName)
    
    alert(`Welcome ${playerName}!\nClick on 'OK' or press ENTER to start the game.`)
    while (rematch === true){
        runMatch()
        playerRematch = prompt(messages.restart)
        if (!checkRematchAttempt(playerRematch)) rematch = false  
    }
    alert(messages.exitGame)
}

function runMatch(){
    let computer = {selection:'', score: 0}
    let player = {selection:'', score: 0}
    
    for(let round = 0; round < 5; round++){
        let roundsLeft = 4-round

        player.selection = playerPlay(0)
        while (true){
            if (checkUserInput(player.selection) === 'exit'){
                let userInput = prompt(messages.exitMatch)
                if(checkExitAttempt(userInput)){
                    return
                } 
                else{
                    player.selection = playerPlay(0)
                    continue
                }
            }

            if (checkUserInput(player.selection))
                break
            else{
                player.selection = playerPlay(1)
            }
        }
        
        computer.selection = computerPLay()
        alert(`${playRound(player, computer)}\nYou have ${roundsLeft} rounds left.`)

    }
    alert(printFinalResult(player.score,computer.score))
}

function computerPLay(){
    let randomIndex = (Math.random() * 2).toFixed(0)
    return gameChoices[randomIndex]
}

function playerPlay(attempt){
    let userInput
    if (attempt){
        userInput = prompt(messages.invalidInput)
        return (userInput != null ? userInput.toLowerCase(): 'empty')
    }
    userInput = prompt(messages.moveInput)
    return (userInput != null ? userInput.toLowerCase(): 'empty')
}

function checkNameInput(input){
    let validNameRegex = /^([a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+[,.]?[ ]?|[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+['-]?)+$/i
    if (validNameRegex.test(input) && input != null)
        return input.toLowerCase()
    else return 'Anonymous'
}

function checkUserInput(input){
    if (input == 'empty')
        return 'exit'
    else if (gameChoices.includes(input)){
        return true
    }
    else return false
}

function checkExitAttempt(input){
    if (input == null)
        return true
    else if (input.toLowerCase() == 'no'){
        return false
    }
    else return true
}

function checkRematchAttempt(input){
    if (input == null)
        return false
    else if (input.toLowerCase() == 'no'){
        return false
    }
    else return true
}

function playRound(player,computer){
    if (player.selection === computer.selection){
        return `It's a Draw!\n${computer.selection} <-> ${player.selection}`
    }
    else if((player.selection === 'rock' && computer.selection === 'paper') ||
            (player.selection === 'paper' && computer.selection === 'scissors') ||
            (player.selection === 'scissors' && computer.selection === 'rock')){
        computer.score += 1
        return `You Lose!\n${computer.selection} beats ${player.selection}`
    }
    else {
        player.score += 1
        return `You Win!\n${player.selection} beats ${computer.selection}`
    }
}

function printFinalResult(playerScore,computerScore){
    let result
    if (playerScore > computerScore){
        result = messages.win
    }
    else if(playerScore < computerScore){
        result = messages.lose
    }
    else{
        result = messages.draw
    }
    return `${result}\nYour Final Score: ${playerScore}\nComputer Final Score: ${computerScore}`
}

runGame()
