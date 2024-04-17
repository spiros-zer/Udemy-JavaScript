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
///

let currentScore = 0;
let scorePlayerL = 0;
let scorePlayerR = 0;
let activePlayer = 0;

playerScoreLEl.textContent = "0";
playerScoreREl.textContent = "0";
diceEl.classList.add("hidden");

btnRollEl.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6 + 1);

  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer ? 0 : 1;
    playerLEl.classList.toggle("player--active");
    playerREl.classList.toggle("player--active");
  }
});
