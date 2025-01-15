// Define the checkAnswer function
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
