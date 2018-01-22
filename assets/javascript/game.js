// For the hangman game, assets we will need:
//
// A dictionary of possible words.
// A function that will pick one these words randomly
// A function that document.write (or similar) a _ for each char in the answer string
// A function that makes an array of each char in the answer string - we need a way of dealing with the same letter twice also
// An eventlistener will listen for the guess letter - we need a function to check it against the answerArray.
//    * if it is in the array, we will replace the appropriate dash with the letter - this is tricky, we may have to make the dashes an array as well so that the indexes line up.   * if it isn't in the array, we will -n from the "guesses remaining var"
// we also need a win counter, as well as a loop looking for win/lose to trip this


// ALL THATS LEFT - put in the fish, get him moving, get the hide/show going


var gameStarted = false;

var remainingGuesses = 6;
var answerKey = '';
var answerKeyArray = [];
var guessKey = '';
var userGuessArray = [];
var alreadyGuessedArr = [];
var victory = false;
var defeat = false;
var userString = '';
var guessedBefore = '';
var salmon = document.getElementById("salmon");
var victorySound = new Audio('assets/sounds/victory_sound.mp3');


var winCount = 0;
var lossCount = 0;
// var winStr = winCount.toString();
// var lossStr = lossCount.toString();

var wordBank = ['trout', 'salmon', 'catfish', 'barramundi', 'tilapia', 'marlin'];




//Choose the answer

function pickAnswer() {
  var total = wordBank.length;
  answerKey = wordBank[Math.floor(Math.random() * total)];
};

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

// Victory Messages
function victoryMessages(){
  if(victory) {
    document.getElementById("userMsg").textContent = ("You won!");
    winCount += 1;
    updateScore();

}
if (!victory && remainingGuesses < 1) {
  lossCount += 1;
  updateScore();

  defeat = true;

}};

function updateScore() {
  document.getElementById("wins").textContent = (winCount);
  document.getElementById("losses").textContent = (lossCount);
}

function checkVictory() {
  arraysEqual(userGuessArray,answerKeyArray);
  victoryMessages();
  if(victory){
    victorySound.play();
    reset();
    document.getElementById("userMsg").textContent = 'Great Catch! You got one!';

  };
  if(defeat){
    reset();
    document.getElementById("userMsg").textContent = ("Your fish got away...plenty more in the sea right?");
  }
}


// Guess Logic


function guess(key) {
  var correct = false;
  for (var i = 0; i < answerKeyArray.length; i++) {
    if (key === answerKeyArray[i]) {
      userGuessArray[i] = key;
      correct = true;
      document.getElementById("userMsg").textContent = ("good guess! That letter is in the word!");
      salmon.style.opacity = "1";
      moveFish();
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
  document.getElementById("userMsg").textContent = '';
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


function guessCheck(){
    guessKey = String(document.getElementById("guessInput").value);
    // guessKey = guessKey.string().toLowerCase();
    if(!defeat && !victory){guess(guessKey);
    // document.getElementById('guessInput').value = '';
    alreadyGuessedArr.push(guessKey);
    document.getElementById("guessedAlready").textContent = alreadyGuessedArr.join(' ');
  }};

  function blankOutGuess(){

    document.getElementById("guessInput").value = '';

  };



document.addEventListener('input', function() {
  guessCheck(this);
  blankOutGuess();
});

// function startGame(){
//   gameOn = true;
//   document.getElementByTagName("body").style.display = 'block';
// }
//
//
// document.addEventListener("keydown", function() {
//
//   startGame();
//   init();
// });

// document.onChange
// document.getElementById("guessInput").addEventListener("change", function(){
//   guessKey = String.fromCharCode(event.keyCode).toLowerCase();
//     if(!defeat && !victory){
//       guess(guessKey);
//     // document.getElementById('guessInput').value = '';
//       alreadyGuessedArr.push(guessKey);
//       document.getElementById("guessedAlready").textContent = alreadyGuessedArr.join(' ');
// }});

document.getElementById("newGameButton").addEventListener("click", function() {
  reset();
});

// document.getElementById("guessInput").value;

// document.onkeyup = function() {
//   // guessKey = document.getElementById('guessInput').value;
//   guessKey = String.fromCharCode(event.keyCode).toLowerCase();
//     if(!defeat && !victory){guess(guessKey);
//     // document.getElementById('guessInput').value = '';
//     alreadyGuessedArr.push(guessKey);
//     document.getElementById("guessedAlready").textContent = alreadyGuessedArr.join(' ');
// }};

// var gameSwitch = document.getElementsByClassName("container");

function hideMainScreen(){
  element = document.getElementById("container");
  element.classList.add('hidden');
};

function hideTitleScreen(){
  element = document.getElementById("startScreen");
  element.classList.add('hidden');
};

function showMainScreen(){
  element = document.getElementById("container");
  element.classList.add('show');
};

function moveFish(){
  element = document.getElementById("Salmon");
  element.style.left += 1
}


// Start the game
document.addEventListener("keyup", ev => {
  if (!gameStarted) {
      gameStarted = true;
      hideTitleScreen();
      showMainScreen();
      init();
  }
});



function init(){
    victory = false;
    defeat = false;
    remainingGuesses = 6;
    alreadyGuessedArr = [];
    salmonX = 0;
    salmon.style.transform = "none";
    salmon.style.opacity = "0";
    // salmon.style.left = 10%;
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
    updateScore();
  };

  // init();

hideMainScreen();


var salmonX = 0;

function moveFish(){
  salmonX += 50;
  salmon.style.position - "fixed";
  salmon.style.transform = "translateX(" + salmonX + "px)";

};



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
