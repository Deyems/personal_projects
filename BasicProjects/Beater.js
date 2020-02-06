
window.addEventListener("load",init);

// SCRIPTING THE GAME

//DOM ELEMENTS
let wordInput = document.querySelector("#word-input");
let currentWord = document.querySelector("#current-word");
let timeLeft = document.querySelector("#leftTime");
let scores = document.querySelector("#score");
let message = document.querySelector('#message');
let givenTime = document.querySelector('#timeAlloted');
var counter = 5;
var isPlaying;
var score = 0;

var words = [
    "River","Plantain","Banana","Formidable","Wonderful","Cocktail","Nutrition","Revolver"
];

// Initialize Game
function init(){
    RandomWord = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[RandomWord];
    
    // Start Matching on word Input
    wordInput.addEventListener('input',startMatch);


    //Call Countdown every second
    setInterval(countdown, 1000);
    
    //CHeck Game Status
    setInterval(checkStatus,50);
    
    //let typedW = wordInput.value;
}


// Start Match function
function startMatch() {
    if(matchWords()){
        console.log('there is MATCH');
    }
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true;
    } else{
        message.innerHTML  = '';
        return false;
    }
}


//Countdown Function
function countdown(){
    if(counter > 0){
        counter--;
    timeLeft.innerHTML = counter;
    } else if(counter===0){
        isPlaying == false;
        clearInterval(countdown);
        //clearTimeout(countdown);
        timeLeft.innerHTML = '';
    }
    console.log(counter);
}

function checkStatus(){
    if(!isPlaying && counter === 0){
        message.style.color = 'red';
        message.innerHTML = 'Game Over!!!';
    }
}



/*

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}

var interval = setInterval(draw, 10);

*/