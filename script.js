'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉️ Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (value) {
  document.querySelector('.score').textContent = value;
};

document.querySelector('.check').addEventListener('click', (e) => {
  e.preventDefault();
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔️ Deve essere un numero tra 1 e 20`);
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').focus();

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉️ Numero esatto!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.again').focus();

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //  Wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈️ Troppo alto...' : '📉️ Troppo basso...'
      );
      score--;
      setScore(score);
      document.querySelector('.guess').value = '';
      document.querySelector('.guess').focus();
    } else {
      displayMessage('💥️ Hai perso la partita. Prova ancora!');
      setScore(0);
      document.querySelector('.guess').value = '';
      document.querySelector('.again').focus();
    }
  }
});
// document.querySelector('.check').addEventListener('keypress', (e) => {
//   if (e.key === 'enter') guessNumber();
// });

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').focus();
  score = 10;
  setScore(score);
  displayMessage('Prova ad indovinare...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
