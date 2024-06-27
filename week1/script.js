// Get the canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Set the game variables
let snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 }
];
let food = { x: 150, y: 150 };
let direction = 'right';
let score = 0;

// Draw the game board
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// Draw the snake
function drawSnake() {
    ctx.fillStyle = '#0f0';
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
    }
}

// Draw the food
function drawFood() {
    ctx.fillStyle = '#f00';
    ctx.fillRect(food.x, food.y, 10, 10);
}

// Update the game state
function updateGameState() {
    // Move the snake
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
    switch (direction) {
        case 'right':
            snake[0].x += 10;
            break;
        case 'left':
            snake[0].x -= 10;
            break;
        case 'up':
            snake[0].y -= 10;
            break;
        case 'down':
            snake[0].y += 10;
            break;
    }

    // Check for collisions with the wall or itself
    if (snake[0].x < 0 || snake[0].x > canvas.width - 10 || snake[0].y < 0 || snake[0].y > canvas.height - 10) {
        alert('Game Over! Your score is ' + score);
        return;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            alert('Game Over! Your score is ' + score);
            return;
        }
    }

    // Check for food collision
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        snake.push({ x: snake[snake.length - 1].x, y: snake[snake.length - 1].y });
        food = { x: Math.floor(Math.random() * (canvas.width - 10)), y: Math.floor(Math.random() * (canvas.height - 10)) };
    }
}

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            direction = 'right';
            break;
        case 'ArrowLeft':
            direction = 'left';
            break;
        case 'ArrowUp':
            direction = 'up';
            break;
        case 'ArrowDown':
            direction = 'down';
            break;
    }
});

// Main game loop
setInterval(() => {
    drawBoard();
    drawSnake();
    drawFood();
    updateGameState();
}, 100);