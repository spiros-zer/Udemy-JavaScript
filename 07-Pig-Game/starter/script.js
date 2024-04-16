"use strict";

/// DOM elements init
const playerScoreLEl = document.querySelector("#score--0");
const playerScoreREl = document.querySelector("#score--1");
const currentScoreLEl = document.querySelector("#current--0");
const currentScoreREl = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnRollEl = document.querySelector(".btn--roll");
const btnHoldEl = document.querySelector(".btn--hold");
///

let currenScore = 0;
let scorePlayerL = 0;
let scorePlayerR = 0;

playerScoreLEl.textContent = "0";
playerScoreREl.textContent = "0";
diceEl.classList.add("hidden");

btnRollEl.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6 + 1);

  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  if (dice !== 1) {
    currenScore += dice;
  } else {
  }
});
