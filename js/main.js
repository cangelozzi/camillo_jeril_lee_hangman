// Javascript Document
(() => {
  // console.log('Hangman Game is fully loaded!');
  // Variables always goes on top

  var words = ['party', 'ball', 'hello', 'javascript', 'soccer', 'laptop', 'sun', 'book', 'boy', 'girl', 'star'];

  // VARIABLE STACK
  // storing random word in the let variable
  let currentWord = words[Math.floor(Math.random() * words.length)],
    wordHint = document.querySelector('.current-word'),
    guessBox = document.querySelector('.letter_guess'),
    wrongGuesses;


  wordHint.textContent = currentWord.split("").map(letter => letter = "_").join(" ");

  // fuctions in between
  function makeGuess() {
    console.log(this.value)
  }


  // Event handling alwys at the bottom
  guessBox.addEventListener('keyup', makeGuess);

  // check guesses
  if (currentWord.indexOf(this.value < 0)) {
    
    
    
    document.querySelector('.wrong`${wrongGuesses}`').classList.add('show-hangedPiece');
    
    // wrong letter and increment wrong letter count
    wrongGuesses++;

  } else {

  }


  // start game and restart function instructions
  function init() {
    // generate a random number and grab the word that corresponds in the index array


  }

  init();
})();




//
//
//
//
//let startGame = document.getElementById('startGame');
//let quitButton = document.getElementById('quitGame');
//let hangStructure = document.getElementById('hangStructure');
//
//// START BUTTON LOGIC
//function showHangStructure() {
//  hangStructure.classList.remove('hidden');
//  quitButton.classList.remove('hidden');
//}
//startGame.addEventListener('click', showHangStructure);
//
//// QUIT GAME LOGIC
//function closeAll() {
//  hangStructure.classList.add('hidden');
//  quitButton.classList.add('hidden');
//}
//quitButton.addEventListener('click', closeAll);
//
//
