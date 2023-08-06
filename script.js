"use script";

//selection elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const score_Element_0 = document.querySelector("#score--0"); // # - for id; . - for classes;
const score_Element_1 = document.getElementById("score--1"); // a little big faster;

const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

let scores, activePlayer, currentScore, playing;

const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add("hidden");
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;

  player0Element.classList.remove("player--winner");
  player0Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
};

init();

score_Element_0.textContent = 0;
score_Element_1.textContent = 0;
diceElement.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll;
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice;
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to the next player;
    if (dice !== 1) {
      //Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //1. Add current score to active player`s score;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player`s score >= 100;
    if (scores[activePlayer] >= 100) {
      diceElement.classList.add("hidden");
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //3. Swithc to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
