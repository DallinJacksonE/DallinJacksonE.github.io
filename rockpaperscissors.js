const computerChoiceDisplay = document.getElementById('rps-computer-choice')
const userChoiceDisplay = document.getElementById('rps-user-choice')
const resultDisplay = document.getElementById('rps-result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let computerChoiceVal
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',
    (e) => {
    userChoice = e.target.id
    if (userChoice === "ROCK") {
        userChoice = "🪨"
    }
    if (userChoice === "PAPER") {
        userChoice = "🧻"
    }
    if (userChoice === "SCISSORS") {
        userChoice = "✂"
    }
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = "🪨"
    }
    if (randomNumber === 2) {
        computerChoice = "🧻"
    }
    if (randomNumber === 3) {
        computerChoice = "✂"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = "It's a draw!"
    }
    if (computerChoice === "🪨" && userChoice === "🧻"){
        result = "You win!"
    }
    if (computerChoice === "🪨" && userChoice === "✂"){
        result = "You lose"
    }
    if (computerChoice === "🧻" && userChoice === "✂"){
        result = "You win!"
    }
    if (computerChoice === "🧻" && userChoice === "🪨"){
        result = "You lose"
    }
    if (computerChoice === "✂" && userChoice === "🪨"){
        result = "You win!"
    }
    if (computerChoice === "✂" && userChoice === "🧻"){
        result = "You lose"
    }
    resultDisplay.innerHTML = result
}
