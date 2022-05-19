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

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const setScore = function (value) {
  document.querySelector('.score').textContent = value;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ Nessun numero!');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉️ Numero esatto!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if (score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //  Wrong guess
  } else if(guess !== secretNumber){
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈️ Troppo alto...' : '📉️ Troppo basso...');
      score--;
      setScore(score);
    } else {
      displayMessage('💥️ Hai perso la partita');
      setScore(0);
    }
  }  
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  setScore(score);
  displayMessage('Prova ad indovinare...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
