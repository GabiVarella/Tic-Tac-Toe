

const playerSymbol = {
    "0" : "",
    "1" : "X", 
    "-1" : "O"
};

const playerColor = {
    "0" : "turquoise",
    "1" : "#f08080", 
    "-1" : "#ffdcc0"
};

const playerName = {
    "0" : "",
    "1" : "Player 1",
    "-1" : "Player 2"

};
const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

 
let board; 
let turn;
let winner; 
let isWinner = false;
let tie = false;

const squareEl = Array.from(document.getElementsByClassName('cell'));
const msgElm = document.getElementById('msg');
const resetBtn = document.getElementById('resetButton');



    document.addEventListener("click", function(e){
        if (isWinner === false){
            let target = e.target;
            let idx = squareEl.indexOf(target);
        
            if (idx === -1){return};
            if (board[idx]!== 0){return};
        
            board[idx] = turn;
            checkWinner();
            turn *= -1;
        };
        render();
     
     })

document.getElementById('reset-button').addEventListener('click', init);


init();
function init(){
    //resets and init
    board = [0, 0, 0, 
             0, 0, 0, 
             0, 0, 0, ];
    turn = 1;
    isWinner = false;
    tie = false;
    msgElm.innerText = "";
    render();
   
}; 


function checkWinner(){
    winCombos.forEach(winArr => {
        let sum = 0;
        winArr.forEach(idx => sum+=board[idx])
        if (Math.abs(sum) == 3){
            winner = turn;
            isWinner = true;
            return;
        }
        
    });
    if (!board.includes(0)){tie = true};
    
};


function render(){ 
         board.forEach(function(turn, idx){
            let target =  squareEl[idx];
            target.innerText = playerSymbol[turn];
            target.style.backgroundColor = playerColor[turn];
    });
  
        if (isWinner == true) {
            msgElm.innerText = `Congratulations! ${playerName[turn * -1]} Wins!!!`

    };
        if (tie == true) msgElm.innerText = "It's a Tie! Try Again";
};

