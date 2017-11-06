# HW - {hangman-node-wk11}

Use the CLI prompt to guess letters for the current Hangman word. After each word is guessed correctly or all 9 tries have been used, a new word will be provided to continue the game.

![hangman-cli](./img/hangman-cli.gif)

## Requirements

- Use Node.js to create a CLI Hangman game
- Utilize modularization of different Node.js packages and JavaScript files
- Create a constructor function for the current word the user is attempting to guess

## Technologies Used

- JavaScript for building objects and game functions
- Node.js for CLI creation, NPM packages, and modularization

## Code Explanation

Multiple JavaScript files with startGame, checkLetters, and random word selection functions that are modularized together with Node.js. Inquirer NPM requests user input and console.log displays the results of the game. When all conditions of the game are met, the startGame re-runs and picks another word to play with Math.random.