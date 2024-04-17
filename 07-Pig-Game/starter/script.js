"use strict";

/// DOM elements init
const playerLEl = document.querySelector(".player--0");
const playerREl = document.querySelector(".player--1");
const playerScoreLEl = document.querySelector("#score--0");
const playerScoreREl = document.querySelector("#score--1");
const currentScoreLEl = document.querySelector("#current--0");
const currentScoreREl = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnRollEl = document.querySelector(".btn--roll");
const btnHoldEl = document.querySelector(".btn--hold");
const btnResetEl = document.querySelector(".btn--new");
///

let scores,
  currentScore,
  scorePlayerL,
  scorePlayerR,
  activePlayer,
  bIsGameFinished;

const init = function () {
  /** Score purging */
  scores = [0, 0];
  currentScore = 0;
  scorePlayerL = 0;
  scorePlayerR = 0;
  activePlayer = 0;
  bIsGameFinished = false;
  playerScoreLEl.textContent = "0";
  currentScoreLEl.textContent = "0";
  playerScoreREl.textContent = "0";
  currentScoreREl.textContent = "0";

  /** Reset css classes */
  diceEl.classList.add("hidden");
  playerLEl.classList.remove("player--winner");
  playerLEl.classList.add("player--active");

  playerREl.classList.remove("player--winner");
  playerREl.classList.remove("player--active");

  playerScoreLEl.textContent = "0";
  playerScoreREl.textContent = "0";
  diceEl.classList.add("hidden");
};

const changePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer ? 0 : 1;
  playerLEl.classList.toggle("player--active");
  playerREl.classList.toggle("player--active");
};

init();

/** On btn ROLL clocked roll the dice, add to current scores */
btnRollEl.addEventListener("click", function () {
  if (!bIsGameFinished) {
    const dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden");

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

/** On btn HOLD clicked the score needs to be stored  */
btnHoldEl.addEventListener("click", function () {
  if (!bIsGameFinished) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      bIsGameFinished = true;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      changePlayer();
    }
  }
});

/** On btn RESET clicked purge scores, css classes */
btnResetEl.addEventListener("click", init);
