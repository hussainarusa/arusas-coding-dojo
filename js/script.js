
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// game status element
const statusDisplay = document.querySelector('.game--status');

// variables for game state

// can be used to pause
let gameActive = true;

let currentPlayer = "X"

//current game state storage
let gameState = ["","","","","","","","","",]

//display messages
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessages = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

//initial messages
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed(){

}

function handlePlayerChange(){

}

function handleResultValidation(){

}

function handleCellClick(){

}

function handleRestartGame(){

}

//event listener for the cells and restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

//HANDLE CELL CLICKS