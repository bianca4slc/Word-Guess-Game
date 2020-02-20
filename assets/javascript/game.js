// the list of word to guess
var theAnimals = ["horse", "duck", "rooster", "sheep", "donkey", "cat", "dog", "monkey", "tiger"];

// randomly chooses a word to guess from the variable above
var animal = '';

// variable to hold total wins starting at zero
var wins = 0;
var losses = 0;
//var for incorrect guesses
var incorrecGuesses = 8;

var guesses = 0;

var answerArray = [];

var lettersGuessed = [];

// letters remaining in word to be guessed
var remainingLetters = 8;

function generateSpaces(){
    for (var i = 0; i < animal.length; i++) {
        answerArray[i] = "_";
    }
}

function displaySpaces() {
    var answerArrayString = answerArray.join() 
    document.getElementById("game").innerText = answerArrayString
}

function displayAlreadyGuessed() {
    var guesses = lettersGuessed.join() 
    document.getElementById("guessed").innerText = guesses
}

function displayRemainingGuesses() {
    document.getElementById("remaining").innerText = incorrecGuesses
}

function displayWins() {
    document.getElementById("wins").innerText = wins
    document.getElementById("losses").innerText = losses
}

function refreshApp() {
    displaySpaces();
    displayAlreadyGuessed();
    displayRemainingGuesses();
    displayWins();
}

//functions to start game, generate spaces and display spaces
function startGame() {
    animal = theAnimals[Math.floor(Math.random() * theAnimals.length)];
    console.log(animal)
    answerArray = [];
    lettersGuessed = [];
    incorrecGuesses = 8;
    remainingLetters = animal.length
    generateSpaces();
    refreshApp();
}

// starts game 
document.getElementById("start").addEventListener("click", startGame)

document.onkeyup = function(event) {
    // var for when a letter is guessed
    console.log(event);
    var letterGuess = event.key.toLowerCase();

    for (var i = 0; i < lettersGuessed.length; i++) {
        if(lettersGuessed[i] === letterGuess) {
            // already guessed this letter, do nothing
            return;
        }
    }

    lettersGuessed.push(letterGuess);

    var correctGuess = false;
    for (var j = 0; j< animal.length; j++) {
        if (animal[j].toLowerCase() === letterGuess) {
            answerArray[j] = letterGuess;
            remainingLetters--;
            guesses++;

            // this letter guessed is correct
            correctGuess = true;
        }
    }

    if (correctGuess === false) {
        // incorrect guesses decrement by 1
        incorrecGuesses--;
    }

    if (remainingLetters === 0 || incorrecGuesses === 0) {
        // game over
        if (correctGuess) {
            // winner
            wins++;
            alert('You are a winner!')
        } else {
            // loser
            losses++;
            alert('You lost.. play again!')
        }
        startGame();
    }

    refreshApp();
};