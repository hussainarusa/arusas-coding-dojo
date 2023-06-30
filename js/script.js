 // game status element storage
 const statusDisplay = document.querySelector('.game--status')
 // declaring variables to track game state


let gameActive = true;
let currentPlayer = "X"
let gameState = ["","","","","","","","",""]

 //display messages
    const winningMessage = () => 'Player ${currentPlayer} has won!';
    const drawMessage = () => 'ITS A DRAW - game ended!';
    const currentPlayerTurn = () => "It's ${currentPlayer}'s turn";


// display whose turn

    statusDisplay.innerHTML = currentPlayerTurn();

// -----------------------------
    function handleCellPlayed(){

    }

    function handlePlayerChanged(){

    }

    function handleResultValidation(){

    }

    function handleCellClick(){

    }

    function handleRestartGame(){


    }

// add event listener to game cell and button

 document.querySelectorAll('.cell').forEach
 (cell => cell.addEventListener('click', handleCellClick));

 document.querySelector('.game--restart').addEventListener
 ('click', handleRestartGame);



 // handle cell click

    function handleCellClick(clickedCellEvent){
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt (
            clickedCell.getAttribute('data')
        );
        if(gameState[clickedCellIndex] !== "" || !gameActive){
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }


    // handle cell played

    function handleCellPLayed(clickedCell, clickedCellIndex){

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }



    // handle Result Validation

    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,5]
    ];


    function handleResultValidation(){
        let roundWon = false
        for (let i = 0; i <= 7; i++){
            const WinCondition = winningConditions[i];
            let a = gameState[winningCondition[0]];
            let b = gameState[winningCondition[1]];
            let c = gameState[winningCondition[2]];
                if (a === '' || b === ''|| c === ''){
                    continue;
                }
                if (a === b && b === c){
                    roundWon = true;
                    break
                }
        }


    }