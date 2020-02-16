var theAnimals = ["horse", "duck", "rooster", "sheep", "donkey", "cat", "dog", "monkey", "tiger"];

var animals = theAnimals[Math.floor(Math.random() * words.lenth)];

var answerArray = [];
for (var i = 0; i < animals.length; i++) {
    answerArray[i] = "_";

}

var remainingLetter = animals.length;

