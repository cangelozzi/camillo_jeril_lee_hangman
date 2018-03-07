# Camillo_Jeril_Lee_Hangman

HANGMAN update logic v.2

Basic rules:

A random word is selected, and the guessing player tries to guess the letters in this word. Initially the word selected will be hidden behind underscores to show how long it is and how many letters contains. ie. _ _ _ _ _ _ _ Each time the player guesses the letter correctly, this letter will be shown in the place of underscore (to help the player to understand the word itself) ie. H _ N _ M A N When the letter guessed is NOT correct, an interaction with the hangman starts. The Hangman starts to show the pieces that compose him (head, body, left arm, right arm, left leg, right leg). Goal of the player is to guess the word before all the hangman pieces will be shown.
Game Logic Constructions: After building all the pieces for the interaction (variables, functions and event listeners), the random word selected will show just underscore in place of characters. The main area where the player will focus is the input field, in order to insert the character guessed. After inserting the letter, the game logic will check:

IF the letter belongs to the word, the underscore will be replaced by the letter, giving to the player the hint to guess the word. Once the player guesses all the letter in the word, a winning screen will appear, to show congratulations and opportunity to challenge again.

IF the letter is NOT correct; it will be added to an array of wrong letters and shown to screen, so the player can avoid to repeat it again. in addition, the hangman figure will show a piece in the structure. If the hangman will show all his pieces, player finishes the guesses available and game is over. Player can try again.
