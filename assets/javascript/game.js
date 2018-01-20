// For the hangman game, assets we will need:
//
// A dictionary of possible words.
// A function that will pick one these words randomly
// A function that document.write (or similar) a _ for each char in the answer string
// A function that makes an array of each char in the answer string - we need a way of dealing with the same letter twice also
// An eventlistener will listen for the guess letter - we need a function to check it against the answerArray.
//    * if it is in the array, we will replace the appropriate dash with the letter - this is tricky, we may have to make the dashes an array as well so that the indexes line up.   * if it isn't in the array, we will -n from the "guesses remaining var"
// we also need a win counter, as well as a loop looking for win/lose to trip this


// var remainingGuesses = 10;
// var answerArray = [];
// var answerBlankSpaces = [];
// var guessedLetters = [];
//
// var wordBank = {
//   "w1": ['trout'],
//   "w2": ['salmon'],
//   "w3": ['barramundi']
// };
//
// // if letter is in "correct letters", replace _ with letters
// // else if letter is ! in "correct letters", add to guessed letters, subtract -1 from remainingGuesses
// // if remainingGuesses = 0, run "game over"
//
// function makeArray(string) {
//   var answerArray = string.split('');
//   return answerArray;
// };


var remainingGuesses = 10;
var answerKey = '';
var answerKeyArray = [];
var userGuessArray = [];
var blankKey = [];
// var answerBlankSpaces = [];
// var guessedLetters = [];

var wordBank = ['trout', 'salmon', 'catfish', 'barramundi', 'tilapia', 'marlin'];

function pickAnswer() {
  var total = wordBank.length;
  answerKey = wordBank[Math.floor(Math.random() * total)];
};



// Create the answer key and userGuessArray

function makeAnswerKey(string) {
  answerKeyArray = string.split('');
  return answerKeyArray;
};

function makeUserGuessArray() {
  for (var i = 0; i < answerKeyArray.length; i++) {
    userGuessArray.unshift(' _ ');
  };
  return userGuessArray;
};

// Guess Logic

function guess(key) {
  var correct = false;
  for (var i = 0; i < answerKeyArray.length; i++) {
    if (key === answerKeyArray[i]) {
      userGuessArray[i] = key;
      correct = true;
    }};

    if(!correct){
      remainingGuesses -= 1;
    };
      console.log(userGuessArray.join());
      console.log("remaining guesses: " + remainingGuesses);
};



pickAnswer();
makeAnswerKey(answerKey);
makeUserGuessArray();
console.log(userGuessArray);
console.log(remainingGuesses);

if (answerKeyArray === userGuessArray) {
  console.log("you win!");
  return "you win";
};





// if letter is in "correct letters", replace _ with letters
// else if letter is ! in "correct letters", add to guessed letters, subtract -1 from remainingGuesses
// if remainingGuesses = 0, run "game over"













// function makeArray(string) {
//   // var answerArray = string.split('');
//   for (var i = 0; i < string.length; i++) {
//   	var newObj = {
//     	'letter': string[i],
//       'show': false,
//     }
//     answerArray.push(newObj)}
//   return answerArray;
// };
//
// function renderGame() {
//   var show_letters = '';
//   for (var i = 0; i < answerArray.length; i++) {
//   	if (answerArray[i]['show']) {
//     	show_letters += answerArray[i]['letter'];
//     } else {
//       show_letters += '-';
//     }
// 	}
//   return show_letters;
// }
//
// function guess(input) {
// 	var correct = false;
// 	for (var i = 0; i < answerArray.length; i++) {
//   	if (input == answerArray[i]['letter']) {
//     	correct = true;
//       answerArray[i]['show'] = true;
//     }
//   }
//   if (!correct) {
//   	remainingGuesses--;
//   }
//   if (remainingGuesses == 0) {
//   	console.log('you lose');
//   }};
