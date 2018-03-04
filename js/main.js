// Javascript Document
(() => {
  // console.log('Hangman Game is fully loaded!');

  // Variables always goes on top
  var words = ['party', 'ball', 'hello', 'javascript', 'soccer', 'laptop', 'sun', 'book', 'boy', 'girl', 'star']

  // VARIABLE STACK
  // storing random word in the let variable
  let currentWord = null,
    wordHint = document.querySelector('.current-word'),
    guessBox = document.querySelector('.guess'),
    wrongGuesses = 0,
    resetScreen = document.querySelector('.reset-screen'),
    resetButton = resetScreen.querySelector('button'),
    wrongLetters = document.querySelector('.wrong-letters'),
    wrongLetterArray = [],
    wordToGuess;


  // fuctions in between
  function takeGuess() {
    console.log(this.value);

    // check guesses
    if (currentWord.indexOf(this.value) < 0) {
      wrongLetterArray.push(this.value)
      console.log(`${wrongGuesses}`)
      wrongLetters.textContent = wrongLetterArray.join(' ')
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece')
      wrongGuesses++
      document.getElementById('myLetter').value = ''

      if (wrongGuesses > 5) {
        console.log('you lose!')
        // show losing screen
        // create an overlay div with a reset button - turn it on when the user looses
        showReset()
      } else {
        // wrong letter and increment wrong letter count
        // wrongGuesses++
      }
    } else {

      for (var i = 0; i < currentWord.length; i++) {

        if (this.value === currentWord[i]) {

          wordToGuess = wordToGuess.replace(/ /g, '');
          wordToGuess = wordToGuess.split('');
          wordToGuess[i] = this.value;
          wordToGuess = wordToGuess.join(' ');
          document.getElementById('myLetter').value = ''
        }
      }
      wordHint.textContent = wordToGuess
    }
  }

  // showreset when I run out of guesses
  function showReset() {
    resetScreen.classList.remove('reset-screen');
  }

  // reset game
  function resetGame() {
    wrongGuesses = 0
    wrongLetterArray = []
    wrongLetters.textContent = null
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'))
    gamePieces.forEach(piece => piece.classList.remove('show-piece'))
    resetScreen.classList.add('reset-screen')
    document.getElementById('myLetter').value = ''
    init();
  }

  // start game and restart function instructions
  function init() {
    // generate a random number and grab the word that corresponds in the index array
    currentWord = words[Math.floor(Math.random() * words.length)]
    wordToGuess = currentWord.split('').map(letter => letter = '_').join(' ')
    wordHint.textContent = wordToGuess
    console.log(`Guess this word: ${currentWord}. It is at ${words.indexOf(currentWord)}`)
  }

  // event handling
  guessBox.addEventListener('keyup', takeGuess)
  resetButton.addEventListener('click', resetGame)
  init()
})()


//
//
//
//
// let startGame = document.getElementById('startGame');
// let quitButton = document.getElementById('quitGame');
// let hangStructure = document.getElementById('hangStructure');
//
// // START BUTTON LOGIC
// function showHangStructure() {
//  hangStructure.classList.remove('hidden');
//  quitButton.classList.remove('hidden');
// }
// startGame.addEventListener('click', showHangStructure);
//
// // QUIT GAME LOGIC
// function closeAll() {
//  hangStructure.classList.add('hidden');
//  quitButton.classList.add('hidden');
// }
// quitButton.addEventListener('click', closeAll);
//
//
