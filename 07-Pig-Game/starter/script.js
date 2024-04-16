"use strict";

/** DOM elements init */
const playerScoreLEl = document.querySelector("#score--0");
const playerScoreREl = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");

playerScoreLEl.textContent = "0";
playerScoreREl.textContent = "0";

diceEl.classList.add("hidden");
