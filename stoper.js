const btnStart = document.querySelector(".start");
const btnRestart = document.querySelector(".restart");
const timeDisplay = document.querySelector(".timeDisplay");
const btnLapTime = document.querySelector(".lapTime");
const timeLapsCont = document.querySelector(".timeLapsCont");

//stowatch animation

// const letters = document.getElementsByName("span");
const letterS = document.getElementById("S");
const letterT = document.getElementById("T");
const letterO = document.getElementById("O");
const letterP = document.getElementById("P");
const letterW = document.getElementById("W");
const letterA = document.getElementById("A");
const letterT2 = document.getElementById("T2");
const letterC = document.getElementById("C");
const letterH = document.getElementById("H");

let minutes = 0;
let seconds = 0;
let milisec = 0;

//letter color animation

function changeLettersColor () {
if (seconds == 1) {
    letterS.style.color = "red";
}
if (seconds == 2) {
letterT.style.color = "red";
}
if (seconds ==3) {
letterO.style.color = "red";
}
if (seconds ==4) {
    letterP.style.color = "red";
}
if (seconds ==5) {
    letterW.style.color = "red";
}
if (seconds ==6) {
    letterA.style.color = "red";
}
if (seconds ==7) {
    letterT2.style.color = "red";
}
if (seconds ==8) {
    letterC.style.color = "red";
}
if (seconds ==9) {
    letterH.style.color = "red";
}
if (seconds ==10) {

letterS.style.color = "black"
letterT.style.color = "black"
letterO.style.color = "black"
letterP.style.color = "black"
letterW.style.color = "black"
letterA.style.color = "black"
letterT2.style.color = "black" 
letterC.style.color = "black"
letterH.style.color = "black"
}

if (seconds == 11) {
    letterS.style.color = "yellow";
}
if (seconds == 12) {
letterT.style.color = "yellow";
}
if (seconds ==13) {
letterO.style.color = "yellow";
}
if (seconds ==14) {
    letterP.style.color = "yellow";
}
if (seconds ==15) {
    letterW.style.color = "yellow";
}
if (seconds ==16) {
    letterA.style.color = "yellow";

}
if (seconds ==17) {
    letterT2.style.color = "yellow";
}
if (seconds ==18) {
    letterC.style.color = "yellow";
}
if (seconds ==19) {
    letterH.style.color = "yellow";
}
if (seconds ==20) {

letterS.style.color = "yellow";
letterT.style.color = "yellow";
letterO.style.color = "yellow";
letterP.style.color = "yellow";
letterW.style.color = "yellow";
letterA.style.color = "yellow";
letterT2.style.color = "yellow"; 
letterC.style.color = "yellow";
letterH.style.color = "yellow";
}

if (seconds == 21) {
    letterS.style.color = "grey";
    
}
if (seconds == 22) {
letterT.style.color = "grey";

}
if (seconds ==23) {
letterO.style.color = "grey";

}
if (seconds ==24) {
    letterP.style.color = "grey";
    
}
if (seconds ==25) {
    letterW.style.color = "grey";
    
}
if (seconds ==26) {
    letterA.style.color = "grey";
    
}
if (seconds ==27) {
    letterT2.style.color = "grey";
    
}
if (seconds ==28) {
    letterC.style.color = "grey";
    
}
if (seconds ==29) {
    letterH.style.color = "grey";
    
}
if (seconds ==30) {

letterS.style.color = "black";

letterT.style.color = "black";

letterO.style.color = "black";

letterP.style.color = "black";

letterW.style.color = "black";

letterA.style.color = "black";

letterT2.style.color = "black";
l 
letterC.style.color = "black";

letterH.style.color = "black";

}

if (seconds == 31) {
    letterS.style.color = "pink";
}
if (seconds == 32) {
letterT.style.color = "pink";
}
if (seconds ==33) {
letterO.style.color = "pink";
}
if (seconds ==34) {
    letterP.style.color = "pink";
}
if (seconds ==35) {
    letterW.style.color = "pink";
}
if (seconds ==36) {
    letterA.style.color = "pink";
}
if (seconds ==37) {
    letterT2.style.color = "pink";
}
if (seconds ==38) {
    letterC.style.color = "pink";
}
if (seconds ==39) {
    letterH.style.color = "pink";
}
if (seconds ==40) {

letterS.style.color = "black"
letterT.style.color = "black"
letterO.style.color = "black"
letterP.style.color = "black"
letterW.style.color = "black"
letterA.style.color = "black"
letterT2.style.color = "black" 
letterC.style.color = "black"
letterH.style.color = "black"
}

if (seconds == 41) {
    letterS.style.color = "blue";
}
if (seconds == 42) {
letterT.style.color = "blue";
}
if (seconds ==43) {
letterO.style.color = "blue";
}
if (seconds ==44) {
    letterP.style.color = "blue";
}
if (seconds ==45) {
    letterW.style.color = "blue";
}
if (seconds ==46) {
    letterA.style.color = "blue";
}
if (seconds ==47) {
    letterT2.style.color = "blue";
}
if (seconds ==48) {
    letterC.style.color = "blue";
}
if (seconds ==49) {
    letterH.style.color = "blue";
}
if (seconds ==50) {

letterS.style.color = "black"
letterT.style.color = "black"
letterO.style.color = "black"
letterP.style.color = "black"
letterW.style.color = "black"
letterA.style.color = "black"
letterT2.style.color = "black" 
letterC.style.color = "black"
letterH.style.color = "black"
}

if (seconds == 51) {
    letterS.style.color = "green";
}
if (seconds == 52) {
letterT.style.color = "green";
}
if (seconds ==53) {
letterO.style.color = "green";
}
if (seconds ==54) {
    letterP.style.color = "green";
}
if (seconds ==55) {
    letterW.style.color = "green";
}
if (seconds ==56) {
    letterA.style.color = "green";
}
if (seconds ==57) {
    letterT2.style.color = "green";
}
if (seconds ==58) {
    letterC.style.color = "green";
}
if (seconds ==59) {
    letterH.style.color = "green";
}
if (seconds ==60) {

letterS.style.color = "black"
letterT.style.color = "black"
letterO.style.color = "black"
letterP.style.color = "black"
letterW.style.color = "black"
letterA.style.color = "black"
letterT2.style.color = "black" 
letterC.style.color = "black"
letterH.style.color = "black"
}


}
//end of letter color animation

