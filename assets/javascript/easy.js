// If statement to check whether the document has loaded

if (document.readyState === 'loading') { 
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

class MemoryMaster {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timeElapsed');
        this.counter = document.getElementById('movesUsed');
    }
    startGame() {
        this.cardToCheck = null;
    }
}


function ready() {
    let cards = Array.from(document.getElementsByClassName('game-card'));

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Game.flipCard(card);
        });
    });
}