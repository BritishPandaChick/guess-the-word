//Global variables
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterGuess = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainGuess = document.querySelector(".remaining span");
const message = document.querySelector("message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//Write function to add placeholders for each letter
const addPlaceholders = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter)
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

addPlaceholders(word);

//Add event listener for the button
guessButton.addEventListener("click", function() {
    e.preventDefault();
    message.innerText = "";

    const letterInput = letterGuess.value;
    //console.log(letterInput);
    const goodGuess = checkPlayerInput(guess);

    if (goodGuess) {
        makeGuess(letterInput);
    }

    letterGuess.value = "";
});

//Create a function to check player's input
const checkPlayerInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

//Create a function to capture input 
const makeGuess = function(letterInput) {
    letterInput = letter.toUppercase();

    if (guestLetters.includes(letterInput)) {
        message.innerText = "You've already guessed that letter. Try again.";
    } else {
        guessedLetters.push(letterInput);
        console.log(guessedLetters)
    }
};