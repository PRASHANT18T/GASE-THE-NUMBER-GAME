// Game state variables
let secretNumber = Math.floor(Math.random() * 25) + 1; // Secret number between 1 and 25
let selectedNumber = null;
let score = 0;
let attempts = 5;
let attempt = 0;

// DOM Elements
const numberButtons = document.querySelectorAll(".number-button");
const selectedNumberDisplay = document.getElementById("selectedNumberDisplay");
const feedbackText = document.getElementById("feedbackText");
const checkButton = document.getElementById("checkButton");
const playAgainButton = document.getElementById("playAgainButton");
const scoreDisplay = document.getElementById("scoreDisplay");

// Function to update the display card with the selected number
function updateSelectedNumber(num) {
  selectedNumber = num;
  selectedNumberDisplay.textContent = num;
  feedbackText.textContent = "--"; // Reset feedback when a new number is selected
  selectedNumberDisplay.classList.remove("animate-bounce"); // Remove any celebration animation
}

// Add click event listeners to all number buttons
numberButtons.forEach(button => {         
  button.addEventListener("click", () => {
    const num = parseInt(button.textContent);
    updateSelectedNumber(num);
  });
});

// Check Button Event Listener
checkButton.addEventListener("click", () => {
  if (selectedNumber === null) {
    feedbackText.textContent = "Select a number first!";
    return;
  }

  if (attempt >= attempts) {
    alert("No more attempts left!");
    restartGame();
    return;
  }

  if (selectedNumber === secretNumber) {
    feedbackText.textContent = "CORRECT!";
    selectedNumberDisplay.classList.add("animate-bounce");
    score++;
    scoreDisplay.textContent = score.toString().padStart(2, "0");
    attempt = 0; // Reset attempts on correct guess
    secretNumber = Math.floor(Math.random() * 25) + 1; // New secret number after correct guess
    console.log("New Secret Number:", secretNumber);
  } else if (selectedNumber > secretNumber) {
    feedbackText.textContent = "TOO HIGH";
    attempt++;
  } else if (selectedNumber < secretNumber) {
    feedbackText.textContent = "TOO LOW";
    attempt++;
  }

  // Optional: Log remaining attempts
  console.log(`Attempts: ${attempt} / ${attempts}`);
});

// Restart Game Function
function restartGame() {
  secretNumber = Math.floor(Math.random() * 25) + 1;
  selectedNumber = null;
  attempt = 0;
  score = 0;
  selectedNumberDisplay.textContent = "--";
  feedbackText.textContent = "--";
  scoreDisplay.textContent = "00";
  selectedNumberDisplay.classList.remove("animate-bounce");
  console.log("Game restarted. New Secret Number:", secretNumber);
}

// Play Again Button Event Listener
playAgainButton.addEventListener("click", () => {
  restartGame();
});
