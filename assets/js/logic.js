//var timer = document.querySelector('#timer');
//var counter = 60
//setInterval(function() {
//  counter = counter - 1;
// console.log('counter')
//}, 1000)
/* const startButton = document.getElementById("start");
function startTimer(duration = 6, displayElementId = "time") {
    let secondsRemaining = duration;
    const timerId = setInterval(() => {
        const minutes = Math.floor(secondsRemaining / 6);
        const seconds = secondsRemaining % 6;
        document.getElementById(displayElementId).textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        secondsRemaining--;
        if (secondsRemaining === 0) clearInterval(timerId);
    }, 1000);
}
startTimer();

startButton.addEventListener("click", () => {
    startTimer();
    startButton.disabled = true; // Disable the button to prevent multiple starts
});*/
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