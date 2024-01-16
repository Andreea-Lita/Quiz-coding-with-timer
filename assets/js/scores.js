var scoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

function saveScore(initials, score) {
    localStorage.setItem("scores", JSON.stringify([{ initials, score }].concat(getScores())));
    displayHighscores();
}

function getScores() {
    const scores = localStorage.getItem("scores");
    return scores ? JSON.parse(scores) : [];
}

function displayHighscores() {
    const scores = getScores().sort((a, b) => b.score - a.score);
    scoresList.innerHTML = "";
    scores.forEach(score => {
        const listItem = document.createElement("li");
        listItem.textContent = `${score.initials} - ${score.score}`;
        scoresList.appendChild(listItem);
    });
}

displayHighscores(); // Display scores on page load

clearButton.addEventListener("click", () => {
    localStorage.removeItem("scores");
    scoresList.innerHTML = "";
});