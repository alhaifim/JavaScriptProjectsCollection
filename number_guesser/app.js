/* 
GAME Function:
-Player must guess a number between a min and a max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answwer if loose
-Let player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Creat our event Listener - Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate Our input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // Check if won
  if (guess === winningNum) {
    //Disable input
    guessInput.disabled = true;
    //Change Border Color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct, You are a Winner`, 'green');
  } else {
  }
});
// Set Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
