
let cardDeckArray = []
let playerOneDeck = [];
let playerTwoDeck = [];
let buttonDraw = document.querySelector('#buttonDraw')
let buttonStart = document.querySelector('#buttonStart')
let warExtraArray = [];
let playerDeckLength = 26;
buttonStart.addEventListener('click', buttonStartClick);

const cardsObject = {
    suit: [' &#9824;',' &#9827;', ' &#9829;', ' &#9830;'],
    value: [2,3,4,5,6,7,8,9,10],
    faceValue: [ 'J', 'Q', 'K', 'A'],
}

function buttonStartClick(){
    document.querySelector('#buttonStart').style.background = "rgba(0,50,0,0.5)";
    dealDeck()
    buttonDraw.addEventListener('click', buttonDrawClick);
    buttonStart.removeEventListener('click', buttonStartClick);
}

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
    
    warExtraArray = [];
    document.querySelector('#playerOneHand').innerHTML = playerOneDeck[0];
    document.querySelector('#playerTwoHand').innerHTML = playerTwoDeck[0];
    // player 1
    if (playerOneDeck[0][0] === "1" || playerOneDeck[0][0] === "2" || playerOneDeck[0][0] === "3" || playerOneDeck[0][0] === "4" || playerOneDeck[0][0] === "5" || playerOneDeck[0][0] === "6" || playerOneDeck[0][0] === "7" || playerOneDeck[0][0] === "8" || playerOneDeck[0][0] === "9"){
        playerOneCurrentHand = playerOneDeck[0].match(/\d+/)
        playerOneCurrentHandNumber = Number(playerOneCurrentHand)
    }
    if(playerOneDeck[0][0] === "J"){
        playerOneCurrentHandNumber = 11;
    }
    if(playerOneDeck[0][0] === "Q"){
        playerOneCurrentHandNumber = 12;
    }
    if(playerOneDeck[0][0] === "K"){
        playerOneCurrentHandNumber = 13;
    }
    if(playerOneDeck[0][0] === "A"){
        playerOneCurrentHandNumber = 14;
    }
    // player 2
    if (playerTwoDeck[0][0] === "1" || playerTwoDeck[0][0] === "2" || playerTwoDeck[0][0] === "3" || playerTwoDeck[0][0] === "4" || playerTwoDeck[0][0] === "5" || playerTwoDeck[0][0] === "6" || playerTwoDeck[0][0] === "7" || playerTwoDeck[0][0] === "8" || playerTwoDeck[0][0] === "9"){
        playerTwoCurrentHand = playerTwoDeck[0].match(/\d+/)
        playerTwoCurrentHandNumber = Number(playerTwoCurrentHand)
    }
    if(playerTwoDeck[0][0] === "J"){
        playerTwoCurrentHandNumber = 11;
    }
    if(playerTwoDeck[0][0] === "Q"){
        playerTwoCurrentHandNumber = 12;
    }
    if(playerTwoDeck[0][0] === "K"){
        playerTwoCurrentHandNumber = 13;
    }
    if(playerTwoDeck[0][0] === "A"){
        playerTwoCurrentHandNumber = 14;
    }
    checkWinnerHand()
    shuffleCounter()
    displayDeck()
    checkWinnerGame()
}

//The metacharacter \d search for digits, which are also numbers. The match() method uses regular expressions to retrieve it results. When used the match() with \d, it returns the number

