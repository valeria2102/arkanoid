const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

//configracion para la bola
let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

//configuración de la pala
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

//Controles de la pala
let rightPressed = false;
let lefPressed = false;

// Configuración de los ladrillos
let brickRowCount = 5;
let brickColumCount = 9;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks = [];
for (let c = 0; c < brickColumCount; c++) {
    bricks[c];
    for(let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}

// Manejo de Eventos para la pala
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true; 
    }
}

function keyUpHandler (e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function collisionDetection() {
    for (let c = 0; c < brickColumCount; c++){
        for (let r = 0; r <brickRowCount; r++){
            let b = bricks[c][r];
            if (b.status == 1) {
                if (
                    x > b.x &&
                    x < b.x + brickWidth &&
                    y > b.y &&
                    y < b.y + brickHeight
                ){
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (let c = 0; c < brickColumCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            document.location.reload();
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();



const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Configuración de la bola
let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

// Configuración de la pala
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

// Controles de la pala
let rightPressed = false;
let leftPressed = false;

// Configuración de los ladrillos
let brickRowCount = 5;
let brickColumnCount = 9;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 }; 
                    }
                    }

                    // Manejo de eventos para la pala
                    document.addEventListener("keydown", keyDownHandler, false);
                    document.addEventListener("keyup", keyUpHandler, false);

                    function keyDownHandler(e) {
                        if (e.key === "Right" || e.key === "ArrowRight") {
                                rightPressed = true;
                                    } else if (e.key === "Left" || e.key === "ArrowLeft") {
                                            leftPressed = true;
                                                }
                                                }

                                                function keyUpHandler(e) {
                                                    if (e.key === "Right" || e.key === "ArrowRight") {
                                                            rightPressed = false;
                                                                } else if (e.key === "Left" || e.key === "ArrowLeft") {
                                                                        leftPressed = false;
                                                                            }
                                                                            }

                                                                            function collisionDetection() {
                                                                                for (let c = 0; c < brickColumnCount; c++) {
                                                                                        for (let r = 0; r < brickRowCount; r++) {
                                                                                                    let b = bricks[c][r];
                                                                                                                if (b.status === 1) {
                                                                                                                                if (
                                                                                                                                                    x > b.x &&
                                                                                                                                                                        x < b.x + brickWidth &&
                                                                                                                                                                                            y > b.y &&
                                                                                                                                                                                                                y < b.y + brickHeight
                                                                                                                                                                                                                                ) {
                                                                                                                                                                                                                                                    dy = -dy;
                                                                                                                                                                                                                                                                        b.status = 0;
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                function drawBall() {
                                                                                                                                                                                                                                                                                                                    ctx.beginPath();
                                                                                                                                                                                                                                                                                                                        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
                                                                                                                                                                                                                                                                                                                            ctx.fillStyle = "#0095DD";
                                                                                                                                                                                                                                                                                                                                ctx.fill();
                                                                                                                                                                                                                                                                                                                                    ctx.closePath();
                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                    function drawPaddle() {
                                                                                                                                                                                                                                                                                                                                        ctx.beginPath();
                                                                                                                                                                                                                                                                                                                                            ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
                                                                                                                                                                                                                                                                                                                                                ctx.fillStyle = "#0095DD";
                                                                                                                                                                                                                                                                                                                                                    ctx.fill();
                                                                                                                                                                                                                                                                                                                                                        ctx.closePath();
                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                        function drawBricks() {
                                                                                                                                                                                                                                                                                                                                                            for (let c = 0; c < brickColumnCount; c++) {
                                                                                                                                                                                                                                                                                                                                                                    for (let r = 0; r < brickRowCount; r++) {
                                                                                                                                                                                                                                                                                                                                                                                if (bricks[c][r].status === 1) {
                                                                                                                                                                                                                                                                                                                                                                                                let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                                                                                                                                                                                                                                                                                                                                                                                                                let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                                                                                                                                                                                                                                                                                                                                                                                                                                bricks[c][r].x = brickX;
                                                                                                                                                                                                                                                                                                                                                                                                                                                bricks[c][r].y = brickY;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                ctx.beginPath();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ctx.fillStyle = "#0095DD";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ctx.fill();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ctx.closePath();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        function draw() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                drawBricks();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    drawBall();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        drawPaddle();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            collisionDetection();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        dx = -dx;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if (y + dy < ballRadius) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        dy = -dy;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            } else if (y + dy > canvas.height - ballRadius) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (x > paddleX && x < paddleX + paddleWidth) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                dy = -dy;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    document.location.reload();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    if (rightPressed && paddleX < canvas.width - paddleWidth) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            paddleX += 7;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                } else if (leftPressed && paddleX > 0) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        paddleX -= 7;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                x += dx;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    y += dy;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        requestAnimationFrame(draw);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        draw();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        