'use script';

//selection elements
const score_Element_0 = document.querySelector('#score--0'); // # - for id; . - for classes;
const score_Element_1 = document.getElementById('score--1') // a little big faster;

const current0Element = document.getElementById('.current--0')
const current1Element = document.getElementById('.current--1')

const diceElement = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const scores = [0, 0]
let activePlayer = 0;
let currentScore = 0;

score_Element_0.textContent = 0;
score_Element_1.textContent = 0;
diceElement.classList.add('.hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll;
    const dice = Math.tranc(Math.random() * 6) + 1;

    // 2. Display dice;
    diceElement.classList.remove('.hidden')
    diceElement.src = `dices/dice-${dice}.png` 

    // 3. Check for rolled 1: if true, switch to the next player;
    if(dice !== 1){
        //Add dice to the current score
        currentScore += dice;
        document.getElementById(`.current--${activePlayer}`).textContent = currentScore;
        
    } else {
        //Switch to next player
        document.getElementById(`.current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;

    }
})