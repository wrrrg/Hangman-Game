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
var answerKey = '';
var answerKeyArray = [];
var guessKey = '';
var userGuessArray = [];
var alreadyGuessedArr = ['Already Guessed: '];
var victory = false;
var defeat = false;
var userString = '';
var guessedBefore = '';

var winCount = 0;
var lossCount = 0;

var wordBank = ['trout', 'salmon', 'catfish', 'barramundi', 'tilapia', 'marlin'];


function pickAnswer() {
  var total = wordBank.length;
  answerKey = wordBank[Math.floor(Math.random() * total)];
};
//
// function reset() {
//   answerKey = pickAnswer();
//   answerKeyArray = makeAnswerKey();
//   userGuessArray = makeUserGuessArray();
//   victory = false;
// };


// Create the answer key and userGuessArray

function makeAnswerKey(string) {
  answerKeyArray = [];
  answerKeyArray = string.split('');
  return answerKeyArray;
};

function makeUserGuessArray() {
  userGuessArray = [];
  for (var i = 0; i < answerKeyArray.length; i++) {
    userGuessArray.unshift('_');
  };
  return userGuessArray.join('');
};

// The HTML friendly version

function displayUserArray () {
  // var guessString = userGuessArray.join(' ');
  document.getElementById("answerSpaces").textContent = userGuessArray.join(' ');
};

// Check for Victory

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return victory = true;
};
// function checkVictory(arr) {
//   if(arr === answerKeyArray) {
//   victory = true;
// };
//   console.log(victory);
//   return victory;
// };
// Victory Messages
function victoryMessages(){
  if(victory) {
    document.getElementById("userMsg").textContent = ("You won!");
    winCount += 1;
}
if (!victory && remainingGuesses < 1) {
  document.getElementById("userMsg").textContent = ("you've lost");
  lossCount += 1;
  defeat = true;

}};

function checkVictory() {
  arraysEqual(userGuessArray,answerKeyArray);
  victoryMessages();
}


// Guess Logic


function guess(key) {
  var correct = false;
  for (var i = 0; i < answerKeyArray.length; i++) {
    if (key === answerKeyArray[i]) {
      userGuessArray[i] = key;
      correct = true;
      document.getElementById("userMsg").textContent = ("good guess! That letter is in the word!");
    }};

    if(!correct){
      if(remainingGuesses >= 1) {
        remainingGuesses -= 1;
        document.getElementById("guessesLeft").textContent = remainingGuesses;
        document.getElementById("userMsg").textContent = ("Not quite...");
    }};
      var guessesForHTML = userGuessArray.join(' ');
      // console.log(guessesForHTML);
      document.getElementById("answerSpaces").textContent = guessesForHTML;
      console.log("remaining guesses: " + remainingGuesses);
      checkVictory();
};



// The guess button - runs the guess() function each time the button is clicked, then clears the field

// Reset Text Fields
// function resetVars() {
//   var remainingGuesses = 10;
//   var alreadyGuessedArr = ['Already Guessed: '];
//   return [alreadyGuessedArr, remainingGuesses];
// };


function resetText () {
  document.getElementById("guessesLeft").textContent = remainingGuesses;
  document.getElementById("guessedAlready").textContent = '';
  var alreadyGuessedArr = '';
  document.getElementById("userMsg").textContent = ("Good Luck!");
  document.getElementById("guessesLeft").textContent = remainingGuesses;
};

// Checks if already guessed

function inArray(str,arr) {
for (var i = 0; i < arr.length; i++) {
  if(str === arr[i]){
    return true;
  } else {
    return false;
  };
}};

document.onkeyup = function() {
  // guessKey = document.getElementById('guessInput').value;
  guessKey = String.fromCharCode(event.keyCode).toLowerCase();
    if(!defeat && !victory){guess(guessKey);
    // document.getElementById('guessInput').value = '';
    alreadyGuessedArr.push(guessKey);
    document.getElementById("guessedAlready").textContent = alreadyGuessedArr.join(' ');
}};

document.getElementById("newGameButton").addEventListener("click", function() {
  reset();
});

//


function init(){
    victory = false;
    defeat = false;
    remainingGuesses = 10;
    alreadyGuessedArr = ['Already Guessed: '];
    // resetVars();
    pickAnswer();
    makeAnswerKey(answerKey);
    makeUserGuessArray();
    displayUserArray();
    resetText();
    console.log(userGuessArray);
    console.log("you have " + remainingGuesses + " guesses left.");
  };

  function reset(){
    init();
  };


init();



// newGame(){
//   pickAnswer();
//   makeAnswerKey(answerKey);
//   makeUserGuessArray();
//   console.log(userGuessArray);
//   console.log("you have " + remainingGuesses + " guesses left.");
// }

// pickAnswer();
// makeAnswerKey(answerKey);
// makeUserGuessArray();
// console.log(userGuessArray);
// console.log("you have " + remainingGuesses + " guesses left.");






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
