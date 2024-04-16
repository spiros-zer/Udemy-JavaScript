"use strict";

/// DOM element init
const messageElement = document.querySelector(".message");
const inputElement = document.querySelector(".guess");
const scoreElement = document.querySelector(".score");
const numberElement = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
///

/** Number that needs to be guessed */
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

btnCheck.addEventListener("click", function () {
  const guess = Number(inputElement.value);

  if (!guess) {
    messageElement.textContent = "🚫 No Number!";
  } else if (guess === secretNumber) {
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
