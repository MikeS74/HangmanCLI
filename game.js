var inquirer = require("inquirer");
var wordImport = require("./words");

var wordsList = wordImport.friendsNames;
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var numGuesses = 9;

function startGame() {
    numGuesses = 9;
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    blanksAndSuccesses = [];
    wrongGuesses = [];
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    console.log(blanksAndSuccesses.join(" "));
    console.log(numGuesses + " guesses remaining");
}
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log("Correct!");
    } else {
        wrongGuesses.push(letter);
        numGuesses--;
        console.log("Incorrect!");
    }
    console.log(blanksAndSuccesses.join(" "));
    console.log(numGuesses + " guesses remaining");
	eval(userInput);
}
function roundComplete() {
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
		console.log("You got it right! Next word!");
        startGame();
    } else if (numGuesses === 0) {
        console.log("You lose! Next word!");
		startGame();
    }
}
startGame();
var userInput = 'inquirer.prompt([{type: "input",name: "name",message: "Guess a letter!"}]).then(function (answers){var letterGuessed=answers.name;checkLetters(letterGuessed);roundComplete();});';
eval(userInput);