function StartTheStoper () {
    
    if (milisec == 0) {
timeLapsCont.innerHTML = ""};




    function SecondsRunning () {
        milisec++

        if (milisec == 100) {
            milisec = 0;
            seconds++
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++
        }

          changeLettersColor(); 



        CorrectZeroDisplay(); //function which corrects zero display for numbers with one digit. 

      
        
        function CorrectZeroDisplay () {

            let timeMinutes;
            let timeSeconds;
            let timeMilisec;

            

            if (minutes < 10) {
                timeMinutes = `0${minutes}:`;
            } else {
                timeMinutes = `${minutes}:`;
            }


            if (seconds < 10) {
                timeSeconds = `0${seconds}.`;
            } else {
                timeSeconds = `${seconds}.`;
            }
            if (milisec < 10) {
                timeMilisec = `0${milisec}`;
            } else {
                timeMilisec = `${milisec}`;
            }
            console.log(timeMinutes, timeSeconds, timeMilisec);
             timeDisplay.textContent = timeMinutes + timeSeconds + timeMilisec;

        }

 



        btnStart.textContent = "Pause";

        if (btnStart.classList.contains("start")) {
                btnStart.classList.remove("start");
                btnStart.classList.add("pause");
                }
        if (btnStart.classList.contains("Cont")) {
            btnStart.classList.remove("Cont");
            btnStart.classList.add("pause");
            }

            //StopWatchColorChange

            

        }
        
    btnStart.removeEventListener("click", StartTheStoper);
    btnStart.addEventListener("click", PauseIt);
    

    
    
    function PauseIt () {
        clearInterval(interv);
        btnStart.textContent = "Continue";


        btnStart.classList.remove("pause");
        btnStart.classList.add("Cont");


        //zmina event listenera na odpalenie funkcji ponownie
        btnStart.removeEventListener("click", PauseIt);
        btnStart.addEventListener("click", StartTheStoper);
        }


const interv = setInterval(SecondsRunning, 10);




function restartAll () {

        if (btnStart.classList.contains("pause")) {
            btnStart.classList.remove("pause");
            btnStart.classList.add("start");
            }
        if (btnStart.classList.contains("Cont")) {
            btnStart.classList.remove("Cont");
            btnStart.classList.add("start");
            }
    btnStart.removeEventListener("click", PauseIt);
    btnStart.addEventListener("click", StartTheStoper);

        letterS.style.color = "black";
        letterT.style.color = "black";
        letterO.style.color = "black";
        letterP.style.color = "black";
        letterW.style.color = "black";
        letterA.style.color = "black";
        letterT2.style.color = "black";
        letterC.style.color = "black";
        letterH.style.color = "black";


    seconds = 0;
    milisec = 0;
    minutes = 0;


    
    timeDisplay.textContent = `0${minutes}:0${seconds}.0${milisec}`;
    btnStart.textContent = "Start";
    
    timeLapsCont.innerHTML = "";

    clearInterval(interv);
    SavedTimeIndex = 0;
    }

    btnRestart.addEventListener("click", restartAll);
    

    }

btnStart.addEventListener("click", StartTheStoper);


let SavedTimeIndex = 0; //this is an index of a lap time saved. 

function SaveCurrentTime () {
    if (milisec > 0) {
    const liTimeDisplay = document.createElement("li");
    timeLapsCont.appendChild(liTimeDisplay);
    SavedTimeIndex++
    liTimeDisplay.textContent = SavedTimeIndex < 10 ? `LapTime no:${SavedTimeIndex}___${timeDisplay.textContent}`:`TimeLap no:${SavedTimeIndex}__${timeDisplay.textContent}`;} else {
        const liTimeDisplay = document.createElement("li");
    timeLapsCont.appendChild(liTimeDisplay);
    liTimeDisplay.textContent = "Start the stoper :)!"
    }

}


btnLapTime.addEventListener("click", SaveCurrentTime)

//function change letter color



