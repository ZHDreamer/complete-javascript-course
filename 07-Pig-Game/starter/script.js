"use strict";

var playersScore,
    currentScore,
    activePlayer = 0;

const player = document.querySelectorAll(".player");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const WINNING_SCORE = 100;

player[0].classList.add("player--active");
player[1].classList.remove("player--active");

function resetGame() {
    playersScore = [0, 0];
    currentScore = 0;
    document.getElementById("current--0").textContent = currentScore;
    document.getElementById("current--1").textContent = currentScore;
    document.getElementById("score--0").textContent = playersScore[0];
    document.getElementById("score--1").textContent = playersScore[1];
    document.getElementById("name--0").textContent = "Player 1";
    document.getElementById("name--1").textContent = "Player 2";
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
    btnRoll.disabled = false;
    btnHold.disabled = false;
    diceEl.classList.add("hidden");
}

resetGame();

function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player[0].classList.toggle("player--active");
    player[1].classList.toggle("player--active");
}

function rollDice() {
    var dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.add("hidden");
    return dice;
}

function updateCurrentScore(dice) {
    if (dice === 1) {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        switchPlayer();
    } else {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
}

function updateScore() {
    playersScore[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = playersScore[activePlayer];
    if (playersScore[activePlayer] >= WINNING_SCORE) {
        document.getElementById(`name--${activePlayer}`).textContent = "Winner!";
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        btnRoll.disabled = true;
        btnHold.disabled = true;
    }
}

function hold() {
    updateScore();
    switchPlayer();
}

btnNew.addEventListener("click", resetGame);
btnRoll.addEventListener("click", () => {
    let dice = rollDice();
    updateCurrentScore(dice);
});
btnHold.addEventListener("click", hold);
