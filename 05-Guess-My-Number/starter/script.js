"use strict";

var secret;
var score;
var highestScore = 0;

function checkNumber(guess) {
    if (guess === secret) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        updateHighestScore();
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secret;
        return;
    }

    if (guess < secret) {
        document.querySelector(".message").textContent = "📉 Too Low!";
    } else {
        document.querySelector(".message").textContent = "📈 Too High!";
    }
    updateScore();
}

function updateHighestScore() {
    if (score > highestScore) {
        highestScore = score;
        document.querySelector(".highscore").textContent = highestScore;
    }
}

function updateScore() {
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
        document.querySelector(".message").textContent = "💥 You lost the game!";
        return;
    }
}

function resetGame() {
    secret = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
}

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number!";
    } else if (guess > 20 || guess < 1) {
        document.querySelector(".message").textContent = "🚫 Invalid Number!";
    } else {
        checkNumber(guess);
    }
});

document.querySelector(".again").addEventListener("click", function () {
    resetGame();
});

resetGame();
