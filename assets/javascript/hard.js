const card = document.querySelectorAll('.game-card');
const countDownTimer = document.getElementById('timeElapsed');
const moveCounter = document.getElementById('movesUsed');
const stars = document.getElementsByClassName('fas fa-star');

let moves = 0;
let time;
let seconds = 180;
let countDownStart = false;
let turnedCards = false;
let timeOutBoard = false;
let firstCard, secondCard;
let cards = [...card];
let matched = [];
let starlist = document.querySelectorAll('.score-panel li');
let winScreen = document.getElementById('win-screen');
//Function startGame

function startGame() {
    shuffle(cards);
}

window.onload = startGame();

// Function for the timer to run

function countDown() {
    time = setInterval(function () {
        seconds--;
        countDownTimer.innerHTML = seconds;
        if (seconds <= 0 || seconds < 1) {
            stopTime();
        }
    }, 1000);
}

// Function to stopTime
function stopTime() {
    clearInterval(time);
}


// Function to count the moves

function countMoves() {
    moves++;
    moveCounter.innerHTML = moves;

    if (moves === 1) {
        seconds = 180;
        countDown();
    }

    starsEarned();
}

// function for flipping cards
// Blocks additional cards from flipping when function is already running
//Prevents double clicking
//First card chosen
//Closes function early to return to the top
//Second card chosen
// Counts the move here 
// Checks whether the two data-attributes off the card match
function flipCard() {
    if (timeOutBoard) return;
    if (this === firstCard) return;
    this.classList.add('visible');
    if (!turnedCards) {
        turnedCards = true;
        firstCard = this;

        return;
    } else {
        turnedCards = false;
        secondCard = this;
        countMoves();
        checkForMatch();
    }
}

// Function to check whether cards match
//Variable that holds statement to check whether cards match
//Ternary operator that checks whether the condition is true or false

function checkForMatch() {
    let cardsMatch = firstCard.dataset.pokemon === secondCard.dataset.pokemon;
    cardsMatch ? correctMatch() : resetCards();
}

// Keeps cards open if they are a match
function correctMatch() {
    firstCard.removeEventListener('click', [flipCard]);
    secondCard.removeEventListener('click', [flipCard]);
    matched.push([flipCard]);
    winGame();
    resetGame();
}

// Reset cards if they are not a match
//Times out the board
// Sets a timeout for removing the classes off visible
function resetCards() {
    timeOutBoard = true;
    setTimeout(function () {
        firstCard.classList.remove('visible');
        secondCard.classList.remove('visible');
        resetGame();
    }, 1000);
}

function resetGame() {
    [flipCard, timeOutBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


// Function to restart the game when button is clicked
// shuffles the cards
// Loops over the cards array and removes each class off visible
// reset moves to 0 
// empty out matched array
// stops the timer
function resetAll() {
    startGame();
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('visible');
    }
    moves = 0;
    moveCounter.innerHTML = moves;
    matched = [];
    showStars();
    countDownTimer.innerHTML = 180;
    stopTime();
}


// Function that shuffles cards based on css order 
function shuffle(cards) {
    cards.forEach(card => {
        let randomize = Math.floor(Math.random() * 10);
        card.style.order = randomize;
    });
}

//Function for star rating system

function starsEarned() {
    if (moves > 30 && moves < 50) {
        for (i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.visibility = "hidden";
            }
        }
    } else if (moves > 51) {
        for (i = 0; i < 3; i++) {
            if (i > 0) {
                stars[i].style.visibility = "hidden";
            }
        }
    }
}


// Function created to make stars visible on reset button

function showStars() {
    for (var i = 0; i < stars.length; i++) {
        stars[i].style.visibility = "visible";
    }
}

//Winscreen modal 
function winGame() {
    if (matched.length === 20) {
        winScreen.classList.add('show');
        document.getElementById("finalMove").innerHTML = moves;
    }
}

function playAgain(){
    winScreen.classList.remove("show");
    resetAll();
}


//Event listener for clicking cards
cards.forEach(card => card.addEventListener('click', flipCard));