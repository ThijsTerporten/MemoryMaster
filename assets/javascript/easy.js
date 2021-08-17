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
    //Checks whether cards match by using data attribute
    if (firstCard.dataset.pokemon === secondCard.dataset.pokemon) {
        //Cards Match
        correctMatch();
    } else {
        resetCards();
    }

}

function correctMatch() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function resetCards() {
    //Cards do not match 
    setTimeout(() => {
        firstCard.classList.remove('visible');
        secondCard.classList.remove('visible');
    }, 1000);

}

cards.forEach(card => card.addEventListener('click', flipCard));