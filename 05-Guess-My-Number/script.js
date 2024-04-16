"use strict";

/// DOM element init
const bodyElement = document.querySelector("body");
const messageElement = document.querySelector(".message");
const inputElement = document.querySelector(".guess");
const scoreElement = document.querySelector(".score");
const numberElement = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
///

/** Number that needs to be guessed */
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

/** On btn Again! clicked */
btnAgain.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  bodyElement.style.backgroundColor = "#222";
  numberElement.style.width = "15rem";
  numberElement.textContent = "?";
  messageElement.textContent = "Start guessing...";
  scoreElement.textContent = score;
  inputElement.value = "";
});

/** On btn check! clicked */
btnCheck.addEventListener("click", function () {
  const guess = Number(inputElement.value);

  if (!guess) {
    messageElement.textContent = "🚫 No Number!";
  } else if (guess === secretNumber) {
    bodyElement.style.backgroundColor = "#60b347";
    numberElement.style.width = "30rem";
    messageElement.textContent = "🎉 Correct Number";
  } else if (guess > secretNumber) {
    if (score) {
      messageElement.textContent = "📈 Too High!";
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = "💥 You lost!";
    }
  } else {
    if (score) {
      messageElement.textContent = "📉 Too Low!";
      score--;
      scoreElement.textContent = score;
    } else {
      messageElement.textContent = "💥 You lost!";
    }
  }
});
