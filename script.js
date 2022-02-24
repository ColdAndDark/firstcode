'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'You are correct';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 2
document.querySelector('.guess').value = 2
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 15;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please enter a valid number';

    //When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You are correct!';
    document.querySelector('body').style.backgroundColor = '#7dc581';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#da6666';
    }
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#da6666';
    }
  }
});
