const cards = document.querySelectorAll('.game-card')

let turnedCards = false;
let timeOutBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (timeOutBoard) return; // Blocks additional cards from flipping when function is already running

    this.classList.add('visible');

    if (!turnedCards) {
        //First card chosen
        turnedCards = true;
        firstCard = this;

        return; //Closes function early to return to the top
    } else {
        //Second card chosen
        turnedCards = false;
        secondCard = this;

        checkForMatch();
    }
}

// Function to check whether cards match
function checkForMatch() {
    //Variable that holds statement to check whether cards match
    let cardsMatch = firstCard.dataset.pokemon === secondCard.dataset.pokemon;
    //Ternary operator that checks whether the condition is true or false
    cardsMatch ? correctMatch() : resetCards();
}

// Keeps cards open if they are a match
function correctMatch() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// Reset cards if they are not a match
function resetCards() {
    timeOutBoard = true;  //Times out the board
    setTimeout(() => {
        firstCard.classList.remove('visible');
        secondCard.classList.remove('visible');

    timeOutBoard = false; //Opens board again once function has completed
    }, 1000);
}

cards.forEach(card => card.addEventListener('click', flipCard));