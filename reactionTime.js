let changeTime = -1;
let starting = true;
let highScore = 100000000000000000000000000000;
const btn = document.getElementById("btn");
const timeDisplay = document.getElementById("timeDisplay");
const highscoreDisplay = document.getElementById("highscoreDisplay");
let changeBackgroundID;

function buttonPressed(){
    if(starting){
        // we are going to start a new test
        changeTime = -1;
        document.body.style.backgroundColor = "darkseagreen";
        timeDisplay.innerHTML = "";
        highscoreDisplay.innerHTML = "";
        btn.innerText = "Click when screen changes";
        starting = false;
        // the below line tells teh computer to wait anywhere from 2-6.5 seconds before changing background
        changeBackgroundID = window.setTimeout(changeBackground, Math.random()*4500 + 2000);
    }
    else{
        // if the test is currently running
        if(changeTime == -1){
            //did the user click before the screen changed?
            clearTimeout(changeBackgroundID);
            timeDisplay.innerHTML = "You clicked too soon!";
            btn.innerText = "Restart test";
            starting = true;
        }
        else{
            // clicked after screen change
            const time = Date.now() - changeTime;
            timeDisplay.innerHTML = "You took " + time + " milliseconds.";
            btn.innerText = "Restart Test";
            starting = true;
            if (time < highScore){
                highScore = time;
            }
            highscoreDisplay.innerHTML = "Best: " + highScore + " milliseconds";
        }
    }
}

function changeBackground(){
    document.body.style.backgroundColor = "red";
    changeTime = Date.now();
    btn.innerText = "Click now!";
}