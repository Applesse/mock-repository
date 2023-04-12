'use strict'
//Selecting elements
const score0 = document.querySelector('#score-0');
const score1 = document.querySelector('#score-1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-again');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const current1 = document.getElementById('current-score-0');
const current2 = document.getElementById('current-score-1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');



//starting 
let scores, currentScore, activePlayer, playing;

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;  
    current1.textContent = 0;
    current2.textContent = 0;

    diceEl.classList.add('hidden');
    player1.classList.remove('winner');
    player2.classList.remove('winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
};

init();
const switchPlayer = function(){
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    currentScore=0;
    document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}
//rolling dice functinality

btnRoll.addEventListener('click', function(){
    //generating a random dice roll
    if(playing){
const dice = Math.trunc(Math.random()*6)+1;
  
//display dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
    //check for rolled 1: if true, 
    if(dice!==1){
        currentScore +=dice;
        document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
                
    }
    //switch to next player
    else{
      switchPlayer();
    }
}});

btnHold.addEventListener('click', function(){
    //add current score to active player score
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];
    //check if paleyer's score is >= 100
    if(scores[activePlayer]>=50){
        //finish game
        
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
    }
    else{//switch to new player
        switchPlayer();
    }
}});

btnNew.addEventListener('click', init);