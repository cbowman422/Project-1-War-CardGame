# GAME OF WAR - Project 1

## Screenshot
![Game](https://imgur.com/9d5PwJn.jpg)

## Technologies Used
- HTML
- CSS 
- JavaScript

## Link To Game
https://cbowman422.github.io/project-1/

## How to play
- to start press the start button
- press draw to flip your cards
- who evers card has a higher value wins that round
- if the value of the cards are the same then the WAR begins
- during war your next 3 cards are skipped and the fourth card is flipped, whose ever value is higher wins all the cards from that round
- if the card values match you go into war again until someone has a higher value (this is done automatically)
- each players deck is shuffled every 26 draws
- first player to get all of the cards wins
- if you go into war with less than 5 cards you lose


## How the code works
- a full deck is generted from an object creating the 52 cards
- the deck of cards is shuffled rondomly in the array
- the deck is delt to the two players with every other card
- when the draw is pressed the first cards are converted into numbers by using map to remove the first number sequence from the string and Number() to turn the sting to a number
- the face cards are converted to the respective values using if statements
- the player with the higher value has both of the cards in the round pushed to their array and the values are spliced fromt the front
- when the war begins the 5th value index of the arrays are compared and the winner has all the cards pushed to the array
- when a second war function is activated in a row all the cards in the car are pushed into a war extra array 
- a function checks to add the war extra array to the winner if there are values in the array
- both players card decks are randomized every 26 draw clicks
- once a players index reaches 0 the other player wins
- DOM is used to interact with the HTML
- CSS to style
- if you lose with 6,7, or 8 cards left that means you went into double war and did not have enough cards.



## Sudo code
- have an array of all cards of a deck
- have a button to play
- shuffle deck
- deal deck
- pick fist value of arrays for players first card
- have two players
- check who wins round
- save score until are cards are gone and decide a winner of game
- have a reset button
