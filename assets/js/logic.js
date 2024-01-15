var startButton = document.getElementById("start");
var durationRemaining = 20;
var displayElementId = document.getElementById("time");
startButton.addEventListener('click', function startTimer() {
    durationRemaining--;
    const startButtonAndContent = document.getElementById("start-screen"); // get the start-screen element
    startButtonAndContent.style.display = "none"; // Hide the start button and content above it
    displayElementId.textContent = durationRemaining;
    if (durationRemaining === 0) {
        durationRemaining = 0;
        stopQuiz(); //reseated timer
    } else {
        setTimeout(startTimer, 1000); //counting down on 1 sec interval(1000milisec) 
    }
    console.log(durationRemaining);
});

function stopQuiz() {
    // Disable answer buttons
    choicesContainer.querySelectorAll("button").forEach(button => button.disabled = true);

    // Display a message indicating the quiz has ended
    questionTitle.textContent = "Time's up! The quiz has ended.";

    // Optionally display results
    //displayResults();
}