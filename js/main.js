// Javascript Document
(() => {
  // console.log('Hangman Game is fully loaded!');

  // Variables always goes on top, functions middle, eventsListners bottom
  
  // VARIABLE STACK
  
  // Array of words to be guessed
  var words = ['party', 'ball', 'hello', 'javascript', 'soccer', 'laptop', 'sun', 'book', 'boy', 'girl', 'star']

  let currentWord = null,
    wordHint = document.querySelector('.current-word'),
    guessBox = document.querySelector('.guess'),
    wrongGuesses = 0,
    resetScreen = document.querySelector('.reset-screen'),
    resetButton = resetScreen.querySelector('button'),
    wrongLetters = document.querySelector('.wrong-letters'),
    wrongLetterArray = [],
    wordToGuess,
    winnerScreen = document.querySelector('.winner-screen'),
    winnerButton = winnerScreen.querySelector('button');


  // FUNCTIONS STACK
  
  // takeGuess() will be called after the keyup event.  It compares the value of the letter entered in the input field with the character in the word to be guessed.  Logic statement check if the letter is indexOf() 
  // IF no indexOf() which means below 0, letter added to an array of wrong letters, and a class handling (show-piece) will happen to the svg image.
  // max 5 wrong letters and the game will be over, with button to try again and reset the variables, functionality.
  // If letter is part of the word, indexOf() >= 0, underscore in word hint will be changed to correct letter.
  function takeGuess() {
    console.log(this.value);

    // check guesses
    if (currentWord.indexOf(this.value) < 0) {
      wrongLetterArray.push(this.value)
      console.log(`${wrongGuesses}`)
      wrongLetters.textContent = wrongLetterArray.join(' ')
      document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece') // svg interaction, adding class
      wrongGuesses++   // wrong letter and increment wrong letter count
      document.getElementById('myLetter').value = ''

      if (wrongGuesses > 5) {
        console.log('you lose!')
        // show losing screen
        // create an overlay div with a reset button - turn it on when the user looses
        showReset()
      } else {
      
      }
    } else {
      // check correct letter exact index in currentWord and change at same index in the wordToGuess variable
      for (var i = 0; i < currentWord.length; i++) {

        if (this.value === currentWord[i]) {
          
          // before creating an array, eliminate the spaces create before with join(' '), avoid extra index
          wordToGuess = wordToGuess.replace(/ /g, '');
          
          wordToGuess = wordToGuess.split('');  // word to array to handle index
          wordToGuess[i] = this.value;
          
          // lastIndexOf() used to address double occurences of characters in word
          wordToGuess[currentWord.lastIndexOf(this.value)] = this.value
          
          wordToGuess = wordToGuess.join(' '); // array to string
          
          // empty input field after keyup
          document.getElementById('myLetter').value = ''
        }
      }
      wordHint.textContent = wordToGuess
      winner()
    }
  }

  // showreset when I run out of guesses
  function showReset() {
    resetScreen.classList.remove('reset-screen');
  }

  // reset game, empty all the variables/array/class and call init()
  function resetGame() {
    wrongGuesses = 0
    wrongLetterArray = []
    wrongLetters.textContent = null
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'))
    gamePieces.forEach(piece => piece.classList.remove('show-piece'))
    resetScreen.classList.add('reset-screen');
    winnerScreen.classList.add('winner-screen')
    document.getElementById('myLetter').value = ''
    init();
  }
  
  function winner() {
    
    // eliminate spaces in order to compare strings
    wordToGuess = wordToGuess.replace(/ /g, '');
    
    // compare strings and show message
    if (wordToGuess === currentWord) {
      console.log('You Win')
      winnerScreen.classList.remove('winner-screen');
    }
  }

  // start game and restart function instructions
  function init() {
    // generate a random number and grab the word that corresponds in the index array
    currentWord = words[Math.floor(Math.random() * words.length)]
    wordToGuess = currentWord.split('').map(letter => letter = '_').join(' ')
    wordHint.textContent = wordToGuess
    console.log(`Guess this word: ${currentWord}. It is at ${words.indexOf(currentWord)}`)
  }

  // EVENTS LISTNER STACK
  guessBox.addEventListener('keyup', takeGuess)
  resetButton.addEventListener('click', resetGame)
  winnerButton.addEventListener('click', resetGame)
  
  // initialize game function
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
