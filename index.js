//*Select each element

    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.playerTurn');

//*Adhere to the basic rules of tic-tac-toe, Three in a row results in a win

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
//*Reset game button

//*Display whos turn it currently is

