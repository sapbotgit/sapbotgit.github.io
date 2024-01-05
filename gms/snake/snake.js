var dotSize = 20;
var gameBoardSize = 400;
var direction = 'right';
var snake = [{ top: 0, left: 0 }];
var apple = null;

function updateGameBoard() {
    var gameBoard = document.getElementById('game-board');

    // clear out the old snake
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }

    // draw the new snake
    snake.forEach(function(dot) {
        var dotElement = document.createElement('div');
        dotElement.className = 'dot';
        dotElement.style.top = `${dot.top}px`;
        dotElement.style.left = `${dot.left}px`;
        gameBoard.appendChild(dotElement);
    });

    // draw the apple
    if (apple === null) {
        apple = { top: 20, left: 20 };
    }
    var appleElement = document.createElement('div');
    appleElement.className = 'apple';
    appleElement.style.top = `${apple.top}px`;
    appleElement.style.left = `${apple.left}px`;
    gameBoard.appendChild(appleElement);
}

function updateSnake() {
    var head = Object.assign({}, snake[0]); // copy head
    if (direction === 'right') head.left += dotSize;
    if (direction === 'down') head.top += dotSize;
    if (direction === 'left') head.left -= dotSize;
    if (direction === 'up') head.top -= dotSize;
    snake.unshift(head); // add new head to snake

    if (apple !== null && apple.top === head.top && apple.left === head.left) {
        apple = null; // eat the apple
    } else {
        snake.pop(); // remove tail
    }
}

function handleKey(event) {
    if (event.key === 'ArrowUp') direction = 'up';
    if (event.key === 'ArrowDown') direction = 'down';
    if (event.key === 'ArrowRight') direction = 'right';
    if (event.key === 'ArrowLeft') direction = 'left';
}

setInterval(function() {
    updateSnake();
    updateGameBoard();
}, 200);

window.addEventListener('keydown', handleKey);
