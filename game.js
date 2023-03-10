const gameChoices = ['rock','paper','scissors']
const messages = {
    welcome: "Welcome to the Rock Paper Scissors game!\nClick on 'OK' or press ENTER to start.",
    nameInput: "You just entered the Rock Paper Scissor game.\n¿What is your name?",
    exitCheck: "Do you want to exit the game?\n\nIf you want to continue type NO\nIf you want to exit, click on the OK or Cancel button",
    exit: "See you later",
    input: "Type in your move.\nChoose between: Rock or Paper or Scissors",
    invalidInput: "Your input was not valid.\nChoose between: Rock or Paper or Scissors",
    win: "Congratulations! You won :)",
    lose: "Better luck next time! You lose :(",
    draw: "No one wins, It's a Draw!",
}

let name = prompt(messages.nameInput)
name = checkNameInput(name)

function checkNameInput (input){
    let validNameRegex = /^([a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+[,.]?[ ]?|[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+['-]?)+$/i
    if (validNameRegex.test(input) && input != null)
        return input.toLowerCase()
    else return 'Anonymous'
}

function runGame(){
    let computer = {selection:'', score: 0}
    let player = {selection:'', score: 0}
    
    alert(`Welcome ${name}!\nClick on 'OK' or press ENTER to start the game.`) 

    for(let round = 0; round < 5; round++){
        let roundsLeft = 4-round

        player.selection = playerPlay(0)
        while (true){
            if (checkUserInput(player.selection) === 'exit'){
                let userInput = prompt(messages.exitCheck)
                if(checkExitAttempt(userInput)){
                    return alert(messages.exit)
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
    userInput = prompt(messages.input)
    return (userInput != null ? userInput.toLowerCase(): 'empty')
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
