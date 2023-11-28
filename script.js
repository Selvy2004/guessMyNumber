'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
console.log(num);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Check Button
document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);

  // No input
  if (!guessNum) {
    displayMessage("⛔ No Number!");

    // Player wins
  } else if (num === guessNum) {
    displayMessage("🎉 You Win!");
    document.querySelector("body").style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector(".number").textContent = num;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // guessNum !== num
  } else if (guessNum !== num) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(guessNum > num ? "📈 Too High!" : "📉 Too Low!");

      // Losing the game
    } else {
      displayMessage("💥 You Lost The Game!");
      document.querySelector(".score").textContent = 0;
    }

  }
});
// Try Again Button
document.querySelector(".again").addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector('.number').style.width = '15rem';
  document.querySelector(".number").textContent = '?';
  document.querySelector(".guess").value = '';
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
});










