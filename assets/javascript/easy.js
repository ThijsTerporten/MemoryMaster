const cards = document.querySelectorAll('.game-card')
const countDownTimer = document.getElementById('timeElapsed')
const moveCounter = document.getElementById('movesUsed')

let moves = 0;
let time;
let seconds = 60;
let countDownStart = false;
let turnedCards = false;
let timeOutBoard = false;
let firstCard, secondCard;

let matched = [];



// Function for the timer to run

function countDown() {
    time = setInterval(function () {
        seconds--;
        countDownTimer.innerHTML = seconds;
        if (seconds <= 0 || seconds < 1) {
            stopTime();
        };
    }, 1000);
};

// Function to stopTime
function stopTime() {
    clearInterval(time);
}


// Function to count the moves

function countMoves() {
    moves++;
    moveCounter.innerHTML = moves;

    if (moves == 1) {
        seconds = 60;
        countDown();
    }
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
    resetGame();
}

// Reset cards if they are not a match
//Times out the board
// Sets a timeout for removing the classes off visible
function resetCards() {
    timeOutBoard = true; 
    setTimeout(function() {
        firstCard.classList.remove('visible');
        secondCard.classList.remove('visible');
        resetGame();
    }, 1000);
}

function resetGame() {
    [flipCard, timeOutBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Immediately invoked function expression 
// Function that shuffles cards based on css order 
(function shuffle() {
    cards.forEach(card => {
        let randomize = Math.floor(Math.random() * 10);
        card.style.order = randomize;
    });
})();


//Event listener for clicking cards
cards.forEach(card => card.addEventListener('click', flipCard));