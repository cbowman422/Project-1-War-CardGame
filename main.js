console.log("welcome")


const cardsObject = {
    suit: [' &#9824;',' &#9827;', ' &#9829;', ' &#9830;'],
    value: [2,3,4,5,6,7,8,9,10],
    faceValue: ['J', 'Q', 'K', 'A'],
}

let cardDeckArray = []

function cardDeck() {
    for (let i = 0; i<cardsObject.suit.length; i++){
        for (let j = 0; j <cardsObject.value.length; j++){
        cardDeckArray.push(cardsObject.value[j] + cardsObject.suit[i]) 
        }
    }
    for (let i = 0; i<cardsObject.suit.length; i++){
        for (let j = 0; j <cardsObject.faceValue.length; j++){
        cardDeckArray.push(cardsObject.faceValue[j] + cardsObject.suit[i]) 
        }
    }
    return cardDeckArray
}



let playerOneDeck = []
let playerTwoDeck = []
let buttonDraw = document.querySelector('#buttonDraw')
let buttonStart = document.querySelector('#buttonStart')

buttonDraw.addEventListener('click', buttonDrawClick);
buttonStart.addEventListener('click', buttonStartClick);

function dealDeck() {
    cardDeck()
    shuffleDeck()
    for (let i = 0; i < cardDeckArray.length; i++){
        if (i % 2 === 0) {
            playerOneDeck.push(cardDeckArray[i])
        } else if (i % 2 !==0) {
            playerTwoDeck.push(cardDeckArray[i])
        }
    }
    return
}

function buttonStartClick(){
    dealDeck()
}

function shuffleDeck() {
let currentIndex = cardDeckArray.length, randomIndex;
    while (currentIndex !==0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cardDeckArray[currentIndex], cardDeckArray[randomIndex]] = [cardDeckArray[randomIndex], cardDeckArray[currentIndex]];
    }
    return cardDeckArray
}


function buttonDrawClick() {
    document.querySelector('#playerOneHand').innerHTML = playerOneDeck[0];
    document.querySelector('#playerTwoHand').innerHTML = playerTwoDeck[0];
    console.log(playerOneDeck[0][0] + playerOneDeck[0][1])
    if (playerOneDeck[0][0] === "1" || playerOneDeck[0][0] === "2" || playerOneDeck[0][0] === "3" || playerOneDeck[0][0] === "4" || playerOneDeck[0][0] === "5" || playerOneDeck[0][0] === "6" || playerOneDeck[0][0] === "7" || playerOneDeck[0][0] === "8" || playerOneDeck[0][0] === "9"){
        playerOneCurrentHand = playerOneDeck[0].match(/\d+/)
        console.log(typeof playerOneCurrentHand[0])
    }
    if(playerOneDeck[0][0] === "J"){
        console.log("boom")

    }
    
}

//The metacharacter \d search for digits, which are also numbers. The match() method uses regular expressions to retrieve it results. When used the match() with \d, it returns the number


// function checkWinnerHand(){
//     if (playerOneDeck[0][0])
// }