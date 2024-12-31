function createPlayer(name, symbol, type = "human") {
    return {
        name,
        symbol,
        type,

        // Determine the move based on player type
        getMove: function (board) {
            if (type === "AI") {
                // AI: Choose a random empty cell
                const emptyCells = [];
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (board.grid[i][j] === "") {
                            emptyCells.push({ row: i, col: j });
                        }
                    }
                }
                return emptyCells[Math.floor(Math.random() * emptyCells.length)]; // Random AI move
            } else {
                // Human: Interaction handled by displayController
                return null; // No move, human interacts directly
            }
        },
    };
}



const gameBoard = (function () {
    const grid = [["", "", ""], ["", "", ""], ["", "", ""]];

    const placeMarker = function (row, col, symbol) {
        if (grid[row][col] === "") {
            grid[row][col] = symbol;
            return true;
        }
        return false;
    };

    const checkWinner = function () {
        console.log("Checking for winner...");
        if ((grid[0][0] === "X" && grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2]) || // rows
            (grid[1][0] === "X" && grid[1][0] === grid[1][1] && grid[1][0] === grid[1][2]) ||
            (grid[2][0] === "X" && grid[2][0] === grid[2][1] && grid[2][0] === grid[2][2]) ||

            (grid[0][0] === "X" && grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0]) || // columns
            (grid[0][1] === "X" && grid[0][1] === grid[1][1] && grid[0][1] === grid[2][1]) ||
            (grid[0][2] === "X" && grid[0][2] === grid[1][2] && grid[0][2] === grid[2][2]) ||

            (grid[0][0] === "X" && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) ||
            (grid[0][2] === "X" && grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0])) {
            return "X Wins";
        }
        if ((grid[0][0] === "O" && grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2]) || // rows
            (grid[1][0] === "O" && grid[1][0] === grid[1][1] && grid[1][0] === grid[1][2]) ||
            (grid[2][0] === "O" && grid[2][0] === grid[2][1] && grid[2][0] === grid[2][2]) ||

            (grid[0][0] === "O" && grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0]) || // columns
            (grid[0][1] === "O" && grid[0][1] === grid[1][1] && grid[0][1] === grid[2][1]) ||
            (grid[0][2] === "O" && grid[0][2] === grid[1][2] && grid[0][2] === grid[2][2]) ||

            (grid[0][0] === "O" && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) ||
            (grid[0][2] === "O" && grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0])) {
            return "O Wins";
        }
        return null;
    };

    const isFull = function () {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "") return false;
            }
        }
        return true;
    };

    const resetBoard = function () {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                grid[i][j] = "";
            }
        }
    };

    return { grid, placeMarker, checkWinner, isFull, resetBoard };
})();


const gameController = (function (player1, player2) {
    const players = [player1, player2];
    let currentPlayerIndex = 0;

    const getCurrentPlayer = function () {
        return players[currentPlayerIndex];
    };

    const switchPlayer = function () {
        currentPlayerIndex = 1 - currentPlayerIndex; // Toggle between 0 and 1
    };

    const resetGame = function () {
        currentPlayerIndex = 0;
        gameBoard.resetBoard();
    };

    return { getCurrentPlayer, switchPlayer, resetGame };
})(createPlayer("Player 1", "X"), createPlayer("Player 2", "O")); // Pass players


const displayController = (function () {
    const boardElement = document.getElementById("game-board");
    const messageElement = document.getElementById("message");
    const resetButton = document.getElementById("reset");

    const renderBoard = function () {
        console.log("Rendering board...");
        console.log("Grid:", gameBoard.grid); // Debugging log

        boardElement.innerHTML = ""; // Clear board
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.textContent = gameBoard.grid[i][j];
                if (gameBoard.grid[i][j] !== "") {
                    cell.classList.add("taken");
                }
                cell.addEventListener("click", handleCellClick);
                boardElement.appendChild(cell);
            }
        }
    }

    const handleCellClick = function (e) {
        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        const currentPlayer = gameController.getCurrentPlayer();

        if (gameBoard.placeMarker(row, col, currentPlayer.symbol)) {
            const winner = gameBoard.checkWinner();
            if (winner) {
                messageElement.textContent = winner;
                boardElement.innerHTML = ""; // Disable board after win.
                return;
            } else if (gameBoard.isFull()) {
                messageElement.textContent = "It's a draw!";
                return;
            }
            gameController.switchPlayer();
            renderBoard();
        } else {
            messageElement.textContent = "Cell is already taken!";
        }
    };

    const resetGame = function () {
        gameController.resetGame();
        messageElement.textContent = "";
        renderBoard();
    };

    resetButton.addEventListener("click", resetGame);

    return { renderBoard };
})();

displayController.renderBoard();


