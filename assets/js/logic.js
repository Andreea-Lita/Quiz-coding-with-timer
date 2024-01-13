var startButton = document.getElementById("start");
var durationRemaining = 6;
var displayElementId = document.getElementById("time");
startButton.addEventListener('click', function startTimer() {
    durationRemaining--;
    displayElementId.textContent = durationRemaining;
    if (durationRemaining === 0) {
        durationRemaining = 0; //reseated timer
    } else {
        setTimeout(startTimer, 1000); //counting down on 1 sec interval(1000milisec) 
    }
    console.log(durationRemaining);
});