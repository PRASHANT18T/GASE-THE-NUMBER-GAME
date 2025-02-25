// Game state variables
let secretNumber = Math.floor(Math.random() * 25) + 1; // Secret number between 1 and 25
let selectedNumber = null;
let score = 0;

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
  // Remove any celebration animation
    selectedNumberDisplay.classList.remove("animate-bounce");
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
  if (selectedNumber === secretNumber) {
    feedbackText.textContent = "CORRECT!";
    // Celebrate with a bounce animation
    selectedNumberDisplay.classList.add("animate-bounce");
    // Increase score
    score++;
    scoreDisplay.textContent = score.toString().padStart(2, "0");
  } else if (selectedNumber > secretNumber) {
    feedbackText.textContent = "TOO HIGH";
  } else if (selectedNumber < secretNumber) {
    feedbackText.textContent = "TOO LOW";
  }
});

// Play Again Button Event Listener
playAgainButton.addEventListener("click", () => {
  // Reset game state
  secretNumber = Math.floor(Math.random() * 25) + 1;
  selectedNumber = null;
  selectedNumberDisplay.textContent = "--";
  feedbackText.textContent = "--";
  // Remove animation if any
  selectedNumberDisplay.classList.remove("animate-bounce");
  // Optionally, reset score or keep it
   score = 0; scoreDisplay.textContent = "00";
  console.log("New Secret Number:", secretNumber);
});
