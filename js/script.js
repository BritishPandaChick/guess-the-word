//Global variables
const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterGuess = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainGuess = document.querySelector(".remaining span");
const message = document.querySelector("message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

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
    const letterInput = letterGuess.value;
    console.log(letterInput);
    letterGuess.value = "";
});