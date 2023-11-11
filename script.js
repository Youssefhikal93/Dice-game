'use strict';

// selecting elemnts
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const scorePlayer0 = document.querySelector('#score--0');
const scoreplayer1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.querySelector('#current--1');
const rollDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// stating condotion
scorePlayer0.textContent = '0';
scoreplayer1.textContent = '0';
rollDice.classList.add('hidden');
let scores;
let currentScore;
let activePlayer;
let playing;

// reset button function
const init = function () {
  scorePlayer0.textContent = '0';
  scoreplayer1.textContent = '0';
  rollDice.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  current0.textContent = 0;
  current1.textContent = 0;
  scorePlayer0.textContent = 0;
  scoreplayer1.textContent = 0;
  rollDice.classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling
btnRoll.addEventListener('click', function () {
  if (playing) {
    // genereate a random numner
    const dice = Math.trunc(Math.random() * 6) + 1;
    //dispaly a dice
    rollDice.classList.remove('hidden');
    rollDice.src = `dice-${dice}.png`;
    // if 1 true , switch to player 2
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0.textContent = currentScore; //change later
    } else {
      switchPlayer();
      // switch the player
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // current score to active players
    scores[activePlayer] += currentScore;
    // scoers[1]=scores[1]+currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check score at leat is 100
    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      rollDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }

    // switch players
    else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener(
  'click',
  init
  //   while (playing) {
  //   player0El.textContent = 0;
  //   player1El.textContent = 0;
);
