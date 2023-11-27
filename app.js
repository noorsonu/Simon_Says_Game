let userSeq = [];
let gameSeq = [];

let btns = ['red','yellow','green','purple'];

let h2 = document.querySelector('h2');

let level = 0;
let started = false;

document.addEventListener('keypress',function(){
    if(started == false){
        started = true;                             //  1st step
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){                          //  3rd step
        btn.classList.remove('flash');
    },250);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){                          //  Advance step
        btn.classList.remove('userFlash');
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4) ;
    let randColor = btns[randIdx];                                  //  2nd step
    let randBtns = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq)         //to show the gamebox color

    gameFlash(randBtns);
};

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,800);
        }
    }                                                   //  6th step
    else{
        h2.innerHTML = `Game Over! &nbsp;  Your Score was : <b>${level}</b> <br> Pressed any key to start game.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');             //  5th step
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){                                        //  4th step
    btn.addEventListener('click',btnPress)
}

function reset(){
    started = false;
    gameSeq = [];                           //  7th step
    userSeq = [];
    level = 0;
}