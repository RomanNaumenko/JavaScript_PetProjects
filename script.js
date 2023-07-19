'use script';

//selection elements
const score_Element_0 = document.querySelector('#score--0'); // # - for id; . - for classes;
const score_Element_1 = document.getElementById('score--1') // a little big faster;
const diceElement = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

score_Element_0.textContent = 0;
score_Element_1.textContent = 0;
diceElement.classList.add('.hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll;
    const dice = Math.tranc(Math.random() * 6) + 1;
    diceElement.classList.remove('.hidden')
    diceElement.src = `dices/dice-${dice}.png`    
    // 2. Discplay dice;

    // 3. Check for rolled 1: if true, switch to the next player;
})