// Get a reference to the canvas context
var canvas = document.getElementById('gameCanvas');
var context = canvas.getContext('2d');

// Pac-Man position and direction
var pacmanX = canvas.width / 2;
var pacmanY = canvas.height / 2;
var pacmanDirection = 'up';

// Key event listener
document.addEventListener('keydown', function(event) {
 if (event.keyCode == 37) {
    pacmanDirection = 'left';
 } else if (event.keyCode == 38) {
    pacmanDirection = 'up';
 } else if (event.keyCode == 39) {
    pacmanDirection = 'right';
 } else if (event.keyCode == 40) {
    pacmanDirection = 'down';
 }
});

// Update game logic
function update() {
 switch (pacmanDirection) {
    case 'left':
      pacmanX -= 2;
      break;
    case 'up':
      pacmanY -= 2;
      break;
    case 'right':
      pacmanX += 2;
      break;
    case 'down':
      pacmanY += 2;
      break;
 }
}

// Draw game objects
function draw() {
 context.clearRect(0, 0, canvas.width, canvas.height);

 // Draw Pac-Man
 context.beginPath();
 context.arc(pacmanX, pacmanY, 10, 0, Math.PI * 2, true);
 context.fillStyle = 'yellow';
 context.fill();
 context.closePath();
}

// Game loop
function gameLoop() {
 update();
 draw();
 requestAnimationFrame(gameLoop);
}

gameLoop();
