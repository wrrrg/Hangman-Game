// For the hangman game, assets we will need:
//
// A dictionary of possible words.
// A function that will pick one these words randomly
// A function that document.write (or similar) a _ for each char in the answer string
// A function that makes an array of each char in the answer string - we need a way of dealing with the same letter twice also
// An eventlistener will listen for the guess letter - we need a function to check it against the answerArray.
//    * if it is in the array, we will replace the appropriate dash with the letter - this is tricky, we may have to make the dashes an array as well so that the indexes line up.   * if it isn't in the array, we will -n from the "guesses remaining var"
// we also need a win counter, as well as a loop looking for win/lose to trip this


var remainingGuesses = 10;
var answerArray = [];
var answerBlankSpaces = [];
var guessedLetters = [];

var wordBank = {
  "w1": ['trout', 5];
  "w2": ['salmon', 6];
  "w3": ['barramundi', 10];
};

// if letter is in "correct letters", replace _ with letters
// else if letter is ! in "correct letters", add to guessed letters, subtract -1 from remainingGuesses
// if remainingGuesses = 0, run "game over"

function makeArray(string) {
  var answerArray = string.split('');
  return answerArray;
}
