"use strict";

/// DOM element init
const bodyElement = document.querySelector("body");
const messageElement = document.querySelector(".message");
const inputElement = document.querySelector(".guess");
const scoreElement = document.querySelector(".score");
const numberElement = document.querySelector(".number");
const highscoreElement = document.querySelector(".highscore");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
///

/** Number that needs to be guessed */
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

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
    if (score > highScore) {
      highScore = score;
      highscoreElement.textContent = highScore;
    }
    bodyElement.style.backgroundColor = "#60b347";
    numberElement.style.width = "30rem";
    messageElement.textContent = "🎉 Correct Number";
  } else {
    if (score) {
      messageElement.textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      if (score) {
        score--;
        scoreElement.textContent = score;
      }
    } else {
      messageElement.textContent = "💥 You lost!";
      scoreElement.textContent = "0";
    }
  }
});
