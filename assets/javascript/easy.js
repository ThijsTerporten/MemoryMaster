const cards = document.querySelectorAll('.game-card')

let turnedCards = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('visible');

    if (!turnedCards) {
        //First card chosen
        turnedCards = true;
        firstCard = this;
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
    setTimeout(() => {
        firstCard.classList.remove('visible');
        secondCard.classList.remove('visible');
    }, 1000);
}

cards.forEach(card => card.addEventListener('click', flipCard));