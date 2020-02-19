// the list of word to guess
var theAnimals = ["horse", "duck", "rooster", "sheep", "donkey", "cat", "dog", "monkey", "tiger"];

//randomly chooses a word to guess from the variable above
var animals = theAnimals[Math.floor(Math.random() * theAnimals.length)];
console.log(animals)

// variable to hold total wins starting at zero
var wins = 0;

//var for incorrect guesses
var incorrecGuesses = 8;

var answerArray = [];

// letters remaining in word to be guessed
var remainingLetters = animals.length;

// var for when a letter is guessed
var letterGuess = event.key;




//test to see if the var is working
console.log(Math.floor(Math.random() * theAnimals.length))

//functions to start game, generate spaces and display spaces
function startGame() {
    generateSpaces()
    displaySpaces()
}

function generateSpaces(){
    for (var i = 0; i < animals.length; i++) {
        answerArray[i] = "_";
    }
}

function displaySpaces() {
    var answerArrayString = answerArray.join() 
    var playArea = document.getElementById("game").innerText = answerArrayString
    console.log(playArea)
}

// starts game 
document.getElementById("start").addEventListener("click", startGame)

document.onkeyup = function(event) {

    for (var j = 0; j< animals.length; j++) {
        if (animals[j] === letterGuess) {
            // answerArray[j] = letterGuess;
            remainingLetters--;
            console.log(letterGuess)
        }
        else {
            incorrecGuesses--;
            
        }
    }
};


//display letters already guessed

//update total wins

//win/lose screen

//toLowerCase

