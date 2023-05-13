// Set up the variables
let squares = document.querySelectorAll(".square");
let message = document.querySelector(".message");
let restartBtn = document.querySelector(".restart-btn");
let currentPlayer = "x";
let isGameOver = false;

// Add event listeners to the squares
squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (isGameOver || square.classList.contains("x") || square.classList.contains("o")) {
      // Do nothing if the game is over or the square is already marked
      return;
    }

    // Mark the square with the current player's symbol
    square.classList.add(currentPlayer);

    // Check if the game is over
    if (checkForWin()) {
      isGameOver = true;
      message.innerText = `Player ${currentPlayer} wins!`;
      message.style.display = "block";
      return;
    }

    if (checkForDraw()) {
      isGameOver = true;
      message.innerText = "It's a draw!";
      message.style.display = "block";
      return;
    }

    // Switch to the other player
    currentPlayer = currentPlayer === "x" ? "o" : "x";
  });
});

// Add event listener to the restart button
restartBtn.addEventListener("click", () => {
  squares.forEach((square) => {
    square.classList.remove("x", "o");
  });

  message.style.display = "none";
  isGameOver = false;
  currentPlayer = "x";
});

// Function to check for a win
function checkForWin() {
  let winningCombos = [
    [0, 1, 2, 3], // Top row
    [4, 5, 6, 7], // Middle row
    [8, 9, 10, 11], // Bottom row
    [12, 13, 14, 15], // Bottom row
    [0, 4, 8, 12], // Left column
    [1, 5, 9, 13], // Middle column
    [2, 6, 10, 14], // Right column
    [3, 7, 11, 15], // Right column
    [0, 5, 10, 15], // Diagonal
    [3, 6, 9, 12], // Diagonal
  
  ];

  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return squares[index].classList.contains(currentPlayer);
    });
  });
}

// Function to check for a draw
function checkForDraw() {
  return Array.from(squares).every((square) => {
    return square.classList.contains("x") || square.classList.contains("o");
  });
}

console.log("script.js loaded");
