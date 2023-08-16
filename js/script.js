
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

// function handleCellPlayed(){
//
// }

// function handlePlayerChange(){
//
// }
//
// function handleResultValidation(){
//
// }

// function handleCellClick(){
//
// }

// function handleRestartGame(){
//
// }

//event listener for the cells and restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

//HANDLE CELL CLICKS

function handleCellClick(clickedCellEvent){

    const clickedCell = clickedCellEvent.target;

    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))

    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }

    handleCellPlayed(clickedCell,clickedCellIndex);
    handleResultValidation()

}


//HANDLE CELL PLAYED

function handleCellPlayed(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer
}

//RESULT VALIDATION

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

function handleResultValidation(){
    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winCondition = winningPatterns[i];
        let a = gameState [winCondition[0]]
    }
}