//adds an event listener to look for the content of dom to be loaded before executing ANY of my script below. This is because the seperate javascript file from the html will load BEFORE the html dom objects.
window.addEventListener('DOMContentLoaded', () => {

//create CHANGABLE variables that will constantly feature in the script
//board is stored as an array of string as we will process and display the player moves as the player number string
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = '1';
let isGameActive = true;

//*Select each element
//converting the querySelectorAll nodes into an array of dom objects
const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.playerTurn');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.gameResult');

//announces endgame state
const TIE = 'TIE';
const PLAYER1_WON = 'PLAYER1_WON';
const PLAYER2_WON = 'PLAYER2_WON';

//*Adhere to the basic rules of tic-tac-toe, Three in a row results in a win
//Possible configurations of win conditions in a 2d array
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//////////////////////////////////////////////////////////////////////

//Changes the content of the gameResult class, we need this for the win condition function. Uses the variable announcer selected at the top to get the gameResult class then prints an outcome.

const announce = (type) => {
    switch(type){
        case PLAYER1_WON:
            announcer.innerHTML = 'Player <span class="player1">1</span> Won';
            break;
        case PLAYER2_WON:
            announcer.innerHTML = 'Player <span class="player2">2</span> Won';
            break;
        case TIE:
            announcer.innerText = 'Tie';
    }
    announcer.classList.remove('hide');
};

//////////////////////////////////////////////////////////////////////

//For loop runs through the indexes of the 2d array, if a win condition is met the code loop will force to stop then wait for the reset button to start over.

function gameLogic() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue; //if the index is an empty tile do not try to apply the roundWon logic and continue the game.
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

//returns the announce method define above the function to declare a winner depending on the current player, then sets the game state to inactive
if (roundWon) {
        announce(currentPlayer === '1' ? PLAYER1_WON : PLAYER2_WON);
        isGameActive = false;
        return;
    }

//if a win condition ISNT met by the time the board is filled call the announce method and declare a tie.
if (!board.includes(''))
    announce(TIE);
}

//////////////////////////////////////////////////////////////////////

//if the tile has a value already returns false, this allows the game to ignore false actions. (returns true if you click on an empty index tile)
const isValidAction = (tile) => {
    if (tile.innerText === '1' || tile.innerText === '2'){
        return false;
    }

    return true;
};

//sets the value of the current index to the value of currentPlayer, this is how we mark tiles. If the players name is 1 their moves will be a string "1" same as player 2. 
const updateBoard =  (index) => {
    board[index] = currentPlayer;
}

//*Display whos turn it currently is
//sets the players class to 1 or 2, if it is already 1 then its player 2.
const changePlayer = () => {
    playerDisplay.classList.remove(`player{currentPlayer}`);
    currentPlayer = currentPlayer === '1' ? '2' : '1'; 
    //if the current player is the same as last turn, alternate then change the class to then be read when the code is re-ran.
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player{currentPlayer}`);
}


//when the user commits an action, when a user clicks on a tile the code checks if the game is active and the click is valid(filled or not), then runs all the game functions to add the players click, run the game logic to see if they won, then swap to the next player.
const userAction = (tile, index) => { 
    if(isValidAction(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player{currentPlayer}`);
        updateBoard(index);
        gameLogic();
        changePlayer();
    }
}

//*Reset game function
//Resets the variables at the top of the scope to their default positions, board being empty and gameactive being true.
const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;

    //if the last game ended with a win from player 1 set the game back to player 1.
    if (currentPlayer === '2') {
        changePlayer();
    }

    //Resets the strings in the tiles and classes under the playerTurn section to be removed and empty strings.
    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('player1');
        tile.classList.remove('player2');
    });
}

//adds an event listener for each tile so that a useraction function gets called with the index of the array to where the user clicked
tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

//*Reset game button
resetButton.addEventListener('click', resetBoard);

});