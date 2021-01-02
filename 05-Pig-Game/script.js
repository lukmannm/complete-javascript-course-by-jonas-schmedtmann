'use strict';

// Selecting Elements
const scoreZeroEl = document.querySelector('#score--0');
const scoreOneEl = document.getElementById('score--1');
const playerZeroEl = document.querySelector('.player--0');
const playerOneEl = document.querySelector('.player--1');
const currentZeroEl = document.getElementById('current--0');
const currentOneEl = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
scoreZeroEl.textContent = 0;
scoreOneEl.textContent = 0;

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreZeroEl.textContent = 0;
  scoreOneEl.textContent = 0;
  currentZeroEl.textContent = 0;
  currentOneEl.textContent = 0;

  diceEl.classList.add('hidden');
  playerZeroEl.classList.remove('player--winner');
  playerOneEl.classList.remove('player--winner');
  playerZeroEl.classList.add('player--active');
  playerOneEl.classList.remove('player--active');
};

init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZeroEl.classList.toggle('player--active');
  playerOneEl.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Get Random Number For Dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display Random Dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    // 3. Check for rolled 1: If true, swicth to next player
    if (dice !== 1) {
      // Add dice
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      // currentZeroEl.textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[0] = scores[0] + currentScore;
    // 2. Check if player's score is >= 100
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //  finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--hidden`);
    } else {
      //  Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
