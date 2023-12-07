const computerChoiceDisplay = document.getElementById('rps-computer-choice')
const userChoiceDisplay = document.getElementById('rps-user-choice')
const resultDisplay = document.getElementById('rps-result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',
    (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = "ROCK"
    }
    if (randomNumber === 2) {
        computerChoice = "PAPER"
    }
    if (randomNumber === 3) {
        computerChoice = "SCISSORS"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = "It's a draw!"
    }
    if (computerChoice === "ROCK" && userChoice === "PAPER"){
        result = "You win!"
    }
    if (computerChoice === "ROCK" && userChoice === "SCISSORS"){
        result = "You lose"
    }
    if (computerChoice === "PAPER" && userChoice === "SCISSORS"){
        result = "You win!"
    }
    if (computerChoice === "PAPER" && userChoice === "ROCK"){
        result = "You lose"
    }
    if (computerChoice === "SCISSORS" && userChoice === "ROCK"){
        result = "You win!"
    }
    if (computerChoice === "SCISSORS" && userChoice === "PAPER"){
        result = "You lose"
    }
    resultDisplay.innerHTML = result
}
