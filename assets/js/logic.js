var showScores = document.getElementById('end-screen');
var startButton = document.getElementById("start");
var durationRemaining = 9;
var displayElementId = document.getElementById("time");
startButton.addEventListener('click', function startTimer() {
    durationRemaining--;
    const startButtonAndContent = document.getElementById("start-screen"); // get the start-screen element
    startButtonAndContent.style.display = "none"; // Hide the start button and content above it
    displayElementId.textContent = durationRemaining;
    //questionContainer.classList.remove("hide");
    questionContainer.style.display = "block"; // Hide the question container
    displayQuestion(currentQuestionIndex);
    if ((durationRemaining <= 0) || (currentQuestionIndex === totalQuestions)) {
        clearInterval(startTimer);
        // durationRemaining = 0;
        stopQuiz(); //reseated timer
        showScores.style.display = "block";
        questionContainer.style.display = "none";
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
    //clearTimeout(startTimer)
    // Optionally display results
    //displayResults();
}