function checkWinnerHand(){
    if (playerOneCurrentHandNumber > playerTwoCurrentHandNumber){
        document.querySelector('#displayHand').innerHTML = "</strong> Player 1 </strong> WINS this round";
        playerOneDeck.push(playerOneDeck[0])
        playerOneDeck.push(playerTwoDeck[0])
        playerOneDeck.splice(0,1)
        playerTwoDeck.splice(0,1)
    }
    if (playerOneCurrentHandNumber < playerTwoCurrentHandNumber){
        document.querySelector('#displayHand').innerHTML = "</strong> Player 2 </strong> WINS this round";
        playerTwoDeck.push(playerOneDeck[0])
        playerTwoDeck.push(playerTwoDeck[0])
        playerOneDeck.splice(0,1)
        playerTwoDeck.splice(0,1)
    }
    if (playerOneCurrentHandNumber === playerTwoCurrentHandNumber){
        playerOneDeckWarHand = playerOneDeck[4];
        playerTwoDeckWarHand = playerTwoDeck[4];
        warExecution()
    }
}

function warExecution(){
    buttonDraw.removeEventListener('click', buttonDrawClick);
    setTimeout( () => {
        document.querySelector('#playerOneHand').innerHTML = playerOneDeckWarHand;
        document.querySelector('#playerTwoHand').innerHTML = playerTwoDeckWarHand;
        buttonDraw.addEventListener('click', buttonDrawClick);
    }, 2000);
if (playerOneDeck.length>5){
    if (playerOneDeck[4][0] === "1" || playerOneDeck[4][0] === "2" || playerOneDeck[4][0] === "3" || playerOneDeck[4][0] === "4" || playerOneDeck[4][0] === "5" || playerOneDeck[4][0] === "6" || playerOneDeck[4][0] === "7" || playerOneDeck[4][0] === "8" || playerOneDeck[4][0] === "9"){
        playerOneCurrentHand = playerOneDeck[4].match(/\d+/)
        playerOneCurrentHandNumber = Number(playerOneCurrentHand)
    }
    if(playerOneDeck[4][0] === "J"){
        playerOneCurrentHandNumber = 11;
    }
    if(playerOneDeck[4][0] === "Q"){
        playerOneCurrentHandNumber = 12;
    }
    if(playerOneDeck[4][0] === "K"){
        playerOneCurrentHandNumber = 13;
    }
    if(playerOneDeck[4][0] === "A"){
        playerOneCurrentHandNumber = 14;
    }
}
    // player 2
if (playerTwoDeck.length>5){
    if (playerTwoDeck[4][0] === "1" || playerTwoDeck[4][0] === "2" || playerTwoDeck[4][0] === "3" || playerTwoDeck[4][0] === "4" || playerTwoDeck[4][0] === "5" || playerTwoDeck[4][0] === "6" || playerTwoDeck[4][0] === "7" || playerTwoDeck[4][0] === "8" || playerTwoDeck[4][0] === "9"){
        playerTwoCurrentHand = playerTwoDeck[4].match(/\d+/)
        playerTwoCurrentHandNumber = Number(playerTwoCurrentHand)
    }
    if(playerTwoDeck[4][0] === "J"){
        playerTwoCurrentHandNumber = 11;
    }
    if(playerTwoDeck[4][0] === "Q"){
        playerTwoCurrentHandNumber = 12;
    }
    if(playerTwoDeck[4][0] === "K"){
        playerTwoCurrentHandNumber = 13;
    }
    if(playerTwoDeck[4][0] === "A"){
        playerTwoCurrentHandNumber = 14;
    }
}
    //players if less than 5 cards during war
    if (playerOneDeck.length<5){
        if (playerOneDeck[playerOneDeck.length-1][0] === "1" || playerOneDeck[playerOneDeck.length-1][0] === "2" || playerOneDeck[playerOneDeck.length-1][0] === "3" || playerOneDeck[playerOneDeck.length-1][0] === "4" || playerOneDeck[playerOneDeck.length-1][0] === "5" || playerOneDeck[playerOneDeck.length-1][0] === "6" || playerOneDeck[playerOneDeck.length-1][0] === "7" || playerOneDeck[playerOneDeck.length-1][0] === "8" || playerOneDeck[playerOneDeck.length-1][0] === "9"){
            playerOneCurrentHand = playerOneDeck[playerOneDeck.length-1].match(/\d+/)
            playerOneCurrentHandNumber = Number(playerOneCurrentHand)
        }
        if(playerOneDeck[playerOneDeck.length-1][0] === "J"){
            playerOneCurrentHandNumber = 11;
        }
        if(playerOneDeck[playerOneDeck.length-1][0] === "Q"){
            playerOneCurrentHandNumber = 12;
        }
        if(playerOneDeck[playerOneDeck.length-1][0] === "K"){
            playerOneCurrentHandNumber = 13;
        }
        if(playerOneDeck[playerOneDeck.length-1][0] === "A"){
            playerOneCurrentHandNumber = 14;
        }
        }
        
    if (playerTwoDeck.length<5){
        if (playerTwoDeck[playerTwoDeck.length-1][0] === "1" || playerTwoDeck[playerTwoDeck.length-1][0] === "2" || playerTwoDeck[playerTwoDeck.length-1][0] === "3" || playerTwoDeck[playerTwoDeck.length-1][0] === "4" || playerTwoDeck[playerTwoDeck.length-1][0] === "5" || playerTwoDeck[playerTwoDeck.length-1][0] === "6" || playerTwoDeck[playerTwoDeck.length-1][0] === "7" || playerTwoDeck[playerTwoDeck.length-1][0] === "8" || playerTwoDeck[playerTwoDeck.length-1][0] === "9"){
            playerTwoCurrentHand = playerTwoDeck[playerTwoDeck.length-1].match(/\d+/)
            playerTwoCurrentHandNumber = Number(playerTwoCurrentHand)
        }
        if(playerTwoDeck[playerTwoDeck.length-1][0] === "J"){
            playerTwoCurrentHandNumber = 11;
        }
        if(playerTwoDeck[playerTwoDeck.length-1][0] === "Q"){
            playerTwoCurrentHandNumber = 12;
        }
        if(playerTwoDeck[playerTwoDeck.length-1][0] === "K"){
            playerTwoCurrentHandNumber = 13;
        }
        if(playerTwoDeck[playerTwoDeck.length-1][0] === "A"){
            playerTwoCurrentHandNumber = 14;

        }
        }

    checkWinnerHandWar()
    displayDeck()
    shuffleCounter()
}


