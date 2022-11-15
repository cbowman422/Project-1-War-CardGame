console.log("welcome")

let cardDeck = ["A&#9824;", "A&#9827;", "A&#9829;", "A&#9830;", "K&#9824;", "K&#9827;", "K&#9829;", "K&#9830;", "Q&#9824;", "Q&#9827;", "Q&#9829;", "Q&#9830;", "J&#9824;", "J&#9827;", "J&#9829;", "J&#9830;", "10&#9824;", "10&#9827;", "10&#9829;", "10&#9830;", "9&#9824;", "9&#9827;", "9&#9829;", "9&#9830;", "8&#9824;", "8&#9827;", "8&#9829;", "8&#9830;", "7&#9824;", "7&#9827;", "7&#9829;", "7&#9830;", "6&#9824;", "6&#9827;", "6&#9829;", "6&#9830;", "5&#9824;", "5&#9827;", "5&#9829;", "5&#9830;", "4&#9824;", "4&#9827;", "4&#9829;", "4&#9830;", "3&#9824;", "3&#9827;", "3&#9829;", "3&#9830;", "2&#9824;", "2&#9827;", "2&#9829;", "2&#9830;"];

console.log(cardDeck)

let playerOneDeck = []
let playerTwoDeck = []


function shuffleDeck() {
let currentIndex = cardDeck.length, randomIndex;
    while (currentIndex !==0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cardDeck[currentIndex], cardDeck[randomIndex]] = [cardDeck[randomIndex], cardDeck[currentIndex]];
    }
    return cardDeck
}

function dealDeck() {
    shuffleDeck()
    for (let i = 0; i < cardDeck.length; i++){
        if (i % 2 === 0) {
            playerOneDeck.push(cardDeck[i])
            console.log(playerOneDeck)
        } else if (i % 2 !==0) {
            playerTwoDeck.push(cardDeck[i])
            console.log(playerTwoDeck)
        }
    }
}

