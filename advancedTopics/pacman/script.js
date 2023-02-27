var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 5, 2, 2, 2],
    [2, 1, 5, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 2, 2, 2, 2, 5, 2, 2, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 5, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]
var score = 0
var score2 = 0
var pacman = {
    x: 1,
    y: 1
}
var posGhost = {
    x: 8,
    y: 5
}

var pacwoman = {
    x: 14,
    y: 11
}

var avatar = document.getElementById('pacman')
var avatar2 = document.getElementById('pacwoman')
var ghost = document.getElementById('ghost')

var maxScore = 0
var totalScore = 0
for(var i = 0; i < world.length; i++){
    for(var j = 0; j < world[i].length; j++){
        if(world[i][j] == 1 || world[i][j] == 5){
            maxScore = maxScore + (world[i][j] * 10)
            // console.log(maxScore)
        }
    }
}

function displayScore() {
    document.getElementById('score').innerText = score
    document.getElementById('score2').innerText = score2
}

function displayWorld() {
    var output = ''
    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>"
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>"
            }
            if (world[i][j] == 1) {
                output += "<div class='coin'></div>"
            }
            if (world[i][j] == 5) {
                output += "<div class='cherry'></div>"
            }
            if (world[i][j] == 0) {
                output += "<div class='empty'></div>"
            }
        }
        output += "\n</div>"
        // console.log(output)
        document.querySelector('#pacworld').innerHTML = output
    }
}

displayWorld()

setInterval(function () {
    var randomPos = Math.floor(Math.random() * 4)
    // console.log(randomPos)
    if (randomPos == 0 && world[posGhost.y][posGhost.x - 1] != 2) {
        posGhost.x -= 1
    }
    if (randomPos == 1 && world[posGhost.y][posGhost.x + 1] != 2) {
        posGhost.x += 1
    }
    if (randomPos == 2 && world[posGhost.y - 1][posGhost.x] != 2) {
        posGhost.y -= 1
    }
    if (randomPos == 3 && world[posGhost.y + 1][posGhost.x] != 2) {
        posGhost.y += 1
    }
    displayPacman()
    document.onkeydown = function (e) {
        // console.log(e.keyCode)
        if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
            pacman.x -= 1
            avatar.style.transform = 'rotate(180deg)'
        }
        else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
            pacman.x += 1
            avatar.style.transform = 'rotate(0deg)'
        }
        if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
            pacman.y -= 1
            avatar.style.transform = 'rotate(270deg)'
        }
        else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
            pacman.y += 1
            avatar.style.transform = 'rotate(90deg)'
        }
        if (world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0
            score += 10
            totalScore += 10
            // console.log(score)
            displayWorld()
            displayScore()
        }
        if (world[pacman.y][pacman.x] == 5) {
            world[pacman.y][pacman.x] = 0
            score += 50
            totalScore += 50
            // console.log(score)
            displayWorld()
            displayScore()
        }
        if (pacman.x == posGhost.x && pacman.y == posGhost.y) {
            alert("Game Over!")
            document.location.reload()
        }
        if (e.keyCode == 65 && world[pacwoman.y][pacwoman.x - 1] != 2) {
            pacwoman.x -= 1
            avatar2.style.transform = 'scaleX(1)'
        }
        else if (e.keyCode == 68 && world[pacwoman.y][pacwoman.x + 1] != 2) {
            pacwoman.x += 1
            avatar2.style.transform = 'scaleX(-1)'
        }
        if (e.keyCode == 87 && world[pacwoman.y - 1][pacwoman.x] != 2) {
            pacwoman.y -= 1
            avatar2.style.transform = 'rotate(90deg)'
        }
        else if (e.keyCode == 83 && world[pacwoman.y + 1][pacwoman.x] != 2) {
            pacwoman.y += 1
            avatar2.style.transform = 'rotate(270deg)'
        }
        if (world[pacwoman.y][pacwoman.x] == 1) {
            world[pacwoman.y][pacwoman.x] = 0
            score2 += 10
            totalScore += 10
            // console.log(score)
            displayWorld()
            displayScore()
        }
        if (world[pacwoman.y][pacwoman.x] == 5) {
            world[pacwoman.y][pacwoman.x] = 0
            score2 += 50
            totalScore += 50
            // console.log(totalScore)
            displayWorld()
            displayScore()
        }
        if (pacwoman.x == posGhost.x && pacwoman.y == posGhost.y) {
            alert("Game Over!")
            document.location.reload()
        }
        if(totalScore == maxScore){
            if(score > score2){
                alert('Player 1 Wins!')
            }
            if(score < score2){
                alert('Player 2 Wins!')
            }
            if(score == score2){
                alert('You both win!')
            }
            document.location.reload()
        }
        displayPacman()
    }
    if (pacwoman.x == posGhost.x && pacwoman.y == posGhost.y) {
        alert("Game Over!")
        document.location.reload()
    }
    if (pacman.x == posGhost.x && pacman.y == posGhost.y) {
        alert("Game Over!")
        document.location.reload()
    }
}, 300)



function displayPacman() {
    avatar.style.top = pacman.y * 20 + 'px'
    avatar.style.left = pacman.x * 20 + 'px'
    ghost.style.top = posGhost.y * 20 + 'px'
    ghost.style.left = posGhost.x * 20 + 'px'
    avatar2.style.top = pacwoman.y * 20 + 'px'
    avatar2.style.left = pacwoman.x * 20 + 'px'
}