function shuffleCounter(){
    playerDeckLength--;
    if (playerDeckLength === 0){
        shuffleDeckPlayerOne()
        shuffleDeckPlayerTwo()
        return playerDeckLength = 26
    } else {
    
    }
    return
}

function checkWinnerHandWar(){
  
    if (playerOneCurrentHandNumber > playerTwoCurrentHandNumber){
        if(warExtraArray.length !== 0){
            for (x = 0; x < warExtraArray.length; x++){
            playerOneDeck.push(warExtraArray[x])
            }
        }
       
        document.querySelector('#displayHand').innerHTML = "Player 1 WINS WAR round!"
        playerOneDeck.push(playerOneDeck[0], playerOneDeck[1], playerOneDeck[2], playerOneDeck[3], playerOneDeck[4])
        playerOneDeck.push(playerTwoDeck[0], playerTwoDeck[1], playerTwoDeck[2], playerTwoDeck[3], playerTwoDeck[4])
        playerOneDeck.splice(0,5)
        playerTwoDeck.splice(0,5)
        
    }
    if (playerOneCurrentHandNumber < playerTwoCurrentHandNumber){
        if(warExtraArray.length !== 0){
            for (x = 0; x < warExtraArray.length; x++){
            playerTwoDeck.push(warExtraArray[x])
            }
        }

        document.querySelector('#displayHand').innerHTML = "Player 2 WINS WAR round!"
        playerTwoDeck.push(playerOneDeck[0], playerOneDeck[1], playerOneDeck[2], playerOneDeck[3], playerOneDeck[4])
        playerTwoDeck.push(playerTwoDeck[0], playerTwoDeck[1], playerTwoDeck[2], playerTwoDeck[3], playerTwoDeck[4])
        playerOneDeck.splice(0,5)
        playerTwoDeck.splice(0,5)
        
    }
    if (playerOneCurrentHandNumber === playerTwoCurrentHandNumber){
        warExtraArray.push(playerOneDeck[0], playerOneDeck[1], playerOneDeck[2], playerOneDeck[3], playerOneDeck[4])
        warExtraArray.push(playerTwoDeck[0], playerTwoDeck[1], playerTwoDeck[2], playerTwoDeck[3], playerTwoDeck[4])
        playerOneDeck.splice(0,5)
        playerTwoDeck.splice(0,5)
        warExecution()
    }
    if (playerOneDeck < 5 && playerOneCurrentHandNumber < playerTwoCurrentHandNumber ){
        document.querySelector('#displayHand').innerHTML = "</strong> Player 2 </strong> WINS the </strong> WAR </strong>!";
        document.querySelector('#playerOneHand').innerHTML = "Lost"
        cardDeckArray = [];
        playerOneDeck = [];
        playerTwoDeck = [];
        buttonDraw.removeEventListener('click', buttonDrawClick);
        buttonStart.addEventListener('click', buttonStartClick);
        document.querySelector('#buttonStart').style.background = "";
        return
    }
    if (playerTwoDeck < 5 && playerTwoCurrentHandNumber < playerOneCurrentHandNumber ){
        document.querySelector('#displayHand').innerHTML = "</strong> Player 1 </strong> WINS the </strong> WAR </strong>!";
        document.querySelector('#playerTwoHand').innerHTML = "Lost"
        cardDeckArray = [];
        playerOneDeck = [];
        playerTwoDeck = [];
        buttonDraw.removeEventListener('click', buttonDrawClick);
        buttonStart.addEventListener('click', buttonStartClick);
        document.querySelector('#buttonStart').style.background = "";
        return
    }

}

