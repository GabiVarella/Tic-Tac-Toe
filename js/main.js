// Display an empty tic-tac-toe board when the page 
// is initially displayed.

//MAYBE define whose turn????

// A player can click on the nine cells to make a move.

// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot 
// be played again.

// Provide a Reset Game button that will clear the 
// contents of the board.

//=====================================

// 1) Define required constants

// 2) Define required variables used to track the state of the game

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button

//====================================


/*----- constants -----*/
const player = {
    "0" : "",
    "1" : "X", 
    "-1" : "O"
};

const playerColor = {
    "0" : "turquoise",
    "1" : "#f08080", 
    "-1" : "#ffdcc0"
};

const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

 //const cells = document.querySelectorAll(".cell");

/*----- app's state (variables) -----*/

let board; 
let turn;
let winner; //three different possibilities -
// player that won, a tie, or game in play




/*----- cached element references -----*/
const squareEl = Array.from(document.getElementsByClassName('cell'));
const msgElm = document.getElementById('msg');


/*----- event listeners/ Click handlers -----*/

// 5) Handle a player clicking a square
document.addEventListener("click", function(e){
   let target = e.target;
   let idx = squareEl.indexOf(target);

   if (idx === -1){return};
   if (board[idx]!== 0){return};

   // edited out --- let symbol = player[turn];
   
   target.innerText = player[turn];
   target.style.backgroundColor = playerColor[turn];
   board[idx] = turn;
  
   checkWinner();
   turn *= -1;

})


function checkWinner(){
    winCombos.forEach(winArr => {
        let sum = 0;
        winArr.forEach(idx => sum+=board[idx])
        if (Math.abs(sum) == 3){
            winner = turn;
        }


        
    });



};
// 6) Handle a player clicking the replay button




/*----- functions -----*/
init();
function init(){
    //resets and init
    board = [0, 0, 0, 
             0, 0, 0, 
             0, 0, 0, ];
    turn = 1;
    winner = null;
             
}; 


function render(){ 
    // reset the game

};

