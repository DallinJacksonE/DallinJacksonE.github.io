const grid = document.querySelector('.grid')

let currentShooterIndex = 202
let width = 15
for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 23, 25, 26,
    30, 33, 34, 35, 36, 37, 38
]

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
    }

}

draw()

squares[currentShooterIndex].classList.add('shooter')

function moveShooter (e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -=1
            break
        case 'ArrowRight':
            if (currentShooterIndex % width < width -1) currentShooterIndex +=1
            break
        case 'ArrowUp':
            if (currentShooterIndex - 15 > 150) currentShooterIndex -=15
            break
        case 'ArrowDown':
            if (currentShooterIndex + 15 < 225) currentShooterIndex +=15
            break
    }
    squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', moveShooter)

function moveInvaders () {
    const leftEdge = alienInvaders[0] % 0 === 0
}