function shuffleDeckPlayerOne() {
    let currentIndex = playerOneDeck.length, randomIndex;
        while (currentIndex !==0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [playerOneDeck[currentIndex], playerOneDeck[randomIndex]] = [playerOneDeck[randomIndex], playerOneDeck[currentIndex]];
        }
        return playerOneDeck
}


function shuffleDeckPlayerTwo() {
    let currentIndex = playerTwoDeck.length, randomIndex;
        while (currentIndex !==0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [playerTwoDeck[currentIndex], playerTwoDeck[randomIndex]] = [playerTwoDeck[randomIndex], playerTwoDeck[currentIndex]];
        }
        return playerTwoDeck
}

function checkWinnerGame(){
    if (playerOneDeck.length === 0){
        document.querySelector('#displayHand').innerHTML = "</strong> Player 2 </strong> WINS the </strong> WAR </strong>!";
        cardDeckArray = [];
        playerOneDeck = [];
        playerTwoDeck = [];
        buttonDraw.removeEventListener('click', buttonDrawClick);
        buttonStart.addEventListener('click', buttonStartClick);
        document.querySelector('#buttonStart').style.background = "";
    }
    if (playerTwoDeck.length === 0){
        document.querySelector('#displayHand').innerHTML = "</strong> Player 1 </strong> WINS the </strong> WAR </strong>!";
        cardDeckArray = [];
        playerOneDeck = [];
        playerTwoDeck = [];
        buttonDraw.removeEventListener('click', buttonDrawClick);
        buttonStart.addEventListener('click', buttonStartClick);
        document.querySelector('#buttonStart').style.background = "";
    }
    return
}

function displayDeck(){
    document.querySelector('#playerOneCardsLeft').innerHTML = "<strong> Player 1 </strong> deck count: " + playerOneDeck.length;
    document.querySelector('#playerTwoCardsLeft').innerHTML = "<strong> Player 2 </strong> deck count: " + playerTwoDeck.length;
}


