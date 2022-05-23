var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
startButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 360) {
        alert("Crash :O!");

        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 360) {
        clearInterval(animation);
        alert("Whew! That was close!");
    }
}