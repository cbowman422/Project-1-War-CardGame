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
    // player 1
    if (playerOneDeck[0][0] === "1" || playerOneDeck[0][0] === "2" || playerOneDeck[0][0] === "3" || playerOneDeck[0][0] === "4" || playerOneDeck[0][0] === "5" || playerOneDeck[0][0] === "6" || playerOneDeck[0][0] === "7" || playerOneDeck[0][0] === "8" || playerOneDeck[0][0] === "9"){
        playerOneCurrentHand = playerOneDeck[0].match(/\d+/)
        playerOneCurrentHandNumber = Number(playerOneCurrentHand)
        console.log(playerOneCurrentHandNumber)
    }
    if(playerOneDeck[0][0] === "J"){
        playerOneCurrentHandNumber = 11;
        console.log(playerOneCurrentHandNumber)
    }
    if(playerOneDeck[0][0] === "Q"){
        playerOneCurrentHandNumber = 12;
        console.log(playerOneCurrentHandNumber)
    }
    if(playerOneDeck[0][0] === "K"){
        playerOneCurrentHandNumber = 13;
        console.log(playerOneCurrentHandNumber)
    }
    if(playerOneDeck[0][0] === "A"){
        playerOneCurrentHandNumber = 14;
        console.log(playerOneCurrentHandNumber)
    }
    // player 2
    if (playerTwoDeck[0][0] === "1" || playerTwoDeck[0][0] === "2" || playerTwoDeck[0][0] === "3" || playerTwoDeck[0][0] === "4" || playerTwoDeck[0][0] === "5" || playerTwoDeck[0][0] === "6" || playerTwoDeck[0][0] === "7" || playerTwoDeck[0][0] === "8" || playerTwoDeck[0][0] === "9"){
        playerTwoCurrentHand = playerTwoDeck[0].match(/\d+/)
        playerTwoCurrentHandNumber = Number(playerTwoCurrentHand)
        console.log(playerTwoCurrentHandNumber)
    }
    if(playerTwoDeck[0][0] === "J"){
        playerTwoCurrentHandNumber = 11;
        console.log(playerTwoCurrentHandNumber)
    }
    if(playerTwoDeck[0][0] === "Q"){
        playerTwoCurrentHandNumber = 12;
        console.log(playerTwoCurrentHandNumber)
    }
    if(playerTwoDeck[0][0] === "K"){
        playerTwoCurrentHandNumber = 13;
        console.log(playerTwoCurrentHandNumber)
    }
    if(playerTwoDeck[0][0] === "A"){
        playerTwoCurrentHandNumber = 14;
        console.log(playerTwoCurrentHandNumber)
    }
    checkWinnerHand()
}

//The metacharacter \d search for digits, which are also numbers. The match() method uses regular expressions to retrieve it results. When used the match() with \d, it returns the number


function checkWinnerHand(){
    if (playerOneCurrentHandNumber > playerTwoCurrentHandNumber){
        console.log(" player 1s hand")
        playerOneDeck.push(playerOneDeck[0])
        playerOneDeck.push(playerTwoDeck[0])
        playerOneDeck.splice(0,1)
        playerTwoDeck.splice(0,1)
        return 
    }
    if (playerOneCurrentHandNumber < playerTwoCurrentHandNumber){
        console.log(" player 2s hand")
        playerTwoDeck.push(playerOneDeck[0])
        playerTwoDeck.push(playerTwoDeck[0])
        playerOneDeck.splice(0,1)
        playerTwoDeck.splice(0,1)
        return 
    }
    if (playerOneCurrentHandNumber === playerTwoCurrentHandNumber){
        console.log("War")
    }
    console.log(playerOneDeck)
    console.log(playerTwoDeck)
}